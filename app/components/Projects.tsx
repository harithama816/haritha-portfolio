import { projects, additionalProjects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Projects
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Business process, decision support and analytics work — built as real problems, not slideware.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col justify-between rounded-2xl border border-line p-7 transition-colors hover:border-accent"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {p.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {p.year}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-accent">
                  {p.metric}
                </span>
              </div>
            </article>
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-16 border-t border-line pt-10">
            <h3 className="font-display text-lg font-medium text-ink">
              Additional Projects
            </h3>
            <div className="mt-6 space-y-5">
              {additionalProjects.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col gap-2 border-b border-line pb-5 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                >
                  <div className="sm:max-w-md">
                    <div className="flex items-center gap-3">
                      <h4 className="text-ink">{p.title}</h4>
                      <span className="font-mono text-xs text-muted">
                        {p.year}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {p.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
