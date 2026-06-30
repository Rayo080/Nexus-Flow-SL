import { motion } from "framer-motion";

export function AIWireframe() {
  return (
    <div className="relative flex h-[440px] w-full max-w-5xl items-center justify-center overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1000 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0px 0px 12px rgba(233, 195, 84, 0.45))" }}>
        <g opacity="0.25" stroke="#ecd074" strokeWidth="1.2" strokeLinecap="round">
          <path d="M 180 170 L 320 170 L 360 210 L 410 210" />
          <circle cx="180" cy="170" r="2.5" fill="#ecd074" />
          <path d="M 150 200 L 340 200 L 375 235 L 405 235" />
          <circle cx="150" cy="200" r="2.5" fill="#ecd074" />
          <path d="M 140 230 L 330 230 L 365 200 L 415 200" />
          <circle cx="140" cy="230" r="2.5" fill="#ecd074" />
          <path d="M 190 260 L 310 260 L 350 220 L 400 220" />
          <circle cx="190" cy="260" r="2.5" fill="#ecd074" />

          <path d="M 820 170 L 680 170 L 640 210 L 590 210" />
          <circle cx="820" cy="170" r="2.5" fill="#ecd074" />
          <path d="M 850 200 L 660 200 L 625 235 L 595 235" />
          <circle cx="850" cy="200" r="2.5" fill="#ecd074" />
          <path d="M 860 230 L 670 230 L 635 200 L 585 200" />
          <circle cx="860" cy="230" r="2.5" fill="#ecd074" />
          <path d="M 810 260 L 690 260 L 650 220 L 600 220" />
          <circle cx="810" cy="260" r="2.5" fill="#ecd074" />
        </g>

        <g transform="translate(500, 220)">
          <polygon points="0,-120 104,-30 0,0" fill="rgba(236, 208, 116, 0.03)" />
          <polygon points="0,-120 -104,-30 0,0" fill="rgba(236, 208, 116, 0.03)" />
          <polygon points="0,120 104,30 0,0" fill="rgba(236, 208, 116, 0.02)" />
          <polygon points="0,120 -104,30 0,0" fill="rgba(236, 208, 116, 0.02)" />

          <polygon points="0,0 104,-30 104,30" fill="url(#crystalFace)" opacity="0.88" />

          <g stroke="#ecd074" strokeWidth="1.3" opacity="0.8">
            <polygon points="0,-120 104,-30 104,30 0,120 -104,30 -104,-30" fill="none" />

            <line x1="0" y1="-120" x2="0" y2="120" />
            <line x1="-104" y1="-30" x2="104" y2="-30" />
            <line x1="-104" y1="30" x2="104" y2="30" />

            <line x1="0" y1="-120" x2="104" y2="30" />
            <line x1="0" y1="-120" x2="-104" y2="30" />
            <line x1="0" y1="120" x2="104" y2="-30" />
            <line x1="0" y1="120" x2="-104" y2="-30" />

            <line x1="0" y1="0" x2="0" y2="-120" />
            <line x1="0" y1="0" x2="0" y2="120" />
            <line x1="0" y1="0" x2="104" y2="-30" />
            <line x1="0" y1="0" x2="104" y2="30" />
            <line x1="0" y1="0" x2="-104" y2="-30" />
            <line x1="0" y1="0" x2="-104" y2="30" />

            <polygon points="0,-40 35,-10 35,10 0,40 -35,10 -35,-10" fill="none" stroke="#ecd074" strokeWidth="0.8" opacity="0.35" />
          </g>

          <circle cx="0" cy="-120" r="2.5" fill="#fff" />
          <circle cx="104" cy="-30" r="2.5" fill="#fff" />
          <circle cx="104" cy="30" r="2.5" fill="#fff" />
          <circle cx="0" cy="120" r="2.5" fill="#fff" />
          <circle cx="-104" cy="30" r="2.5" fill="#fff" />
          <circle cx="-104" cy="-30" r="2.5" fill="#fff" />
          <circle cx="0" cy="0" r="2" fill="#fff" />

          <defs>
            <linearGradient id="crystalFace" x1="30" y1="-15" x2="104" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff4cc" />
              <stop offset="50%" stopColor="#eec961" />
              <stop offset="100%" stopColor="#967724" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute left-[4%] top-[33%] z-10 max-w-[245px] rounded-xl p-5 text-left transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "rgba(6, 15, 36, 0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(236, 208, 116, 0.18)",
          boxShadow: "0 25px 55px rgba(0, 0, 0, 0.75)",
        }}
      >
        <h4 className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] shadow-[0_0_8px_#ecd074]" />
          Integraciones IA
        </h4>
        <p className="text-[11px] font-light leading-relaxed text-gray-400">
          La inteligencia artificial automatiza arquitecturas y sistemas de forma integral.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-[4%] top-[40%] z-10 max-w-[245px] rounded-xl p-5 text-left transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "rgba(6, 15, 36, 0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(236, 208, 116, 0.18)",
          boxShadow: "0 25px 55px rgba(0, 0, 0, 0.75)",
        }}
      >
        <h4 className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-[0.2em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] shadow-[0_0_8px_#ecd074]" />
          Diseño web a medida
        </h4>
        <p className="text-[11px] font-light leading-relaxed text-gray-400">
          Diseños web a medida pensados para experiencias de marca premium y modernas.
        </p>
        <div className="absolute -left-3.5 -top-3 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
          <svg width="17" height="21" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V16L5.2 12.2L12.5 12.2L1 1Z" fill="white" stroke="#111" strokeWidth="1.5" strokeLinejoin="miter" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
