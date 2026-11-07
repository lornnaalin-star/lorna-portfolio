
import { useState } from "react";
import { fields, fieldsIntro } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

/**
 * III · Fields — conceptual, typographic. The field names flow like an
 * index of ideas; the selected one reveals the question it holds.
 * Edit `fields` in src/content/site.ts.
 */
export default function Fields() {
  const [active, setActive] = useState(0);
  const current = fields[active];

  return (
    <Section id="fields" className="border-y border-border/70 bg-white/20">
      <SectionHeader {...fieldsIntro} />

      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        {/* Index of fields */}
        <Reveal className="md:col-span-7">
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2" role="tablist" aria-label="Fields">
            {fields.map((f, i) => {
              const isActive = i === active;
              return (
                <li key={f.name} className="flex items-baseline gap-5">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`font-serif text-[2.2rem] leading-tight font-light transition-all duration-500 md:text-5xl ${
                      isActive ? "text-accent italic" : "text-foreground/35 hover:text-foreground/70"
                    }`}
                  >
                    {f.name}
                  </button>
                  {i < fields.length - 1 && (
                    <span aria-hidden className="font-serif text-2xl text-border">
                      ·
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* The question */}
        <Reveal delay={150} className="md:col-span-5">
          <div className="relative rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm md:sticky md:top-32 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
              Field {String(active + 1).padStart(2, "0")} / {String(fields.length).padStart(2, "0")}
            </p>
            {/* key forces a soft re-animation when the field changes */}
            <div key={current.name} className="animate-[fadeIn_0.6s_ease-out]">
              <h3 className="mt-6 font-serif text-3xl text-foreground">{current.name}</h3>
              <p className="mt-5 font-serif text-2xl leading-snug font-light text-foreground/80 italic">
                {current.question}
              </p>
            </div>
            <div className="mt-8 flex gap-1.5" aria-hidden>
              {fields.map((f, i) => (
                <span
                  key={f.name}
                  className={`h-px flex-1 transition-colors duration-500 ${i === active ? "bg-accent" : "bg-border"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }`}</style>
    </Section>
  );
}
