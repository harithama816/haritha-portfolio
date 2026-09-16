import { about } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto grid max-w-content gap-10 px-6 md:grid-cols-[1fr_1fr] md:gap-16 md:px-10">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            About
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            {about.summary}
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-line pl-4">
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
