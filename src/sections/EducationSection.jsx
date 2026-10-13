import { SectionHeading } from '../components/SectionHeading';

export function EducationSection({ education, certifications }) {
  return (
    <section id="education" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Education"
        title="Learning through engineering, practice, and continuous growth."
        description="My education has built a strong foundation in computer science while supporting my interest in software engineering and applied AI."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <div key={item.program} className="glass-card p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-sky-300">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.program}</h3>
              <p className="mt-2 text-slate-300">{item.institution}</p>
              <p className="mt-4 text-sm font-medium text-slate-200">{item.score}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Certifications</p>
          <div className="mt-5 space-y-4">
            {certifications.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                <p className="mt-2 text-slate-300">{item.issuer}</p>
                <p className="mt-2 text-sm text-slate-400">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
