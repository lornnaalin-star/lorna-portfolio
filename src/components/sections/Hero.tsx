import { hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** I · Daydream — the homepage hero. All copy lives in src/content/site.ts → `hero`. */
export default function Hero() {
  return (
    <section id="daydream" className="relative">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-24 md:grid-cols-12 md:px-10 md:pt-28 md:pb-36">
        <div className="md:col-span-9">
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
            <h1 className="font-serif text-[3.1rem] leading-[0.98] font-light tracking-[-0.015em] text-foreground sm:text-7xl md:text-[5.6rem] lg:text-[6.4rem]">
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

          {/* Quote */}
          <Reveal delay={480}>
            <figure className="mt-20 max-w-lg border-l border-accent/40 pl-6">
              <blockquote className="font-serif text-2xl leading-snug font-light text-foreground/85 italic md:text-[1.7rem]">
                “{hero.quote.text}”
              </blockquote>
              <figcaption className="mt-4 text-[12px] tracking-[0.12em] text-muted">
                — {hero.quote.attribution}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Marginalia — desktop only, like notes in a book margin */}
        <aside className="hidden md:col-span-3 md:block">
          <Reveal delay={600} className="sticky top-32 mt-48 space-y-8 border-l border-border pl-6">
            {hero.marginalia.map((m) => (
              <div key={m.label}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted/80">{m.label}</p>
                <p className="mt-1.5 font-serif text-lg leading-snug text-foreground/85 italic">{m.value}</p>
              </div>
            ))}
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
