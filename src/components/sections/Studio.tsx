import { ArrowUpRight, Instagram } from "lucide-react";
import { artworks, links, studioIntro, type Artwork } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const shapeClass: Record<NonNullable<Artwork["shape"]>, string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

// Soft "unpainted canvas" washes for pieces that don't have an image yet.
const washes = [
  "radial-gradient(circle at 30% 25%, var(--color-glow-pink), transparent 60%), radial-gradient(circle at 75% 80%, var(--color-glow-lavender), transparent 55%)",
  "radial-gradient(circle at 70% 30%, var(--color-glow-lavender), transparent 60%), radial-gradient(circle at 20% 85%, rgba(155,75,87,0.12), transparent 55%)",
  "radial-gradient(circle at 50% 40%, rgba(31,42,86,0.08), transparent 60%), radial-gradient(circle at 80% 90%, var(--color-glow-pink), transparent 55%)",
];

function ArtworkTile({ art, index }: { art: Artwork; index: number }) {
  const frame = (
    <figure className="group">
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-card ${shapeClass[art.shape ?? "square"]} transition-all duration-700 group-hover:border-accent/30 group-hover:shadow-[0_24px_60px_-30px_rgba(31,42,86,0.35)]`}
      >
        {art.image ? (
          <img
            src={art.image}
            alt={`${art.title}${art.medium ? `, ${art.medium}` : ""} by Lorna Lin`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ backgroundImage: washes[index % washes.length] }}>
            <span className="font-serif text-5xl font-light text-foreground/15 italic">{art.title.replace("Piece ", "")}</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
        <span className="font-serif text-lg text-foreground transition-colors duration-500 group-hover:text-accent">
          {art.title}
        </span>
        <span className="text-[11px] tracking-[0.1em] text-muted">
          {[art.medium, art.year].filter(Boolean).join(" · ")}
        </span>
      </figcaption>
    </figure>
  );

  return art.href ? (
    <a href={art.href} target="_blank" rel="noopener noreferrer" className="block">
      {frame}
    </a>
  ) : (
    frame
  );
}

/** V · Studio — artwork from Poiesis Studio. Edit `artworks` in src/content/site.ts. */
export default function Studio() {
  return (
    <Section id="studio" className="border-y border-border/70 bg-white/20">
      <SectionHeader eyebrow={studioIntro.eyebrow} title={studioIntro.title} body={studioIntro.body} />

      {/* Gallery wall: a loose masonry of pieces */}
      <div className="columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-6 md:[&>*]:mb-8">
        {artworks.map((art, i) => (
          <Reveal key={`${art.title}-${i}`} delay={(i % 3) * 100} className="break-inside-avoid">
            <ArtworkTile art={art} index={i} />
          </Reveal>
        ))}
      </div>

      {links.instagram && (
        <Reveal>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card/70 p-7 transition-all duration-500 hover:border-accent/30 hover:bg-card sm:flex-row sm:items-center md:p-9"
          >
            <span className="flex items-center gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
                <Instagram size={18} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-muted">See the full studio</span>
                <span className="mt-1 block font-serif text-2xl text-foreground transition-colors duration-500 group-hover:text-accent md:text-3xl">
                  {studioIntro.handle}
                </span>
              </span>
            </span>
            <span className="flex items-center gap-2 text-[13px] tracking-[0.08em] text-foreground transition-colors group-hover:text-accent">
              Visit on Instagram
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      )}
    </Section>
  );
}
