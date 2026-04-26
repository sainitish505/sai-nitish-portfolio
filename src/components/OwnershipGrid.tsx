"use client";

import { motion } from "framer-motion";
import { ownershipAreas } from "@/data/portfolio";

export function OwnershipGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ownershipAreas.map(({ title, description, proof, icon: Icon }, index) => (
        <motion.article
          key={title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-amber-200/40"
        >
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-teal-200/10 text-teal-100 transition group-hover:bg-amber-200/10 group-hover:text-amber-100">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#fffaf0]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{description}</p>
              <p className="mt-4 rounded border border-[#f4f0e8]/10 bg-black/20 p-3 text-xs leading-5 text-[#ded6c8]">
                {proof}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
