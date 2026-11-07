import type { Room } from "@/content/site";

const toRoman = (n: number) => ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"][n] ?? String(n + 1);

/**
 * A "room" is drawn as a doorway: an arched top edge on a soft card.
 * On hover the door glows faintly and the reflection comes forward.
 */
export default function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-t-[140px] rounded-b-2xl border border-border bg-card/70 px-8 pt-14 pb-9 backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent/30 hover:bg-card hover:shadow-[0_24px_60px_-30px_rgba(31,42,86,0.25)]">
      {/* light spilling through the doorway */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,var(--color-glow-pink),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      <p className="relative text-center font-serif text-sm tracking-[0.3em] text-accent/80 italic">
        room {toRoman(index)}
      </p>
      <h3 className="relative mt-4 text-center font-serif text-4xl font-light text-foreground">{room.name}</h3>
      <p className="relative mt-2 text-center text-[12px] uppercase tracking-[0.2em] text-muted">
        {room.tagline}
      </p>

      <div className="relative mx-auto my-7 h-px w-10 bg-border transition-all duration-700 group-hover:w-20 group-hover:bg-accent/50" />

      <p className="relative text-center text-[15px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-foreground/80">
        {room.reflection}
      </p>
    </article>
  );
}
