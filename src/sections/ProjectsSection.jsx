import { SectionHeading } from '../components/SectionHeading';

export function ProjectsSection({ projects, onSelectProject }) {
  return (
    <section id="projects" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="PORTFOLIO PROJECTS"
        title="Real-world software and"
        serifAccent="intelligent products."
        description="These featured projects demonstrate end-to-end full-stack development, modern AI/ML model integration, and user-centered problem solving."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="glass-card group flex h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1"
          >
            <div>
              {/* Category & Status Row */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#7CB8E8]">
                  {project.category}
                </span>
                <span className="rounded-full border border-[rgba(150,175,210,0.18)] bg-[#050816]/80 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#A0A9BC]">
                  {project.accent}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#F3F5FA] font-heading group-hover:text-[#7CB8E8] transition-colors">
                {project.name}
              </h3>

              {/* Short Description */}
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#A0A9BC]">
                {project.shortDescription}
              </p>

              {/* Tech Stack Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[rgba(150,175,210,0.1)] bg-[#050816]/70 px-2.5 py-1 font-mono text-xs text-[#A0A9BC]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-7 pt-5 border-t border-[rgba(150,175,210,0.12)] flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-[#6E7A94] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{project.status}</span>
              </span>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="primary-button !py-1.5 !px-3.5 !text-xs"
                >
                  Details
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !py-1.5 !px-3.5 !text-xs"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
