import type { RefObject } from 'react';

interface ChancesSectionProps {
  cardSlotRef: RefObject<HTMLDivElement | null>;
}

export default function ChancesSection({ cardSlotRef }: ChancesSectionProps) {
  return (
    <section id="chances" className="absolute inset-0 py-24 flex items-center justify-center bg-transparent overflow-hidden z-30 opacity-0 pointer-events-none">
      
      {/* Decorative elements (removed) */}

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: holds the slot for the floating rotating 3D card */}
        <div className="flex justify-center items-center h-full min-h-[400px] relative mt-12 lg:mt-16">
          <div 
            ref={cardSlotRef}
            className="w-[400px] h-[253px] pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
            }}
          />
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="flex flex-col items-start text-left gap-8">
          <div>
            <h2 className="chances-title font-heading font-extrabold text-4xl md:text-5xl text-creditnais-navy tracking-tight leading-tight">
              Earn more chances to win prizes weekly
            </h2>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Feature 1 */}
            <div className="chances-card flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-creditnais-primary/10 border border-creditnais-primary/30 flex items-center justify-center text-creditnais-navy shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-sm text-creditnais-navy">Price Protection from MasterCard</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Your Creditnais Debit Card offers gold-standard price protection for those valuable purchases.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="chances-card flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-creditnais-primary/10 border border-creditnais-primary/30 flex items-center justify-center text-creditnais-navy shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-sm text-creditnais-navy">Manage your Debit Card from the app</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Lost, damaged, or stolen card? Lock or unlock your card instantly with one tap right inside the app.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="chances-card flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-creditnais-primary/10 border border-creditnais-primary/30 flex items-center justify-center text-creditnais-navy shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20a9 9 0 118-9" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-sm text-creditnais-navy">Spend (and earn) anywhere in style</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Use your card wherever MasterCard is accepted globally, either in-person, online, or via Apple Pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
