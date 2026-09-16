import { education, awards, positions } from "../lib/data";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Journey
        </h2>

        <div className="mt-12 grid gap-16 md:grid-cols-[0.55fr_0.45fr]">
          {/* Education — a real chronological sequence, so numbering earns its place */}
          <ol className="space-y-0">
            {education.map((e, i) => (
              <li
                key={e.degree}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 last:border-b-0"
              >
                <span className="num-tabular pt-0.5 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-ink">{e.degree}</p>
                    <p className="text-sm text-muted">{e.institute}</p>
                  </div>
                  <div className="flex gap-4 text-sm text-muted sm:flex-col sm:items-end sm:gap-0">
                    <span className="num-tabular">{e.score}</span>
                    <span className="num-tabular">{e.year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-12">
            <div>
              <h3 className="font-display text-lg font-medium text-ink">
                Awards
              </h3>
              <ul className="mt-5 space-y-4">
                {awards.map((a) => (
                  <li key={a.name}>
                    <p className="text-sm text-ink">{a.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{a.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-ink">
                Leadership
              </h3>
              <ul className="mt-5 space-y-4">
                {positions.map((p) => (
                  <li key={p.role}>
                    <p className="text-sm text-ink">
                      {p.role}{" "}
                      <span className="text-muted">· {p.period}</span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {p.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
