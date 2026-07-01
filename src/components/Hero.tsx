import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("AGENDA TU DIAGNÓSTICO");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isLoadingRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frameId = 0;
    let previousTime = performance.now();

    const render = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const deltaTime = time - previousTime;
      previousTime = time;

      ctx.clearRect(0, 0, width, height);

      if (isLoadingRef.current) {
        progressRef.current = Math.min(100, progressRef.current + deltaTime * 0.1);

        if (progressRef.current >= 100) {
          progressRef.current = 100;
          setIsCompleted(true);
          isLoadingRef.current = false;
          window.location.assign("/empezar-proyecto");
          return;
        }

        const fillWidth = (progressRef.current / 100) * width;
        const waveOffset = time * 0.01;
        const extendTop = -30;
        const extendBottom = height + 30;

        ctx.save();
        ctx.fillStyle = "#bfa054";
        ctx.strokeStyle = "#bfa054";
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(0, extendTop);

        for (let y = extendTop; y <= extendBottom; y += 2) {
          const wave = Math.sin(y * 0.18 + waveOffset) * 8 + Math.cos(y * 0.09 + waveOffset * 0.7) * 3;
          ctx.lineTo(fillWidth + wave, y);
        }

        ctx.lineTo(0, extendBottom);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = "rgba(255, 245, 214, 0.24)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.22);
        ctx.quadraticCurveTo(fillWidth * 0.5, height * 0.08, fillWidth, height * 0.22);
        ctx.stroke();
        ctx.restore();
      }

      frameId = window.requestAnimationFrame(render);
    };

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    isLoadingRef.current = isLoading;
    if (!isLoading) {
      progressRef.current = 0;
    }
  }, [isLoading]);

  const handleStartProject = () => {
    if (isLoading) return;

    setIsLoading(true);
    setIsCompleted(false);
    setButtonLabel("AGENDA TU DIAGNÓSTICO");
    progressRef.current = 0;
  };

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
        <div className="flex w-full items-center justify-between md:w-auto">
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

          <button
            type="button"
            id="btn-hamburguesa"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            className={`flex h-11 w-11 flex-col items-center justify-center rounded-full border border-[#bfa054]/40 bg-transparent p-0 transition-all duration-300 hover:border-[#bfa054] md:hidden ${isMenuOpen ? "border-[#bfa054]" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={`menu-hamburguesa-line ${isMenuOpen ? "activo" : ""}`} />
            <span className={`menu-hamburguesa-line ${isMenuOpen ? "activo" : ""}`} />
            <span className={`menu-hamburguesa-line ${isMenuOpen ? "activo" : ""}`} />
          </button>
        </div>

        <nav className="hidden items-center gap-10 text-[11px] font-normal tracking-[0.25em] text-gray-400 md:flex">
          <Link to="/" className="border-b-2 border-[#e5c158]/80 pb-1.5 font-medium text-white">INICIO</Link>
          <Link to="/como-ayudamos" className="transition-all duration-300 hover:text-white">CÓMO AYUDAMOS</Link>
          <Link to="/nuestros-servicios" className="transition-all duration-300 hover:text-white">NUESTROS SERVICIOS</Link>
          <Link to="/ver-demo" className="transition-all duration-300 hover:text-white">VER DEMO</Link>
        </nav>

        <Link
          to="/empezar-proyecto"
          className="hidden rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-[9px] tracking-[0.2em] text-white transition-all duration-300 hover:border-[#e5c158] hover:bg-[#e5c158]/5 md:inline-flex md:px-8 md:py-2.5 md:text-[11px] md:tracking-[0.25em]"
        >
          CONTACTO
        </Link>
      </header>

      <div className={`menu-desplegable ${isMenuOpen ? "abierto" : ""}`}>
        <Link to="/" className="enlace-menu active" onClick={() => setIsMenuOpen(false)}>
          INICIO
        </Link>
        <Link to="/como-ayudamos" className="enlace-menu" onClick={() => setIsMenuOpen(false)}>
          CÓMO AYUDAMOS
        </Link>
        <Link to="/nuestros-servicios" className="enlace-menu" onClick={() => setIsMenuOpen(false)}>
          NUESTROS SERVICIOS
        </Link>
        <Link to="/ver-demo" className="enlace-menu" onClick={() => setIsMenuOpen(false)}>
          VER DEMO
        </Link>
        <Link to="/empezar-proyecto" className="btn-contacto-menu" onClick={() => setIsMenuOpen(false)}>
          CONTACTO
        </Link>
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-4 md:py-0">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:relative md:h-[450px] md:gap-0">
          <div className="z-0 flex w-full max-w-[280px] items-center justify-center sm:max-w-[340px] md:absolute md:inset-0 md:max-w-none">
            <AIWireframe />
          </div>

          <div className="z-10 w-full">
            <div className="beneficios-grid w-full gap-4 md:relative">
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                id="automatizaciones"
                className={`beneficio-card ${activeBenefit === 0 ? "activo" : ""} tarjeta-izquierda-arriba md:absolute md:left-[4%] md:top-[16%] md:max-w-[245px] lg:left-[8%]`}
                onClick={() => setActiveBenefit((current) => (current === 0 ? null : 0))}
                aria-expanded={activeBenefit === 0}
              >
                <div className="beneficio-header">
                  <div className="beneficio-title">
                    <span className="punto-dorado" />
                    <h4>¿PIERDES CLIENTES POR TARDAR?</h4>
                  </div>
                  <span className="flecha-icono">▼</span>
                </div>
                <div className="beneficio-content">
                  <div className="beneficio-body">
                    <p>La inteligencia artificial automatiza arquitecturas y sistemas de forma integral.</p>
                    <ul className="beneficio-list">
                      <li>🚀 Reducción del 70% en tiempos de respuesta de soporte.</li>
                      <li>📊 Sincronización automática de datos con tu CRM en tiempo real.</li>
                      <li>🤖 Agentes autónomos que califican leads cualificados sin intervención humana.</li>
                    </ul>
                  </div>
                </div>
              </motion.button>

              <div className="hidden md:flex md:absolute md:left-1/2 md:top-[40%] md:-translate-x-1/2">
                <svg width="17" height="21" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                  <path d="M1 1V16L5.2 12.2L12.5 12.2L1 1Z" fill="white" stroke="#111" strokeWidth="1.5" strokeLinejoin="miter" />
                </svg>
              </div>

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                id="web-premier"
                className={`beneficio-card ${activeBenefit === 1 ? "activo" : ""} md:absolute md:right-[4%] md:top-[48%] md:max-w-[245px] lg:right-[8%]`}
                onClick={() => setActiveBenefit((current) => (current === 1 ? null : 1))}
                aria-expanded={activeBenefit === 1}
              >
                <div className="beneficio-header">
                  <div className="beneficio-title">
                    <span className="punto-dorado" />
                    <h4>TU WEB VENDE EN AUTOMÁTICO</h4>
                  </div>
                  <span className="flecha-icono">▼</span>
                </div>
                <div className="beneficio-content">
                  <div className="beneficio-body">
                    <p>Diseños web premium pensados para experiencias de marca modernas.</p>
                    <ul className="beneficio-list">
                      <li>⚡ Velocidad de carga ultrarrápida optimizada para Google (Core Web Vitals).</li>
                      <li>🎯 Estructuras de conversión (UI/UX) enfocadas en captar clientes B2B.</li>
                      <li>🔒 Arquitectura segura, escalable y 100% autogestionable.</li>
                    </ul>
                  </div>
                </div>
              </motion.button>
            </div>
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
          type="button"
          id="btn-empezar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={handleStartProject}
          disabled={isLoading}
          aria-busy={isLoading}
          className={`boton-premium group relative mb-6 overflow-hidden rounded-full border border-[#ecd074]/30 bg-[#040b19] transition-all duration-300 md:mb-0 ${isLoading ? "cargando pointer-events-none" : "hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(236,208,116,0.35)]"} ${isCompleted ? "completado" : ""}`}
        >
          <canvas ref={canvasRef} id="canvas-liquido" aria-hidden="true" />

          <div className="contenido-boton">
            <span id="texto-dinamico" className="whitespace-nowrap text-[10px] font-medium tracking-[0.25em] transition-colors duration-300 md:text-[11px] md:tracking-[0.35em]">
              {buttonLabel}
            </span>
            <span className="linea-divisoria" />
            <span className="icono-boton flex h-7 items-center md:h-8">
              <svg width="38" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className={`w-9 transition-transform duration-500 md:w-auto ${isLoading ? "translate-x-1" : ""}`}>
                <path d="M 0 12 C 6 12, 8 2, 14 2 L 20 2" />
                <circle cx="20" cy="2" r="1.5" fill="currentColor" stroke="#0b1220" strokeWidth="0.5" />
                <path d="M 0 12 C 5 12, 7 6, 13 6 L 26 6" />
                <circle cx="26" cy="6" r="1.5" fill="currentColor" stroke="#0b1220" strokeWidth="0.5" />
                <path d="M 0 12 L 35 12" />
                <circle cx="35" cy="12" r="1.5" fill="currentColor" stroke="#0b1220" strokeWidth="0.5" />
                <path d="M 0 12 C 5 12, 7 18, 13 18 L 29 18" />
                <circle cx="29" cy="18" r="1.5" fill="currentColor" stroke="#0b1220" strokeWidth="0.5" />
                <path d="M 0 12 C 6 12, 8 22, 14 22 L 22 22" />
                <circle cx="22" cy="22" r="1.5" fill="currentColor" stroke="#0b1220" strokeWidth="0.5" />
              </svg>
            </span>
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
