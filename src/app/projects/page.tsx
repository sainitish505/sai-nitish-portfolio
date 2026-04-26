import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { olderProjects, projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="Case studies from AI products, product leadership, and full-stack foundations."
            description="The strongest work is expanded into case studies. Earlier projects stay visible as curated evidence of range."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
          <div className="mt-10 rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
            <h2 className="text-xl font-semibold text-[#fffaf0]">Additional Work</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#b8b2a7]">
              These projects will become deeper case studies as more contribution detail is added.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {olderProjects.map((project) => (
                <div key={project} className="rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm font-medium text-[#ded6c8]">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
