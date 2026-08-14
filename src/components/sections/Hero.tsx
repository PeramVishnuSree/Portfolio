import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section id="intro" number="01" border={false}>
      <div className="grid min-h-[55vh] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[var(--color-ink-soft)]">Hi, I’m </span>
            <span className="text-[var(--color-accent)]">Vishnu</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--color-muted)]">
            I’m an{" "}
            <strong className="font-semibold text-[var(--color-accent)]">
              AI engineer
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-[var(--color-accent)]">
              M.S. student at SJSU
            </strong>
            , focused on building{" "}
            <strong className="font-semibold text-[var(--color-accent)]">
              LLM-based agents
            </strong>{" "}
            and the systems around them. I also enjoy working across the{" "}
            <strong className="font-semibold text-[var(--color-accent)]">
              ML pipeline
            </strong>{" "}
            from cleaning and preparing data to training, evaluating, and
            deploying models. Always happy to talk shop.{" "}
            <a
              href="#contact"
              className="font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/40 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]"
            >
              Let’s talk
            </a>
            .
          </p>
        </div>

        {/* Right column reserved for the AI assistant (integration coming later) */}
        <div aria-hidden className="hidden lg:block" />
      </div>
    </Section>
  );
}
