"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { socialLinks } from "@/lib/data";

const links: Array<{
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;
}> = [
  { label: "Email", href: `mailto:${socialLinks.email}`, Icon: Mail },
  { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedInIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-[var(--color-terracotta-600)] mb-6"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-ink)]"
        >
          Let&apos;s build something{" "}
          <span className="italic text-[var(--color-terracotta-600)]">
            thoughtful
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[var(--color-muted)] leading-relaxed"
        >
          Always happy to talk about interesting problems, collaborations, or
          projects that sit between ML and people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] hover:border-[var(--color-terracotta-400)] text-[var(--color-ink)] hover:text-[var(--color-terracotta-600)] transition-colors text-sm"
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{label}</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
