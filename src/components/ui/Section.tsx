import type { ReactNode } from "react";

type Props = {
  id?: string;
  number: string;
  label?: string;
  border?: boolean;
  children: ReactNode;
};

export default function Section({
  id,
  number,
  label,
  border = true,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={border ? "border-t border-[var(--color-border)]" : ""}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          <div className="md:col-span-1">
            <span className="font-mono text-sm text-[var(--color-accent)]">
              {number}
            </span>
          </div>
          <div className="md:col-span-11">
            {label && (
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] mb-10 md:mb-12">
                {label}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
