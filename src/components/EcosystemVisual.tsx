"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Customer App", angle: 0 },
  { label: "Merchant Dashboard", angle: 45 },
  { label: "Admin Dashboard", angle: 90 },
  { label: "POS", angle: 135 },
  { label: "Payments", angle: 180 },
  { label: "ONDC", angle: 225 },
  { label: "AI Personalization", angle: 270 },
  { label: "Analytics", angle: 315 },
];

export function EcosystemVisual() {
  return (
    <div className="rounded border border-[#f4f0e8]/10 bg-[#171913]/85 p-5 shadow-2xl shadow-black/20">
      <div className="relative min-h-[430px] overflow-hidden rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
        <motion.div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-1/2 top-1/2 z-10 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded border border-amber-200/30 bg-amber-200/10 text-center text-sm font-semibold text-amber-100">
          Amealio
          <span className="block text-xs font-normal text-[#b8b2a7]">product ecosystem</span>
        </div>
        <div className="absolute inset-0">
          {nodes.map((node, index) => {
            const radius = 158;
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isAi = node.label === "AI Personalization";
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                animate={{ y: [y, y - 5, y] }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className={`absolute z-20 w-32 -translate-x-1/2 -translate-y-1/2 rounded border p-3 text-center text-xs font-medium shadow-xl shadow-black/20 ${
                  isAi
                    ? "border-amber-200/45 bg-amber-200/10 text-amber-100"
                    : "border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.07] text-[#eee6d8]"
                }`}
              >
                {node.label}
              </motion.div>
            );
          })}
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded border border-[#f4f0e8]/10 bg-[#10130f]/80 p-3 text-xs leading-5 text-[#b8b2a7] backdrop-blur">
          I treated Amealio as an ecosystem: discovery, restaurant operations, payments, settlements, integrations, dashboards, personalization, and team delivery all had to connect.
        </div>
      </div>
    </div>
  );
}
