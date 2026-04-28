import type { Metadata } from "next";
import Link from "next/link";
import { Award, Download, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BuilderArc } from "@/components/BuilderArc";
import { CinematicHero } from "@/components/CinematicHero";
import { EcosystemVisual } from "@/components/EcosystemVisual";
import { OwnershipGrid } from "@/components/OwnershipGrid";
import { OperationsVisual } from "@/components/OperationsVisual";
import { PipelineVisual } from "@/components/PipelineVisual";
import { ProjectCategoryGallery } from "@/components/ProjectCategoryGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { StructuredData } from "@/components/StructuredData";
import { certifications, profile, skills, teaching } from "@/data/portfolio";
import { createPageMetadata, defaultDescription, personJsonLd, profilePageJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sai Nitish Bimari | AI Product Engineer",
  description: defaultDescription,
  path: "/",
  keywords: ["official portfolio", "AI portfolio", "full-stack portfolio", "bimari.org"],
});

export default function Home() {
  return (
    <Shell>
      <StructuredData data={[personJsonLd(), websiteJsonLd(), profilePageJsonLd()]} />
      <CinematicHero />

      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="rounded border border-teal-200/20 bg-teal-200/[0.055] px-4 py-3 text-sm leading-6 text-[#ded6c8]">
            Sai Nitish Bimari is an AI Product Engineer building AI products, full-stack systems, and operational platforms at{" "}
            <a href="https://bimari.org" className="font-semibold text-teal-200 hover:text-amber-200">
              bimari.org
            </a>
            .
          </p>
        </div>
      </section>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="My Builder Arc"
            title="I did not arrive at AI from nowhere. I came through product pressure."
            description="The story I want this portfolio to tell is not just that I know tools. It is that I kept taking on larger ownership: interface, backend, integrations, operations, people, releases, teaching, and now applied AI products."
          />
          <BuilderArc />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What I Actually Own"
            title="I am strongest where product, systems, integrations, and leadership overlap."
            description="My work is not limited to one layer. The strongest proof is that I can move from UI details into APIs, data models, third-party systems, team planning, and product delivery without losing the user problem."
          />
          <OwnershipGrid />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Categorized Proof"
            title="Projects grouped by what they prove about me."
            description="Instead of a flat list of projects, this portfolio separates my current AI direction, operational platforms, product leadership systems, full-stack foundation, and teaching/mentorship."
          />
          <ProjectCategoryGallery />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Systems I Have Built"
            title="Three system stories: AI workflow automation, operational software, and product ecosystem leadership."
            description="These visuals are intentionally system-oriented. They show how I think: workflows, dependencies, roles, data integrity, and operational control."
          />
          <div className="grid gap-5 xl:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#fffaf0]">YouTube Autopilot: AI pipeline</h3>
              <PipelineVisual />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#fffaf0]">Sales & Inventory: operating flow</h3>
              <OperationsVisual />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#fffaf0]">Amealio: product ecosystem</h3>
              <EcosystemVisual />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionTitle
              eyebrow="Stack"
              title="A practical product stack, shaped by shipped work."
              description="I list tools because they matter, but the real signal is that I have used them inside products with users, dashboards, integrations, payments, releases, and constraints."
            />
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10"
            >
              View Resume <Download className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ title, items, icon: Icon }) => (
              <div key={title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-teal-200" />
                  <h3 className="font-semibold text-[#fffaf0]">{title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded border border-[#f4f0e8]/10 bg-black/20 px-2.5 py-1 text-xs text-[#d4ccbd]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15 sm:p-8">
          <SectionTitle
            eyebrow="Now: Applied AI Product Engineering"
            title="My next chapter is about building AI that survives contact with real users."
            description="I am pursuing my MS in Artificial Intelligence while building products that combine models, interfaces, jobs, credentials, data, and deployment. The goal is practical AI engineering: systems people can use, trust, and iterate."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
              <h3 className="font-semibold text-[#fffaf0]">Education</h3>
              <p className="mt-4 text-sm leading-6 text-[#ded6c8]">MS Artificial Intelligence, Oklahoma Christian University, Dec 2024 - Present</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">B.Tech Computer Science & Engineering, Mother Theressa College of Engineering & Technology, completed 2023</p>
            </div>
            <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
              <h3 className="font-semibold text-[#fffaf0]">Teaching & Mentorship</h3>
              <p className="mt-4 text-sm leading-6 text-[#ded6c8]">
                {teaching.role}, {teaching.organization}, {teaching.period}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">{teaching.impact}</p>
              <a href={teaching.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-amber-200">
                Tutoring program <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
              <h3 className="font-semibold text-[#fffaf0]">Selected Certifications</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#b8b2a7]">
                {certifications.slice(0, 5).map((cert) => (
                  <li key={cert.url}>
                    <a href={cert.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ded6c8] transition hover:text-amber-200">
                      <Award className="h-3.5 w-3.5" />
                      {cert.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] transition hover:bg-amber-200">
              See case studies
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10"
            >
              Contact me <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Shell>
  );
}
