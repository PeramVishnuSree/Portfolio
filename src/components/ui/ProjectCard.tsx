import fs from "fs";
import path from "path";
import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  // Only render the image if the file is actually present, so missing
  // screenshots fall back to the placeholder instead of a broken image.
  const hasImage =
    !!project.image &&
    fs.existsSync(path.join(process.cwd(), "public", project.image));

  return (
    <article className="flex flex-col">
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
        {hasImage ? (
          <Image
            src={project.image!}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted-soft)]">
              Preview
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-[var(--color-ink)]">
          {project.title}
        </h3>
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide text-[var(--color-accent)]">
          {project.category}
        </span>
      </div>

      <p className="mt-2 text-[var(--color-muted)] leading-relaxed">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-[var(--color-border)] px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.repo || project.live) && (
        <div className="mt-5 flex gap-6 font-mono text-xs uppercase tracking-wide">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="border-b border-transparent text-[var(--color-ink-soft)] transition-colors hover:border-current hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="border-b border-transparent text-[var(--color-ink-soft)] transition-colors hover:border-current hover:text-[var(--color-accent)]"
            >
              Live
            </a>
          )}
        </div>
      )}
    </article>
  );
}
