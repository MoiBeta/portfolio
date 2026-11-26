import type { NextConfig } from "next";

import { featuredWork } from "./src/data/featured-work";
import { projects } from "./src/data/projects";

const nextConfig: NextConfig = {
    allowedDevOrigins: [
    "192.168.1.8",
  ],
  // Short links to each project and case study, e.g. moibeta.dev/selfanvil
  async redirects() {
    return [
      ...projects.map((project) => ({
        source: `/${project.slug}`,
        destination: `/#project-${project.slug}`,
        permanent: false,
      })),
      ...featuredWork.map((caseStudy) => ({
        source: `/${caseStudy.id}`,
        destination: `/#work-${caseStudy.id}`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
