"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] shadow-xl shadow-teal-950/20 transition hover:bg-amber-200 print:hidden"
    >
      Print / Save PDF <Printer className="h-4 w-4" />
    </button>
  );
}
