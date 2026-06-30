import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Cpu,
  Workflow,
  Database,
  Plug,
  Sparkles,
  Gauge,
  Search,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AIWireframe } from "@/components/AIWireframe";
import { ParticleField } from "@/components/ParticleField";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stats = [
  { value: "250+", label: "Proyectos Automatizados" },
  { value: "50+", label: "Webs Premium Lanzadas" },
  { value: "35%", label: "Incremento Promedio en Productividad" },
  { value: "4.9/5", label: "Satisfacción del Cliente" },
];

export function Hero() {
  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 18);
  const ty = useTransform(sy, (v) => v * 18);
  const txReverse = useTransform(sx, (v) => v * -12);
  const tyReverse = useTransform(sy, (v) => v * -12);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 circuit-bg opacity-50" />
      <ParticleField />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, oklch(0.78 0.13 85 / 0.10), transparent 70%)",
        }}
      />

      <Navbar />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Wireframe + floating cards row */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-10 mb-16 md:mb-24"
        >
          {/* Left floating card */}
          <motion.div
            style={{ x: tx, y: ty }}
            className="lg:justify-self-end max-w-xs w-full animate-float-slow"
          >
            <FloatingCard
              title="AI Integrations"
              tags={["APIs", "CRM", "Workflows"]}
              icon={<Cpu className="w-4 h-4 text-gold" />}
              align="right"
            />
          </motion.div>

          {/* Central wireframe */}
          <motion.div
            style={{ x: useTransform(sx, (v) => v * -8), y: useTransform(sy, (v) => v * -8) }}
            className="relative"
          >
            <AIWireframe />
          </motion.div>

          {/* Right floating card */}
          <motion.div
            style={{ x: txReverse, y: tyReverse }}
            className="lg:justify-self-start max-w-xs w-full animate-float-slow"
            transition={{ delay: 1 }}
          >
            <FloatingCard
              title="Premium Web Design"
              tags={["Fast", "Modern", "SEO Optimized"]}
              icon={<Sparkles className="w-4 h-4 text-gold" />}
              align="left"
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-gold/80 mb-6">
            AI Automation Agency
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="text-gold-gradient">AUTOMATA</span>
            <br />
            <span className="text-foreground">SYSTEMS</span>
          </h1>

          <div className="mx-auto mt-8 mb-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light">
            Automatizaciones Inteligentes y Web Premium para Empresas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-b from-[oklch(0.88_0.09_88)] to-[oklch(0.72_0.14_80)] text-[oklch(0.16_0.03_255)] font-semibold text-sm tracking-wide uppercase shadow-[0_10px_40px_-10px_oklch(0.78_0.13_85/0.6)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_-10px_oklch(0.78_0.13_85/0.8)]"
            >
              <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              Empezar mi proyecto
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="mt-24 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 glass-card overflow-hidden"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="p-8 md:p-10 text-center bg-[oklch(0.18_0.03_255/0.4)] hover:bg-[oklch(0.22_0.04_255/0.6)] transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-gradient tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 text-xs md:text-sm text-foreground/60 tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  title,
  tags,
  icon,
  align,
}: {
  title: string;
  tags: string[];
  icon: React.ReactNode;
  align: "left" | "right";
}) {
  const tagIcons: Record<string, React.ReactNode> = {
    APIs: <Plug className="w-3 h-3" />,
    CRM: <Database className="w-3 h-3" />,
    Workflows: <Workflow className="w-3 h-3" />,
    Fast: <Gauge className="w-3 h-3" />,
    Modern: <Sparkles className="w-3 h-3" />,
    "SEO Optimized": <Search className="w-3 h-3" />,
  };

  return (
    <div
      className={`glass-card relative p-5 ${
        align === "right" ? "lg:text-right" : "lg:text-left"
      }`}
      style={{
        boxShadow:
          "0 20px 60px -20px oklch(0 0 0 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.06)",
      }}
    >
      <div
        className={`flex items-center gap-2 mb-4 ${
          align === "right" ? "lg:justify-end" : ""
        }`}
      >
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gold/10 border border-gold/30">
          {icon}
        </span>
        <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
      </div>
      <div
        className={`flex flex-wrap gap-2 ${
          align === "right" ? "lg:justify-end" : ""
        }`}
      >
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-foreground/75"
          >
            {tagIcons[t]}
            {t}
          </span>
        ))}
      </div>
      {/* connector dot */}
      <span
        className={`hidden lg:block absolute top-1/2 ${
          align === "right" ? "-right-2" : "-left-2"
        } -translate-y-1/2 w-2 h-2 rounded-full bg-gold animate-pulse-glow`}
      />
    </div>
  );
}
