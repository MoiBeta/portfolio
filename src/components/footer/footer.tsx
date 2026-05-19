export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-zinc-500 text-sm">
          © 2026 MoiBeta
        </p>

        <div className="flex gap-4 text-sm text-zinc-400">
          <a href="https://github.com/MoiBeta" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/mois%C3%A9s-betancourt-41223013a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}