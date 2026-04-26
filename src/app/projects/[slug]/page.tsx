import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Compass, GitBranch, Layers3 } from "lucide-react";
import { EcosystemVisual } from "@/components/EcosystemVisual";
import { ImpactCard } from "@/components/ImpactCard";
import { PipelineVisual } from "@/components/PipelineVisual";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} | Sai Nitish` : "Project | Sai Nitish",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">{project.eyebrow}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#fffaf0] sm:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ded6c8]">{project.summary}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] shadow-xl shadow-teal-950/20 transition hover:bg-amber-200"
                >
                  Open Live Project <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-2xl shadow-black/15">
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
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.impact.map((item) => {
              const [value, ...rest] = item.split(" ");
              return <ImpactCard key={item} value={value} label={rest.join(" ") || item} />;
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Stack" title="Technologies and integrations." />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] px-3 py-2 text-sm text-[#d4ccbd]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {project.slug === "youtube-autopilot" && <PipelineVisual />}
          {project.slug === "amealio" && <EcosystemVisual />}
          {project.slug === "esay" && (
            <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
              <h2 className="text-xl font-semibold text-[#fffaf0]">Public Product Footprint</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#b8b2a7]">
                ESAY exists as a public construction and engineering app across mobile platforms, with Arawinz as the organization and ESAY as the product.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-xl shadow-black/10">
              <CheckCircle2 className="h-5 w-5 text-teal-200" />
              <p className="mt-4 text-sm leading-6 text-[#ded6c8]">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Deep Dive" title="More than a summary: what this proves." />
          <div className="grid gap-5 lg:grid-cols-2">
            {project.deepDive.map((item, index) => {
              const icons = [Layers3, Compass, GitBranch, CheckCircle2];
              const Icon = icons[index % icons.length];
              return (
                <article key={item.label} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-xl shadow-black/10">
                  <Icon className="h-5 w-5 text-amber-200" />
                  <h2 className="mt-4 text-lg font-semibold text-[#fffaf0]">{item.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded border border-amber-200/20 bg-amber-200/[0.055] p-6 shadow-2xl shadow-black/15">
          <SectionTitle eyebrow="Decisions" title="How Sai thinks as a builder." />
          <div className="grid gap-3 lg:grid-cols-2">
            {project.decisions.map((decision) => (
              <div key={decision} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm leading-6 text-[#ded6c8]">
                {decision}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-5">
          {project.sections.map((section) => (
            <article key={section.title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
              <h2 className="text-xl font-semibold text-[#fffaf0]">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#b8b2a7]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
