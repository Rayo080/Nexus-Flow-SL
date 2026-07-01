import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Nexus Flow" },
      {
        name: "description",
        content: "Contacto para consultas de automatización, web premium y proyectos digitales estratégicos.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <PageShell
      title="Contacto directo con Nexus Flow"
      subtitle="Cuéntanos tu objetivo y te conectamos con un asesor especializado para trazar el camino del proyecto."
    >
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
          <div>
            <h2 className="text-3xl font-semibold text-white">Ponte en contacto</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Llenar este formulario es el primer paso para una propuesta clara y sin compromiso.
            </p>
          </div>
          <div className="grid gap-4">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Nombre completo</span>
              <input type="text" className="w-full rounded-3xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-primary" placeholder="Tu nombre" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Correo electrónico</span>
              <input type="email" className="w-full rounded-3xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-primary" placeholder="hola@tudominio.com" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Empresa y/o cargo</span>
              <input type="text" className="w-full rounded-3xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-primary" placeholder="Agencia, marca, equipo..." />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Describe tu proyecto</span>
              <textarea rows={6} className="w-full rounded-3xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none transition focus:border-primary" placeholder="¿Qué necesitas automatizar o mejorar en tu presencia digital?" />
            </label>
          </div>
          <button className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Enviar consulta
          </button>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
          <h2 className="text-3xl font-semibold text-white">¿Listo para comenzar?</h2>
          <p className="text-base leading-8 text-slate-300">
            Si buscas resultados medibles, trabajamos con equipos que quieren profesionalizar procesos y presencia digital con un producto de alto nivel.
          </p>
          <div className="space-y-4 rounded-3xl bg-background/70 p-6 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Servicios destacados</p>
            <ul className="space-y-3 text-sm leading-7 text-slate-300">
              <li>• Automatización de atención y ventas</li>
              <li>• Web corporativa premium</li>
              <li>• Integraciones avanzadas con CRM y APIs</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
