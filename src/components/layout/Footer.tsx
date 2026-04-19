import { personal, socialLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-muted)]">
          © {year} {personal.name}. Crafted with care.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
