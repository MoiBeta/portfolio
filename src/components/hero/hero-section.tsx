import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-zinc-500 mb-4">
          Flutter & Full Stack Developer
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight max-w-4xl">
          Building scalable apps with modern technologies.
        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-relaxed">
          I build mobile applications, backend services
          and modern web experiences using Flutter,
          Next.js, AWS and scalable architectures.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">
            View Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}