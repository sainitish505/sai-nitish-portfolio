import { SectionTitle } from "@/components/SectionTitle";
import { Shell } from "@/components/Shell";
import { certifications, experience, skills } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <Shell>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Resume" title="Experience, education, certifications, and stack." description="A web resume version of the portfolio story. Final contact details can be added when ready." />
          <div className="space-y-4">
            {experience.map(({ period, title, company, detail }) => (
              <div key={`${period}-${title}`} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">{period}</p>
                <h2 className="mt-2 text-xl font-semibold text-[#fffaf0]">{title}</h2>
                <p className="text-sm text-[#ded6c8]">{company}</p>
                <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
              <h2 className="text-xl font-semibold text-[#fffaf0]">Education</h2>
              <p className="mt-4 text-sm leading-6 text-[#ded6c8]">MS Artificial Intelligence, Oklahoma Christian University, Dec 2024 - Present</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">B.Tech Computer Science & Engineering, Mother Theressa College of Engineering & Technology, completed 2023</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">Intermediate MPC, Sri Chaitanya Junior Kalashala, completed 2017</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b2a7]">X Class, Kendriya Vidyalaya NTPC Ramagundam, completed 2015</p>
            </div>
            <div className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-6">
              <h2 className="text-xl font-semibold text-[#fffaf0]">Certifications</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#b8b2a7]">
                {certifications.map((cert) => (
                  <li key={cert.url}>
                    <a href={cert.url} target="_blank" rel="noreferrer" className="text-[#ded6c8] underline decoration-teal-200/40 underline-offset-4 transition hover:text-amber-200">
                      {cert.title}
                    </a>
                    <span className="text-[#8f8676]"> · {cert.provider}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ title, items }) => (
              <div key={title} className="rounded border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.055] p-5">
                <h2 className="font-semibold text-[#fffaf0]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#b8b2a7]">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
