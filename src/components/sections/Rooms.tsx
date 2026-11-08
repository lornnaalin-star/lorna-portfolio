import { rooms, roomsIntro } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/ui/Reveal";

/** II · Rooms — the spaces Lorna moves through. Edit `rooms` in src/content/site.ts. */
export default function Rooms() {
  return (
    <Section id="rooms">
      <SectionHeader {...roomsIntro} />
      {/* Phones: a sideways swipe through the rooms. Tablet and up: a grid. */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
        {rooms.map((room, i) => (
          // Offset the middle column slightly for an editorial, non-grid feel.
          <Reveal
            key={room.name}
            delay={(i % 3) * 110}
            className={`w-[80%] shrink-0 snap-center sm:w-auto ${i % 3 === 1 ? "lg:translate-y-10" : ""}`}
          >
            <RoomCard room={room} index={i} />
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-muted/80 sm:hidden">
        Swipe to wander · {rooms.length} rooms
      </p>
    </Section>
  );
}
