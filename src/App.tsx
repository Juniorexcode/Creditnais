import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import Navbar from './components/Navbar';
import { CreditCard3D } from './components/CreditCard3D';
import HeroSection from './sections/HeroSection';
import SavingsSection from './sections/SavingsSection';
import ChancesSection from './sections/ChancesSection';
import WaitlistSection from './sections/WaitlistSection';

gsap.registerPlugin(ScrollTrigger, Observer);

export default function App() {
  const appWrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // Slot Refs for matching CreditCard3D positions
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const savingsSlotRef = useRef<HTMLDivElement>(null);
  const chancesSlotRef = useRef<HTMLDivElement>(null);
  const waitlistSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background handler
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y-parallax', `${window.scrollY * 0.25}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let entranceTimeline: gsap.core.Timeline | null = null;
    let scrollTriggers: ScrollTrigger[] = [];

    const initAnimations = () => {
      if (
        !cardRef.current ||
        !phoneRef.current ||
        !heroSlotRef.current ||
        !savingsSlotRef.current ||
        !chancesSlotRef.current ||
        !waitlistSlotRef.current ||
        !appWrapperRef.current ||
        !navbarRef.current ||
        !heroContentRef.current
      ) {
        return;
      }

      // Base card dimensions (from CreditCard3D styling)
      const CARD_WIDTH = 340;
      const CARD_HEIGHT = 215;

      // Function to calculate coordinates relative to the #app-wrapper
      const getDocCoords = (slotEl: HTMLElement) => {
        const rect = slotEl.getBoundingClientRect();
        const wrapperRect = appWrapperRef.current!.getBoundingClientRect();
        return {
          centerX: rect.left + rect.width / 2 - wrapperRect.left,
          centerY: rect.top + rect.height / 2 - wrapperRect.top,
          width: slotEl.offsetWidth || rect.width,
          height: slotEl.offsetHeight || rect.height,
        };
      };

      const slot1 = getDocCoords(heroSlotRef.current);
      const slot2 = getDocCoords(savingsSlotRef.current);
      const slot3 = getDocCoords(chancesSlotRef.current);
      const slot4 = getDocCoords(waitlistSlotRef.current);

      // Coordinate calculations for Card positions
      const initX = slot1.centerX - CARD_WIDTH / 2;
      const initY = slot1.centerY - CARD_HEIGHT / 2;
      const initScale = slot1.width / CARD_WIDTH;

      const x2 = slot2.centerX - CARD_WIDTH / 2;
      const y2 = slot2.centerY - CARD_HEIGHT / 2;
      const scale2 = slot2.width / CARD_WIDTH;

      const x3 = slot3.centerX - CARD_WIDTH / 2;
      const y3 = slot3.centerY - CARD_HEIGHT / 2;
      const scale3 = slot3.width / CARD_WIDTH;

      const x4 = slot4.centerX - CARD_WIDTH / 2;
      const y4 = slot4.centerY - CARD_HEIGHT / 2;
      const scale4 = slot4.width / CARD_WIDTH;

      // ==========================================
      // 1. SET INITIAL STATES: EVERYTHING INVISIBLE
      // ==========================================

      // Navbar: hidden, slides down from above
      gsap.set(navbarRef.current, {
        y: -60,
        opacity: 0,
      });

      // Phone Wrapper handles opacity to prevent flattening the 3D children
      gsap.set(phoneWrapperRef.current, {
        opacity: 0,
      });

      // Phone: starts VERY far below viewport, and rotated 360 degrees forward on Y for spin
      gsap.set(phoneRef.current, {
        y: 1500,
        rotateY: 330, // 360 + (-30) to do a full spin
        rotateX: 40,
        rotateZ: 10,
        transformPerspective: 5000, // Increased for uniform isometric-like perspective
      });

      // Card wrapper handles opacity
      gsap.set(cardWrapperRef.current, {
        opacity: 0,
      });

      gsap.set(cardRef.current, {
        x: initX,
        y: initY + 1500,
        scale: initScale * 0.6,
        rotateX: 60,
        rotateY: 690, // 2 spins (-30 + 720)
        rotateZ: 10,
      });

      // Reveal wrappers immediately, their children and opacity handles visibility
      if (cardWrapperRef.current) {
        cardWrapperRef.current.style.visibility = 'visible';
      }
      if (phoneWrapperRef.current) {
        phoneWrapperRef.current.style.visibility = 'visible';
      }

      // Hero left-column content: starts invisible, shifted left
      gsap.set(heroContentRef.current, {
        opacity: 0,
      });

      // Each animated item inside hero content starts shifted left and faded
      const heroAnimItems = heroContentRef.current.querySelectorAll('.hero-anim-item');
      gsap.set(heroAnimItems, {
        x: -40,
        opacity: 0,
      });

      // Glow elements behind phone
      const heroGlows = document.querySelectorAll('.hero-phone-glow');
      gsap.set(heroGlows, {
        scale: 0.5,
        opacity: 0,
      });

      // Diagonal background setup
      const diagonalBg = document.querySelector('.hero-diagonal-bg');
      if (diagonalBg) {
        gsap.set(diagonalBg, { y: 500, opacity: 0 });
      }

      // ==========================================
      // 2. ENTRANCE INTRO TIMELINE (~4 seconds)
      // ==========================================
      entranceTimeline = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          // Initialize Observer ONLY after intro completes
          createObserverTimeline();
        }
      });

      // --- PHASE 1: Phone comes up and rotates to its place ---
      entranceTimeline.to(phoneRef.current, {
        y: 150,       // Phone lowered significantly
        rotateY: -40, // Spins 360 degrees to land here
        rotateX: 20,  // Less diagonal leaning back (more upright)
        rotateZ: 5,   // Less tilt
        duration: 2.8,
        ease: 'power3.out',
      }, 0);

      // Wrapper fades in separately to preserve 3D depth of phone
      entranceTimeline.to(phoneWrapperRef.current, {
        opacity: 1,
        duration: 1.0,
      }, 0);

      // Phone glows fade in simultaneously
      entranceTimeline.to(heroGlows, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.15,
      }, 0.5);

      // --- PHASE 2: Credit Card flies in from above/below ---
      entranceTimeline.to(cardRef.current, {
        x: initX + 20, // moved subtly right
        y: initY + 150,
        scale: initScale * 0.95,
        rotateX: 22,  // tilted less back (more towards front)
        rotateY: -30, // faces camera more
        rotateZ: 5,   // less sideways tilt
        duration: 2.5,
        ease: 'power3.out',
      }, 0.5); // starts shortly after phone

      // Fade in card wrapper
      entranceTimeline.to(cardWrapperRef.current, {
        opacity: 1,
        duration: 0.8,
      }, 0.5);

      // --- PHASE 3: Left column text staggers in from the left ---
      // The parent wrapper becomes visible
      entranceTimeline.to(heroContentRef.current, {
        opacity: 1,
        duration: 0.1,
      }, 1.6);

      // Individual items stagger from left
      entranceTimeline.to(heroAnimItems, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
      }, 1.7);

      // --- PHASE 4: Navbar slides down into view & Background fades in ---
      if (diagonalBg) {
        entranceTimeline.to(diagonalBg, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        }, 0); // start immediately with the phone
      }

      entranceTimeline.to(navbarRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, 2.4);

      // Array to hold individual scroll triggers for cleanup
      scrollTriggers = [];

      // ==========================================
      // 3. FULL-PAGE SLIDESHOW (OBSERVER)
      // ==========================================
      const createObserverTimeline = () => {
        cardRef.current?.classList.add('can-flip');

        const savingsEl = document.getElementById('features');
        const chancesEl = document.getElementById('chances');
        const waitlistEl = document.getElementById('waitlist');

        let currentSlide = 0;
        let isAnimating = false;
        const totalSlides = 4;

        const animateSavingsIn = (tl: gsap.core.Timeline, offset: number) => {
          if (!savingsEl) return;
          tl.to(savingsEl, { opacity: 1, autoAlpha: 1, pointerEvents: 'auto', duration: 0.1 }, offset);
          const sTitle = savingsEl.querySelector('.savings-title');
          const sCards = savingsEl.querySelectorAll('.savings-bg');
          const sIcons = savingsEl.querySelectorAll('.savings-icon');
          const sTexts = savingsEl.querySelectorAll('.savings-text');

          if (sTitle) tl.fromTo(sTitle, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, offset + 0.3);
          if (sCards.length) tl.fromTo(sCards, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, offset + 0.2);
          if (sIcons.length) tl.fromTo(sIcons, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' }, offset + 0.6);
          if (sTexts.length) tl.fromTo(sTexts, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, offset + 0.8);
        };

        const animateSavingsOut = (tl: gsap.core.Timeline, offset: number) => {
          if (!savingsEl) return;
          const sTitle = savingsEl.querySelector('.savings-title');
          const sCards = savingsEl.querySelectorAll('.savings-bg');
          const sIcons = savingsEl.querySelectorAll('.savings-icon');
          const sTexts = savingsEl.querySelectorAll('.savings-text');

          if (sTexts.length) tl.to(sTexts, { scale: 0.5, opacity: 0, duration: 0.2, stagger: -0.05, ease: 'power2.in' }, offset);
          if (sIcons.length) tl.to(sIcons, { scale: 0, opacity: 0, duration: 0.2, stagger: -0.05, ease: 'back.in(2)' }, offset + 0.05);
          if (sCards.length) tl.to(sCards, { y: 200, opacity: 0, duration: 0.3, stagger: -0.05, ease: 'power3.in' }, offset + 0.1);
          if (sTitle) tl.to(sTitle, { scale: 0.5, opacity: 0, duration: 0.3, ease: 'back.in(1.5)' }, offset + 0.2);

          tl.to(savingsEl, { opacity: 0, autoAlpha: 0, pointerEvents: 'none', duration: 0.1 }, offset + 0.5);
        };

        const animateChancesIn = (tl: gsap.core.Timeline, offset: number) => {
          if (!chancesEl) return;
          tl.to(chancesEl, { opacity: 1, autoAlpha: 1, pointerEvents: 'auto', duration: 0.1 }, offset);
          const cTitle = chancesEl.querySelector('.chances-title');
          const cCards = chancesEl.querySelectorAll('.chances-card');

          if (cTitle) tl.fromTo(cTitle, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, offset + 0.3);
          if (cCards.length) tl.fromTo(cCards, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, offset + 0.2);
        };

        const animateChancesOut = (tl: gsap.core.Timeline, offset: number) => {
          if (!chancesEl) return;
          const cTitle = chancesEl.querySelector('.chances-title');
          const cCards = chancesEl.querySelectorAll('.chances-card');

          if (cCards.length) tl.to(cCards, { y: 100, opacity: 0, duration: 0.2, stagger: -0.05, ease: 'power3.in' }, offset + 0.05);
          if (cTitle) tl.to(cTitle, { scale: 0.5, opacity: 0, duration: 0.3, ease: 'back.in(1.5)' }, offset + 0.15);

          tl.to(chancesEl, { opacity: 0, autoAlpha: 0, pointerEvents: 'none', duration: 0.1 }, offset + 0.4);
        };

        const animateWaitlistIn = (tl: gsap.core.Timeline, offset: number) => {
          if (!waitlistEl) return;
          tl.to(waitlistEl, { opacity: 1, autoAlpha: 1, pointerEvents: 'auto', duration: 0.1 }, offset);

          const wTitle = waitlistEl.querySelector('.waitlist-title');
          const wText = waitlistEl.querySelector('.waitlist-text');
          const wForm = waitlistEl.querySelector('.waitlist-form');
          const wStats = waitlistEl.querySelector('.waitlist-stats');
          const wPhone = waitlistEl.querySelector('.waitlist-phone');
          const wVip = waitlistEl.querySelector('.waitlist-vip');

          if (wTitle) tl.fromTo(wTitle, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, offset + 0.3);
          if (wText) tl.fromTo(wText, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, offset + 0.4);
          if (wForm) tl.fromTo(wForm, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, offset + 0.5);
          if (wStats) tl.fromTo(wStats, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, offset + 0.6);

          if (wPhone) tl.fromTo(wPhone, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, offset + 0.2);
          if (wVip) tl.fromTo(wVip, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.2)' }, offset + 0.4);
        };

        const animateWaitlistOut = (tl: gsap.core.Timeline, offset: number) => {
          if (!waitlistEl) return;

          const wTitle = waitlistEl.querySelector('.waitlist-title');
          const wText = waitlistEl.querySelector('.waitlist-text');
          const wForm = waitlistEl.querySelector('.waitlist-form');
          const wStats = waitlistEl.querySelector('.waitlist-stats');
          const wPhone = waitlistEl.querySelector('.waitlist-phone');
          const wVip = waitlistEl.querySelector('.waitlist-vip');

          if (wStats) tl.to(wStats, { y: 50, opacity: 0, duration: 0.2, ease: 'power3.in' }, offset);
          if (wForm) tl.to(wForm, { y: 50, opacity: 0, duration: 0.2, ease: 'power3.in' }, offset + 0.05);
          if (wText) tl.to(wText, { y: 50, opacity: 0, duration: 0.2, ease: 'power3.in' }, offset + 0.1);
          if (wPhone) tl.to(wPhone, { y: 150, opacity: 0, duration: 0.3, ease: 'power3.in' }, offset + 0.1);
          if (wVip) tl.to(wVip, { y: 150, opacity: 0, duration: 0.3, ease: 'power3.in' }, offset + 0.15);
          if (wTitle) tl.to(wTitle, { scale: 0.5, opacity: 0, duration: 0.3, ease: 'back.in(1.5)' }, offset + 0.2);

          tl.to(waitlistEl, { opacity: 0, autoAlpha: 0, pointerEvents: 'none', duration: 0.1 }, offset + 0.5);
        };

        const gotoSlide = (index: number, direction: 1 | -1) => {
          if (isAnimating || index < 0 || index >= totalSlides || index === currentSlide) return;
          isAnimating = true;

          const tl = gsap.timeline({
            onComplete: () => {
              currentSlide = index;
              // Add a smaller cooldown to prevent trackpad inertia from skipping slides
              setTimeout(() => {
                isAnimating = false;
              }, 150);
            }
          });

          const dur = 1.0;
          const easeStr = 'power3.inOut';

          // Going DOWN
          if (direction === 1) {
            if (currentSlide === 0 && index === 1) {
              // 0 -> 1: Hero to Savings
              tl.to(heroContentRef.current, { y: -150, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0);
              tl.to(phoneWrapperRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, 0);

              if (diagonalBg) {
                tl.to(diagonalBg, { y: -900, duration: dur, ease: easeStr }, 0);
              }
              tl.to(phoneRef.current, { y: -350, rotateY: -45, rotateX: 10, rotateZ: -5, duration: dur, ease: easeStr }, 0);

              animateSavingsIn(tl, 0.4);

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, { x: x2, y: y2, scale: scale2, rotateX: 0, rotateY: -360, rotateZ: 0, duration: dur, ease: easeStr, onComplete: () => cardRef.current?.classList.remove('is-rotating') }, 0);
            }
            else if (currentSlide === 1 && index === 2) {
              // 1 -> 2: Savings to Chances
              animateSavingsOut(tl, 0);
              animateChancesIn(tl, 0.4);
              if (diagonalBg) {
                tl.to(diagonalBg, { y: -1450, duration: dur, ease: easeStr }, 0);
              }

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, { x: x3, y: y3, scale: scale3, rotateX: 0, rotateY: -540, rotateZ: 0, duration: dur, ease: easeStr, onComplete: () => cardRef.current?.classList.remove('is-rotating') }, 0);
            }
            else if (currentSlide === 2 && index === 3) {
              // 2 -> 3: Chances to Waitlist
              animateChancesOut(tl, 0);
              animateWaitlistIn(tl, 0.4);
              if (diagonalBg) {
                tl.to(diagonalBg, { y: -2600, duration: dur, ease: easeStr }, 0);
              }

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, {
                x: x4, y: y4, scale: scale4, rotateX: 0, rotateY: -720, rotateZ: 0, duration: dur, ease: easeStr, onComplete: () => {
                  cardRef.current?.classList.remove('is-rotating');
                  cardRef.current?.classList.add('is-flat');
                }
              }, 0);
            }
          }
          // Going UP
          else {
            if (currentSlide === 1 && index === 0) {
              // 1 -> 0: Savings to Hero
              animateSavingsOut(tl, 0);

              tl.to(heroContentRef.current, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.5);
              tl.to(phoneWrapperRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.5);

              if (diagonalBg) {
                tl.to(diagonalBg, { y: 0, duration: dur, ease: easeStr }, 0);
              }
              tl.to(phoneRef.current, { y: 150, rotateY: -40, rotateX: 20, rotateZ: 5, duration: dur, ease: easeStr }, 0);

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, { x: initX + 20, y: initY + 150, scale: initScale * 0.95, rotateX: 22, rotateY: -30, rotateZ: 5, duration: dur, ease: easeStr, onComplete: () => cardRef.current?.classList.remove('is-rotating') }, 0);
            }
            else if (currentSlide === 2 && index === 1) {
              // 2 -> 1: Chances to Savings
              animateChancesOut(tl, 0);

              animateSavingsIn(tl, 0.4);
              if (diagonalBg) {
                tl.to(diagonalBg, { y: -900, duration: dur, ease: easeStr }, 0);
              }

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, { x: x2, y: y2, scale: scale2, rotateX: 0, rotateY: -360, rotateZ: 0, duration: dur, ease: easeStr, onComplete: () => cardRef.current?.classList.remove('is-rotating') }, 0);
            }
            else if (currentSlide === 3 && index === 2) {
              // 3 -> 2: Waitlist to Chances
              cardRef.current?.classList.remove('is-flat');
              animateWaitlistOut(tl, 0);
              animateChancesIn(tl, 0.4);
              if (diagonalBg) {
                tl.to(diagonalBg, { y: -1450, duration: dur, ease: easeStr }, 0);
              }

              cardRef.current?.classList.add('is-rotating');
              tl.to(cardRef.current, { x: x3, y: y3, scale: scale3, rotateX: 0, rotateY: -540, rotateZ: 0, duration: dur, ease: easeStr, onComplete: () => cardRef.current?.classList.remove('is-rotating') }, 0);
            }
          }
        };

        const observer = Observer.create({
          target: window,
          type: "wheel,touch",
          wheelSpeed: -1,
          onUp: () => gotoSlide(currentSlide + 1, 1),
          onDown: () => gotoSlide(currentSlide - 1, -1),
          tolerance: 25,
          preventDefault: true,
        });

        scrollTriggers.push(observer as any);
      };

    };

    // Trigger animation initialization after a short DOM-settle delay
    const timer = setTimeout(() => {
      initAnimations();
    }, 150);

    // Responsive recalculation
    const handleResize = () => {
      scrollTriggers.forEach(st => st.kill());
      scrollTriggers = [];
      if (entranceTimeline) entranceTimeline.kill();
      initAnimations();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      scrollTriggers.forEach(st => st.kill());
      if (entranceTimeline) entranceTimeline.kill();
    };
  }, []);

  return (
    <div ref={appWrapperRef} id="app-wrapper" className="relative w-full h-screen overflow-hidden bg-white">
      {/* Fixed Protagonist Credit Card — starts invisible from first render frame */}
      <div
        ref={cardWrapperRef}
        className="absolute top-0 left-0 pointer-events-none z-50 origin-center"
        style={{
          width: '340px',
          height: '215px',
          opacity: 0,
          visibility: 'hidden',
        }}
      >
        <CreditCard3D ref={cardRef} className="pointer-events-auto" />
      </div>

      {/* Landing Page Content — Navbar starts invisible, animated by GSAP */}
      <Navbar ref={navbarRef} />
      <HeroSection
        cardSlotRef={heroSlotRef}
        phoneRef={phoneRef}
        phoneWrapperRef={phoneWrapperRef}
        heroContentRef={heroContentRef}
      />
      <SavingsSection cardSlotRef={savingsSlotRef} />
      <ChancesSection cardSlotRef={chancesSlotRef} />
      <WaitlistSection cardSlotRef={waitlistSlotRef} />
    </div>
  );
}
function createScrollTriggerTimeline() {
  throw new Error('Function not implemented.');
}

