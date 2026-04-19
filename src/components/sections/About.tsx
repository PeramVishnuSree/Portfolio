"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A journey through code, curiosity, and craft."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-[var(--color-ink-soft)] leading-relaxed"
          >
            <p className="text-lg">
              I&apos;m a computer science student drawn to problems where
              software meets something messier — language, sound, markets,
              human intent. My work lives at the intersection of machine
              learning and thoughtful interfaces.
            </p>
            <p>
              I learn by building. Every project in this portfolio began as
              a question I didn&apos;t know how to answer, and ended as
              something I could explain. Somewhere in between is the part I
              like most: the quiet, stubborn work of getting a thing to run,
              then getting it to run well.
            </p>
            <p>
              When I&apos;m not shipping code, I&apos;m reading papers,
              writing about what I learn, and slowly acquiring opinions on
              type systems, REPLs, and why so many good ideas hide inside
              boring tools.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 md:pl-10 md:border-l border-[var(--color-border)]"
          >
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta-600)] mb-2">
                  Currently
                </dt>
                <dd className="text-[var(--color-ink)]">
                  Studying computer science · Building a portfolio of ML &
                  systems projects
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta-600)] mb-2">
                  Interests
                </dt>
                <dd className="text-[var(--color-ink)]">
                  LLMs · Applied ML · Developer tools · Quiet UI
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta-600)] mb-2">
                  Reading
                </dt>
                <dd className="text-[var(--color-ink)]">
                  Research papers, essays, and anything that looks like it
                  might change how I think.
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
