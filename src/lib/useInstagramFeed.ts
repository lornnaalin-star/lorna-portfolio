import { useEffect, useState } from "react";
import type { Artwork } from "@/content/site";

/**
 * Loads recent posts from a Behold (behold.so) JSON feed and turns them into
 * Artwork tiles. Returns null while loading, or if there's no feed URL or the
 * request fails — the Studio section then falls back to `artworks` in site.ts.
 */

type BeholdSize = { mediaUrl: string; width: number; height: number };
type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  thumbnailUrl?: string;
  prunedCaption?: string;
  caption?: string;
  timestamp?: string;
  sizes?: { small?: BeholdSize; medium?: BeholdSize; large?: BeholdSize; full?: BeholdSize };
};

const shapeFor = (w?: number, h?: number): Artwork["shape"] => {
  if (!w || !h) return "square";
  const r = w / h;
  if (r < 0.9) return "tall";
  if (r > 1.15) return "wide";
  return "square";
};

// First line of the caption, trimmed, as the piece's title.
const titleFrom = (caption?: string) => {
  const first = (caption ?? "").split("\n")[0].replace(/#\S+/g, "").trim();
  if (!first) return "Untitled";
  return first.length > 48 ? `${first.slice(0, 46).trimEnd()}…` : first;
};

export function useInstagramFeed(feedUrl: string, limit = 9): Artwork[] | null {
  const [items, setItems] = useState<Artwork[] | null>(null);

  useEffect(() => {
    if (!feedUrl) return;
    let cancelled = false;

    fetch(feedUrl)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { posts?: BeholdPost[] }) => {
        if (cancelled) return;
        const posts = (data.posts ?? []).slice(0, limit);
        const art: Artwork[] = posts
          .map((p) => {
            const size = p.sizes?.large ?? p.sizes?.medium ?? p.sizes?.full;
            const image = size?.mediaUrl ?? (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl);
            if (!image) return null;
            return {
              title: titleFrom(p.prunedCaption ?? p.caption),
              year: p.timestamp ? String(new Date(p.timestamp).getFullYear()) : undefined,
              image,
              href: p.permalink,
              shape: shapeFor(size?.width, size?.height),
            } satisfies Artwork;
          })
          .filter((a): a is NonNullable<typeof a> => a !== null);
        setItems(art.length ? art : null);
      })
      .catch(() => !cancelled && setItems(null));

    return () => {
      cancelled = true;
    };
  }, [feedUrl, limit]);

  return items;
}
