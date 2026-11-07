# Lorna Lin — personal site

Vite · React 18 · TypeScript · Tailwind CSS v4 · React Router · lucide-react

Works with Lovable: edits pushed here show up in Lovable, and edits made in Lovable are pushed back here.

## Setup

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build
npm run preview    # serve the production build
```

Requires Node 18+. Publish from Lovable, or deploy to Vercel/Netlify (build command `npm run build`, output folder `dist`).

## Structure

```
index.html              default title, description, favicon
src/
  main.tsx              fonts + app entry
  App.tsx               routes, nav, footer, background glow
  index.css             🎨 colors, fonts, motion
  content/site.ts       ✏️ all copy, links, rooms, fields and posts
  pages/
    Index.tsx           homepage: Daydream → Rooms → Fields → Writing → Connect
    WritingArchive.tsx  full archive (/writing)
    Post.tsx            individual essay pages (/writing/:slug, placeholder body)
    NotFound.tsx        404 page
  components/
    Nav.tsx             sticky nav with active-section underline + mobile menu
    Footer.tsx
    BackgroundGlow.tsx  blush/lavender glow + faint paper grain
    RoomCard.tsx        arched "doorway" card
    sections/           Hero, Rooms, Fields, Writing, Connect
    ui/                 Button, SmartLink, Section, SectionHeader, Reveal (scroll fade-in)
  lib/                  page titles, scroll-to-section on navigation
```

## Editing

### Copy and links: `src/content/site.ts`
- **Links**: the `links` object holds email, LinkedIn, GitHub, The Meridian and the "Ask for an introduction" target (a pre-filled email by default; swap in a Calendly or form URL if you like).
- **Hero**: `hero` holds the headline. It's split into `before`, `highlight` (the wine-red italic phrase) and `after`. It also holds the eyebrow, intro, buttons, quote and the margin notes.
- **Rooms / Fields / Posts**: these are plain arrays. Add, remove or reorder items and the layout adapts.
- **Writing**: give a post an `href` to link out (for example to The Meridian). Without one, it links to `/writing/your-slug`. Mark one post `featured: true` to make it the large card.

### Colors: `src/index.css`
Edit the `@theme` block:

```css
--color-background: #eef2f7;
--color-foreground: #1f2a56;
--color-accent:     #9b4b57;
--color-muted:      #6e778b;
--color-border:     #d9dee8;
--color-card:       #f6f8fb;
--color-glow-pink:     rgba(233, 211, 216, 0.45);
--color-glow-lavender: rgba(221, 218, 238, 0.40);
```

Each variable becomes a Tailwind class automatically (`text-accent`, `bg-card`, `border-border`…). To make the glow stronger or softer, raise or lower the alpha on the glow colors.

### Fonts
The fonts are self-hosted with `@fontsource`, so nothing loads from Google. To switch to Playfair Display, for example:

1. `npm i @fontsource/playfair-display`
2. Replace the Cormorant imports in `src/main.tsx`
3. Set `--font-serif: "Playfair Display", Georgia, serif;` in `src/index.css`

### Motion
`src/components/ui/Reveal.tsx` handles the soft fade-ups. The glow drift timing lives in `src/index.css` (`--animate-drift`). Users with "reduce motion" turned on see everything static.

## Next steps
- Write real essays: add a `body` field to posts and render it in `src/pages/Post.tsx`.
- Add a social preview image (`public/og.png`) and an `og:image` tag in `index.html`.
