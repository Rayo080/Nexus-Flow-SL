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

      <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <div className="flex items-center gap-3.5">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(233,195,84,0.2)]">
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
            <span className="text-xs font-light tracking-[0.4em] text-white">NEXUS</span>
            <span className="-mt-0.5 text-[9px] font-medium tracking-[0.25em] text-[#ecd074]">FLOW</span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-[11px] font-normal tracking-[0.25em] text-gray-400 md:flex">
          <a href="#" className="border-b-2 border-[#e5c158]/80 pb-1.5 font-medium text-white">INICIO</a>
          <a href="#" className="transition-all duration-300 hover:text-white">AUTOMATIZACIONES</a>
          <a href="#" className="transition-all duration-300 hover:text-white">WEB PREMIER</a>
          <a href="#" className="transition-all duration-300 hover:text-white">PORTAFOLIO</a>
          <a href="#" className="transition-all duration-300 hover:text-white">BLOG</a>
        </nav>

        <a href="#" className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-2.5 text-[11px] tracking-[0.25em] text-white transition-all duration-300 hover:border-[#e5c158] hover:bg-[#e5c158]/5">
          CONTACTO
        </a>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex w-full justify-center"
        >
          <AIWireframe />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl px-4 text-center text-base font-light uppercase tracking-[0.35em] text-gray-200 md:text-lg"
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
          <span className="mx-3 text-gray-600">|</span>
          <span className="inline-block text-xs font-light normal-case tracking-[0.18em] text-gray-400 md:text-sm">
            Automatizaciones y Web Premier
          </span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group relative mt-8 overflow-hidden rounded-full bg-[#040b19] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(236,208,116,0.25)]"
        >
          <div className="rounded-full bg-gradient-to-r from-[#e5c158] via-[#fff5d6] to-[#e5c158] p-[1.5px]">
            <div className="flex h-full w-full items-center justify-between gap-10 rounded-full bg-gradient-to-r from-[#0b1220] via-[#161f33] to-[#0b1220] py-3.5 pl-9 pr-6">
              <span className="text-[11px] font-medium tracking-[0.32em] text-[#ecd074] transition-colors duration-300 group-hover:text-white">
                EMPEZAR MI PROYECTO
              </span>

              <div className="flex items-center border-l border-white/10 pl-4 opacity-85">
                <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ecd074" strokeWidth="1.25" strokeLinecap="round">
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

      <footer
        className="relative z-30 w-full border-t border-white/[0.04] bg-[#02050d]/80 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
              className="flex flex-col justify-center px-4"
            >
              <span
                className="mb-0.5 text-2xl font-light tracking-wider md:text-3xl"
                style={{
                  color: "#ecd074",
                  textShadow: "0 2px 8px rgba(236, 208, 116, 0.18)",
                }}
              >
                {s.value}
              </span>
              <span className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-gray-500 md:text-xs">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </footer>
    </section>
  );
}
