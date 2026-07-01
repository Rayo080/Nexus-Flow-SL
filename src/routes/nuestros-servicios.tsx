import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/nuestros-servicios")({
  head: () => ({
    meta: [
      { title: "Nuestros Servicios | Nexus Flow" },
      {
        name: "description",
        content:
          "Infraestructura digital: agentes de IA y desarrollo web premier para operar y convertir sin depender de horas de diseño.",
      },
    ],
  }),
  component: NuestrosServiciosPage,
});

function NuestrosServiciosPage() {
  return (
    <PageShell
      title="Ingeniería de Automatización y Conversión"
      subtitle="Infraestructura digital para que tu negocio opere y venda con mínimo esfuerzo humano"
      ctaTo="/empezar-proyecto"
      ctaLabel="Agenda tu diagnóstico"
    >
      <div className="contenedor-servicios">

        <header className="cabecera-seccion">
          <span className="etiqueta-pequena">INFRAESTRUCTURA DIGITAL</span>
          <h2>Ingeniería de <span>Automatización y Conversión</span></h2>
          <p>No somos una agencia creativa tradicional; diseñamos sistemas robustos para que tu negocio opere y venda con el mínimo esfuerzo humano posible.</p>
        </header>

        <main className="grid-servicios">

          <article className="bloque-pilar">
            <div className="pilar-cabecera">
              <h3>Ecosistema de Agentes de IA</h3>
              <span className="pilar-numero">01</span>
            </div>

            <div className="lista-subservicios">
              <div className="subservicio-item">
                <h4>Atención al Cliente Inteligente</h4>
                <p>Desplegamos agentes conversacionales autónomos que gestionan dudas, rebaten objeciones y brindan soporte 24/7.</p>
              </div>
              <div className="subservicio-item">
                <h4>Calificación y Agendamiento</h4>
                <p>Filtramos leads según tus criterios y los agendamos directamente en tu calendario corporativo.</p>
              </div>
              <div className="subservicio-item">
                <h4>Integración de Sistemas</h4>
                <p>Conectamos CRM, email y gestores internos para que los datos fluyan sin intervención manual.</p>
              </div>
            </div>

            <Link to="/empezar-proyecto" className="micro-cta">Verificar viabilidad para mi caso →</Link>
          </article>

          <article className="bloque-pilar">
            <div className="pilar-cabecera">
              <h3>Desarrollo Web "Premier"</h3>
              <span className="pilar-numero">02</span>
            </div>

            <div className="lista-subservicios">
              <div className="subservicio-item">
                <h4>Arquitectura de Alta Conversión</h4>
                <p>Diseños donde cada elemento guía al visitante hacia una reserva o venta directa.</p>
              </div>
              <div className="subservicio-item">
                <h4>Rendimiento y Velocidad Extrema</h4>
                <p>Optimizamos peso y rendimiento para garantizar experiencia perfecta en móviles.</p>
              </div>
              <div className="subservicio-item">
                <h4>Identidad Visual Tecnológica</h4>
                <p>Estética minimalista e inmersiva que incrementa el valor percibido desde la primera carga.</p>
              </div>
            </div>

            <Link to="/empezar-proyecto" className="micro-cta">Consultar arquitectura web idónea →</Link>
          </article>

        </main>

        <style>{`
          :root{ --fondo-espacial:#050a12; --dorado-premier:#bfa054; --dorado-glow:rgba(191,160,84,0.3); --borde-cristal:rgba(191,160,84,0.15); --fondo-cristal:rgba(255,255,255,0.01); --texto-puro:#ffffff; --texto-mutado:rgba(255,255,255,0.55); }
          .contenedor-servicios{ max-width:1140px; margin:0 auto; }
          .cabecera-seccion{ text-align:center; margin-bottom:80px; }
          .etiqueta-pequena{ color:var(--dorado-premier); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; display:inline-block; border:1px solid var(--borde-cristal); padding:6px 16px; border-radius:30px; background:rgba(191,160,84,0.02); margin-bottom:20px; }
          .cabecera-seccion h2{ font-size:38px; font-weight:800; letter-spacing:-1px; margin:0 0 15px 0; }
          .cabecera-seccion h2 span{ color:var(--dorado-premier); }
          .cabecera-seccion p{ color:var(--texto-mutado); max-width:650px; margin:0 auto; font-size:16px; }
          .grid-servicios{ display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }
          .bloque-pilar{ background: radial-gradient(circle at top right, rgba(191,160,84,0.03), transparent 70%), var(--fondo-cristal); border:1px solid var(--borde-cristal); border-radius:24px; padding:45px; backdrop-filter:blur(10px); transition:all 0.4s cubic-bezier(0.16,1,0.3,1); }
          .bloque-pilar:hover{ border-color:rgba(191,160,84,0.35); transform:translateY(-4px); box-shadow:0 30px 60px rgba(0,0,0,0.5); }
          .pilar-cabecera{ display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:25px; margin-bottom:35px; }
          .pilar-cabecera h3{ font-size:24px; font-weight:800; margin:0; letter-spacing:-0.5px; }
          .pilar-numero{ font-size:36px; font-weight:900; color:rgba(191,160,84,0.15); font-family:monospace; }
          .lista-subservicios{ display:flex; flex-direction:column; gap:30px; }
          .subservicio-item h4{ font-size:16px; font-weight:700; color:#ffffff; margin:0 0 8px 0; display:flex; align-items:center; gap:12px; }
          .subservicio-item h4::before{ content:"✦"; color:var(--dorado-premier); font-size:14px; text-shadow:0 0 10px var(--dorado-glow); }
          .subservicio-item p{ margin:0; font-size:14px; color:var(--texto-mutado); line-height:1.5; padding-left:20px; }
          .micro-cta{ display:inline-flex; align-items:center; gap:8px; color:var(--dorado-premier); text-decoration:none; font-size:13px; font-weight:700; margin-top:35px; border-bottom:1px dashed rgba(191,160,84,0.4); padding-bottom:2px; transition:all 0.3s; }
          .micro-cta:hover{ color:#fff; border-bottom-color:#fff; }
          @media (max-width:900px){ body{ padding:60px 20px; } .cabecera-seccion h2{ font-size:30px; } .grid-servicios{ grid-template-columns:1fr; gap:30px; } .bloque-pilar{ padding:30px; } }
        `}</style>

      </div>
    </PageShell>
  );
}
 
