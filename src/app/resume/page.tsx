import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, GraduationCap, Mail, MapPin } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { StructuredData } from "@/components/StructuredData";
import { certifications, experience, profile, projects, skills, stats, teaching } from "@/data/portfolio";
import { createPageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resume | Sai Nitish Bimari AI Product Engineer",
  description:
    "Resume of Sai Nitish Bimari, AI Product Engineer with full-stack development, operational platforms, technology leadership, Amealio, YouTube Autopilot, Sales & Inventory Management, and MS AI experience.",
  path: "/resume",
  keywords: ["Sai Nitish Bimari resume", "AI Product Engineer resume", "full-stack developer resume", "technology lead resume"],
});

const selectedProjects = projects.filter((project) =>
  ["youtube-autopilot", "sales-inventory-management", "amealio"].includes(project.slug),
);

export default function ResumePage() {
  return (
    <Shell>
      <StructuredData data={personJsonLd()} />
      <section className="resume-page px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15 sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 print:text-slate-600">Resume</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#fffaf0] sm:text-6xl print:text-4xl print:text-slate-950">
                  {profile.name}
                </h1>
                <p className="mt-4 text-xl font-medium text-amber-200 print:text-base print:text-slate-700">{profile.title}</p>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[#ded6c8] print:text-sm print:leading-6 print:text-slate-700">
                  I build AI products, operational platforms, and full-stack systems with product ownership, system architecture judgment, production stewardship, and technology leadership experience.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#b8b2a7] print:text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-teal-200 print:text-slate-500" />
                    {profile.location}
                  </span>
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-teal-200 print:text-slate-700">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-200 print:text-slate-700">
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5 print:border-slate-200 print:bg-slate-50">
                <h2 className="text-lg font-semibold text-[#fffaf0] print:text-slate-950">Executive Snapshot</h2>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.slice(0, 6).map((stat) => (
                    <div key={stat.label} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-3 print:border-slate-200 print:bg-white">
                      <p className="text-xl font-semibold text-[#fffaf0] print:text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-xs leading-5 text-[#b8b2a7] print:text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <PrintButton />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <section>
                <SectionTitle eyebrow="Experience" title="Progressive product engineering responsibility." />
                <div className="space-y-4">
                  {experience.map(({ period, title, company, detail, icon: Icon }) => (
                    <article key={`${period}-${title}`} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5 print:border-slate-200 print:bg-white print:p-3">
                      <div className="flex items-start gap-3">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-teal-200 print:text-slate-500" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200 print:text-slate-500">{period}</p>
                          <h2 className="mt-2 text-lg font-semibold text-[#fffaf0] print:text-base print:text-slate-950">{title}</h2>
                          <p className="text-sm text-[#ded6c8] print:text-slate-700">{company}</p>
                          <p className="mt-3 text-sm leading-6 text-[#b8b2a7] print:text-xs print:leading-5 print:text-slate-600">{detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow="Selected Case Studies" title="Proof of system-level ownership." />
                <div className="grid gap-4">
                  {selectedProjects.map((project) => (
                    <article key={project.slug} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5 print:border-slate-200 print:bg-white print:p-3">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200 print:text-slate-500">{project.eyebrow}</p>
                          <h2 className="mt-2 text-xl font-semibold text-[#fffaf0] print:text-base print:text-slate-950">{project.title}</h2>
                        </div>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-200 print:text-slate-700">
                            Link <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#b8b2a7] print:text-xs print:leading-5 print:text-slate-600">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.impact.slice(0, 4).map((item) => (
                          <span key={item} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] px-2.5 py-1 text-xs text-[#d4ccbd] print:border-slate-200 print:bg-slate-50 print:text-slate-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <section className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5 print:border-slate-200 print:bg-white print:p-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 text-teal-200 print:text-slate-500" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#fffaf0] print:text-base print:text-slate-950">Teaching & Mentorship</h2>
                    <p className="mt-3 text-sm leading-6 text-[#ded6c8] print:text-xs print:text-slate-700">
                      {teaching.role}, {teaching.organization}, {teaching.period}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#b8b2a7] print:text-xs print:leading-5 print:text-slate-600">{teaching.summary}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200 print:text-slate-700">{teaching.impact}</p>
                    <a href={teaching.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-200 print:text-slate-700">
                      University tutoring program <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5 print:border-slate-200 print:bg-white print:p-3">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness className="mt-1 h-5 w-5 text-teal-200 print:text-slate-500" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#fffaf0] print:text-base print:text-slate-950">Education</h2>
                    <p className="mt-3 text-sm leading-6 text-[#ded6c8] print:text-xs print:text-slate-700">MS Artificial Intelligence, Oklahoma Christian University, Dec 2024 - Present</p>
                    <p className="mt-2 text-sm leading-6 text-[#b8b2a7] print:text-xs print:text-slate-600">B.Tech Computer Science & Engineering, Mother Theressa College of Engineering & Technology, completed 2023</p>
                    <p className="mt-2 text-sm leading-6 text-[#b8b2a7] print:text-xs print:text-slate-600">Intermediate MPC, Sri Chaitanya Junior Kalashala, completed 2017</p>
                    <p className="mt-2 text-sm leading-6 text-[#b8b2a7] print:text-xs print:text-slate-600">X Class, Kendriya Vidyalaya NTPC Ramagundam, completed 2015</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <section>
                <SectionTitle eyebrow="Skill Architecture" title="A practical system-building stack." />
                <div className="grid gap-3 sm:grid-cols-2">
                  {skills.map(({ title, items, icon: Icon }) => (
                    <article key={title} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4 print:border-slate-200 print:bg-white print:p-3">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-teal-200 print:text-slate-500" />
                        <h2 className="font-semibold text-[#fffaf0] print:text-sm print:text-slate-950">{title}</h2>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#b8b2a7] print:text-xs print:leading-5 print:text-slate-600">{items.join(", ")}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow="Certifications" title="Cloud, frontend, and application foundations." />
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <a
                      key={cert.url}
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-3 rounded border border-[#f4f0e8]/10 bg-black/20 p-3 text-sm leading-6 text-[#ded6c8] transition hover:border-teal-200/40 print:border-slate-200 print:bg-white print:text-xs print:text-slate-700"
                    >
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-teal-200 print:text-slate-500" />
                      <span>
                        {cert.title}
                        <span className="text-[#8f8676] print:text-slate-500"> · {cert.provider}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
