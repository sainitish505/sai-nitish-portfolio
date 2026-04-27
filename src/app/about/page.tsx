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
            description="My story is not a sudden pivot into AI. It is a progression from interfaces, APIs, dashboards, mobile products, integrations, operational software, teaching, and technology leadership into AI product engineering."
          />
          <div className="space-y-5 rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6 text-sm leading-7 text-[#ded6c8] shadow-2xl shadow-black/15 sm:p-8">
            <p>
              I am an AI Product Engineer and MS Artificial Intelligence student at Oklahoma Christian University. Before moving to the United States, I spent years building real product systems across web, mobile, backend, integrations, and dashboards.
            </p>
            <p>
              At Envisionard, I grew from frontend developer to full-stack developer, project manager, and Lead of Technology / CTO for Amealio. That progression shaped my approach: build the product, understand the business, train the team, improve the system, and keep shipping.
            </p>
            <p>
              Outside Amealio, I built and maintain a live Sales & Inventory Management platform for my family distribution business. That project sharpened my operational judgment because the software tracks real stock, real sales, real users, and real production workflows.
            </p>
            <p>
              I also tutor computer science and AI/ML topics at Oklahoma Christian University, which has made technical communication a visible part of my profile: explaining code, debugging with students, preparing for exams, and turning complex topics into understandable steps.
            </p>
            <p>
              My current direction is applied AI: products that use AI in practical workflows, not as decoration. YouTube Autopilot is the first flagship example, combining AI agents, APIs, background jobs, dashboards, security, and product UX into a deployed system.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
