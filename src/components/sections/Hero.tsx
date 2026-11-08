import { hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** The profile photo, framed as an arched doorway to echo the Rooms cards. */
function Portrait({ className = "" }: { className?: string }) {
  const { portrait } = hero;
  return (
    <figure className={`group relative ${className}`}>
      {/* soft blush halo behind the frame */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-t-full bg-[radial-gradient(ellipse_at_center,var(--color-glow-pink),transparent_70%)] blur-xl"
      />
      <div className="relative">
        {/* thin offset outline, like a second doorframe */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full rounded-b-3xl border border-accent/30 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"
        />
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-3xl border border-border bg-card shadow-[0_30px_70px_-35px_rgba(31,42,86,0.45)]">
          <img
            src={portrait.src}
            alt={portrait.alt}
            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: portrait.focus }}
            loading="eager"
          />
        </div>
      </div>
      <figcaption className="relative mt-6 text-center font-serif text-sm text-muted italic">
        {portrait.caption}
      </figcaption>
    </figure>
  );
}

/** I · Daydream — the homepage hero. All copy lives in src/content/site.ts → `hero`. */
export default function Hero() {
  return (
    <section id="daydream" className="relative">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-24 md:grid-cols-12 md:gap-12 md:px-10 md:pt-24 md:pb-36">
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <Reveal>
            <p className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px] sm:tracking-[0.3em]">
              {hero.eyebrow.map((word, i) => (
                <span key={word} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-accent/70" />}
                  {word}
                </span>
              ))}
            </p>
          </Reveal>

          {/* Headline */}
          <Reveal delay={120}>
            <h1 className="font-serif text-[3.1rem] leading-[0.98] font-light tracking-[-0.015em] text-foreground sm:text-7xl md:text-[4.1rem] lg:text-[5.4rem]">
              {hero.headline.before}{" "}
              <em className="relative font-normal whitespace-nowrap text-accent italic">
                {hero.headline.highlight}
                {/* hand-drawn underline */}
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-accent/35"
                >
                  <path
                    d="M2 8 C 60 3, 120 3, 180 6 S 270 10, 298 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </em>{" "}
              {hero.headline.after}
            </h1>
          </Reveal>

          {/* Intro */}
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{hero.intro}</p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          {/* Photo — phones only (desktop shows it in the right column) */}
          <Reveal delay={420} className="md:hidden">
            <Portrait className="mx-auto mt-16 w-[78%]" />
          </Reveal>

          {/* Quote */}
          <Reveal delay={480}>
            <figure className="mt-16 max-w-lg border-l border-accent/40 pl-6 md:mt-20">
              <blockquote className="font-serif text-2xl leading-snug font-light text-foreground/85 italic md:text-[1.7rem]">
                “{hero.quote.text}”
              </blockquote>
              <figcaption className="mt-4 text-[12px] tracking-[0.12em] text-muted">
                — {hero.quote.attribution}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Right column — photo, then margin notes like a book's marginalia */}
        <aside className="hidden md:col-span-5 md:block">
          <Reveal delay={300} className="mx-auto max-w-[360px] pt-6 lg:pl-6">
            <Portrait />
            <div className="mt-12 space-y-7 border-l border-border pl-6">
              {hero.marginalia.map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted/80">{m.label}</p>
                  <p className="mt-1.5 font-serif text-lg leading-snug text-foreground/85 italic">{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="mx-auto -mt-10 hidden max-w-6xl px-10 pb-6 md:block">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted/70">
          <span className="h-10 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          wander in
        </div>
      </div>
    </section>
  );
}
