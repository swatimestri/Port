import { SectionHeading } from '../components/SectionHeading';

export function SkillsSection({ skillCategories }) {
  return (
    <section id="skills" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I use to build reliable software."
        description="I work across frontend, backend, AI/ML, and full-stack workflows with a focus on practical implementation and product quality."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
