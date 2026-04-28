import type { Metadata } from "next";
import { ProjectCategoryGallery } from "@/components/ProjectCategoryGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { StructuredData } from "@/components/StructuredData";
import { createPageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Sai Nitish Bimari AI Product Engineer",
  description:
    "Projects by Sai Nitish Bimari covering YouTube Autopilot, Sales & Inventory Management, Amealio, ESAY, AI products, operational platforms, and full-stack systems.",
  path: "/projects",
  keywords: ["Sai Nitish Bimari projects", "YouTube Autopilot", "Sales Inventory Management", "Amealio", "ESAY"],
});

export default function ProjectsPage() {
  return (
    <Shell>
      <StructuredData data={websiteJsonLd()} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="Projects grouped by what they prove."
            description="I do not want this page to be a flat list. Each category explains a different layer of my story: current AI products, operational platforms, technology leadership systems, full-stack foundations, teaching, and early shipped work."
          />
          <ProjectCategoryGallery />
        </div>
      </section>
    </Shell>
  );
}
