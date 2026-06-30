export function AIWireframe() {
  return (
    <div className="flex w-full items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[320px] md:h-full md:max-w-none"
        style={{ filter: "drop-shadow(0px 0px 12px rgba(233, 195, 84, 0.45))" }}
      >
        <g opacity="0.25" stroke="#ecd074" strokeWidth="1.2" strokeLinecap="round" className="hidden md:block">
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
    </div>
  );
}
