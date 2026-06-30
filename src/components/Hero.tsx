import { motion } from "framer-motion";
import { AIWireframe } from "@/components/AIWireframe";
import { ParticleField } from "@/components/ParticleField";

const stats = [
  { value: "250+", label: "Proyectos Automatizados" },
  { value: "50+", label: "Webs Premier Lanzadas" },
  { value: "35%", label: "Eficiencia Promedio Ganada" },
  { value: "4.9/5", label: "Calificación de Cliente" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#030712] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 45%, #0a1b3c 0%, #051025 45%, #030816 80%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(241, 196, 83, 0.16), transparent 60%)",
        }}
      />

      <ParticleField />

      <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <div className="flex items-center gap-2.5 md:gap-3.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 drop-shadow-[0_0_8px_rgba(233,195,84,0.2)] md:h-8 md:w-8"
          >
            <path d="M50 15L20 80H38L50 52L62 80H80L50 15Z" fill="url(#logoGrad)" />
            <path d="M50 35L35 70H45L50 58L55 70H65L50 35Z" fill="#040b19" />
            <path d="M50 10L85 85H73L50 32L27 85H15L50 10Z" stroke="#ecd074" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="logoGrad" x1="50" y1="15" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff0b3" />
                <stop offset="100%" stopColor="#e5c158" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col">
            <span className="text-[10px] font-light tracking-[0.4em] text-white md:text-xs">NEXUS</span>
            <span className="-mt-0.5 text-[8px] font-medium tracking-[0.25em] text-[#ecd074] md:text-[9px]">FLOW</span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-[11px] font-normal tracking-[0.25em] text-gray-400 md:flex">
          <a href="#" className="border-b-2 border-[#e5c158]/80 pb-1.5 font-medium text-white">INICIO</a>
          <a href="#" className="transition-all duration-300 hover:text-white">AUTOMATIZACIONES</a>
          <a href="#" className="transition-all duration-300 hover:text-white">WEB PREMIER</a>
          <a href="#" className="transition-all duration-300 hover:text-white">PORTAFOLIO</a>
          <a href="#" className="transition-all duration-300 hover:text-white">BLOG</a>
        </nav>

        <a
          href="#"
          className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-[9px] tracking-[0.2em] text-white transition-all duration-300 hover:border-[#e5c158] hover:bg-[#e5c158]/5 md:px-8 md:py-2.5 md:text-[11px] md:tracking-[0.25em]"
        >
          CONTACTO
        </a>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-4 md:py-0">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:relative md:h-[450px] md:gap-0">
          <div className="z-0 flex w-full max-w-[280px] items-center justify-center sm:max-w-[340px] md:absolute md:inset-0 md:max-w-none">
            <AIWireframe />
          </div>

          <div className="z-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:block">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-xl border border-[#ecd074]/15 bg-[rgba(6,15,36,0.7)] p-4 text-left shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:absolute md:left-[4%] md:top-[33%] md:max-w-[245px] md:p-5 lg:left-[8%]"
            >
              <h4 className="mb-1.5 flex items-center gap-2 text-[11px] font-medium tracking-wider text-white md:text-[12px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] shadow-[0_0_8px_#ecd074]" />
                Integraciones IA
              </h4>
              <p className="text-[10.5px] font-light leading-relaxed text-gray-400 md:text-[11px]">
                La inteligencia artificial automatiza arquitecturas y sistemas de forma integral.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative rounded-xl border border-[#ecd074]/15 bg-[rgba(6,15,36,0.7)] p-4 text-left shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:absolute md:right-[4%] md:top-[40%] md:max-w-[245px] md:p-5 lg:right-[8%]"
            >
              <h4 className="mb-1.5 flex items-center gap-2 text-[11px] font-medium tracking-wider text-white md:text-[12px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] shadow-[0_0_8px_#ecd074]" />
                Diseño web a medida
              </h4>
              <p className="text-[10.5px] font-light leading-relaxed text-gray-400 md:text-[11px]">
                Diseños web premium pensados para experiencias de marca modernas.
              </p>
              <div className="absolute -left-3.5 -top-3 hidden drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] md:block">
                <svg width="17" height="21" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V16L5.2 12.2L12.5 12.2L1 1Z" fill="white" stroke="#111" strokeWidth="1.5" strokeLinejoin="miter" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 mt-4 max-w-5xl px-4 text-center text-sm font-light uppercase tracking-[0.25em] text-gray-200 md:-mt-6 md:mb-9 md:text-lg md:tracking-[0.35em]"
        >
          NEXUS{" "}
          <span
            className="font-medium"
            style={{
              color: "#ecd074",
              textShadow: "0 0 10px rgba(236, 208, 116, 0.2)",
            }}
          >
            FLOW
          </span>{" "}
          <span className="mx-2 text-gray-600 md:mx-3">|</span>
          <span className="mt-1 block text-[11px] font-light normal-case tracking-[0.15em] text-gray-400 sm:mt-0 sm:inline md:text-xs md:tracking-[0.18em]">
            Automatizaciones y Web Premier
          </span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 rounded-full bg-[#040b19] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(236,208,116,0.35)] md:mb-0"
        >
          <div className="rounded-full bg-gradient-to-r from-[#e5c158]/80 via-[#fff5d6] to-[#e5c158]/40 p-[1.5px]">
            <div className="flex h-full w-full items-center justify-between gap-6 rounded-full bg-gradient-to-r from-[#0b1220] via-[#161f33] to-[#0b1220] py-3.5 pl-6 pr-4 md:gap-12 md:py-4 md:pl-10 md:pr-6">
              <span className="whitespace-nowrap text-[10px] font-medium tracking-[0.25em] text-[#ecd074] transition-colors duration-300 group-hover:text-white md:text-[11px] md:tracking-[0.35em]">
                EMPEZAR MI PROYECTO
              </span>

              <div className="flex h-7 items-center border-l border-white/10 pl-4 md:h-8 md:pl-5">
                <svg width="38" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ecd074" strokeWidth="1.3" strokeLinecap="round" className="w-9 md:w-auto">
                  <path d="M 0 12 C 6 12, 8 2, 14 2 L 20 2" />
                  <circle cx="20" cy="2" r="1.5" fill="#ecd074" stroke="#0b1220" strokeWidth="0.5" />
                  <path d="M 0 12 C 5 12, 7 6, 13 6 L 26 6" />
                  <circle cx="26" cy="6" r="1.5" fill="#ecd074" stroke="#0b1220" strokeWidth="0.5" />
                  <path d="M 0 12 L 35 12" />
                  <circle cx="35" cy="12" r="1.5" fill="#ecd074" stroke="#0b1220" strokeWidth="0.5" />
                  <path d="M 0 12 C 5 12, 7 18, 13 18 L 29 18" />
                  <circle cx="29" cy="18" r="1.5" fill="#ecd074" stroke="#0b1220" strokeWidth="0.5" />
                  <path d="M 0 12 C 6 12, 8 22, 14 22 L 22 22" />
                  <circle cx="22" cy="22" r="1.5" fill="#ecd074" stroke="#0b1220" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </motion.button>
      </main>

      <footer className="relative z-30 w-full border-t border-white/[0.04] bg-[#02050d]/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-6 py-6 text-center md:grid-cols-4 md:divide-x md:divide-white/[0.05] md:py-8">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
              className="flex flex-col justify-center px-1"
            >
              <span
                className="mb-0.5 text-xl font-light tracking-wide md:text-2xl"
                style={{
                  color: "#ecd074",
                  textShadow: "0 2px 8px rgba(236, 208, 116, 0.18)",
                }}
              >
                {s.value}
              </span>
              <span className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-gray-500 md:text-[9.5px] md:tracking-[0.22em]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </footer>
    </section>
  );
}
