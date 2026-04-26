"use client";

import { motion } from "framer-motion";
import { builderArc } from "@/data/portfolio";

export function BuilderArc() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-teal-200 via-amber-200 to-transparent md:block" />
      <div className="space-y-5">
        {builderArc.map(({ period, title, role, body, icon: Icon }, index) => (
          <motion.article
            key={`${period}-${title}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="relative rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-xl shadow-black/10 md:ml-12"
          >
            <div className="absolute -left-[49px] top-5 hidden h-10 w-10 place-items-center rounded border border-teal-200/30 bg-[#151811] text-teal-100 md:grid">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{period}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#fffaf0]">{title}</h3>
            <p className="mt-1 text-sm text-teal-100">{role}</p>
            <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{body}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
