export type SiteConfig = {
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  url: string;
  githubUrl: string;
  linkedinUrl: string;
  repoUrl: string;
  // TODO: add the CV PDF to /public and set e.g. "/cv-moises-betancourt.pdf"
  cvUrl?: string;
  // TODO: add a profile photo to /public and set e.g. "/profile.jpg"
  photoUrl?: string;
};

export const site: SiteConfig = {
  name: "Moisés Betancourt",
  shortName: "MoiBeta",
  headline: "Full Stack Engineer | Flutter & Dart Specialist",
  tagline:
    "I build and ship mobile and web apps to production, from the UI down to the backend and the cloud.",
  summary:
    "4+ years delivering Android, iOS and Web apps across mobility, recruitment and e-commerce.",
  location: "Bogotá, Colombia · Open to remote & hybrid",
  email: "betancourtmoises@gmail.com",
  url: "https://moibeta.dev",
  githubUrl: "https://github.com/MoiBeta",
  linkedinUrl:
    "https://www.linkedin.com/in/mois%C3%A9s-betancourt-41223013a/",
  repoUrl: "https://github.com/MoiBeta/portfolio",
};
