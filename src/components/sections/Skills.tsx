import Section from "@/components/ui/Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="stack" number="03" label="Stack">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.name}>
            <h3 className="mb-5 text-base font-bold tracking-tight text-[var(--color-ink)]">
              {group.name}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-[var(--color-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
