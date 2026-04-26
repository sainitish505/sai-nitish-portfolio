export function ImpactCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded border border-[#f4f0e8]/12 bg-[#f4f0e8]/[0.055] p-4 shadow-xl shadow-black/10">
      <p className="text-2xl font-semibold text-[#fffaf0]">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#9c9383]">{label}</p>
    </div>
  );
}
