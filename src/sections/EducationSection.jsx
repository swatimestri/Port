import { SectionHeading } from '../components/SectionHeading';

export function EducationSection({ education, certifications }) {
  return (
    <section id="education" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="EDUCATION & CREDENTIALS"
        title="Academic foundation & verified"
        serifAccent="credentials."
        description="Structured computer science fundamentals, algorithmic problem solving, and industry certifications."
      />

      <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Education Timeline */}
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#7CB8E8] mb-1">
            Degree Program
          </p>
          {education.map((item) => (
            <div key={item.program} className="glass-card p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(150,175,210,0.12)] pb-3.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7CB8E8]">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
                    {item.score}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#F3F5FA] font-heading">
                  {item.program}
                </h3>
                <p className="mt-2 text-base font-medium text-[#A0A9BC]">
                  {item.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(150,175,210,0.1)] flex items-center gap-2 text-xs font-mono text-[#6E7A94]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7CB8E8]" />
                <span>Full-time Undergraduate Engineering Degree</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications List */}
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#7CB8E8] mb-4">
            Professional Certifications
          </p>
          <div className="glass-card p-6 sm:p-7 space-y-4">
            {certifications.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-4 transition duration-200 hover:border-[#7CB8E8]/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-heading text-base font-bold text-[#F3F5FA]">
                    {item.name}
                  </h4>
                  <span className="shrink-0 font-mono text-[11px] text-[#7CB8E8]">
                    {item.date}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#A0A9BC]">
                  {item.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
