const nodes = [
  "Customer App",
  "Merchant Dashboard",
  "Admin Dashboard",
  "POS",
  "Payments",
  "ONDC",
  "AI Personalization",
  "Analytics",
];

export function EcosystemVisual() {
  return (
    <div className="rounded border border-[#f4f0e8]/10 bg-[#171913]/85 p-5 shadow-2xl shadow-black/20">
      <div className="grid gap-3 sm:grid-cols-4">
        {nodes.map((node, index) => (
          <div
            key={node}
            className={`rounded-md border p-4 text-sm font-medium ${
              index === 6
                ? "border-amber-200/45 bg-amber-200/10 text-amber-100"
                : "border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] text-[#eee6d8]"
            }`}
          >
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
