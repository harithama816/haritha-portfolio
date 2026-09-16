import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Let&rsquo;s talk about your data problem.
            </h2>
            <p className="mt-5 max-w-prose text-muted">
              Open to analyst and business-analytics roles. The fastest way
              to reach me is email — I usually reply within a day.
            </p>
          </div>

          <ul className="space-y-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.label === "LinkedIn" ? "_blank" : undefined}
                  rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-xl border border-line px-5 py-4 transition-colors hover:border-accent"
                >
                  <span className="flex items-center gap-3">
                    <c.icon size={16} className="text-accent" />
                    <span>
                      <span className="block text-xs text-muted">
                        {c.label}
                      </span>
                      <span className="text-sm text-ink">{c.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
