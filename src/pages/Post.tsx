import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts, profile } from "@/content/site";
import { usePageTitle } from "@/lib/usePageTitle";
import NotFound from "./NotFound";

/** /writing/:slug — a single essay page, rendered from the content in site.ts. */
export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  usePageTitle(post ? `${post.title} — ${profile.name}` : profile.name);

  if (!post) return <NotFound />;

  const paragraphs = post.body ?? [];

  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32 md:pt-24">
      <Link
        to="/#writing"
        className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} strokeWidth={1.5} /> Back to writing
      </Link>

      <p className="mt-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-accent">
        {post.kind} <span className="h-px w-6 bg-accent/50" /> {post.date}
        <span className="h-px w-6 bg-accent/50" /> {post.readTime}
      </p>
      <h1 className="mt-6 font-serif text-5xl leading-[1.02] font-light text-foreground md:text-7xl">{post.title}</h1>
      <p className="mt-8 font-serif text-2xl leading-snug font-light text-foreground/75 italic">{post.excerpt}</p>

      <div className="my-14 flex items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-border" />
        <span className="font-serif text-accent">❦</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      {paragraphs.length > 0 ? (
        <div className="space-y-6 text-[17px] leading-[1.85] text-foreground/85">
          {paragraphs.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className="text-[17px] leading-[1.85] text-muted">
          This piece is still being written. Check back soon — or, if the title sparked a thought, write to me and tell me what you’d want it to say.
        </p>
      )}

      <p className="mt-16 border-t border-border pt-6 font-serif text-lg italic text-muted">
        Thank you for reading.
      </p>

      <p className="mt-8">
        <Link to="/writing" className="text-[13px] tracking-[0.08em] text-foreground hover:text-accent">
          See all writing →
        </Link>
      </p>
    </article>
  );
}
