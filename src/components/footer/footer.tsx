import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex gap-4 text-sm text-zinc-400">
          <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
