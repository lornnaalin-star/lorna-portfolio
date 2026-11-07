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
  linkedin: "https://www.linkedin.com/in/lorna-lin/",
  github: "https://github.com/lornnaalin-star",
  // ✏️ The Meridian isn't published yet. Paste its URL here when it launches:
  // the hero button switches to "Read The Meridian" and the Connect card
  // becomes a live link automatically.
  meridian: "",
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
  // Shows "Read The Meridian" once links.meridian is set; until then, points to your writing.
  secondaryCta: links.meridian
    ? { label: "Read The Meridian", href: links.meridian }
    : { label: "Read my writing", href: "#writing" },
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
  body?: string[];
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
    body: [
      "I used to think perspective was mostly a matter of intelligence. The more I’ve learned, the more I’ve come to see it as a form of curiosity that becomes practical skill. People who can move between rooms without losing themselves tend to notice patterns others miss.",
      "That is not a glamorous talent. It often looks like listening carefully, asking the question that feels slightly off-script, and letting the obvious answer get complicated before you decide it is right. It is less about being clever than about being willing to be changed by what you encounter.",
      "The people I admire most do not flatten the differences between places. They learn the rules of each room, then carry them with them without becoming trapped by any one of them. That is the real advantage: not mastering one world perfectly, but becoming fluent across several without losing your center.",
    ],
  },
  {
    slug: "bringing-love-to-politics",
    title: "Bringing Love to Politics",
    kind: "Essay",
    date: "Fall 2026",
    readTime: "6 min",
    excerpt: "What would change if we designed civic life around care rather than contest?",
    body: [
      "Politics is often described as a contest of interests, but it is also a contest of imagination. What we decide to believe is possible shapes what we believe is worth trying. If a system is only built to allocate power, it will often miss the emotional infrastructure that makes shared life possible.",
      "I do not mean sentimentality. I mean attention. Care is not softness; it is a way of recognizing that the people affected by a rule have a life that continues after the policy meeting ends. If we want institutions to earn trust, they have to make room for tenderness without making it naive.",
      "The challenge is not to replace disagreement with harmony. It is to remember that people are not abstractions in a spreadsheet. They are neighbors, workers, students, parents, and friends who need to feel seen by the structures they are asked to obey.",
    ],
  },
  {
    slug: "notes-on-institutions",
    title: "Notes on Institutions",
    kind: "Notes",
    date: "Summer 2026",
    readTime: "5 min",
    excerpt: "Fragments on trust, memory and the slow machinery that holds a society together.",
    body: [
      "Institutions are often treated as fixed things: a building, a law, a board, a procedure. But most of the work they do is invisible. They keep memory, coordinate expectations, and create the conditions under which everyday life can keep moving without everyone re-negotiating everything from scratch.",
      "Trust is not a small matter here. It accumulates slowly. It survives as the rhythm of reliable action rather than as the grand statement of a mission. When an institution begins to fail, people do not necessarily stop believing in the idea of it; they notice the gap between what it promises and what it actually does.",
      "The deepest challenge is not to preserve institutions as they are, but to keep them capable of learning. The best ones are not static; they are the ones that remember why they began and are honest enough to change when the world has changed around them.",
    ],
  },
  {
    slug: "between-wall-street-and-silicon-valley",
    title: "Between Wall Street and Silicon Valley",
    kind: "Dispatch",
    date: "Spring 2026",
    readTime: "7 min",
    excerpt: "Two cultures that both price the future — and almost never agree on what it’s worth.",
    body: [
      "Both spaces are animated by ambition, but they do not speak the same language about value. Wall Street often begins from the question of risk and returns. Silicon Valley begins from the question of possibility and scale. Their differences are not trivial; they reflect different ideas about what counts as a meaningful contribution to society.",
      "What is striking to me is how often the same people move between these worlds and return carrying different assumptions. One room rewards certainty, the other rewards speed, and both are vulnerable to the story they tell themselves about the future. The tension is not simply financial; it is cultural and moral.",
      "I think the real question is not which system is right, but which one is accountable to the people who live under it. The future will be shaped by institutions that can translate vision into responsibility, not just momentum into profit.",
    ],
  },
  {
    slug: "reflections",
    title: "Reflections",
    kind: "Reflection",
    date: "Ongoing",
    readTime: "—",
    excerpt: "A running notebook of smaller thoughts that haven’t grown into essays yet.",
    body: [
      "Some of the best ideas arrive as fragments. A sentence overheard on a sidewalk, a paragraph in a book that feels strangely familiar, a conversation that makes a person seem more complex than the label attached to them. These are the pieces that do not yet belong to a larger argument, but they still deserve to be kept.",
      "This notebook is a reminder that thinking is not always linear. It can be recursive, iterative, and a little bit messy. The point is not to be polished before you begin, but to keep returning to what seems important enough to notice.",
      "I write these notes to keep my attention honest. They are not final answers, only faithful questions. And sometimes, a good question is more useful than a perfect answer.",
    ],
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
  { label: "LinkedIn", value: "in/lorna-lin", href: links.linkedin, icon: "linkedin" },
  { label: "GitHub", value: "@lornnaalin-star", href: links.github, icon: "github" },
  {
    label: "The Meridian",
    value: links.meridian ? "Read the publication" : "Launching soon",
    href: links.meridian, // empty = shown as "Soon", not clickable
    icon: "book",
  },
] as const;

export const footer = {
  line: "Designed as a place to wander. Built with care in Philadelphia.",
};
