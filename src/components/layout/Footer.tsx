import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 font-mono text-xs uppercase tracking-widest text-[var(--color-muted-soft)]">
        <span>
          © {year} {personal.name}
        </span>
        <span>{personal.location}</span>
      </div>
    </footer>
  );
}
