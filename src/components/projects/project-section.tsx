import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 text-zinc-400 max-w-2xl">
          Some of the projects I have been
          working on recently.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={
                project.technologies
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}