import Image from "next/image";

import { Download, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";
import { site } from "@/data/site";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function HeroSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          {site.photoUrl ? (
            <Image
              src={site.photoUrl}
              alt={site.name}
              width={64}
              height={64}
              priority
              className="size-16 rounded-full object-cover border border-zinc-800"
            />
          ) : (
            <div className="size-16 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-lg font-semibold text-zinc-300">
              {initials}
            </div>
          )}

          <div>
            <h1 className="text-xl font-semibold">
              {site.name}
            </h1>

            <p className="text-zinc-500 text-sm">
              {site.headline}
            </p>
          </div>
        </div>

        <p className="mt-10 text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
          {site.tagline}
        </p>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-relaxed">
          {site.summary}
        </p>

        <p className="mt-4 flex items-center gap-2 text-zinc-500">
          <MapPin className="size-4" />
          {site.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {site.cvUrl && (
            <Button size="lg" asChild>
              <a href={site.cvUrl} download>
                <Download />
                Download CV
              </a>
            </Button>
          )}

          <Button
            size="lg"
            variant={site.cvUrl ? "outline" : "default"}
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>

          <Button variant="ghost" size="icon-lg" asChild>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon-lg" asChild>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
