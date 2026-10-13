import { SectionHeading } from '../components/SectionHeading';

export function SkillsSection({ skillCategories }) {
  return (
    <section id="skills" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="TECHNICAL SKILLS"
        title="Technologies I use to build"
        serifAccent="reliable software."
        description="I work across frontend, backend, AI/ML, and full-stack workflows with a focus on practical implementation, performance, and code quality."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass-card flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(150,175,210,0.12)] pb-4">
                <h3 className="font-heading text-lg font-bold text-[#F3F5FA]">
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-[#7CB8E8]">
                  {category.items.length} skills
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[rgba(150,175,210,0.14)] bg-[#050816]/70 px-3 py-1.5 text-xs font-medium text-[#A0A9BC] transition duration-200 hover:border-[#7CB8E8]/40 hover:bg-[#111C35] hover:text-[#F3F5FA]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 flex items-center gap-1.5 font-mono text-[11px] text-[#6E7A94]">
              <span className="h-1 w-1 rounded-full bg-[#7CB8E8]" />
              <span>Production Tested</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
