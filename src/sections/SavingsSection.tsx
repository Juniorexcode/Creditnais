import type { RefObject } from 'react';
import SavingsCoin3D from '../components/SavingsCoin3D';
import Stopwatch3D from '../components/Stopwatch3D';

interface SavingsSectionProps {
  cardSlotRef: RefObject<HTMLDivElement | null>;
}

export default function SavingsSection({ cardSlotRef }: SavingsSectionProps) {
  return (
    <section id="features" className="absolute inset-0 py-24 flex items-center justify-center overflow-visible bg-transparent z-20 opacity-0 pointer-events-none">
      
      {/* Dynamic Diagonal Background Shapes (To match description) */}
      {/* Dynamic Diagonal Background Shapes (To match description) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-16">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="savings-title font-heading font-extrabold text-4xl md:text-5xl text-creditnais-navy tracking-tight leading-tight">
            Spending that helps your savings grow
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Slot for the protagonist credit card */}
          <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl min-h-[420px]">
            <div className="savings-bg absolute inset-0 glass-panel group-hover:bg-white/80 border border-gray-200/50 shadow-xl rounded-3xl pointer-events-none"></div>
            
            <div className="relative z-10 p-8 flex flex-col justify-between items-center text-center h-full">
              {/* The slot for the 3D card */}
              <div 
                ref={cardSlotRef}
                className="w-[340px] h-[215px] pointer-events-none"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              />
              
              <div className="savings-text flex flex-col gap-2 mt-4">
                <h3 className="font-heading font-bold text-lg text-creditnais-navy">Win up to $5,000 / month</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                  Win up to 100% back on your entire spend for the last month up to $5,000. Every swipe increases your chances!
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 3D Dollar Coin */}
          <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl min-h-[420px]">
            <div className="savings-bg absolute inset-0 glass-panel group-hover:bg-white/80 border border-gray-200/50 shadow-xl rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between items-center text-center h-full">
              <div className="savings-icon w-full flex justify-center items-center h-[140px] mb-6">
                <SavingsCoin3D />
              </div>
              
              <div className="savings-text flex flex-col gap-2 mt-4">
                <h3 className="font-heading font-bold text-lg text-creditnais-navy">Every dollar counts</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                  Receive 100 points for every $1 spent! Earn 50,000 bonus points every month just for using Creditnais.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 3D Stopwatch */}
          <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl min-h-[420px]">
            <div className="savings-bg absolute inset-0 glass-panel group-hover:bg-white/80 border border-gray-200/50 shadow-xl rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between items-center text-center h-full">
              <div className="savings-icon w-full flex justify-center items-center h-[140px] mb-6">
                <Stopwatch3D />
              </div>
              
              <div className="savings-text flex flex-col gap-2 mt-4">
                <h3 className="font-heading font-bold text-lg text-creditnais-navy">Save more, save faster</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                  Earn an extra 0.05% to your Savings Bonus when you spend $1,000/month. Supercharge your savings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
