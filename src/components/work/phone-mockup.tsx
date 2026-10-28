type PhoneMockupProps = {
  label: string;
  caption: string;
};

// Fallback shown when a case study has no public screenshots.
export function PhoneMockup({
  label,
  caption,
}: PhoneMockupProps) {
  return (
    <div className="mx-auto w-40 aspect-[9/19] rounded-[2rem] border-4 border-zinc-800 bg-zinc-900 p-2">
      <div className="h-full rounded-[1.4rem] bg-gradient-to-b from-zinc-800 to-zinc-950 flex flex-col items-center justify-center gap-2 px-3 text-center">
        <span className="text-lg font-semibold">
          {label}
        </span>

        <span className="text-xs text-zinc-500">
          {caption}
        </span>
      </div>
    </div>
  );
}
