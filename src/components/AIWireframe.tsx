import { motion } from "framer-motion";

export function AIWireframe() {
  return (
    <div className="relative flex items-center justify-center w-full h-[420px] md:h-[520px]">
      {/* Radial glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.13 85 / 0.25), transparent 55%)",
        }}
      />

      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute"
      >
        <svg width="460" height="460" viewBox="0 0 460 460" className="opacity-60">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.88 0.09 88)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.78 0.13 85)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle
            cx="230"
            cy="230"
            r="220"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="0.8"
            strokeDasharray="2 8"
          />
        </svg>
      </motion.div>

      {/* Counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute"
      >
        <svg width="360" height="360" viewBox="0 0 360 360" className="opacity-40">
          <circle
            cx="180"
            cy="180"
            r="170"
            fill="none"
            stroke="oklch(0.88 0.09 88)"
            strokeWidth="0.6"
          />
        </svg>
      </motion.div>

      {/* Floating polyhedron */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotateY: [0, 360] }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 24, repeat: Infinity, ease: "linear" },
        }}
        className="relative"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          className="drop-shadow-[0_0_40px_oklch(0.78_0.13_85/0.5)]"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.92 0.08 90)" />
              <stop offset="100%" stopColor="oklch(0.7 0.14 80)" />
            </linearGradient>
            <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.95 0.06 90)" />
              <stop offset="100%" stopColor="oklch(0.78 0.13 85 / 0)" />
            </radialGradient>
          </defs>

          {/* Icosahedron-like wireframe */}
          <g
            stroke="url(#lineGrad)"
            strokeWidth="0.9"
            fill="none"
            strokeLinejoin="round"
          >
            <polygon points="140,30 240,90 240,190 140,250 40,190 40,90" />
            <polygon points="140,70 210,110 210,170 140,210 70,170 70,110" />
            <line x1="140" y1="30" x2="140" y2="250" />
            <line x1="40" y1="90" x2="240" y2="190" />
            <line x1="240" y1="90" x2="40" y2="190" />
            <line x1="140" y1="30" x2="70" y2="170" />
            <line x1="140" y1="30" x2="210" y2="170" />
            <line x1="140" y1="250" x2="70" y2="110" />
            <line x1="140" y1="250" x2="210" y2="110" />
            <line x1="40" y1="90" x2="210" y2="170" />
            <line x1="240" y1="90" x2="70" y2="170" />
          </g>

          {/* Nodes */}
          {[
            [140, 30],
            [240, 90],
            [240, 190],
            [140, 250],
            [40, 190],
            [40, 90],
            [140, 140],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="10" fill="url(#nodeGrad)" />
              <circle
                cx={cx}
                cy={cy}
                r="2.5"
                fill="oklch(0.95 0.06 90)"
                className="animate-pulse-glow"
                style={{ animationDelay: `${i * 0.25}s`, transformOrigin: `${cx}px ${cy}px` }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Animated connection lines extending out */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 520"
        preserveAspectRatio="none"
      >
        <g
          stroke="oklch(0.78 0.13 85 / 0.4)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 6"
          className="animate-dash-flow"
        >
          <path d="M 400 260 Q 250 240 80 200" />
          <path d="M 400 260 Q 250 280 80 320" />
          <path d="M 400 260 Q 550 240 720 200" />
          <path d="M 400 260 Q 550 280 720 320" />
        </g>
      </svg>
    </div>
  );
}
