import { skillGroups, certificates } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="mx-auto grid max-w-content gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Skills
          </h2>
          <div className="mt-10 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-medium text-ink">
            Certificates
          </h3>
          <ul className="mt-6 space-y-5">
            {certificates.map((c) => (
              <li key={c.name} className="border-l-2 border-line pl-4">
                <p className="text-ink">{c.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer} · {c.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
