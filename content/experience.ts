/**
 * Work history, newest first.
 *
 * Any "TODO:" value is shown as a reminder in development and hidden in
 * production. If `role` is a TODO, the entry shows the company name only.
 */
export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  responsibilities: string[];
  achievements?: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "FiveLoops",
    role: "Full Stack Developer",
    period: "09/2025 — Present",
    location: "Lahore, Pakistan",
    summary:
      "Building scalable web and mobile applications across the frontend, backend, APIs, databases and AI integrations.",
    responsibilities: [
      "Develop applications with React.js, Next.js, Node.js and TypeScript.",
      "Build REST APIs, authentication, third-party integrations and payment solutions.",
      "Integrate AI models and LLMs for automation, intelligent processing and content generation.",
      "Work with MySQL, PostgreSQL, MongoDB and Supabase.",
      "Deliver end-to-end features across the frontend, backend, database and AI layers.",
      "Collaborate with the team on production-ready features, deployments and performance improvements.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "TypeScript", "MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    company: "Infaque",
    role: "Full Stack Developer",
    period: "",
    location: "Canada",
    summary:
      "Working as a Full Stack Developer across the frontend, backend, APIs and databases of the company's web applications.",
    responsibilities: [
      "Build responsive user interfaces with React.js, Next.js and TypeScript.",
      "Develop backend features and REST APIs with Node.js.",
      "Integrate databases and third-party services into the application.",
      "Debug issues and ship improvements in collaboration with the team.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Node.js"],
  },
  {
    company: "SwissInvest",
    role: "Full Stack Developer",
    period: "",
    location: "Hong Kong",
    summary:
      "Working as a Full Stack Developer across the frontend, backend, APIs and databases of the company's web applications.",
    responsibilities: [
      "Build responsive user interfaces with React.js, Next.js and TypeScript.",
      "Develop backend features and REST APIs with Node.js.",
      "Integrate databases and third-party services into the application.",
      "Debug issues and ship improvements in collaboration with the team.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Node.js"],
  },
  {
    company: "SA Systems",
    role: "MERN Stack Developer",
    period: "12/2024 — 08/2025",
    location: "Lahore, Pakistan · Hybrid",
    summary:
      "MERN Stack Developer with a strong focus on frontend development in React.js and Next.js, alongside API development, integrations and MySQL databases.",
    responsibilities: [
      "Collaborated with cross-functional teams to deliver full-featured, responsive web applications.",
      "Developed APIs and implemented API integrations.",
      "Worked with MySQL databases behind the applications.",
      "Introduced new features and improvements into existing projects.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "MySQL"],
  },
  {
    company: "Tritech Interactive",
    role: "MERN Stack Developer",
    period: "01/2024 — 10/2024",
    location: "Multan, Pakistan · Onsite",
    summary:
      "A company specializing in web applications and digital solutions. Worked with a team of senior and junior developers on the design and implementation of APIs and web applications.",
    responsibilities: [
      "Led frontend development efforts in React.js, building responsive user interfaces for client projects.",
      "Worked closely with senior developers to implement scalable, maintainable code.",
      "Took an active part in code reviews, identifying areas for improvement.",
      "Collaborated with UX/UI designers and backend developers to integrate frontend components.",
    ],
    stack: ["React.js", "Node.js", "NestJS"],
  },
  {
    company: "MAAQ Services",
    role: "Frontend Developer",
    period: "08/2023 — 12/2023",
    location: "Randolph, New Jersey, US · Remote",
    summary: "Frontend development with React.js and Tailwind CSS.",
    responsibilities: [
      "Collaborated with different teams to deliver complete websites focused on user-friendly design.",
      "Wrote scalable, maintainable code for the user-facing parts of the websites.",
      "Introduced new features and improvements into projects.",
    ],
    stack: ["React.js", "Tailwind CSS"],
  },
];
