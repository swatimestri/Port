import { SectionHeading } from '../components/SectionHeading';

export function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="ACHIEVEMENTS"
        title="Recognition in competitions and"
        serifAccent="hackathons."
        description="Competitive milestones that reflect problem-solving speed, technical design capabilities, and high-pressure team execution."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="glass-card relative overflow-hidden p-7 md:p-8 flex flex-col justify-between"
          >
            {/* Subtle Top Ambient Accent */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(124, 184, 232, 0.3) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(124,184,232,0.3)] bg-[rgba(124,184,232,0.08)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7CB8E8]">
                  <span className="text-amber-400">★</span> Award Winner
                </span>
                <span className="font-mono text-sm font-semibold text-emerald-400">
                  {item.prize}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#F3F5FA] font-heading">
                {item.title}
              </h3>
              <p className="mt-2 text-base font-medium text-[#7CB8E8]">
                {item.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#A0A9BC]">
                {item.meta}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(150,175,210,0.12)] flex items-center justify-between text-xs font-mono text-[#6E7A94]">
              <span>Verified Milestone</span>
              <span className="text-[#A0A9BC]">2024</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
