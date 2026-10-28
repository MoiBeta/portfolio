import { SectionHeader } from "@/components/section/section-header";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Projects"
          description="Freelance work for real clients, and things I build on my own to explore new tools."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
