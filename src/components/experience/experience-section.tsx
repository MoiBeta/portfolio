import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section/section-header";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Experience" />

        <ol className="mt-12 max-w-3xl border-l border-zinc-800">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.start}`}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <span className="absolute -left-1.5 top-2 size-3 rounded-full bg-zinc-600" />

              <p className="text-sm text-zinc-500">
                {item.start} – {item.end}
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                {item.role}
                <span className="text-zinc-400 font-normal">
                  {" "}· {item.company}
                </span>
              </h3>

              <p className="mt-3 text-zinc-400 leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {item.caseStudyId && (
                <a
                  href={`#work-${item.caseStudyId}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  Case study
                  <ArrowRight className="size-4" />
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
