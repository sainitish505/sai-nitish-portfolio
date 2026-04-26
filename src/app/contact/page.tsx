import { ExternalLink, Mail } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Contact"
            title="Let's talk about AI products, engineering roles, or practical systems."
            description="Final contact details can be swapped in when ready. For now, LinkedIn is the reliable public path."
          />
          <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 shadow-2xl shadow-black/15 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded border border-[#f4f0e8]/10 bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-200" />
                  <span className="text-sm text-[#ded6c8]">{profile.email}</span>
                </div>
                <span className="text-xs text-[#8f8676]">placeholder</span>
              </div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded border border-[#f4f0e8]/10 bg-black/20 p-4 text-sm text-[#ded6c8] transition hover:border-amber-200/40 hover:text-[#fffaf0]"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
