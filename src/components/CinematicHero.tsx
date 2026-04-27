"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { profile, stats, systemNodes } from "@/data/portfolio";
import { ImpactCard } from "@/components/ImpactCard";

export function CinematicHero() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] max-w-6xl rounded-full bg-teal-300/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded border border-teal-200/25 bg-teal-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
            {profile.title}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#fffaf0] sm:text-7xl lg:text-8xl">
            I build AI products on top of full-stack, operational, and technology leadership experience.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#ded6c8]">{profile.intro}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#b8b2a7]">{profile.thesis}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#b8b2a7]">
            <span className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.045] px-3 py-2">
              <MapPin className="h-4 w-4 text-amber-200" />
              {profile.location}
            </span>
            <span className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.045] px-3 py-2">
              {profile.positioning}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] shadow-xl shadow-teal-950/20 transition hover:bg-amber-200"
            >
              Explore the work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10"
            >
              Read my story
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10"
            >
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-4 shadow-2xl shadow-black/30"
        >
          <div className="rounded border border-[#f4f0e8]/10 bg-[#151811]/95 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#fffaf0]">Builder Operating System</p>
                <p className="mt-1 text-xs text-[#9c9383]">Product UX + AI workflows + systems + leadership</p>
              </div>
              <span className="rounded bg-amber-200/10 px-2 py-1 text-xs text-amber-100">live</span>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded border border-[#f4f0e8]/10 bg-black/20 p-4">
              <motion.div
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded bg-teal-200/10 text-center text-sm font-semibold text-teal-100 shadow-2xl shadow-teal-950/40">
                Sai
                <span className="block text-xs font-normal text-[#b8b2a7]">AI Product</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {systemNodes.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.06 }}
                    className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.06] p-3 text-sm text-[#eee6d8] backdrop-blur"
                  >
                    <Icon className="mb-2 h-4 w-4 text-amber-200" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <ImpactCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
