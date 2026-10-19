/**
 * Personal details used across the site.
 *
 * Any string that starts with "TODO:" is treated as an unfilled placeholder:
 * it is shown as a dashed reminder in development (`npm run dev`) and hidden
 * completely in production builds, so nothing unfinished ever goes live.
 */
export const profile = {
  name: "Ayesha Azeem",
  role: "Full-Stack Software Developer",
  shortBio:
    "Full-Stack Software Developer building reliable web applications with React, Next.js, TypeScript and Node.js.",

  availability: "Open to international remote opportunities",
  showAvailability: true,

  email: "ayeshaaazeem690@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayesha-azeem-910993249/",
  github: "https://github.com/IDevAyesha",

  /**
   * Put your CV at /public/cv/Ayesha-Azeem-CV.pdf (exact name).
   * Until that file exists, the "Download CV" buttons become "Request CV"
   * and open an email instead, so there is never a broken link.
   */
  cvPath: "/cv/Ayesha-Azeem-CV.pdf",

  /** Optional, e.g. "Lahore, Pakistan" or "Remote". Leave "" to hide. */
  location: "",
} as const;

export const hero = {
  headline: {
    lead: "Building reliable web applications that solve",
    accent: "real business problems.",
  },
  intro:
    "I am Ayesha Azeem, a Full-Stack Software Developer working across modern frontend technologies, backend APIs, databases, and AI-powered integrations. I turn product requirements into practical, maintainable web applications.",
};

/** Short facts under the hero. Keep these strictly true. */
export const highlights = [
  { value: "3+", label: "Years building production web applications" },
  { value: "8", label: "Live products featured in this portfolio" },
  { value: "4", label: "Countries of companies I have worked with: Pakistan, US, Canada & Hong Kong" },
];

export const about = {
  paragraphs: [
    "I build full-stack web applications, from responsive interfaces in React and Next.js to the Node.js services, REST APIs and databases behind them. I work mostly in TypeScript and JavaScript, and I care about code that the next developer can read, extend and trust.",
    "A good part of my work is connecting products to the outside world: third-party services, payment providers, authentication and, more recently, AI models. I am comfortable debugging in production, tracing issues across the stack, and shipping careful fixes.",
    "I work closely with developers, QA and product stakeholders to turn requirements into features that hold up in real use. I am particularly interested in AI integrations, workflow automation and building products that scale cleanly as they grow.",
  ],
  focus: [
    "Full-stack web applications",
    "React, Next.js & TypeScript",
    "Node.js, REST APIs & databases",
    "Third-party & AI integrations",
    "Debugging & production improvements",
  ],
};

export const strengths = [
  {
    title: "End-to-end delivery",
    body: "Comfortable owning a feature from the database schema and API through to the interface the user actually touches.",
  },
  {
    title: "Production-conscious code",
    body: "Typed, readable and maintainable code, written with error states, edge cases and the next developer in mind.",
  },
  {
    title: "Practical debugging",
    body: "Methodical problem-solving across frontend, backend and data, with a bias toward finding root causes rather than patching symptoms.",
  },
  {
    title: "APIs & external services",
    body: "Integrating REST APIs, authentication, payments and AI services so they behave reliably inside a real product.",
  },
  {
    title: "Clear collaboration",
    body: "Clear written updates, honest estimates and close work with developers, QA and product stakeholders.",
  },
];

export const lookingFor =
  "Full-time remote software engineering opportunities with international product teams, as well as suitable relocation-sponsored positions.";

export const contact = {
  heading: { lead: "Have a product to build or a", accent: "team to strengthen?" },
  body: "I would welcome a conversation about software engineering opportunities, product development, and international remote roles.",
};
