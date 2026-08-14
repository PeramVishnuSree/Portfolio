"use client";

import Link from "next/link";
import { useState } from "react";
import { personal } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm uppercase tracking-wide text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
        >
          {personal.name} / {personal.brandTag}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink)] px-1"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-border)] bg-[var(--color-background)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
