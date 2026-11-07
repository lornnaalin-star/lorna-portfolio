/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  Almost every word on the site lives in this file.
 *  Edit text, links and lists here — components read from it.
 * ─────────────────────────────────────────────────────────────
 */

// ✏️ Basic identity — used in the nav, footer and page metadata.
export const profile = {
  name: "Lorna Lin",
  monogram: "LL",
  school: "Penn ’26",
  studies: "Economics & Political Science",
  metaTitle: "Lorna Lin — Connecting people and ideas",
  metaDescription:
    "Lorna Lin connects people, ideas and institutions across finance, policy, media and culture. Penn ’26, Economics & Political Science.",
};

// ✏️ Links — replace the placeholder URLs with your own.
export const links = {
  email: "lornalin@sas.upenn.edu",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  meridian: "https://themeridian.example.com", // ← your publication URL
  // Where the “Ask for an introduction” button goes. A pre-filled email by default.
  introduction:
    "mailto:lornalin@sas.upenn.edu?subject=Introduction%20request&body=Hi%20Lorna%2C%0A%0AI%E2%80%99d%20love%20an%20introduction%20to%20",
};

// ✏️ Top navigation. `id` must match the section id on the page.
export const navItems = [
  { id: "daydream", label: "Daydream" },
  { id: "rooms", label: "Rooms" },
  { id: "fields", label: "Fields" },
  { id: "writing", label: "Writing" },
  { id: "connect", label: "Connect" },
] as const;

// ✏️ HERO (Daydream)
export const hero = {
  eyebrow: ["Daydream artist", "Connector", "Writer"],
  // The headline is split into three parts so the middle phrase
  // can be set in wine-red italic. Change any of the three.
  headline: {
    before: "I connect people and ideas",
    highlight: "across the rooms",
    after: "they rarely share.",
  },
  intro:
    "I’m Lorna Lin. I let my mind wander between policy, capital, institutions, and culture — and write down what I find.",
  primaryCta: { label: "Ask for an introduction", href: links.introduction },
  secondaryCta: { label: "Read The Meridian", href: links.meridian },
  quote: {
    text: "The best conversations happen in doorways — half in one room, already curious about the next.",
    attribution: "from a notebook, somewhere between Locust Walk and Wall Street",
  },
  // Small margin notes shown beside the hero on large screens.
  marginalia: [
    { label: "Currently", value: "Penn ’26 · Econ & PoliSci" },
    { label: "Thinking about", value: "Why some institutions earn trust" },
    { label: "Reading", value: "Anything with footnotes" },
  ],
};

// ✏️ ROOMS — the spaces you move through.
export type Room = {
  name: string;
  /** one-line descriptor shown under the name */
  tagline: string;
  /** short reflection — 1–2 sentences */
  reflection: string;
};

export const roomsIntro = {
  eyebrow: "II · Rooms",
  title: "The rooms I move through",
  body: "Each has its own language, its own unspoken rules, and its own way of deciding what matters. I try to learn them well enough to carry ideas between them.",
};

export const rooms: Room[] = [
  {
    name: "Finance",
    tagline: "Where risk gets a price",
    reflection:
      "Markets are stories people agree to believe at a number. I’m interested in who gets to tell them.",
  },
  {
    name: "Policy",
    tagline: "Where intention meets design",
    reflection:
      "Good policy is a kind of empathy at scale — imagining the person on the other end of the rule.",
  },
  {
    name: "Media",
    tagline: "Where attention is allocated",
    reflection:
      "What we notice shapes what we fund, fix and forgive. Framing is never neutral.",
  },
  {
    name: "Startups",
    tagline: "Where conviction precedes proof",
    reflection:
      "Founders build in the gap between what is and what could be. I love sitting in that gap with them.",
  },
  {
    name: "Culture",
    tagline: "Where taste becomes meaning",
    reflection:
      "Culture moves before institutions do. It is the early signal, if you know how to listen.",
  },
  {
    name: "Community",
    tagline: "Where people become a ‘we’",
    reflection:
      "Every lasting thing I’ve seen started with a small group of people who trusted each other first.",
  },
];

// ✏️ FIELDS — the themes you think about.
export type Field = {
  name: string;
  /** the open question the field holds for you */
  question: string;
};

export const fieldsIntro = {
  eyebrow: "III · Fields",
  title: "Fields of attention",
  body: "Not subjects so much as questions I keep returning to. Hover or tap one to see what it asks of me.",
};

export const fields: Field[] = [
  { name: "Institutions", question: "What makes a rule feel legitimate to the people who live under it?" },
  { name: "Markets", question: "When do prices tell the truth — and when do they tell us what we want to hear?" },
  { name: "Power", question: "Who sets the agenda before anyone gets to vote on it?" },
  { name: "Human behavior", question: "Why do reasonable people make the same unreasonable choices?" },
  { name: "Belonging", question: "What do we owe the groups that make us who we are?" },
  { name: "Narrative", question: "How does a story become a policy, a company, a movement?" },
  { name: "Innovation", question: "What has to be true for something new to be allowed to exist?" },
];

// ✏️ WRITING — editorial archive. Replace placeholders as you publish.
export type Post = {
  slug: string;
  title: string;
  kind: "Essay" | "Reflection" | "Notes" | "Dispatch";
  date: string; // free-form display text, e.g. "Fall 2026"
  readTime: string;
  excerpt: string;
  /** optional external link (e.g. to The Meridian). If absent, links to /writing/[slug]. */
  href?: string;
  featured?: boolean;
};

export const writingIntro = {
  eyebrow: "IV · Writing",
  title: "An archive in progress",
  body: "Essays, reflections and notes — written to think, kept to remember.",
};

export const posts: Post[] = [
  {
    slug: "the-power-of-perspective",
    title: "The Power of Perspective",
    kind: "Essay",
    date: "Fall 2026",
    readTime: "8 min",
    excerpt:
      "On standing in different rooms long enough that the furniture starts to look different — and why that is the most underrated skill in any career.",
    featured: true,
  },
  {
    slug: "bringing-love-to-politics",
    title: "Bringing Love to Politics",
    kind: "Essay",
    date: "Fall 2026",
    readTime: "6 min",
    excerpt: "What would change if we designed civic life around care rather than contest?",
  },
  {
    slug: "notes-on-institutions",
    title: "Notes on Institutions",
    kind: "Notes",
    date: "Summer 2026",
    readTime: "5 min",
    excerpt: "Fragments on trust, memory and the slow machinery that holds a society together.",
  },
  {
    slug: "between-wall-street-and-silicon-valley",
    title: "Between Wall Street and Silicon Valley",
    kind: "Dispatch",
    date: "Spring 2026",
    readTime: "7 min",
    excerpt: "Two cultures that both price the future — and almost never agree on what it’s worth.",
  },
  {
    slug: "reflections",
    title: "Reflections",
    kind: "Reflection",
    date: "Ongoing",
    readTime: "—",
    excerpt: "A running notebook of smaller thoughts that haven’t grown into essays yet.",
  },
];

// ✏️ CONNECT
export const connectIntro = {
  eyebrow: "V · Connect",
  title: "Come say hello",
  body: "I’m always glad to meet people building, writing or wondering about something. If you think I should know someone — or someone should know you — I’d love to make the introduction.",
  signoff: "Warmly, Lorna",
};

export const connectLinks = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, icon: "mail" },
  { label: "LinkedIn", value: "in/your-handle", href: links.linkedin, icon: "linkedin" },
  { label: "GitHub", value: "@your-handle", href: links.github, icon: "github" },
  { label: "The Meridian", value: "Read the publication", href: links.meridian, icon: "book" },
] as const;

export const footer = {
  line: "Designed as a place to wander. Built with care in Philadelphia.",
};
