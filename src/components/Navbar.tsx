import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Cómo Ayudamos", href: "/como-ayudamos" },
  { label: "Nuestros Servicios", href: "/nuestros-servicios" },
  { label: "Ver Demo", href: "/ver-demo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[oklch(0.16_0.03_255/0.7)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300"
            style={{
              borderColor: "oklch(0.78 0.13 85 / 0.6)",
              background: "linear-gradient(135deg, oklch(0.78 0.13 85 / 0.25), oklch(0.88 0.09 88 / 0.15))",
              boxShadow: "0 0 30px oklch(0.78 0.13 85 / 0.4), inset 0 0 20px oklch(0.88 0.09 88 / 0.2), inset -1px -1px 0 oklch(1 0 0 / 0.1)",
            }}
          >
            <span className="absolute inset-0 rounded-lg bg-gold/30 blur-md opacity-0 group-hover:opacity-80 transition-all duration-300" />
            <span className="relative text-gold text-xs font-bold tracking-tight">AS</span>
          </span>
          <span className="font-semibold tracking-tight text-foreground/90">
            Automata{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.95 0.06 90), oklch(0.78 0.13 85))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px oklch(0.78 0.13 85 / 0.3)",
                filter: "drop-shadow(0 0 15px oklch(0.78 0.13 85 / 0.4))",
              }}
            >
              Systems
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/empezar-proyecto"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-gold/60 text-gold text-sm font-medium hover:bg-gold/10 hover:gold-glow transition-all duration-300"
        >
          Contacto
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-foreground/80 hover:text-gold transition"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-[oklch(0.16_0.03_255/0.9)] border-t border-white/5"
          >
            <ul className="px-6 py-6 flex flex-col gap-4 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/80 hover:text-gold transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="/empezar-proyecto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-full border border-gold/60 text-gold font-medium"
              >
                Contacto
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
