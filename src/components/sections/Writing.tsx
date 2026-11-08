import SmartLink from "@/components/ui/SmartLink";
import { ArrowUpRight } from "lucide-react";
import { links, meridianFeature, posts, writingIntro, type Post } from "@/content/site";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const postHref = (p: Post) => p.href ?? `/writing/${p.slug}`;

/**
 * IV · Writing — a mini editorial archive: one featured piece,
 * then an indexed table of contents. Edit `posts` in src/content/site.ts.
 */
export default function Writing() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <Section id="writing">
      <SectionHeader {...writingIntro} />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Featured */}
        <Reveal className="lg:col-span-5">
          <SmartLink
            href={postHref(featured)}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/80 p-8 transition-all duration-700 hover:border-accent/30 hover:shadow-[0_30px_70px_-35px_rgba(31,42,86,0.3)] md:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--color-glow-lavender),transparent_70%)] transition-transform duration-1000 group-hover:scale-125"
            />
            <div className="relative">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-accent">
                Featured <span className="h-px w-6 bg-accent/50" /> {featured.kind}
              </p>
              <h3 className="mt-8 font-serif text-4xl leading-[1.05] font-light text-foreground md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">{featured.excerpt}</p>
            </div>
            <div className="relative mt-12 flex items-center justify-between border-t border-border pt-5 text-[12px] tracking-[0.1em] text-muted">
              <span>
                {featured.date} · {featured.readTime}
              </span>
              <span className="flex items-center gap-1 text-foreground transition-colors group-hover:text-accent">
                Read
                <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </SmartLink>
        </Reveal>

        {/* Archive index */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="hidden grid-cols-12 border-b border-border pb-3 text-[10px] uppercase tracking-[0.28em] text-muted md:grid">
              <span className="col-span-1">No.</span>
              <span className="col-span-7">Title</span>
              <span className="col-span-2">Form</span>
              <span className="col-span-2 text-right">Date</span>
            </div>
          </Reveal>
          <ol>
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 90}>
                <SmartLink
                  href={postHref(p)}
                  className="group grid grid-cols-12 items-baseline gap-y-2 border-b border-border py-7 transition-colors duration-500"
                >
                  <span className="col-span-2 font-serif text-sm text-muted italic md:col-span-1">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h4 className="font-serif text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-accent md:text-[1.75rem]">
                      {p.title}
                    </h4>
                    <p className="mt-2 max-h-0 overflow-hidden text-[14px] leading-relaxed text-muted opacity-0 transition-all duration-700 group-hover:max-h-20 group-hover:opacity-100 group-focus-visible:max-h-20 group-focus-visible:opacity-100">
                      {p.excerpt}
                    </p>
                  </div>
                  <span className="col-span-6 col-start-3 text-[12px] tracking-[0.12em] text-muted md:col-span-2 md:col-start-auto">
                    {p.kind}
                  </span>
                  <span className="col-span-4 text-right text-[12px] tracking-[0.08em] text-muted md:col-span-2">
                    {p.date}
                  </span>
                </SmartLink>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <SmartLink
              href="/writing"
              className="group mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-foreground transition-colors hover:text-accent"
            >
              Browse the full archive
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
          </Reveal>
        </div>
      </div>

      {/* The Meridian — the publication Lorna is building. Edit `meridianFeature` in site.ts. */}
      {links.meridian && (
        <Reveal>
          <a
            href={links.meridian}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-20 block overflow-hidden rounded-[2rem] border border-border bg-foreground px-8 py-12 text-background transition-all duration-700 hover:shadow-[0_30px_80px_-35px_rgba(31,42,86,0.6)] md:px-14 md:py-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(233,211,216,0.28),transparent_70%)] transition-transform duration-1000 group-hover:scale-125"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(221,218,238,0.18),transparent_70%)]"
            />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-background/60">
                  <span className="h-px w-8 bg-[#e9d3d8]/60" />
                  {meridianFeature.label}
                </p>
                <h3 className="mt-6 font-serif text-5xl font-light md:text-7xl">
                  {meridianFeature.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <em className="text-[#e9d3d8]">{meridianFeature.title.split(" ").slice(-1)}</em>
                </h3>
                <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-background/70">{meridianFeature.body}</p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-[14px] tracking-[0.02em] transition-colors duration-500 group-hover:border-[#e9d3d8] group-hover:text-[#e9d3d8]">
                  {meridianFeature.linkLabel}
                  <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>
      )}
    </Section>
  );
}
