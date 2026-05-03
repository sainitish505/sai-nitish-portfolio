"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { olderProjects, projects, proofCategories, teaching } from "@/data/portfolio";

export function ProjectCategoryGallery() {
  return (
    <div className="space-y-5">
      {proofCategories.map((category, index) => {
        const categoryProjects = projects.filter((project) => category.projectSlugs.includes(project.slug));
        return (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-2xl shadow-black/10"
          >
            <div className="grid gap-5 lg:grid-cols-[0.45fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{category.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#fffaf0]">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{category.description}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group rounded border border-[#f4f0e8]/10 bg-black/20 p-4 transition hover:-translate-y-1 hover:border-teal-200/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200">{project.eyebrow}</p>
                        <h4 className="mt-2 text-lg font-semibold text-[#fffaf0]">{project.title}</h4>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[#8f8676] transition group-hover:text-amber-200" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{project.summary}</p>
                  </Link>
                ))}
                {category.title === "Early Work" &&
                  olderProjects.map((project) => (
                    project.url ? (
                      <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded border border-[#f4f0e8]/10 bg-black/20 p-4 transition hover:-translate-y-1 hover:border-teal-200/40"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200">Earlier shipped range</p>
                            <h4 className="mt-2 text-lg font-semibold text-[#fffaf0]">{project.title}</h4>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-[#8f8676] transition group-hover:text-amber-200" />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">
                          Part of the early work that built my speed, domain adaptability, and confidence working with real clients and product constraints.
                        </p>
                      </a>
                    ) : (
                      <div key={project.title} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200">Earlier shipped range</p>
                        <h4 className="mt-2 text-lg font-semibold text-[#fffaf0]">{project.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">
                          Part of the early work that built my speed, domain adaptability, and confidence working with real clients and product constraints.
                        </p>
                      </div>
                    )
                  ))}
                {category.title === "Teaching & Mentorship" && (
                  <a
                    href={teaching.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded border border-[#f4f0e8]/10 bg-black/20 p-4 transition hover:-translate-y-1 hover:border-teal-200/40 md:col-span-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200">{teaching.period}</p>
                        <h4 className="mt-2 text-lg font-semibold text-[#fffaf0]">
                          {teaching.role}, {teaching.organization}
                        </h4>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[#8f8676] transition group-hover:text-amber-200" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{teaching.summary}</p>
                    <p className="mt-3 text-sm font-semibold text-amber-200">{teaching.impact}</p>
                  </a>
                )}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
