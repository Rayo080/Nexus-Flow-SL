import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  subtitle: string;
  ctaTo?: string;
  ctaLabel?: string;
  children: ReactNode;
};

export function PageShell({ title, subtitle, ctaTo, ctaLabel, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            aria-label="Regresar"
            className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-100 transition hover:border-[#bfa054]/50 hover:bg-[#bfa054]/10"
          >
            ←
          </button>
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-white/60">
            NEXUS FLOW
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300">{subtitle}</p>
          {ctaTo && ctaLabel ? (
            <Link
              to={ctaTo}
              className="inline-flex w-fit rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-primary/90"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
        <div className="space-y-10">{children}</div>
      </div>
    </main>
  );
}
