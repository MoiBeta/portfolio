export type Experience = {
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  tags: string[];
  caseStudyId?: string;
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    // TODO: confirm company naming (LinkedIn shows "PageGroup")
    company: "Michael Page / DXC",
    start: "Dec 2025",
    end: "Present",
    summary:
      "Full stack work on the Juan Valdez mobile app: shipped an end-to-end ordering module and trace production issues from Flutter down to AWS.",
    tags: ["Flutter", "BLoC", "AWS", "Microservices", "Spring Boot"],
    caseStudyId: "juan-valdez",
  },
  {
    role: "Flutter Developer",
    company: "Magneto",
    start: "Aug 2024",
    end: "Sep 2025",
    summary:
      "Built the CV builder and redesigned core screens of a production job-matching app.",
    tags: ["Flutter", "GetX", "REST APIs", "Figma"],
    caseStudyId: "magneto",
  },
  {
    role: "Flutter Developer",
    company: "Plass S.A.S",
    start: "Feb 2022",
    // TODO: confirm end date (LinkedIn shows Jan 2024)
    end: "Feb 2024",
    summary:
      "Built two real-time mobility apps (passenger and driver) from scratch and shipped them to both stores.",
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Firebase", "Pusher"],
    caseStudyId: "plass",
  },
];
