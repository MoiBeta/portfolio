import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <Button>
            Live Demo
          </Button>

          <Button variant="outline">
            GitHub
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}