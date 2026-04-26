import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";

export default function AboutPage() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="About"
            title="A builder's path from shipped product work to applied AI."
            description="Sai's story is not a sudden pivot into AI. It is a progression from interfaces, APIs, dashboards, mobile products, integrations, and leadership into AI product engineering."
          />
          <div className="space-y-5 rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 text-sm leading-7 text-[#ded6c8] shadow-2xl shadow-black/15 sm:p-8">
            <p>
              Sai Nitish is an AI Product Engineer and MS Artificial Intelligence student at Oklahoma Christian University. Before moving to the United States, he spent years building real product systems across web, mobile, backend, integrations, and dashboards.
            </p>
            <p>
              At Envisionard, he grew from frontend developer to full-stack developer, project manager, and CTO for Amealio. That progression shaped his approach: build the product, understand the business, train the team, improve the system, and keep shipping.
            </p>
            <p>
              His current direction is applied AI: products that use AI in practical workflows, not as decoration. YouTube Autopilot is the first flagship example, combining AI agents, APIs, background jobs, dashboards, security, and product UX into a deployed system.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
