import { useState } from 'react';
import type { FormEvent, RefObject } from 'react';
import InteractiveShowcaseCard from '../components/InteractiveShowcaseCard';

interface WaitlistSectionProps {
  cardSlotRef: RefObject<HTMLDivElement | null>;
}

export default function WaitlistSection({ cardSlotRef }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="absolute inset-0 py-24 flex items-center justify-center bg-transparent overflow-hidden z-40 opacity-0 pointer-events-none">

      {/* Background gradients (removed) */}

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Form & Copy */}
        <div className="flex flex-col items-start text-left gap-6 max-w-xl">
          <h2 className="waitlist-title font-heading font-extrabold text-5xl md:text-6xl text-creditnais-navy tracking-tight leading-none">
            Save more. <br />Save faster.
          </h2>

          <p className="waitlist-text font-sans text-sm md:text-base text-gray-500 leading-relaxed max-w-md">
            Increase your savings by earning 100 points for every $1 spent and 50,000 bonus points for spending $1,000 with your Creditnais Card. Join the exclusive VIP club today.
          </p>

          {/* Email Subscription Form */}
          {submitted ? (
            <div className="waitlist-form w-full max-w-md p-6 rounded-2xl bg-creditnais-primary/10 border border-creditnais-primary text-creditnais-navy flex flex-col gap-2 animate-float">
              <h4 className="font-heading font-bold text-base">🎉 You're on the list!</h4>
              <p className="text-xs text-gray-600">
                Thank you for joining the Creditnais VIP waitlist. We will email you with your invitation soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-creditnais-navy bg-gray-50/50 text-sm font-sans placeholder-gray-400 transition-colors shadow-inner"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-creditnais-navy hover:bg-creditnais-primary text-white hover:text-creditnais-navy font-heading font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg active:scale-95"
              >
                Join the Waitlist
              </button>
            </form>
          )}

          {/* Social Proof / Trust numbers */}
          <div className="waitlist-stats grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 mt-4 w-full">
            <div>
              <p className="font-heading font-extrabold text-3xl text-creditnais-navy">8,500+</p>
              <p className="text-xs text-gray-400 font-sans mt-0.5">Happy Customers</p>
            </div>
            <div>
              <p className="font-heading font-extrabold text-3xl text-creditnais-navy">12,500+</p>
              <p className="text-xs text-gray-400 font-sans mt-0.5">Cards Issued</p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Mockups (Main Card & User's Custom Interactive VIP Card) */}
        <div className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-[650px]">
          
          {/* Main App Smartphone Mockup with Card Slot */}
          <div
            className="waitlist-phone relative top-12 rounded-[50px] border-[12px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden flex flex-col z-20 shrink-0"
            style={{
              width: '380px',
              height: '740px',
              transform: 'perspective(1000px) rotateX(0deg)',
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center'
            }}
          >
            {/* Phone notch (Dynamic Island style) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-full z-40 flex items-center justify-between px-3">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-12 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* App Screen Content */}
            <div className="flex-1 w-full h-full flex flex-col pt-8 pb-6 px-5 overflow-hidden relative z-10">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs text-gray-400">Welcome back,</p>
                  <p className="font-heading font-bold text-xl text-white">Alexander</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 shadow-inner">
                  <span className="text-[10px] font-bold text-creditnais-primary tracking-wider">VIP</span>
                </div>
              </div>

              {/* The slot for the protagonist card (Card will land here at the end of the scroll) */}
              <div className="relative w-full h-[220px] mb-10 flex items-center justify-center overflow-visible">
                <div 
                  ref={cardSlotRef}
                  className="w-[340px] h-[215px] pointer-events-none"
                />
              </div>

              {/* Quick Actions Buttons */}
              <div className="grid grid-cols-4 gap-3 mb-6">
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

              {/* Total Balance / Saving progress mockup */}
              <div className="w-full p-5 rounded-3xl bg-slate-800/60 border border-slate-700/50 flex flex-col backdrop-blur-md mb-6 shadow-xl">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Total Savings</p>
                  <p className="font-heading font-bold text-3xl text-white mb-1">$12,450.00</p>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mt-4 mb-2 shadow-inner border border-slate-800">
                  <div className="bg-gradient-to-r from-creditnais-primary-light to-creditnais-primary h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                </div>
                <p className="text-[10px] font-medium text-creditnais-primary">75% of your monthly goal reached</p>
              </div>

              {/* Recent Activity (Fills the rest of the realistic screen height) */}
              <div className="flex-1 flex flex-col overflow-hidden">
                 <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading font-bold text-base text-white">Recent Activity</h3>
                 </div>
                 <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/50 border border-slate-800/50">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-creditnais-primary/20 flex items-center justify-center">
                             <span className="text-creditnais-primary font-bold text-xs">WR</span>
                          </div>
                          <div>
                             <p className="text-xs font-bold text-white">Waitlist Reward</p>
                             <p className="text-[10px] text-gray-500 mt-0.5">Today, 10:05 AM</p>
                          </div>
                       </div>
                       <p className="text-xs font-bold text-creditnais-primary">+$50.00</p>
                    </div>
                 </div>
              </div>

            </div>

            {/* Bottom Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-700 rounded-full z-40" />
          </div>

          {/* User's Custom 3D Tilted Card: credit card VIP / Showcase */}
          <div className="waitlist-vip relative mt-12 md:mt-0 md:ml-12 md:translate-y-16 flex justify-center items-center z-50 scale-110 hover:scale-125 transition-transform duration-500 ease-out cursor-pointer drop-shadow-2xl">
            <InteractiveShowcaseCard />
          </div>

        </div>
      </div>
    </section>
  );
}
