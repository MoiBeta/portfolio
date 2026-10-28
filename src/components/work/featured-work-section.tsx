import { SectionHeader } from "@/components/section/section-header";
import { featuredWork } from "@/data/featured-work";

import { CaseStudyCard } from "./case-study-card";

export function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-20 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Work"
          description="Production apps I've built and shipped with real teams and real users."
        />

        <div className="mt-12 space-y-8">
          {featuredWork.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
