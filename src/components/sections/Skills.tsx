"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Languages, frameworks, and tools I reach for."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta-600)] mb-4">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 border border-[var(--color-border)] text-sm text-[var(--color-ink-soft)] hover:border-[var(--color-terracotta-400)] hover:text-[var(--color-terracotta-600)] transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
