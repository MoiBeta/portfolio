import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const {
    title,
    kind,
    description,
    challenge,
    technologies,
    flow,
    image,
    demoUrl,
    repoUrl,
  } = project;

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      {image && (
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="w-full aspect-video object-cover border-b border-zinc-800"
        />
      )}

      <CardContent className="p-6">
        <p className="text-sm text-zinc-500">
          {kind}
        </p>

        <h3 className="mt-1 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          {description}
        </p>

        {challenge && (
          <p className="mt-4 text-zinc-400 leading-relaxed">
            <span className="text-zinc-300 font-medium">
              What I did:{" "}
            </span>
            {challenge}
          </p>
        )}

        {flow && (
          <ol
            aria-label="Architecture"
            className="mt-6 flex flex-wrap items-center gap-2 text-sm"
          >
            {flow.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                {index > 0 && (
                  <ArrowRight className="size-4 text-zinc-600" />
                )}
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {(demoUrl || repoUrl) && (
          <div className="flex gap-3 mt-8">
            {demoUrl && (
              <Button asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  {kind === "Freelance" ? "Visit site" : "Live Demo"}
                </a>
              </Button>
            )}

            {repoUrl && (
              <Button variant="outline" asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
