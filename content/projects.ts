/**
 * Project portfolio + case studies.
 *
 * - `description` and `overview` describe the live product, written from what
 *   is publicly visible on each website.
 * - `stack` lists technologies detectable from the live site's public source.
 *   While `stackConfirmed` is false the site labels it "Live site stack";
 *   set it to true (and edit the list) once you have confirmed what YOU used,
 *   and it will read "Built with".
 * - Every "TODO:" is something only you can fill in truthfully. Unfilled
 *   TODOs are hidden in production, so the case study just shows fewer
 *   sections until you complete it.
 * - Screenshots live in /public/projects. Replace a file with the same name,
 *   or set `image: undefined` to show a clean placeholder instead.
 */
export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  year?: string;
  featured: boolean;
  image?: string;
  /** Short, factual one-liner for the card. */
  description: string;
  /** Your role in one line, e.g. "Full-stack developer". */
  role: string;
  /** Your actual contribution, 1–2 sentences for the card. */
  contribution: string;
  stack: string[];
  stackConfirmed: boolean;
  rtl?: boolean;
  caseStudy: {
    overview: string;
    goal: string;
    responsibilities: string[];
    implementation: string[];
    challenges: { challenge: string; solution: string }[];
    outcome: string;
  };
};

const emptyCaseStudy = {
  goal: "TODO: What problem did the business or product need solved?",
  responsibilities: [
    "TODO: What you personally owned (features, pages, APIs, integrations).",
    "TODO: Who you worked with (team size, QA, product, client).",
  ],
  implementation: [
    "TODO: Key technical decisions, architecture, or integrations you implemented.",
  ],
  challenges: [
    {
      challenge: "TODO: A real technical or product challenge you faced.",
      solution: "TODO: How you solved it.",
    },
  ],
  outcome: "TODO: What shipped, and any verifiable result (launch, adoption, performance).",
};

export const projects: Project[] = [
  {
    slug: "lumnbio",
    name: "LumnBio",
    url: "https://dev.lumnbio.com/Welcome",
    category: "HealthTech · AI Platform",
    featured: true,
    image: "/projects/lumnbio.jpg",
    description:
      "An AI-powered health and biometric analysis platform that brings bloodwork, genetics and health history together into one clear, personalized picture.",
    role: "TODO: Your role, e.g. Full-stack developer",
    contribution: "",
    stack: ["React", "Node.js", "Express", "Google Sign-In"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "Lumn Health positions itself as an intelligence layer for personal health data. It combines lab results, genetic data and health history into a single view that is scored, explained and connected to what matters, so people can discuss it with their doctor.",
      ...emptyCaseStudy,
    },
  },
  {
    slug: "orbitdoctor",
    name: "OrbitDoctor",
    url: "https://orbitdoctor.ca/",
    category: "Telehealth",
    featured: true,
    image: "/projects/orbitdoctor.jpg",
    description:
      "A virtual walk-in clinic for Alberta offering online consultations with licensed doctors, prescription refills, specialist referrals and sick notes.",
    role: "Full-Stack Developer",
    contribution:
      "Developed and enhanced the web platform, patient onboarding, appointment workflows, APIs and responsive UI.",
    stack: ["Next.js", "React"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "OrbitDoctor connects Alberta residents with licensed online walk-in doctors by phone or video, seven days a week. Patients can book same-day visits, request prescription refills, referrals and sick notes, with consultations covered for Alberta Health Card holders.",
      ...emptyCaseStudy,
      goal: "Connect Alberta patients with licensed doctors through secure online phone and video consultations.",
      responsibilities: [
        "Developed and enhanced the web platform and its responsive UI.",
        "Worked on patient onboarding and appointment workflows.",
        "Built and integrated APIs behind the platform.",
        "Contributed to secure, scalable healthcare features for seamless online doctor visits.",
      ],
    },
  },
  {
    slug: "orishub",
    name: "ORIS Hub",
    url: "https://orishub.com/",
    category: "AI Platform · Community",
    featured: true,
    image: "/projects/orishub.jpg",
    description:
      "An all-in-one ecosystem that brings AI tools, learning and earning opportunities together under a single account.",
    role: "Full-Stack Developer",
    contribution:
      "Developed and enhanced web applications, AI integrations, APIs and platform features across the ORIS HUB ecosystem.",
    stack: ["JavaScript", "Tailwind CSS"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "ORIS HUB is an AI-powered global ecosystem that combines AI tools, voice assistants, automation, rewards, opportunities and business solutions in one platform, under a single account.",
      ...emptyCaseStudy,
      responsibilities: [
        "Developed and enhanced web applications and platform features across the ORIS HUB ecosystem.",
        "Built AI integrations and APIs connecting AI services, business automation and digital opportunities.",
        "Contributed to scalable, user-focused features across the platform.",
      ],
    },
  },
  {
    slug: "hio-golf",
    name: "HIO Golf",
    url: "https://playhiogolf.com/",
    category: "Sports · Contest Platform",
    featured: true,
    image: "/projects/hiogolf.jpg",
    description:
      "A hole-in-one contest platform where golfers enter for a chance to win up to $50,000, with birdie prizes and a share of every entry going to charity.",
    role: "TODO: Your role",
    contribution: "",
    stack: ["Vite"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "HIO Golf runs skill-based hole-in-one contests at partner golf courses. Players enter online, every shot is filmed, birdies win cash or pro shop credit, and 10% of every entry goes to charity.",
      ...emptyCaseStudy,
    },
  },
  {
    slug: "ashraf-clinic",
    name: "Ashraf Clinic",
    url: "https://ashrafclinic.online/",
    category: "Healthcare · Internal Tool",
    featured: false,
    image: "/projects/ashrafclinic.jpg",
    description:
      "A clinic and pharmacy management workspace covering patient visits, prescriptions, medicine stock and daily sales.",
    role: "TODO: Your role",
    contribution: "",
    stack: ["Next.js", "React"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "A private, staff-only administration system for a clinic and its pharmacy. It brings patient registration and visit history, prescriptions, batch-level medicine stock and daily sales into one workspace.",
      ...emptyCaseStudy,
    },
  },
  {
    slug: "rs-fashions",
    name: "RS Fashions",
    url: "https://rsfashions.store/",
    category: "E-commerce · Luxury Fragrance",
    featured: false,
    image: "/projects/rsfashions.jpg",
    description:
      "An online store for a luxury perfume house, with nationwide delivery and cash on delivery across Pakistan.",
    role: "TODO: Your role",
    contribution: "",
    stack: ["Laravel", "PHP", "Vite"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "RS Fashions sells its own range of luxury fragrances online. The storefront presents the collection with a premium editorial look and supports nationwide shipping and cash on delivery.",
      ...emptyCaseStudy,
    },
  },
  {
    slug: "breeo",
    name: "Breeo",
    url: "https://breeo.com.pk/",
    category: "Consumer Brand Website",
    featured: false,
    image: "/projects/breeo.jpg",
    description:
      "The brand and product website for BreeO, a premium multi-enzyme detergent in Pakistan.",
    role: "TODO: Your role",
    contribution: "",
    stack: ["Next.js", "React"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "The official website for the BreeO detergent brand, featuring its product range, laundry tips, brand campaigns and company information.",
      ...emptyCaseStudy,
    },
  },
  {
    slug: "dalil-soria",
    name: "Dalil Soria",
    url: "https://dalilsoria.com/",
    category: "Business Directory · Classifieds",
    featured: false,
    image: "/projects/dalilsoria.jpg",
    rtl: true,
    description:
      "An Arabic-language directory of businesses, services and classified ads across Syria, with a right-to-left interface.",
    role: "Full-Stack Developer",
    contribution:
      "Developed and enhanced directory listings, advertisement management, user dashboards and responsive web features.",
    stack: ["Laravel", "Bootstrap", "jQuery"],
    stackConfirmed: false,
    caseStudy: {
      overview:
        "Dalil Soria (دليل سوريا) is a national directory and classifieds platform for Syria, connecting users with companies, services, jobs and advertisements through a searchable directory organized by category and city.",
      ...emptyCaseStudy,
      responsibilities: [
        "Developed and enhanced directory listings and advertisement management.",
        "Built user dashboards and responsive web features.",
        "Contributed frontend and backend functionality and APIs across the platform.",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
