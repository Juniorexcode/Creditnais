import { useState, useEffect, forwardRef } from 'react';

const Navbar = forwardRef<HTMLElement>(function Navbar(_props, ref) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel border-b border-slate-200/40 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-creditnais-blue to-creditnais-primary flex items-center justify-center text-white font-bold font-heading text-lg shadow-sm transition-transform group-hover:scale-105">
            C
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-creditnais-navy hover:text-creditnais-blue transition-colors">
            Creditnais
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-sans text-sm font-medium text-slate-600 hover:text-creditnais-navy transition-colors">
            About Us
          </a>
          <a href="#faqs" className="font-sans text-sm font-medium text-slate-600 hover:text-creditnais-navy transition-colors">
            FAQs
          </a>
          <a href="#features" className="font-sans text-sm font-medium text-slate-600 hover:text-creditnais-navy transition-colors">
            Features
          </a>
        </div>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center font-heading font-bold text-xs tracking-wider uppercase bg-creditnais-navy text-white hover:bg-creditnais-primary hover:text-creditnais-navy border border-transparent hover:border-creditnais-navy/20 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-creditnais-navy/10 hover:shadow-creditnais-primary/20"
          >
            Get your card
          </a>
          <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer overflow-hidden" title="My Profile">
            <svg className="w-6 h-6 text-slate-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
