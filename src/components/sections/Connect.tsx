import { ArrowUpRight, BookOpen, Github, Linkedin, Mail } from "lucide-react";
import { connectIntro, connectLinks, links } from "@/content/site";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const icons = { mail: Mail, linkedin: Linkedin, github: Github, book: BookOpen } as const;

/**
 * V · Connect — composed like a short letter, with the ways to reach
 * Lorna listed beneath. Edit `connectIntro`, `connectLinks`, `links`.
 */
export default function Connect() {
  return (
    <Section id="connect">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 px-7 py-14 backdrop-blur-sm md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,var(--color-glow-pink),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,var(--color-glow-lavender),transparent_70%)]"
          />

          <div className="relative grid gap-14 md:grid-cols-12">
            {/* Letter */}
            <div className="md:col-span-7">
              <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted">
                <span className="h-px w-8 bg-accent/60" />
                {connectIntro.eyebrow}
              </p>
              <h2 className="font-serif text-5xl leading-[1] font-light text-foreground md:text-7xl">
                {connectIntro.title.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="text-accent">{connectIntro.title.split(" ").slice(-1)}</em>
              </h2>
              <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-muted">{connectIntro.body}</p>
              <p className="mt-6 font-serif text-xl text-foreground/80 italic">{connectIntro.signoff}</p>
              <div className="mt-10">
                <Button href={links.introduction}>Ask for an introduction</Button>
              </div>
            </div>

            {/* Links */}
            <ul className="self-end border-t border-border md:col-span-5">
              {connectLinks.map((l) => {
                const Icon = icons[l.icon];
                const external = l.href.startsWith("http");
                const row = "group flex items-center gap-4 py-5";
                const body = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-all duration-500 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-muted">{l.label}</span>
                      <span
                        className={`block truncate font-serif text-xl transition-colors duration-500 ${
                          l.href ? "text-foreground group-hover:text-accent" : "text-foreground/60 italic"
                        }`}
                      >
                        {l.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={l.label} className="border-b border-border">
                    {l.href ? (
                      <a
                        href={l.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={row}
                      >
                        {body}
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="text-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </a>
                    ) : (
                      // No URL yet (e.g. The Meridian before launch): shown, but not clickable.
                      <div className={row}>
                        {body}
                        <span className="rounded-full border border-accent/30 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-accent">
                          Soon
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
