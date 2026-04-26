import Link from "next/link";
import { ArrowRight, Award, Download, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { EcosystemVisual } from "@/components/EcosystemVisual";
import { ImpactCard } from "@/components/ImpactCard";
import { PipelineVisual } from "@/components/PipelineVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { certifications, experience, focusAreas, profile, projects, skills, stats } from "@/data/portfolio";

export default function Home() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <AnimatedSection>
            <p className="mb-5 inline-flex rounded border border-teal-200/25 bg-teal-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
              AI Product Engineer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#fffaf0] sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ded6c8] sm:text-xl">{profile.intro}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#b8b2a7]">{profile.thesis}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded bg-teal-200 px-4 py-3 text-sm font-semibold text-[#10130f] shadow-xl shadow-teal-950/20 transition hover:bg-amber-200">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10">
                Contact
              </Link>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10">
                LinkedIn <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-4 shadow-2xl shadow-black/25">
            <div className="rounded border border-[#f4f0e8]/10 bg-[#171913]/90 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-[#fffaf0]">Builder Profile</p>
                <span className="rounded bg-amber-200/10 px-2 py-1 text-xs text-amber-100">available</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["AI Products", "Full-stack SaaS", "CTO Leadership", "Integrations", "Mobile Apps", "Dashboards"].map((item) => (
                  <div key={item} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-3 text-sm text-[#eee6d8]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <ImpactCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured Work" title="Case studies with proof, not just project names." description="The portfolio leads with a deployed AI product and a CTO-level product leadership case." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index < 2} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Systems" title="AI workflows and product ecosystems." description="The site uses diagrams to explain how the work actually moves through systems." />
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">YouTube Autopilot pipeline</h3>
              <PipelineVisual />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Amealio ecosystem</h3>
              <EcosystemVisual />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="What I Build" title="A product engineer with depth across AI, systems, and leadership." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-xl shadow-black/10">
                <Icon className="h-6 w-6 text-amber-200" />
                <h3 className="mt-4 text-base font-semibold text-[#fffaf0]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Trajectory" title="From frontend developer to CTO to AI product builder." />
          <div className="grid gap-4 lg:grid-cols-2">
            {experience.map(({ period, title, company, detail, icon: Icon }) => (
              <div key={`${period}-${title}`} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5 shadow-xl shadow-black/10">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded bg-teal-200/10 text-teal-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9c9383]">{period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[#fffaf0]">{title}</h3>
                    <p className="text-sm text-teal-100">{company}</p>
                    <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Stack" title="Modern product stack, grounded in shipped work." />
            <Link href="/resume" className="inline-flex items-center gap-2 rounded border border-[#f4f0e8]/15 px-4 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#f4f0e8]/10">
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

      <AnimatedSection className="px-4 py-10 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15 sm:p-8">
          <SectionTitle eyebrow="Credentials" title="Education and selected certifications." />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
              <h3 className="font-semibold text-[#fffaf0]">Education</h3>
              <p className="mt-4 text-sm leading-6 text-[#ded6c8]">MS Artificial Intelligence, Oklahoma Christian University, Dec 2024 - Present</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">B.Tech Computer Science & Engineering, Mother Theressa College of Engineering & Technology, completed 2023</p>
            </div>
            <div className="rounded border border-[#f4f0e8]/10 bg-black/20 p-5">
              <h3 className="font-semibold text-[#fffaf0]">Selected Certifications</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#b8b2a7]">
                {certifications.slice(0, 4).map((cert) => (
                  <li key={cert.title}>
                    <a href={cert.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ded6c8] transition hover:text-amber-200">
                      <Award className="h-3.5 w-3.5" />
                      {cert.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Shell>
  );
}
