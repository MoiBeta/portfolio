export type Project = {
  // Used for the card anchor and the short link (moibeta.dev/<slug>)
  slug: string;
  title: string;
  kind: string;
  // Spans the full width of the grid
  wide?: boolean;
  description: string;
  // TODO: what you did or the technical challenge you solved
  challenge?: string;
  // Used instead of `challenge` when there are several points worth listing
  highlights?: string[];
  technologies: string[];
  // Architecture shown as a left-to-right flow
  flow?: string[];
  image?: string;
  // Short screen recording shown next to the text
  video?: { mp4: string; webm: string; poster: string; alt: string };
  // The first link is the primary button
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "selfanvil",
    title: "SelfAnvil",
    kind: "Personal · Deployed on AWS",
    wide: true,
    description:
      "An Android app for daily tasks and habits, with subtasks and push reminders. Completing a task \"forges\" it: a flame generated in real time by a GLSL shader sweeps across the card. I built and deployed the whole system: the Flutter app, two NestJS microservices and the infrastructure that keeps them in production.",
    highlights: [
      "Accounts with email and Google on the same account, email verification codes and rotating refresh tokens, protected against account pre-hijacking.",
      "Reminders at each user's local time, sent by a per-minute scheduler that handles daylight saving changes and never overlaps itself.",
      "350+ automated tests across the app and both services, including property-based tests for the reminder scheduler.",
      "CI/CD: GitHub Actions tests each service and deploys it through GitHub Container Registry; Codemagic ships the app to testers.",
    ],
    technologies: [
      "Flutter",
      "Riverpod",
      "Clean Architecture",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "AWS Lightsail",
      "Firebase",
      "GitHub Actions",
    ],
    video: {
      mp4: "/projects/selfanvil-demo.mp4",
      webm: "/projects/selfanvil-demo.webm",
      poster: "/projects/selfanvil-poster.webp",
      alt: "SelfAnvil demo: completing tasks and subtasks triggers the forge flame animation",
    },
    flow: [
      "Flutter app",
      "Caddy (HTTPS)",
      "auth + habit services (NestJS)",
      "PostgreSQL (Supabase)",
    ],
    links: [
      { label: "App repo", href: "https://github.com/MoiBeta/SelfAnvil" },
      { label: "auth-service", href: "https://github.com/MoiBeta/auth-service" },
      { label: "habit-service", href: "https://github.com/MoiBeta/habit-service" },
      { label: "API docs", href: "https://habits.selfanvil.app/docs" },
    ],
  },
  {
    slug: "icccedritos",
    title: "Iglesia Comunidad Cristiana Cedritos",
    kind: "Pro bono",
    wide: true,
    description:
      "Website for a local church in Bogotá, built so first-time visitors can find service times, know what to expect and get directions in seconds.",
    challenge:
      "Set up local SEO with schema.org Church structured data (address, coordinates and weekly schedule) and added Google Maps and WhatsApp for one-tap directions and contact.",
    technologies: ["Next.js", "Tailwind", "SEO", "Vercel"],
    links: [{ label: "Visit site", href: "https://www.icccedritos.com/" }],
  },
];
