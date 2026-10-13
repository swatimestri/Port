import { SectionHeading } from '../components/SectionHeading';

export function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition that reflects problem-solving and competitive drive."
        description="I value opportunities to apply my skills in challenging environments and contribute with purpose."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article key={item.title} className="glass-card relative overflow-hidden p-6 md:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                Award
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-lg font-medium text-sky-200">{item.subtitle}</p>
              <p className="mt-4 text-slate-300">{item.meta}</p>
              <p className="mt-5 text-base font-semibold text-emerald-300">{item.prize}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
