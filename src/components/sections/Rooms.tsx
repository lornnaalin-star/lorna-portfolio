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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, i) => (
          // Offset the middle column slightly for an editorial, non-grid feel.
          <Reveal key={room.name} delay={(i % 3) * 110} className={i % 3 === 1 ? "lg:translate-y-10" : ""}>
            <RoomCard room={room} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
