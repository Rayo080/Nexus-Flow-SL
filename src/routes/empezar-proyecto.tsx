import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empezar-proyecto")({
  head: () => ({
    meta: [
      { title: "Agenda tu Sesión Estratégica | Nexus Flow" },
      {
        name: "description",
        content:
          "Reserva una sesión de 15 minutos para analizar automatización, desarrollo web premium y oportunidades de negocio.",
      },
    ],
  }),
  component: EmpezarProyectoPage,
});

function EmpezarProyectoPage() {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050a12] text-white">
      <div
        className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 gap-6 px-5 py-10 md:grid-cols-[1fr_1.2fr] md:py-14"
        style={{
          background: "radial-gradient(circle at top left, rgba(191, 160, 84, 0.05), transparent 60%), #060b13",
          border: "1px solid rgba(191, 160, 84, 0.2)",
          boxShadow: "0 40px 100px rgba(0, 0, 0, 0.8)",
          borderRadius: 24,
        }}
      >
        <section
          className="flex flex-col justify-center rounded-[24px] border border-white/10 px-8 py-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] md:px-12 md:py-14"
          style={{
            background: "rgba(255, 255, 255, 0.01)",
            backdropFilter: "blur(10px)",
            borderRight: "1px solid rgba(191, 160, 84, 0.1)",
          }}
        >
          <button
            type="button"
            onClick={() => window.history.back()}
            aria-label="Regresar"
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-100 transition hover:border-[#bfa054]/50 hover:bg-[#bfa054]/10"
          >
            ←
          </button>
          <span className="mb-8 inline-flex rounded-full border border-[#bfa054]/20 bg-[#bfa054]/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#bfa054]">
            Nexus Flow
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Llamada de Descubrimiento <span className="text-[#bfa054]">(15 min)</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            Reserva un espacio corto y directo para analizar los cuellos de botella de tu negocio y ver cómo la IA y una web premium pueden automatizar tus ingresos.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                title: "Análisis de Automatización",
                description:
                  "Detectamos qué tareas repetitivas o flujos de atención podemos delegar en agentes de IA.",
              },
              {
                title: "Estrategia Web Premier",
                description:
                  "Esbozamos el embudo digital ideal para tu sector, directo y profesional.",
              },
              {
                title: "Presupuesto Claro",
                description:
                  "Sales de la reunión con una estimación realista de inversión y tiempos.",
              },
            ].map((beneficio) => (
              <div
                key={beneficio.title}
                className="flex gap-4 rounded-3xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.005))",
                  border: "1px solid rgba(191, 160, 84, 0.15)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span
                  className="mt-1 text-2xl text-[#bfa054]"
                  style={{ textShadow: "0 0 10px rgba(191, 160, 84, 0.4)" }}
                >
                  ✦
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{beneficio.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="min-h-[650px] rounded-[24px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          style={{ background: "#060b13", padding: 20 }}
        >
          <div
            className="mb-4 rounded-lg border border-[#bfa054]/20 bg-[#0b121b] px-6 py-4 text-center"
            style={{ boxShadow: "0 8px 30px rgba(11,18,27,0.6)" }}
          >
            <p className="text-sm font-semibold text-[#bfa054]">Selecciona la primera opción</p>
          </div>

          <div
            className="calendly-inline-widget h-full"
            data-url="https://calendly.com/nexus-flow?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=09101d&text_color=ffffff&primary_color=bfa054"
            style={{ minWidth: 320, width: "100%", height: "100%" }}
          />
        </section>
      </div>
    </div>
  );
}
