export type Project = {
  title: string;
  kind: "Freelance" | "Personal";
  description: string;
  // TODO: what you did or the technical challenge you solved
  challenge?: string;
  technologies: string[];
  // Architecture shown as a left-to-right flow
  flow?: string[];
  // TODO: screenshot or GIF in /public
  image?: string;
  // TODO: real URLs; buttons are hidden when missing
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Iglesia Comunidad Cristiana Cedritos",
    kind: "Freelance",
    description:
      "Website for a local church in Bogotá, built so first-time visitors can find service times, know what to expect and get directions in seconds.",
    challenge:
      "Set up local SEO with schema.org Church structured data (address, coordinates and weekly schedule) and added Google Maps and WhatsApp for one-tap directions and contact.",
    technologies: ["Next.js", "Tailwind", "SEO"],
    demoUrl: "https://www.icccedritos.com/",
  },
  {
    title: "Habit Tracker",
    kind: "Personal",
    description:
      "A habit tracking app with a Flutter client and its own NestJS API, containerized with Docker and deployed on AWS.",
    technologies: [
      "Flutter",
      "Riverpod",
      "Clean Architecture",
      "NestJS",
      "Docker",
      "AWS",
    ],
    flow: ["Flutter app", "NestJS API", "Docker", "AWS"],
  },
  {
    title: "Game Prototype",
    kind: "Personal",
    description:
      "A 2D game prototype exploring Flutter beyond business apps, with Flame for the game loop and Rive for animations.",
    technologies: ["Flutter", "Flame", "Rive"],
  },
];
