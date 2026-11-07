import { Link } from "react-router-dom";
import { posts, writingIntro, profile } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { usePageTitle } from "@/lib/usePageTitle";

/** /writing — the full archive. Posts come from src/content/site.ts → `posts`. */
export default function WritingArchive() {
  usePageTitle(`Writing — ${profile.name}`);

  return (
    <Section id="archive">
      <SectionHeader eyebrow="Archive" title={writingIntro.title} body={writingIntro.body} />
      <ol className="border-t border-border">
        {posts.map((p, i) => {
          const inner = (
            <>
              <span className="font-serif text-sm text-muted italic md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-8">
                <h2 className="font-serif text-3xl font-light text-foreground transition-colors duration-500 group-hover:text-accent md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
              </div>
              <span className="text-[12px] tracking-[0.12em] text-muted md:col-span-3 md:text-right">
                {p.kind} · {p.date} · {p.readTime}
              </span>
            </>
          );
          const cls = "group grid gap-3 border-b border-border py-10 md:grid-cols-12 md:items-baseline";
          return (
            <Reveal as="li" key={p.slug} delay={i * 70}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link to={`/writing/${p.slug}`} className={cls}>
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
