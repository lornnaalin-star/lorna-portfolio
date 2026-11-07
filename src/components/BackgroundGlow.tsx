/**
 * Fixed, very soft blush + lavender light behind the whole site.
 * Tweak opacity / size / position here if you want more or less glow.
 */
export default function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* blush — upper right */}
      <div className="animate-drift absolute -top-[18%] right-[-12%] h-[62vmax] w-[62vmax] rounded-full bg-[radial-gradient(circle_at_center,var(--color-glow-pink),transparent_65%)] blur-2xl" />
      {/* lavender — left */}
      <div className="animate-drift-slow absolute top-[28%] -left-[22%] h-[58vmax] w-[58vmax] rounded-full bg-[radial-gradient(circle_at_center,var(--color-glow-lavender),transparent_65%)] blur-2xl" />
      {/* faint blush — bottom */}
      <div className="absolute -bottom-[30%] left-[30%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle_at_center,var(--color-glow-pink),transparent_70%)] opacity-60 blur-3xl" />
      {/* hairline paper grain via a tiny SVG noise, barely visible */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
