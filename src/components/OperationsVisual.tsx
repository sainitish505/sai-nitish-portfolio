"use client";

import { motion } from "framer-motion";
import { BarChart3, Boxes, ClipboardList, CreditCard, PackagePlus, Store } from "lucide-react";

const flow = [
  { label: "Product catalog", detail: "SKU, price, case pack", icon: ClipboardList },
  { label: "Inward stock", detail: "Supplier, invoice, warehouse", icon: PackagePlus },
  { label: "Inventory ledger", detail: "Balances, batches, movement", icon: Boxes },
  { label: "Retailer sale", detail: "Stock lookup, route, sale items", icon: Store },
  { label: "Collection", detail: "Payments, splits, outstanding", icon: CreditCard },
  { label: "Reports", detail: "Trends, monthly overview", icon: BarChart3 },
];

export function OperationsVisual() {
  return (
    <div className="overflow-hidden rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-2xl shadow-black/20">
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {flow.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative rounded border border-[#f4f0e8]/10 bg-black/25 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-200/15 text-teal-200">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-amber-200">0{index + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#fffaf0]">{step.label}</h3>
              <p className="mt-2 text-xs leading-5 text-[#b8b2a7]">{step.detail}</p>
              {index < flow.length - 1 && (
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 hidden h-px w-4 bg-teal-200/50 xl:block"
                  animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.75, 1, 0.75] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.12 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-5 grid gap-3 border-t border-[#f4f0e8]/10 pt-5 md:grid-cols-3">
        {[
          ["Production usage", "Live internal system at app.bimari.org"],
          ["Business scale", "INR 3L+ sales tracked and 65,000+ inventory units managed"],
          ["Ownership depth", "Product, database, APIs, frontend, deployment, and maintenance"],
        ].map(([label, value]) => (
          <div key={label} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200">{label}</p>
            <p className="mt-2 text-sm leading-6 text-[#ded6c8]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
