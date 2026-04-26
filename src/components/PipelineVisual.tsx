"use client";

import { motion } from "framer-motion";
import { pipeline } from "@/data/portfolio";

export function PipelineVisual() {
  return (
    <div className="rounded border border-[#f4f0e8]/10 bg-[#171913]/85 p-4 shadow-2xl shadow-black/20 sm:p-6">
      <div className="relative grid gap-3 sm:grid-cols-7">
        {pipeline.map(({ label, icon: Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="relative rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-3 text-center"
          >
            <div className="mx-auto grid h-10 w-10 place-items-center rounded bg-teal-200/10 text-teal-100">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 text-xs font-medium text-[#eee6d8]">{label}</p>
            <motion.span
              className="absolute inset-x-3 -bottom-px h-px bg-amber-200"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
