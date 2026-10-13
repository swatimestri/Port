import { SectionHeading } from '../components/SectionHeading';

export function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Practical software development experience."
        description="A professional internship that strengthened my understanding of full-stack engineering, collaboration, and production-minded development workflows."
      />

      {experience.map((item) => (
        <div key={item.company} className="glass-card p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">{item.company}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-slate-300">{item.location}</p>
            </div>
            <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-200">
              {item.duration}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">{item.description}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {item.impact.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
