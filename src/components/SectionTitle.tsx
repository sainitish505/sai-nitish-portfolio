export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-[#fffaf0] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-[#b8b2a7]">{description}</p>}
    </div>
  );
}
