import Link from "next/link";
import { profile } from "@/data/portfolio";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f4f0e8]/10 bg-[#10130f]/76 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded border border-teal-200/40 bg-teal-200/10 text-sm font-bold text-teal-100 shadow-lg shadow-teal-950/30">
            SN
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-[#fffaf0]">{profile.name}</span>
            <span className="block text-xs text-[#b8b2a7]">{profile.title}</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.045] p-1 shadow-2xl shadow-black/20">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-xs font-medium text-[#d4ccbd] transition hover:bg-[#f4f0e8]/10 hover:text-[#fffaf0] sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
