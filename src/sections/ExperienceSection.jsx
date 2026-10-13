import { SectionHeading } from '../components/SectionHeading';

export function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="EXPERIENCE"
        title="Practical software engineering"
        serifAccent="in production."
        description="A professional internship that strengthened my understanding of full-stack engineering, agile collaboration, and production-minded development workflows."
      />

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.company}
            className="glass-card relative overflow-hidden p-7 md:p-9"
          >
            {/* Top Header: Company, Role & Duration */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#7CB8E8]">
                  {item.company}
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#F3F5FA] sm:text-3xl font-heading">
                  {item.role}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-[#A0A9BC]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[#7CB8E8]/70">
                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.588a13.916 13.916 0 0 0 3.032 2.198l.018.008.006.002.002.001.002.001ZM10 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <span>{item.location}</span>
                </p>
              </div>

              <div className="self-start rounded-full border border-[rgba(150,175,210,0.18)] bg-[#050816]/80 px-4 py-1.5 font-mono text-xs font-medium text-[#7CB8E8]">
                {item.duration}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[rgba(124,184,232,0.2)] bg-[rgba(124,184,232,0.06)] px-2.5 py-1 text-xs font-medium text-[#7CB8E8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description Paragraph */}
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#A0A9BC]">
              {item.description}
            </p>

            {/* Impact Highlights Grid */}
            <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {item.impact.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-[rgba(150,175,210,0.1)] bg-[#050816]/60 p-4 transition hover:border-[rgba(124,184,232,0.25)]"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7CB8E8]/15 text-[#7CB8E8]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-[#F3F5FA]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
