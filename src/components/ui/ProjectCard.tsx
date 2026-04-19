"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex h-full flex-col bg-[var(--color-surface)] border border-[var(--color-border)] p-6 md:p-7 transition-all duration-300 hover:border-[var(--color-terracotta-400)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(132,48,11,0.25)]"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 origin-left bg-[var(--color-terracotta-500)] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="text-xs tracking-wider text-[var(--color-muted)]">
          {project.year}
        </span>
        <div className="flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)]"
            >
              <GithubIcon size={16} strokeWidth={1.5} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)]"
            >
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-[var(--color-ink)] tracking-tight mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-wide uppercase px-2 py-1 bg-[var(--color-terracotta-50)] text-[var(--color-terracotta-700)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
