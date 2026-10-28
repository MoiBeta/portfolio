import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skillGroups } from "@/data/skills";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            I take ownership of the whole problem.
            When something breaks in production, I
            don&apos;t stop at the mobile layer: I read
            the logs, trace the request to the backend
            microservice and check the cloud
            configuration.
          </p>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            I started as a mobile developer and grew
            into a full-stack, systems-minded engineer.
            I&apos;m comfortable building products from
            scratch and extending established codebases
            without breaking critical flows, and I work
            closely with backend, QA, design, DevOps and
            product.
          </p>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Currently studying Computer Engineering at
            UNIR. Open to remote and hybrid
            opportunities.
          </p>

          <Separator className="my-10 bg-zinc-800" />

          <div className="grid gap-6 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-sm font-medium text-zinc-500">
                  {group.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
