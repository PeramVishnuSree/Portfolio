// Fixed, behind-everything background: two organic "ink blots" (a circle
// displaced by turbulence for a soaked-ink edge) plus a faint paper grain.
// Pure SVG/CSS, static, pointer-events none. Colors + opacities are theme
// vars, so it adapts to light/dark (see globals.css).
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function BackgroundArt() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="ink-a" x="-60%" y="-60%" width="220%" height="220%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009"
              numOctaves="2"
              seed="7"
              result="n"
            />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="120" />
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          <filter id="ink-b" x="-60%" y="-60%" width="220%" height="220%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.013"
              numOctaves="2"
              seed="23"
              result="n"
            />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="95" />
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>
        <g style={{ fill: "var(--color-accent)" }}>
          <circle
            cx="1310"
            cy="130"
            r="250"
            filter="url(#ink-a)"
            style={{ opacity: "var(--blot-a-opacity)" }}
          />
          <circle
            cx="140"
            cy="800"
            r="200"
            filter="url(#ink-b)"
            style={{ opacity: "var(--blot-b-opacity)" }}
          />
        </g>
      </svg>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: GRAIN,
          backgroundSize: "220px 220px",
          mixBlendMode: "overlay",
          opacity: "var(--grain-opacity)",
        }}
      />
    </div>
  );
}
