import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";
import { site } from "@/data/site";

import { CopyEmailButton } from "./copy-email-button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-zinc-400">
          Want to work together or have a
          project in mind? Let’s connect.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 block text-2xl md:text-3xl font-semibold break-all hover:text-zinc-300 transition-colors"
        >
          {site.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href={`mailto:${site.email}`}>
              <Mail />
              Send an email
            </a>
          </Button>

          <CopyEmailButton email={site.email} />
        </div>

        <div className="mt-8 flex gap-6 text-zinc-400">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>

          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
