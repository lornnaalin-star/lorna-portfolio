import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  body?: string;
};

/**
 * Shared section opener: a roman-numeral eyebrow, a serif title,
 * and a short intro set off to the right like a margin note.
 */
export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted">
          <span className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </p>
        <h2 className="font-serif text-[2.6rem] leading-[1.02] font-light text-foreground md:text-6xl">
          {title}
        </h2>
      </div>
      {body && (
        <p className="max-w-md text-[15px] leading-relaxed text-muted md:col-span-5 md:justify-self-end">
          {body}
        </p>
      )}
    </Reveal>
  );
}
