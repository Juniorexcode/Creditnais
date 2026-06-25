import { useState } from 'react';

export default function InteractiveShowcaseCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-64 h-96 cursor-pointer select-none"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Outer tilt wrapper — static 3D lean */}
      <div 
        className="w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotate3d(1, -1, 1, 25deg)',
        }}
      >
        {/* Flip wrapper — animates the 180deg Y rotation */}
        <div 
          className="w-full h-full relative transition-transform duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >

          {/* 
            SHADOW SYSTEM — Two layers, one per face.
            Each has backfaceVisibility: hidden so only the visible
            face's shadow renders, making it naturally follow the 3D flip.
          */}

          {/* Shadow for FRONT face */}
          <div 
            className="absolute rounded-3xl pointer-events-none"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg) translateZ(-12px)',
              background: 'radial-gradient(ellipse at 50% 65%, rgba(99,210,100,0.55) 0%, rgba(16,185,129,0.3) 40%, transparent 75%)',
              filter: 'blur(20px)',
              width: '140%',
              height: '130%',
              top: '-15%',
              left: '-20%',
            }}
          />

          {/* Shadow for BACK face */}
          <div 
            className="absolute rounded-3xl pointer-events-none"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(-12px)',
              background: 'radial-gradient(ellipse at 50% 65%, rgba(251,191,36,0.55) 0%, rgba(234,179,8,0.3) 40%, transparent 75%)',
              filter: 'blur(20px)',
              width: '140%',
              height: '130%',
              top: '-15%',
              left: '-20%',
            }}
          />

          {/* === FRONT FACE === */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl border-4 border-creditnais-primary/40 bg-gradient-to-br from-slate-900 via-slate-800 to-creditnais-navy p-5 flex flex-col justify-between overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg) translateZ(2px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Decorative geometric flakes */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <div 
                className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-tr from-creditnais-gold/20 via-transparent to-transparent border border-creditnais-gold/10 rounded-full"
                style={{ transform: 'rotate(45deg)' }}
              />
              <div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-bl from-creditnais-primary/10 via-transparent to-transparent border border-creditnais-primary/5 rounded-full"
                style={{ transform: 'rotate(120deg)' }}
              />
              {/* Fine golden network mesh */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid-vip" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fbbf24" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-vip)" />
              </svg>
            </div>

            {/* Card Header */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-10 h-8 rounded-md bg-gradient-to-br from-yellow-500 via-creditnais-gold to-yellow-600 border border-yellow-400 relative overflow-hidden flex flex-col justify-between p-1.5 shadow-inner">
                <div className="w-full h-0.5 bg-yellow-950/20" />
                <div className="w-full h-0.5 bg-yellow-950/20" />
                <div className="w-full h-0.5 bg-yellow-950/20" />
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-yellow-950/20" />
                <div className="absolute inset-y-0 left-1/4 w-0.5 bg-yellow-950/20" />
                <div className="absolute inset-y-0 left-3/4 w-0.5 bg-yellow-950/20" />
              </div>
              <div className="flex flex-col items-end">
                <span className="font-heading font-extrabold text-xs tracking-widest text-creditnais-gold">VIP</span>
                <span className="text-[7px] font-mono text-slate-400 tracking-wider">PLATINUM</span>
              </div>
            </div>

            {/* Middle Brand */}
            <div className="relative z-10 flex flex-col items-start gap-1">
              <svg className="w-5 h-5 text-creditnais-gold/80 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white mt-1">Creditnais</span>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm tracking-widest text-creditnais-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  4000 8734 5708 9010
                </span>
                <span className="text-[6px] text-slate-500 font-mono">5708-9010-971f</span>
              </div>
              <div className="flex justify-between items-end text-[8px] uppercase tracking-wider text-slate-400 font-sans">
                <div>
                  <p className="text-[5px] text-slate-500 tracking-normal mb-0.5">Card Holder</p>
                  <p className="font-bold text-white font-heading">Alexander Vance</p>
                </div>
                <div className="text-right">
                  <p className="text-[5px] text-slate-500 tracking-normal mb-0.5">Expiry</p>
                  <p className="font-bold text-white font-mono">10/30</p>
                </div>
              </div>
            </div>

            {/* Hover SVG deco */}
            <svg 
              className="absolute -bottom-4 -right-12 w-40 h-40 z-0 fill-white/5 stroke-creditnais-primary/10" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 64 64"
            >
              <path d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="4" />
            </svg>
          </div>

          {/* === BACK FACE === */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl border-4 border-creditnais-gold/40 bg-gradient-to-br from-slate-950 via-slate-900 to-creditnais-navy p-5 flex flex-col justify-between overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(2px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute top-6 left-0 w-full h-12 bg-slate-950" />

            <div className="relative z-10 mt-14 w-full h-8 bg-slate-200 border-2 border-slate-300 rounded flex items-center justify-between px-3">
              <span className="font-sans italic text-[10px] text-slate-500 select-none">Alexander Vance</span>
              <span className="font-mono text-xs font-bold text-slate-950 bg-white px-1.5 py-0.5 rounded shadow-sm">892</span>
            </div>

            <div className="relative z-10 flex justify-between items-end text-[7px] text-slate-400 font-mono leading-normal">
              <div className="max-w-[140px] flex flex-col gap-0.5">
                <p className="font-heading font-extrabold text-creditnais-gold">CREDITNAIS VIP CLUB</p>
                <p>Not transferable. Valid only with signature.</p>
                <p>Support: +1-800-555-8920</p>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-300 opacity-70 blur-[0.5px] border border-white/20 animate-pulse" />
                <span className="text-[5px] text-slate-500 uppercase tracking-widest">Authorized</span>
              </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/5 border border-white/10 rounded-full px-2 py-0.5 text-[6px] text-slate-500 uppercase tracking-widest">
              Click to Flip
            </div>
          </div>

        </div>{/* end flip wrapper */}
      </div>{/* end tilt wrapper */}
    </div>
  );
}
