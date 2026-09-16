"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile, heroStats } from "../lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div className="grid-texture mask-fade-bottom pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-content px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm text-accent"
        >
          {profile.batch} · {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Turning business data into decisions, process improvements,
          and practical solutions.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="num-tabular font-display text-3xl font-medium text-ink">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-line p-2 text-muted transition-colors hover:text-ink md:block"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
