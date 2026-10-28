type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-zinc-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
