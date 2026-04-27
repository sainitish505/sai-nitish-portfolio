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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 print:text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-[#fffaf0] sm:text-4xl print:text-lg print:text-slate-950">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-[#b8b2a7] print:text-sm print:text-slate-600">{description}</p>}
    </div>
  );
}
