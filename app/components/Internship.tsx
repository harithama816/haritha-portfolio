import { internship } from "../lib/data";

export default function Internship() {
  return (
    <section id="internship" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Internship
          </h2>
          <span className="font-mono text-sm text-muted">
            {internship.period}
          </span>
        </div>

        <div className="mt-10 grid gap-10 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="font-mono text-sm text-accent">
              {internship.role} · {internship.company}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
              {internship.summary}
            </p>

            <ul className="mt-6 space-y-3">
              {internship.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1 md:gap-6 md:border-l md:border-line md:pl-10">
            {internship.stats.map((stat) => (
              <div key={stat.label}>
                <p className="num-tabular font-display text-3xl font-medium text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
