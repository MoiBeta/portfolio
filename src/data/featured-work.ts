export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  summary: string;
  problem: string;
  role: string;
  challenges: string[];
  outcome: string;
  tags: string[];
  // TODO: screenshots in /public (only what can be shown publicly)
  images?: { src: string; alt: string }[];
  // TODO: Play Store / App Store links if still published
  links?: { label: string; href: string }[];
  // Rendered instead of screenshots when the product is no longer public
  diagram?: "plass";
};

export const featuredWork: CaseStudy[] = [
  {
    id: "juan-valdez",
    title: "Ordering module",
    client: "Juan Valdez",
    summary:
      "An end-to-end ordering flow for a specialized store format, built inside a fragile production app while stabilizing the flows around it.",
    problem:
      "A new store format needed its own ordering experience inside the existing Juan Valdez app, which already served customers in production.",
    role: "Full stack developer: Flutter UI and state, service integration and production debugging down to the cloud.",
    challenges: [
      "Built the module end to end: dedicated UI, item selection, promotions, payment flow and reuse of the existing authentication.",
      "Isolated the new module from the legacy code in a fragile, mixed-architecture codebase (BLoC + MVC), and fixed most of the regressions already present in other flows.",
      "Coordinated with backend developers to integrate item and promotion services.",
      "Traced production issues from Flutter endpoints to backend microservices and AWS, e.g. EventBridge credentials blocking app startup.",
    ],
    outcome:
      "Shipped ~15 new screens to production in about 4 weeks, and left payments, registration and in-app information screens more stable than before.",
    tags: ["Flutter", "BLoC", "AWS", "Microservices", "Spring Boot"],
    images: [
      {
        src: "/work/juan-valdez-order-summary.webp",
        alt: "Order summary screen in the Juan Valdez Colombia app",
      },
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/co/app/juan-valdez-colombia/id1459707374",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.paymentez.jv_amigos",
      },
    ],
  },
  {
    id: "magneto",
    title: "Job-matching app",
    client: "Magneto",
    summary:
      "CV builder and redesigned core screens for a production app that connects candidates with companies.",
    problem:
      "Registration and candidate data capture (CV, skills, experience) were confusing, in an app with a large legacy codebase.",
    role: "Flutter developer: feature work, Figma-to-Flutter redesigns and API integration.",
    challenges: [
      "Built CV-builder forms, CV preview with zoom, job filters and registration flows.",
      "Redesigned profile, registration and job-offer cards from Figma into responsive, reusable Flutter UI.",
      "Integrated REST APIs with models, business logic, state and navigation using GetX.",
      "Maintained and extended a legacy mixed-architecture codebase in production.",
    ],
    outcome:
      "Redesigned ~10 screens and built 8 reusable components, turning a frustrating registration into a clearer onboarding for candidates.",
    tags: ["Flutter", "GetX", "REST APIs", "Figma"],
    images: [
      {
        src: "/work/magneto-cv-builder.webp",
        alt: "CV builder profile screen in the Magneto job app",
      },
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/co/app/magneto-ofertas-de-empleo/id6444812096",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.magneto365.app",
      },
    ],
  },
  {
    id: "plass",
    title: "Passenger & Driver apps",
    client: "Plass",
    summary:
      "Two real-time mobility apps built from scratch, and their evolution from a Firebase MVP to a dedicated backend.",
    problem:
      "Plass needed a passenger app and a driver app that could request, dispatch and track rides in real time.",
    role: "Flutter developer in a team of ~10 (developers, QA and design), from v1 to release: features, architecture migration and store publishing.",
    challenges: [
      "Implemented auth, geolocation, ride requests, proximity-based dispatch, real-time tracking, trip states, document upload, account approval and push notifications.",
      "Built v1 with GetX, MVC and Firebase, then contributed to the migration to a dedicated backend with Riverpod, Dio, Clean Architecture and Pusher WebSockets.",
      "Managed Google Play and App Store releases for both apps.",
    ],
    outcome:
      "Reached ~2,000 passengers and ~1,000 approved drivers in Bogotá on Android and iOS. The service has since been discontinued.",
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Firebase", "Pusher"],
    diagram: "plass",
  },
];
