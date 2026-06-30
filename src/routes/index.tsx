import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automata Systems — Automatizaciones Inteligentes y Web Premium" },
      {
        name: "description",
        content:
          "Agencia de IA premium. Automatizaciones inteligentes, integraciones con APIs y CRM, y desarrollo de webs de alto rendimiento para empresas.",
      },
      { property: "og:title", content: "Automata Systems" },
      {
        property: "og:description",
        content: "Automatizaciones Inteligentes y Web Premium para Empresas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
    </main>
  );
}
