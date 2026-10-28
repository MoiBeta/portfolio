export type SkillGroup = {
  name: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Mobile",
    skills: ["Flutter", "Dart", "BLoC", "Riverpod", "GetX", "Clean Architecture", "Firebase"],
  },
  {
    name: "Backend",
    skills: ["NestJS", "TypeScript", "Spring Boot", "Prisma", "REST", "Microservices"],
  },
  {
    name: "Cloud & Data",
    skills: ["AWS", "Docker", "PostgreSQL", "Supabase", "CI/CD"],
  },
];
