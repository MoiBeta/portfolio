export type Project = {
  title: string;
  description: string;
  // TODO: one technical challenge you solved in this project
  challenge?: string;
  technologies: string[];
  // TODO: screenshot or GIF in /public
  image?: string;
  // TODO: real URLs; buttons are hidden when missing
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Habit Tracker",
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
  },
  {
    title: "Game Prototype",
    description:
      "A 2D game prototype exploring Flutter beyond business apps, with Flame for the game loop and Rive for animations.",
    technologies: ["Flutter", "Flame", "Rive"],
  },
];
