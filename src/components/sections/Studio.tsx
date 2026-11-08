import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Instagram, X } from "lucide-react";
import { artworks, links, studioIntro, type Artwork } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useInstagramFeed } from "@/lib/useInstagramFeed";

const toRoman = (n: number) =>
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"][n] ?? String(n + 1);

// Soft "unpainted canvas" washes for pieces that don't have an image yet.
const washes = [
  "radial-gradient(circle at 30% 25%, var(--color-glow-pink), transparent 60%), radial-gradient(circle at 75% 80%, var(--color-glow-lavender), transparent 55%)",
  "radial-gradient(circle at 70% 30%, var(--color-glow-lavender), transparent 60%), radial-gradient(circle at 20% 85%, rgba(155,75,87,0.12), transparent 55%)",
];

/** One framed piece: a portrait-shaped mat with the artwork centered, and a gallery label. */
function FramedPiece({ art, index, onOpen }: { art: Artwork; index: number; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left" aria-label={`Open ${art.title}`}>
      {/* the mat */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-white/70 p-5 shadow-[0_18px_40px_-30px_rgba(31,42,86,0.45)] transition-all duration-700 group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:shadow-[0_30px_60px_-30px_rgba(31,42,86,0.5)] md:p-7">
        {art.image ? (
          <img
            src={art.image}
            alt={`${art.title}${art.medium ? `, ${art.medium.toLowerCase()}` : ""}, by Lorna Lin`}
            loading="lazy"
            className="h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(31,42,86,0.18)] transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center rounded-md"
            style={{ backgroundImage: washes[index % washes.length] }}
          >
            <span className="font-serif text-5xl font-light text-foreground/15 italic">{toRoman(index)}</span>
          </div>
        )}
        <span className="absolute right-4 bottom-3 text-[10px] tracking-[0.25em] text-muted/0 uppercase transition-colors duration-500 group-hover:text-muted">
          Read the story
        </span>
      </div>

      {/* the gallery label */}
      <div className="mt-4 flex items-baseline gap-3 px-1">
        <span className="font-serif text-sm text-accent/80 italic">{toRoman(index)}.</span>
        <span className="min-w-0">
          <span className="block font-serif text-xl leading-tight text-foreground transition-colors duration-500 group-hover:text-accent">
            {art.title}
          </span>
          {(art.medium || art.year) && (
            <span className="mt-1 block text-[11px] tracking-[0.12em] text-muted">
              {[art.medium, art.year].filter(Boolean).join(" · ")}
            </span>
          )}
        </span>
      </div>
    </button>
  );
}

/** Full-size view of a piece with its story. Esc closes; ← → move between pieces. */
function Lightbox({
  pieces,
  index,
  onClose,
  onMove,
}: {
  pieces: Artwork[];
  index: number;
  onClose: () => void;
  onMove: (delta: number) => void;
}) {
  const art = pieces[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onMove]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={art.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-md md:p-10"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-full w-full max-w-6xl overflow-y-auto rounded-2xl bg-background shadow-2xl md:grid-cols-12 md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* artwork */}
        <div className="flex items-center justify-center bg-white/60 p-6 md:col-span-7 md:max-h-[86vh] md:p-10">
          {art.image && (
            <img
              key={art.image}
              src={art.image}
              alt={`${art.title}, by Lorna Lin`}
              className="max-h-[55vh] w-auto max-w-full animate-[fadeIn_0.5s_ease-out] object-contain shadow-[0_20px_50px_-25px_rgba(31,42,86,0.6)] md:max-h-[76vh]"
            />
          )}
        </div>

        {/* story */}
        <div className="flex flex-col justify-between gap-10 p-8 md:col-span-5 md:p-12">
          <div key={art.title} className="animate-[fadeIn_0.5s_ease-out]">
            <p className="text-[10px] tracking-[0.3em] text-muted uppercase">
              Piece {toRoman(index)} of {toRoman(pieces.length - 1)}
            </p>
            <h3 className="mt-5 font-serif text-4xl leading-[1.05] font-light text-foreground md:text-5xl">{art.title}</h3>
            {(art.medium || art.year) && (
              <p className="mt-3 text-[12px] tracking-[0.14em] text-accent uppercase">
                {[art.medium, art.year].filter(Boolean).join(" · ")}
              </p>
            )}
            <div className="my-8 h-px w-12 bg-accent/40" />
            <p className="text-[11px] tracking-[0.28em] text-muted uppercase">The story</p>
            <p className="mt-3 font-serif text-xl leading-relaxed text-foreground/85 italic md:text-[1.35rem]">
              {art.story ?? "The story behind this piece is coming soon."}
            </p>
            {art.href && (
              <a
                href={art.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-foreground hover:text-accent"
              >
                View on Instagram <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-6">
            <button
              type="button"
              onClick={() => onMove(-1)}
              className="flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={15} strokeWidth={1.5} /> Previous
            </button>
            <button
              type="button"
              onClick={() => onMove(1)}
              className="flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted transition-colors hover:text-accent"
            >
              Next <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded-full border border-border bg-background/90 p-2 text-foreground transition-colors hover:text-accent"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }`}</style>
    </div>
  );
}

/**
 * V · Studio — artwork from Poiesis Studio, hung like a gallery wall.
 * Edit `artworks` in src/content/site.ts. If none of them has an image and
 * links.instagramFeed is set, the latest Instagram posts are shown instead.
 */
export default function Studio() {
  const feed = useInstagramFeed(links.instagramFeed);
  const hasCurated = artworks.some((a) => a.image);
  const pieces = hasCurated ? artworks : feed ?? artworks;

  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + pieces.length) % pieces.length)),
    [pieces.length]
  );

  return (
    <Section id="studio" className="border-y border-border/70 bg-white/20">
      <SectionHeader eyebrow={studioIntro.eyebrow} title={studioIntro.title} body={studioIntro.body} />

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
        {pieces.map((art, i) => (
          <Reveal key={`${art.title}-${i}`} delay={(i % 3) * 100}>
            <FramedPiece art={art} index={i} onOpen={() => setOpen(i)} />
          </Reveal>
        ))}
      </div>

      {links.instagram && (
        <Reveal>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card/70 p-7 transition-all duration-500 hover:border-accent/30 hover:bg-card sm:flex-row sm:items-center md:p-9"
          >
            <span className="flex items-center gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
                <Instagram size={18} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[10px] tracking-[0.28em] text-muted uppercase">See the full studio</span>
                <span className="mt-1 block font-serif text-2xl text-foreground transition-colors duration-500 group-hover:text-accent md:text-3xl">
                  {studioIntro.handle}
                </span>
              </span>
            </span>
            <span className="flex items-center gap-2 text-[13px] tracking-[0.08em] text-foreground transition-colors group-hover:text-accent">
              Visit on Instagram
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </Reveal>
      )}

      {open !== null && <Lightbox pieces={pieces} index={open} onClose={close} onMove={move} />}
    </Section>
  );
}
