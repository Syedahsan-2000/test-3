import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Quadri — Quant Developer" },
      { name: "description", content: "Quant developer building low-latency trading systems, research infrastructure and alpha pipelines." },
      { property: "og:title", content: "Syed Quadri — Quant Developer" },
      { property: "og:description", content: "Low-latency systems, research infra, and alpha pipelines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ticks = [
  ["LATENCY p99", "4.2µs", true], ["SHARPE", "2.31", true], ["DRAWDOWN", "-3.8%", false],
  ["FILL RATE", "97.4%", true], ["MSG/s", "1.2M", true], ["SLIPPAGE", "-0.6bp", false],
  ["UPTIME", "99.99%", true], ["BACKTESTS", "14,302", true],
] as const;

const projects = [
  { tag: "C++20 · Lock-free", title: "Order Book Engine", desc: "Cache-aware limit order book with lock-free SPSC queues. Sub-5µs tick-to-trade on commodity hardware.", metric: "4.2µs p99" },
  { tag: "Python · Polars · Ray", title: "Distributed Backtester", desc: "Event-driven backtesting framework with realistic fills, queue position modeling and parallel parameter sweeps.", metric: "40× faster" },
  { tag: "Rust · Kafka", title: "Market Data Gateway", desc: "Normalizes ITCH/FIX feeds into a unified schema, with replay and gap recovery.", metric: "1.2M msg/s" },
  { tag: "PyTorch · Stats", title: "Alpha Research Toolkit", desc: "Feature store, cross-sectional factor analysis, and purged k-fold CV for signal validation.", metric: "IC 0.07" },
];

const stack = {
  Languages: ["C++20", "Python", "Rust", "SQL", "KDB+/q"],
  Systems: ["Linux tuning", "DPDK", "Lock-free DS", "SIMD", "Kafka"],
  Quant: ["Time series", "Stochastic calc", "Portfolio opt.", "Market microstructure"],
  Data: ["Polars", "NumPy", "Arrow", "ClickHouse", "Ray"],
};

const experience = [
  { when: "2024 — Now", role: "Quant Developer", org: "Company Name", note: "Built execution infra powering systematic futures strategies." },
  { when: "2022 — 2024", role: "Software Engineer, Trading", org: "Company Name", note: "Owned market-data pipeline and research tooling." },
  { when: "2018 — 2022", role: "B.S. Computer Science & Math", org: "University Name", note: "Focus on probability, numerical methods, systems." },
];

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary">// {label}</p>
      {children}
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <nav className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-sm">
          <span className="text-primary">sq@quant:~$</span>
          <div className="flex gap-6 text-muted-foreground">
            {["work", "stack", "experience", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="transition-colors hover:text-primary">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pb-16 pt-28">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">●</span> available for quant dev roles
        </p>
        <h1 className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          Syed Quadri<span className="text-primary glow">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
          Quant developer turning <span className="text-foreground">microseconds</span> into{" "}
          <span className="text-accent">edge</span>. I build low-latency trading systems and the research infra behind them.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
          <a href="#work" className="rounded-sm bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90">./view_work</a>
          <a href="#contact" className="rounded-sm border px-5 py-3 transition hover:border-primary hover:text-primary">contact --now</a>
        </div>
        <p className="mt-12 font-mono text-sm text-muted-foreground">
          &gt; latency is a feature<span className="animate-blink text-primary">_</span>
        </p>
      </header>

      <div className="overflow-hidden border-y bg-card py-3 font-mono text-sm">
        <div className="flex w-max animate-ticker gap-10">
          {[...ticks, ...ticks].map(([k, v, up], i) => (
            <span key={i} className="whitespace-nowrap">
              <span className="text-muted-foreground">{k}</span>{" "}
              <span className={up ? "text-up" : "text-down"}>{up ? "▲" : "▼"} {v}</span>
            </span>
          ))}
        </div>
      </div>

      <Section id="work" label="selected work">
        <div className="grid gap-px overflow-hidden rounded-sm border bg-border md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex items-start justify-between">
                <p className="font-mono text-xs text-muted-foreground">{p.tag}</p>
                <span className="font-mono text-xs text-primary">{p.metric}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold transition-colors group-hover:text-primary">{p.title} →</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="stack" label="stack">
        <div className="grid gap-8 md:grid-cols-4">
          {Object.entries(stack).map(([k, items]) => (
            <div key={k}>
              <h4 className="mb-4 font-mono text-sm text-accent">{k}</h4>
              <ul className="space-y-2">
                {items.map((i) => <li key={i} className="text-muted-foreground"><span className="text-primary">›</span> {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" label="experience">
        <div className="divide-y border-y">
          {experience.map((e) => (
            <div key={e.role} className="grid gap-2 py-6 md:grid-cols-[180px_1fr_1.5fr]">
              <span className="font-mono text-sm text-muted-foreground">{e.when}</span>
              <div><p className="font-semibold">{e.role}</p><p className="text-sm text-primary">{e.org}</p></div>
              <p className="text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" label="contact">
        <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
          Let's find some <span className="text-primary glow">alpha</span>.
        </h2>
        <div className="mt-10 flex flex-wrap gap-6 font-mono">
          {[["email", "mailto:you@example.com"], ["github", "https://github.com"], ["linkedin", "https://linkedin.com"], ["resume.pdf", "#"]].map(([l, h]) => (
            <a key={l} href={h} className="border-b border-primary pb-1 transition hover:text-primary">{l} ↗</a>
          ))}
        </div>
      </Section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 Syed Quadri · compiled with -O3
      </footer>
    </main>
  );
}
