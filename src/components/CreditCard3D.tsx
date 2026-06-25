import { forwardRef } from 'react';

interface CreditCard3DProps {
  className?: string;
}

export const CreditCard3D = forwardRef<HTMLDivElement, CreditCard3DProps>(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`group relative w-[340px] h-[215px] rounded-2xl transition-shadow duration-300 cursor-pointer select-none [&.is-rotating]:!shadow-none [&.is-rotating_.shadow-xl]:!shadow-none ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="w-full h-full relative shadow-2xl rounded-2xl transition-transform duration-[800ms] group-[.can-flip]:group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Front of the Card */}
      <div
        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-black p-6 flex flex-col justify-between shadow-xl border border-blue-400/20 transition-shadow duration-300"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg) translateZ(2px)',
        }}
      >
        {/* Animated Rain Pattern */}
        <div className="absolute inset-0 card-front-pattern z-0" />

        {/* Dynamic Gradient Shapes & Modern Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-12 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[40px] opacity-60" />
          <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-[40px] opacity-40" />
        </div>

        {/* Card Header */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-white text-[10px] font-heading shadow-inner">
              C
            </div>
            <span className="font-heading font-bold text-sm tracking-wide text-white">
              Creditnais
            </span>
          </div>
          {/* Contactless symbol and Card Type */}
          <div className="flex flex-col items-end">
            <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Card Chip & Middle Area */}
        <div className="relative z-10 flex items-center">
          {/* Card Chip */}
          <div className="w-10 h-7 rounded-md bg-gradient-to-r from-yellow-500/80 to-yellow-200/80 border border-yellow-400/40 relative overflow-hidden flex flex-col justify-between p-1.5">
            <div className="w-full h-0.5 bg-yellow-900/10" />
            <div className="w-full h-0.5 bg-yellow-900/10" />
            <div className="w-full h-0.5 bg-yellow-900/10" />
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-yellow-900/10" />
            <div className="absolute inset-y-0 left-1/4 w-0.5 bg-yellow-900/10" />
            <div className="absolute inset-y-0 left-3/4 w-0.5 bg-yellow-900/10" />
          </div>
        </div>

        {/* Card Footer: Number, Holder, Expiry */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="font-heading font-bold text-xl tracking-[0.15em] text-white drop-shadow-md whitespace-nowrap">
            5256 6775 4456 2245
          </div>
          <div className="flex justify-between items-center w-full max-w-[200px]">
            <div className="flex flex-col">
              <span className="text-[6px] text-blue-200 uppercase tracking-widest font-sans mb-0.5">Cardholder Name</span>
              <span className="font-mono text-xs text-white uppercase tracking-wider">Alexander J.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[6px] text-blue-200 uppercase tracking-widest font-sans mb-0.5">Valid Thru</span>
              <span className="font-mono text-xs text-white tracking-wider">12/28</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back of the Card */}
      <div
        className="absolute inset-0 w-full h-full rounded-2xl card-back-pattern border border-slate-600/50 p-6 flex flex-col justify-between overflow-hidden"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg) translateZ(2px)', // Note: because it's rotated 180deg on Y, translateZ(2px) pushes it "backward"
        }}
      >
        {/* Magnetic Strip */}
        <div className="absolute top-4 left-0 w-full h-11 bg-[#1a1a1a] shadow-sm" />

        {/* Signature Strip */}
        <div className="relative z-10 mt-10 w-full h-9 bg-white border border-slate-300 rounded shadow-sm flex items-center justify-end px-3">
          <span className="font-mono text-xs font-semibold text-slate-800 tracking-wider">
            184
          </span>
        </div>

        {/* Card Info and details */}
        <div className="relative z-10 flex justify-between items-end text-[8px] text-slate-800 font-mono leading-relaxed mt-2">
          <div className="bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm border border-white/50">
            <p className="font-bold text-slate-900 uppercase tracking-widest mb-0.5">Creditnais Support</p>
            <p>support@creditnais.com</p>
            <p>+1-800-456-2245</p>
          </div>
          <div className="text-right flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm border border-white/50">
            {/* Hologram Circle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-400 opacity-90 blur-[0.2px] border border-white/60 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
            <span className="text-[6px] text-slate-800 font-semibold uppercase tracking-wider">Authorized Signature</span>
          </div>
        </div>
      </div>

      {/* Card Edges (Thickness via Layer Stacking for smooth rounded corners) */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="card-edge-layer absolute inset-0 w-full h-full rounded-2xl bg-blue-800 border border-blue-900" 
          style={{ 
            transform: `translateZ(${-i}px)`,
            backfaceVisibility: 'hidden',
          }}
        />
      ))}
      </div>
    </div>
  );
});

CreditCard3D.displayName = 'CreditCard3D';
