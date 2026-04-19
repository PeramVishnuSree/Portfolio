"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/writing" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-background)]/85 backdrop-blur border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--color-ink)] hover:text-[var(--color-terracotta-600)] transition-colors"
        >
          {personal.initials}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/writing"
                ? pathname?.startsWith("/writing")
                : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-[var(--color-terracotta-600)]"
                    : "text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--color-ink)] text-sm tracking-wide"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta-600)]"
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
