export default function SavingsCoin3D() {
  return (
    <div className="relative w-32 h-32 mx-auto scene-3d cursor-pointer group" style={{ transform: 'rotateX(-12deg)' }}>
      <div 
        className="w-full h-full relative animate-spin-y"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Real 3D Cylinder Edge to prevent any transparent gaps */}
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={`edge-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              width: '12px',
              height: '12px', // Depth of the coin
              marginLeft: '-6px',
              marginTop: '-6px',
              transform: `rotateZ(${i * 10}deg) translateY(-63.5px) rotateX(90deg)`,
              background: 'repeating-linear-gradient(to right, #f59e0b 0px, #f59e0b 5px, #0b0f19 5px, #0b0f19 6px)',
              backfaceVisibility: 'hidden',
            }}
          />
        ))}

        {/* Front Face */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-creditnais-blue to-creditnais-navy border-4 border-creditnais-gold flex items-center justify-center shadow-xl shadow-creditnais-gold/20"
          style={{
            transform: 'translateZ(6px)',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Stacked Text for Relief */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={`front-ext-${i}`}
              className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-6xl text-amber-600"
              style={{ transform: `translateZ(${i * 0.5}px)` }}
            >
              $
            </div>
          ))}
          <div 
            className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-6xl text-creditnais-gold drop-shadow-md"
            style={{ transform: `translateZ(2.5px)` }}
          >
            $
          </div>
          {/* Inner metallic ring */}
          <div className="absolute inset-2 rounded-full border-2 border-creditnais-gold/30 pointer-events-none" style={{ transform: 'translateZ(0.1px)' }} />
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-creditnais-blue to-creditnais-navy border-4 border-creditnais-gold flex items-center justify-center shadow-xl shadow-creditnais-gold/20"
          style={{
            transform: 'rotateY(180deg) translateZ(6px)',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Stacked Text for Relief */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={`back-ext-${i}`}
              className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-6xl text-amber-600"
              style={{ transform: `translateZ(${i * 0.5}px)` }}
            >
              $
            </div>
          ))}
          <div 
            className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-6xl text-creditnais-gold drop-shadow-md"
            style={{ transform: `translateZ(2.5px)` }}
          >
            $
          </div>
          <div className="absolute inset-2 rounded-full border-2 border-creditnais-gold/30 pointer-events-none" style={{ transform: 'translateZ(0.1px)' }} />
        </div>
      </div>

      {/* Hover Light Reflection Effect */}
      <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
