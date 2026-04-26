import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-[#f4f0e8]/[0.08] ${
        featured ? "sm:p-7" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">{project.eyebrow}</p>
          <h3 className="mt-3 text-xl font-semibold text-[#fffaf0]">{project.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-[#8f8676] transition group-hover:text-amber-200" />
      </div>
      <p className="mt-4 text-sm leading-6 text-[#b8b2a7]">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, featured ? 8 : 5).map((item) => (
          <span key={item} className="rounded border border-[#f4f0e8]/10 bg-black/20 px-2.5 py-1 text-xs text-[#d4ccbd]">
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
