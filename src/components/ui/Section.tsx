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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-2">
            {/* Sticks in the left margin while scrolling through the section,
                so the current section's title stays visible. */}
            <div className="flex items-baseline gap-3 md:sticky md:top-24 md:block">
              <span className="font-mono text-lg font-semibold text-[var(--color-accent)]">
                {number}
              </span>
              {label && (
                <p className="font-mono text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-accent)] md:mt-2">
                  {label}
                </p>
              )}
            </div>
          </div>
          <div className="md:col-span-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
