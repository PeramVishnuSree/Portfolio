import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" number="02" label="Selected Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
