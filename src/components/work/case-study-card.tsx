import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type { CaseStudy } from "@/data/featured-work";
import { cn } from "@/lib/utils";

import { PhoneMockup } from "./phone-mockup";
import { PlassDiagram } from "./plass-diagram";

const diagrams = {
  plass: PlassDiagram,
};

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  const {
    id,
    title,
    client,
    summary,
    problem,
    role,
    challenges,
    outcome,
    tags,
    images,
    links,
    diagram,
  } = caseStudy;

  const Diagram = diagram ? diagrams[diagram] : undefined;

  return (
    <Card
      id={`work-${id}`}
      className="scroll-mt-20 bg-zinc-950 border-zinc-800"
    >
      <CardContent
        className={cn(
          "p-6 md:p-10 grid gap-10",
          !Diagram && "md:grid-cols-[1fr_14rem]"
        )}
      >
        <div>
          <p className="text-sm text-zinc-500">
            {client}
          </p>

          <h3 className="mt-1 text-3xl font-semibold">
            {title}
          </h3>

          <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
            {summary}
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-zinc-500">
                Problem
              </dt>
              <dd className="mt-2 text-zinc-400 leading-relaxed">
                {problem}
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">
                My role
              </dt>
              <dd className="mt-2 text-zinc-400 leading-relaxed">
                {role}
              </dd>
            </div>
          </dl>

          <h4 className="mt-8 text-sm font-medium text-zinc-500">
            What I built
          </h4>

          <ul className="mt-3 space-y-2 text-zinc-400 leading-relaxed list-disc pl-5 marker:text-zinc-600">
            {challenges.map((challenge) => (
              <li key={challenge}>
                {challenge}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-sm font-medium text-zinc-500">
            Outcome
          </h4>

          <p className="mt-2 text-zinc-300 leading-relaxed">
            {outcome}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {links.map((link) => (
                <Button key={link.href} variant="outline" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {Diagram ? (
          <Diagram />
        ) : (
          <div className="flex flex-col gap-4 justify-center">
            {images && images.length > 0 ? (
              images.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={224}
                  height={398}
                  className="mx-auto w-40 md:w-full h-auto rounded-2xl border border-zinc-800"
                />
              ))
            ) : (
              <PhoneMockup label={client} caption={title} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
