import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Flame, Route, ShieldCheck } from "lucide-react";
import { EcosystemVisual } from "@/components/EcosystemVisual";
import { ImpactCard } from "@/components/ImpactCard";
import { OperationsVisual } from "@/components/OperationsVisual";
import { PipelineVisual } from "@/components/PipelineVisual";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { StructuredData } from "@/components/StructuredData";
import { projects } from "@/data/portfolio";
import { breadcrumbJsonLd, createPageMetadata, projectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return createPageMetadata({
    title: project ? `${project.title} | Sai Nitish Bimari` : "Project | Sai Nitish Bimari",
    description: project?.summary,
    path: `/projects/${slug}`,
    keywords: project ? [project.title, project.category, project.role, ...project.stack, ...project.impact] : ["Sai Nitish Bimari project"],
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const projectSchema = projectJsonLd(project.slug);

  return (
    <Shell>
      <StructuredData
        data={[
          ...(projectSchema ? [projectSchema] : []),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-x-0 top-12 -z-10 mx-auto h-80 max-w-5xl rounded-full bg-teal-300/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">{project.eyebrow}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#fffaf0] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-4xl text-xl leading-8 text-[#ded6c8]">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {(project.links ?? (project.liveUrl ? [{ label: "Open Live Project", url: project.liveUrl }] : [])).map((link, index) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      index === 0
                        ? "inline-flex items-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] shadow-xl shadow-teal-950/20 transition hover:bg-amber-200"
                        : "inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10"
                    }
                  >
                    {link.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
                <span className="rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0]">
                  {project.category}
                </span>
              </div>
            </div>
            <aside className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-2xl shadow-black/15">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-[#9c9383]">Role</dt>
                  <dd className="mt-1 font-medium text-[#fffaf0]">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-[#9c9383]">Period</dt>
                  <dd className="mt-1 font-medium text-[#fffaf0]">{project.period}</dd>
                </div>
                <div>
                  <dt className="text-[#9c9383]">Status</dt>
                  <dd className="mt-1 font-medium text-[#fffaf0]">{project.status}</dd>
                </div>
                {project.organization && (
                  <div>
                    <dt className="text-[#9c9383]">Organization</dt>
                    <dd className="mt-1 font-medium text-[#fffaf0]">{project.organization}</dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.impact.map((item) => {
            const [value, ...rest] = item.split(" ");
            return <ImpactCard key={item} value={value} label={rest.join(" ") || item} />;
          })}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Context"
            title="What existed before my work"
            description="This is the product and technical situation I was responding to, not just a list of tools."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {project.context.map((paragraph) => (
              <p key={paragraph} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 text-sm leading-7 text-[#ded6c8]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="System Map"
            title="How the work connects"
            description="I want each project page to show the system, not only describe it."
          />
          {project.visual === "pipeline" && <PipelineVisual />}
          {project.visual === "ecosystem" && <EcosystemVisual />}
          {project.visual === "operations" && <OperationsVisual />}
          {project.visual === "public" && (
            <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
              <h2 className="text-xl font-semibold text-[#fffaf0]">Public Product Footprint</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#b8b2a7]">
                ESAY exists as a public construction and engineering app across mobile platforms, with Arawinz as the organization and ESAY as the product.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="My Ownership"
            title="Exactly what I owned"
            description="These are grouped by responsibility so the case study reads like real product ownership, not scattered bullet points."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {project.ownership.map((group) => (
              <article key={group.title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-xl shadow-black/10">
                <ShieldCheck className="h-5 w-5 text-teal-200" />
                <h2 className="mt-4 text-xl font-semibold text-[#fffaf0]">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#b8b2a7]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Key Modules"
            title="The parts of the system that carry the story"
            description="Each module is a concrete proof point: product surface, backend, integration, workflow, or leadership responsibility."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {project.modules.map((module) => (
              <article key={module.title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-xl shadow-black/10">
                <h2 className="text-xl font-semibold text-[#fffaf0]">{module.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{module.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <span key={tag} className="rounded border border-[#f4f0e8]/10 bg-black/20 px-2.5 py-1 text-xs text-[#d4ccbd]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Hard Problems"
            title="Constraints, tradeoffs, and fixes"
            description="This is where the case study becomes credible: what was difficult, and how I responded."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {project.hardProblems.map((item) => (
              <article key={item.problem} className="rounded border border-amber-200/20 bg-amber-200/[0.055] p-6 shadow-xl shadow-black/10">
                <Flame className="h-5 w-5 text-amber-200" />
                <h2 className="mt-4 text-lg font-semibold text-[#fffaf0]">{item.problem}</h2>
                <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{item.response}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15">
            <SectionTitle eyebrow="Leadership" title="What I carried beyond code" />
            <div className="space-y-3">
              {project.leadership.map((item) => (
                <p key={item} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm leading-7 text-[#ded6c8]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded border border-teal-200/20 bg-teal-200/[0.055] p-6 shadow-2xl shadow-black/15">
            <SectionTitle eyebrow="Lessons" title="What this proves about how I think" />
            <div className="space-y-3">
              {project.lessons.map((item) => (
                <p key={item} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm leading-7 text-[#ded6c8]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Stack" title="Technologies and integrations" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] px-3 py-2 text-sm text-[#d4ccbd]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Next</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#fffaf0]">This is the level of ownership I want to keep building from.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b8b2a7]">
                My strongest work happens when I can move across product, engineering, integrations, and AI workflows with real responsibility.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] transition hover:bg-amber-200"
            >
              Back to projects <Route className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
