import { socialLinks } from "@/lib/data";
import Section from "@/components/ui/Section";

const links = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" number="04" label="Contact">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
            Get in touch.
          </h2>
          <p className="mt-4 max-w-md text-[var(--color-muted)] leading-relaxed">
            Open to AI engineering roles and collaboration. Reach out about
            technical work or interesting problems.
          </p>
        </div>

        <div className="md:pt-1">
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-lg md:text-xl font-medium text-[var(--color-ink)] border-b border-[var(--color-border)] pb-1 transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
          >
            {socialLinks.email}
          </a>

          <div className="mt-8 flex gap-6 font-mono text-xs uppercase tracking-wide">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-transparent text-[var(--color-ink-soft)] transition-colors hover:border-current hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
