import { socialLinks } from "@/lib/data";
import Section from "@/components/ui/Section";
import { GithubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const links = [
  { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedInIcon },
];

export default function Contact() {
  return (
    <Section id="contact" number="05" label="Contact">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
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

          <div className="mt-8 flex gap-6 font-mono text-sm uppercase tracking-wide">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Icon size={18} />
                <span className="border-b border-transparent group-hover:border-current">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
