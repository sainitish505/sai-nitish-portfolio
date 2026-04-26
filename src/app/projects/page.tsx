import { ProjectCategoryGallery } from "@/components/ProjectCategoryGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";

export default function ProjectsPage() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="Projects grouped by what they prove."
            description="I do not want this page to be a flat list. Each category explains a different layer of my story: current AI products, CTO-level product systems, full-stack foundations, and early shipped work."
          />
          <ProjectCategoryGallery />
        </div>
      </section>
    </Shell>
  );
}
