import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/como-ayudamos")({
  head: () => ({
    meta: [
      { title: "Cómo Ayudamos | Nexus Flow" },
      {
        name: "description",
        content:
          "Flujos autónomos y claros: atención 24/7, integración CRM y clasificación de leads para equipos que quieren convertir más.",
      },
    ],
  }),
  component: ComoAyudamosPage,
});

function ComoAyudamosPage() {
  const benefits = [
    { title: "Atención 24/7 con IA", tag: "Agentes conversacionales inmediatos" },
    { title: "Integración CRM Directa", tag: "Sincronización en tiempo real" },
    { title: "Clasificación de Leads", tag: "Filtro automático de clientes reales" },
    { title: "Reportes Accionables", tag: "Métricas de conversión claras" },
  ];

  const cases = [
    { label: "OPERACIONES", title: "Automatización de Cartera" },
    { label: "VENTAS", title: "Embudo Autónomo de Agendamiento" },
  ];

  return (
    <PageShell
      title="Flujos autónomos de alto impacto"
      subtitle="Menos texto. Más acción."
      ctaTo="/empezar-proyecto"
      ctaLabel="Agenda tu diagnóstico"
    >
      <section className="layout-agenda grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="columna-info">
          <p className="logo-pequeno text-sm uppercase tracking-[0.3em] text-white/50">NUESTRA MISIÓN</p>
          <h2 className="titulo-limpio">Transformamos procesos manuales en flujos de trabajo autónomos.</h2>

          <div className="grid-beneficios-limpio">
            <div className="item-beneficio">
              <span className="check-dorado text-xl">✦</span>
              <div>
                <strong>Agentes de IA 24/7</strong>
                <span className="tag-sub">Sistemas inteligentes que responden, califican leads y agendan citas sin intervención humana.</span>
              </div>
            </div>

            <div className="item-beneficio">
              <span className="check-dorado text-xl">✦</span>
              <div>
                <strong>Web de Alta Conversión</strong>
                <span className="tag-sub">Arquitecturas web diseñadas para guiar al visitante, eliminando fricciones y optimizando la carga.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="columna-casos">
          <h3 className="titulo-casos">Nuestra Hoja de Ruta</h3>

          <div className="tarjeta-caso-limpia">
            <span className="categoria-caso">01. DIAGNÓSTICO</span>
            <h4>Auditoría de Ineficiencias</h4>
            <p className="texto-paso-corto">Identificamos dónde pierdes tiempo y dinero.</p>
          </div>

          <div className="tarjeta-caso-limpia">
            <span className="categoria-caso">02. SOLUCIÓN</span>
            <h4>Arquitectura de Automatización</h4>
            <p className="texto-paso-corto">Conectamos tus herramientas con agentes de IA.</p>
          </div>

          <div className="tarjeta-caso-limpia">
            <span className="categoria-caso">03. RESULTADO</span>
            <h4>Implementación y Entrega</h4>
            <p className="texto-paso-corto">Lanzamos un sistema listo en tiempo récord.</p>
          </div>

          <Link to="/empezar-proyecto" className="btn-agenda-corto">Solicita tu Auditoría Estratégica →</Link>
        </div>

        <style>{`
          .titulo-limpio { font-size: 32px; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 24px; font-weight: 800; color: white; }
          .grid-beneficios-limpio { display: grid; grid-template-columns: 1fr; gap: 24px; }
          .columna-info .item-beneficio { background: rgba(255,255,255,0.01); border: 1px solid rgba(191,160,84,0.15); padding: 24px; border-radius: 16px; display:flex; align-items:flex-start; gap:18px; }
          .columna-info .item-beneficio strong { font-size: 18px; color: #fff; display:block; margin-bottom:6px; }
          .tag-sub { display:block; font-size:13px; color: rgba(255,255,255,0.5); line-height:1.5; }
          .columna-casos { padding: 8px 0 0 0; display:flex; flex-direction:column; gap:16px; }
          .titulo-casos { font-size:12px; letter-spacing:3px; color: rgba(191,160,84,0.8); text-transform:uppercase; margin-bottom:6px; }
          .tarjeta-caso-limpia { background: rgba(255,255,255,0.01); border-left: 3px solid #bfa054; padding: 14px 16px; border-radius: 0 12px 12px 0; }
          .categoria-caso { font-size:10px; font-weight:700; color: rgba(255,255,255,0.4); letter-spacing:1px; display:block; margin-bottom:4px; }
          .tarjeta-caso-limpia h4 { margin:0 0 4px 0; font-size:16px; color:#fff; }
          .texto-paso-corto { margin:0; font-size:13px; color: rgba(255,255,255,0.5); }
          .btn-agenda-corto { background:#bfa054; color:#050a12; display:inline-block; text-align:center; padding:12px 18px; border-radius:30px; font-size:14px; font-weight:700; text-decoration:none; margin-top:10px; box-shadow: 0 10px 30px rgba(191,160,84,0.15); transition:all 0.25s; }
          .btn-agenda-corto:hover { background:#dfbc68; transform: translateY(-2px); box-shadow: 0 15px 35px rgba(191,160,84,0.25); }
          @media (min-width: 1024px) { .layout-agenda { align-items: start; } }
        `}</style>
      </section>
    </PageShell>
  );
}
