type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta-600)] mb-4">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
