import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/ver-demo")({
  head: () => ({
    meta: [
      { title: "NEXUS" },
      {
        name: "description",
        content: "Página en construcción.",
      },
    ],
  }),
  component: VerDemoPage,
});

function VerDemoPage() {
  return (
    <PageShell title="NEXUS" subtitle="">
      <div className="flex items-center justify-center min-h-[40vh]">
        <h2 className="text-6xl font-bold text-white">En construcccion...</h2>
      </div>
    </PageShell>
  );
}
