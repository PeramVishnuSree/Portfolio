import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects, in various states of becoming."
          description="A rotating set of builds — some polished, some still finding their shape. Each one taught me something I couldn't have learned otherwise."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
