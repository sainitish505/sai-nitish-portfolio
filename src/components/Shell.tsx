import { Header } from "@/components/Header";
import { profile } from "@/data/portfolio";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#10130f] text-[#f4f0e8]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(94,234,212,0.18),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.12),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(244,240,232,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />
      <div className="fixed inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#10130f] via-[#10130f]/85 to-transparent" />
      <Header />
      <main>{children}</main>
      <footer className="border-t border-[#f4f0e8]/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#b8b2a7] sm:flex-row sm:items-center sm:justify-between">
          <p>I build AI products with full-stack depth, leadership judgment, and real product ownership.</p>
          <a className="text-teal-200 hover:text-amber-200" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
