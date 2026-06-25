import type { RefObject } from 'react';

interface HeroSectionProps {
  cardSlotRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  phoneWrapperRef: RefObject<HTMLDivElement | null>;
  heroContentRef: RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ cardSlotRef, phoneRef, phoneWrapperRef, heroContentRef }: HeroSectionProps) {
  return (
    <section id="about" className="absolute inset-0 pt-24 pb-12 flex items-center justify-center overflow-visible bg-transparent z-10">

      {/* Handmade Diagonal Background Strip */}
      <div className="hero-diagonal-bg absolute inset-0 z-0 pointer-events-none">
        {/* First strip (between Hero and Savings) */}
        <div className="absolute top-[110%] left-1/2 w-[150vw] h-[65vh] bg-[#00a2e8]/15 -translate-x-1/2 -translate-y-1/2 -rotate-[5deg]" />

        {/* Second strip (between Chances and Waitlist) */}
        <div className="absolute top-[2350px] left-1/2 w-[150vw] h-[800px] bg-[#00a2e8]/15 -translate-x-1/2 -translate-y-1/2 rotate-[5deg]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Heading and copy — starts invisible, GSAP animates in */}
        <div
          ref={heroContentRef}
          className="flex flex-col items-start text-left gap-6 max-w-xl"
          style={{ opacity: 0 }}
        >
          <div className="hero-anim-item inline-flex items-center gap-2 border border-creditnais-primary/50 bg-creditnais-primary-light px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-creditnais-navy shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-creditnais-primary animate-pulse" />
            A New Era of Wealth
          </div>

          <h1 className="hero-anim-item font-heading font-extrabold text-5xl md:text-6xl text-creditnais-navy leading-[1.1] tracking-tight">
            Save and win <span className="bg-gradient-to-r from-creditnais-primary-light via-creditnais-primary to-creditnais-blue bg-clip-text text-transparent">prizes weekly</span>
          </h1>

          <p className="hero-anim-item font-sans text-base md:text-lg text-gray-600 leading-relaxed">
            The first prize-linked debit card that rewards your savings. Earn points for every dollar spent and get automatic entries to win up to $5,000 every single month.
          </p>

          <div className="hero-anim-item flex flex-wrap gap-4 w-full mt-2">
            <a
              href="#waitlist"
              className="px-8 py-3.5 bg-creditnais-navy text-white hover:bg-creditnais-primary hover:text-creditnais-navy font-heading font-bold text-sm tracking-wider uppercase rounded-full shadow-lg shadow-creditnais-navy/20 hover:shadow-creditnais-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get your card
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 bg-gray-100 text-creditnais-navy hover:bg-gray-200 font-heading font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div className="hero-anim-item flex items-center mt-8 w-full">
            <div className="pr-8">
              <p className="font-heading font-extrabold text-3xl text-creditnais-navy">8,500+</p>
              <p className="text-xs text-gray-500 font-sans mt-0.5">Happy Customers</p>
            </div>

            {/* Vertical Divider */}
            <div className="w-0.5 h-12 bg-gray-200 rounded-full mx-4" />

            <div className="pl-4">
              <p className="font-heading font-extrabold text-3xl text-creditnais-navy">12,500+</p>
              <p className="text-xs text-gray-500 font-sans mt-0.5">Cards Issued</p>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Mockup — starts invisible, GSAP animates in */}
        <div className="relative flex justify-center items-center h-[550px] w-full">
          {/* Decorative Background Glows — also start hidden */}
          <div
            className="hero-phone-glow absolute w-72 h-72 rounded-full bg-creditnais-primary/10 blur-3xl -top-10 -right-10 pointer-events-none"
            style={{ opacity: 0 }}
          />
          <div
            className="hero-phone-glow absolute w-72 h-72 rounded-full bg-creditnais-purple/10 blur-3xl -bottom-10 -left-10 pointer-events-none"
            style={{ opacity: 0 }}
          />

          {/* Smartphone Frame Mockup */}
          <div ref={phoneWrapperRef} className="relative" style={{ opacity: 0 }}>
            <div
              ref={phoneRef}
              className="relative w-[500px] h-[980px]"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Phone Body Thickness (Layer Stacking) */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-[48px] border-[10px] bg-slate-900"
                  style={{
                    transform: `translateZ(${-i}px)`,
                    borderColor: i === 0 || i === 19 ? '#1e293b' : '#334155', // Outer: slate-800, Inner: slate-700
                  }}
                />
              ))}

              {/* Front Face with UI */}
              <div
                className="absolute inset-0 rounded-[48px] border-[10px] border-slate-900 bg-slate-950 shadow-2xl flex flex-col pt-8 px-4 justify-between overflow-hidden"
                style={{
                  transform: 'translateZ(1px)',
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Phone Speaker/Camera Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-10 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* App Screen Content */}
                <div className="relative flex-1 flex flex-col text-left text-white font-sans z-10">
                  {/* Header */}
                  <div className="flex justify-between items-center mt-4 mb-8 px-2">
                    <div>
                      <p className="text-xs text-gray-400">Welcome back,</p>
                      <p className="font-heading font-bold text-lg">Alexander</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer">
                      <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Cards Carousel Area in the App */}
                  <div className="relative w-full h-[220px] mb-8 mt-2 flex items-center overflow-visible">
                    {/* The slot for the actual 3D Credit Card to land */}
                    <div
                      ref={cardSlotRef}
                      className="absolute left-6 w-[340px] h-[215px] pointer-events-none"
                      style={{ zIndex: 30 }}
                    />

                    {/* Visual placeholder for the "current" card (hidden exactly under where the 3D card lands) */}
                    <div className="absolute left-6 w-[340px] h-[215px] bg-slate-800/40 rounded-2xl border border-slate-700/50 shadow-inner flex items-center justify-center">
                    </div>

                    {/* Peek of the "next" card on the right to hint at swipeability */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-[100px] h-[195px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-l-2xl border-y border-l border-slate-600/50 shadow-2xl flex items-center justify-start pl-4 pointer-events-none">
                      <div className="w-2 h-12 bg-slate-600/50 rounded-full" />
                    </div>
                  </div>

                  {/* Quick Actions Buttons */}
                  <div className="grid grid-cols-4 gap-3 mb-8 px-4">
                    {[
                      { name: 'Send', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/20', borderClass: 'border-blue-500/30' },
                      { name: 'Receive', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />, colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/20', borderClass: 'border-emerald-500/30' },
                      { name: 'History', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, colorClass: 'text-purple-400', bgClass: 'bg-purple-500/20', borderClass: 'border-purple-500/30' },
                      { name: 'More', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />, colorClass: 'text-gray-400', bgClass: 'bg-slate-800', borderClass: 'border-slate-700/50' },
                    ].map((action, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className={`w-14 h-14 rounded-2xl ${action.bgClass} flex items-center justify-center border ${action.borderClass} transition-colors shadow-lg`}>
                          <svg className={`w-6 h-6 ${action.colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {action.icon}
                          </svg>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{action.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Transactions List */}
                  <div className="flex-1 overflow-hidden flex flex-col px-2">
                    <div className="flex justify-between items-end mb-4">
                      <h3 className="font-heading font-bold text-lg text-white">Today</h3>
                      <span className="text-xs text-blue-400 cursor-pointer hover:underline">All Transactions</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: 'Supermarket', cat: 'Grocery', time: '14:24', amount: '-$42.50' },
                        { name: 'Waitlist Reward', cat: 'Bonus', time: '10:05', amount: '+$50.00', isPositive: true },
                        { name: 'Starbucks Coffee', cat: 'Food', time: '09:12', amount: '-$6.80' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-white/5">
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-white">{tx.name}</span>
                            <span className="text-xs text-gray-500">{tx.cat} • {tx.time}</span>
                          </div>
                          <span className={`font-mono font-bold text-sm ${tx.isPositive ? 'text-creditnais-primary' : 'text-white'}`}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone bottom indicator */}
                <div className="w-24 h-1 bg-slate-800 rounded-full mx-auto my-2 z-10 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
