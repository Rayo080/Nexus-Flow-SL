import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Flow — Cómo ayudamos a crecer tu negocio" },
      {
        name: "description",
        content:
          "Eliminamos el trabajo manual con automatizaciones y webs premium. Menos fricción, más clientes.",
      },
      { property: "og:title", content: "Nexus Flow" },
      {
        property: "og:description",
        content: "Automatizaciones y Web Premier para equipos que quieren crecer.",
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
