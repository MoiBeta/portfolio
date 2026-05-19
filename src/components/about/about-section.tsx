import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            I am a Flutter and Full Stack
            Developer passionate about building
            scalable applications with clean
            architectures and modern
            technologies.
          </p>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            My main focus is creating mobile
            applications, backend services and
            modern user experiences using
            Flutter, Next.js, AWS and Docker.
          </p>

          <Separator className="my-10 bg-zinc-800" />

          <div className="flex flex-wrap gap-3">
            <Badge>
              Clean Architecture
            </Badge>

            <Badge>Flutter</Badge>

            <Badge>AWS</Badge>

            <Badge>Docker</Badge>

            <Badge>Next.js</Badge>

            <Badge>Riverpod</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}