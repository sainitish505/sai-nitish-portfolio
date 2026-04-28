import type { Metadata } from "next";
import { ExternalLink, Mail, IdCard } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { StructuredData } from "@/components/StructuredData";
import { profile } from "@/data/portfolio";
import { createPageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Sai Nitish Bimari | AI Product Engineer",
  description:
    "Contact Sai Nitish Bimari for AI product engineering, full-stack systems, operational platform work, technology leadership, and practical software roles.",
  path: "/contact",
  keywords: ["contact Sai Nitish Bimari", "hire AI Product Engineer", "full-stack engineer contact"],
});

export default function ContactPage() {
  return (
    <Shell>
      <StructuredData data={personJsonLd()} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Contact"
            title="Let's talk about AI products, engineering roles, or practical systems."
            description="Reach Sai Nitish Bimari through the official bimari.org portfolio for AI product engineering, full-stack systems, operational platforms, and technology leadership conversations."
          />
          <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15 sm:p-8">
            <div className="space-y-4">
              <a href={"mailto:" + profile.email}>
                <div className="flex items-center justify-between gap-4 rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm text-[#ded6c8] transition hover:border-amber-200/40 hover:text-[#fffaf0]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-teal-200" />
                    <span className="text-sm text-[#ded6c8]">{profile.email}</span>
                  </div>
                  <span className="text-xs"><ExternalLink className="h-4 w-4" /></span>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm text-[#ded6c8] transition hover:border-amber-200/40 hover:text-[#fffaf0]"
              >
                <div className="flex item-center gap-4">
                  <IdCard className="h-5 w-5 text-teal-200" />
                  LinkedIn
                </div>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
