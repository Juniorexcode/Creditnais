export default function Stopwatch3D() {
  return (
    <>
      <style>{`
        @keyframes float-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fill-progress {
          0% { stroke-dashoffset: 251.3; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes shadow-pulse {
          0%, 100% { transform: scaleX(1); opacity: 0.3; }
          50% { transform: scaleX(0.8); opacity: 0.1; }
        }
        @keyframes custom-spin {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        .animate-float-soft {
          animation: float-soft 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative w-32 h-32 mx-auto scene-3d cursor-pointer group animate-float-soft">
        <div 
          className="w-full h-full relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-6deg) rotateY(12deg)',
          }}
        >
          {/* Real 3D Cylinder Edge for Stopwatch */}
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={`edge-${i}`}
              className="absolute top-1/2 left-1/2"
              style={{
                width: '12px',
                height: '14px', // Depth of the stopwatch
                marginLeft: '-6px',
                marginTop: '-7px',
                transform: `rotateZ(${i * 10}deg) translateY(-63.5px) rotateX(90deg)`,
                background: 'repeating-linear-gradient(to right, #1e293b 0px, #1e293b 5px, #0f172a 5px, #0f172a 6px)',
                backfaceVisibility: 'hidden',
              }}
            />
          ))}

          {/* 3D Top Button (Stacked) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={`btn1-${i}`}
              className="absolute -top-3 left-1/2 w-8 h-4 bg-slate-700 border border-slate-500 rounded-sm"
              style={{ transform: `translateX(-50%) translateZ(${i * 2 - 7}px)` }}
            />
          ))}

          {/* 3D Angled Button (Stacked) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={`btn2-${i}`}
              className="absolute -top-2 left-[60%] w-4 h-4 bg-slate-600 border border-slate-400 rounded-sm origin-bottom"
              style={{ transform: `rotate(30deg) translateZ(${i * 2 - 7}px)` }}
            />
          ))}

          {/* Front Face */}
          <div 
            className="absolute inset-0 rounded-full bg-slate-900 border-4 border-creditnais-blue flex items-center justify-center shadow-xl"
            style={{
              transform: 'translateZ(7px)',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner White Dial */}
            <div className="absolute inset-1 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Savings Progress Arc (Animated Fill) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: 'translateZ(0.1px) rotate(-90deg)' }}>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  stroke="#fbbf24" 
                  strokeWidth="80" 
                  strokeDasharray="251.3" 
                  className="opacity-90"
                  style={{ animation: 'fill-progress 4s linear infinite' }}
                />
              </svg>

              {/* Dial Tick Marks */}
              <div className="absolute inset-0 border-8 border-transparent rounded-full border-t-slate-800/10 border-b-slate-800/10" style={{ transform: 'translateZ(0.2px)' }} />

              {/* Spinning Container for Hands */}
              <div 
                className="absolute inset-0"
                style={{ animation: 'custom-spin 4s linear infinite', transformStyle: 'preserve-3d' }}
              >
                {/* 3D Stopwatch Hand Layers (Relief) */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div 
                    key={`hand-base-${i}`}
                    className="absolute w-2 h-14 bg-slate-900 origin-bottom rounded-t-full"
                    style={{
                      bottom: '50%',
                      left: 'calc(50% - 4px)',
                      transform: `translateZ(${i * 1.5 + 1}px)`,
                    }}
                  />
                ))}
                {/* Top layer of the hand */}
                <div 
                  className="absolute w-2 h-14 bg-slate-700 origin-bottom rounded-t-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  style={{
                    bottom: '50%',
                    left: 'calc(50% - 4px)',
                    transform: `translateZ(${4 * 1.5 + 1}px)`,
                  }}
                />
              </div>

              {/* 3D Center Pin (Relief) */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={`pin-base-${i}`}
                  className="absolute w-4 h-4 bg-slate-900 rounded-full z-10"
                  style={{ 
                    left: 'calc(50% - 8px)',
                    top: 'calc(50% - 8px)',
                    transform: `translateZ(${i * 1.5 + 7}px)` 
                  }} 
                />
              ))}
              {/* Top layer of the center pin */}
              <div 
                className="absolute w-4 h-4 bg-slate-700 border border-slate-500 rounded-full z-10 shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                style={{ 
                  left: 'calc(50% - 8px)',
                  top: 'calc(50% - 8px)',
                  transform: `translateZ(${4 * 1.5 + 7}px)` 
                }} 
              />
            </div>
          </div>

          {/* Back Face */}
          <div 
            className="absolute inset-0 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center shadow-xl"
            style={{
              transform: 'rotateY(180deg) translateZ(7px)',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Back Cover Details */}
            <div className="absolute inset-2 border-2 border-slate-800 rounded-full" />
            <div className="absolute inset-4 border border-slate-800/50 rounded-full" />
            <div className="w-20 h-20 rounded-full bg-slate-800/30 flex items-center justify-center text-slate-500 text-[10px] font-bold tracking-widest">
              CREDITNAIS
            </div>
          </div>
        </div>

        {/* Ambient shadow underneath (Animated) */}
        <div 
          className="absolute -bottom-2 left-4 right-4 h-2 bg-slate-950/20 blur-md rounded-full" 
          style={{ animation: 'shadow-pulse 4s ease-in-out infinite' }}
        />
      </div>
    </>
  );
}
