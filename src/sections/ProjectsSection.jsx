import { SectionHeading } from '../components/SectionHeading';

export function ProjectsSection({ projects, featuredProjects, onSelectProject }) {
  return (
    <section id="projects" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Real-world software and AI-driven product thinking."
        description="These projects reflect my ability to work on impactful ideas across AI, full-stack development, and user-focused problem solving."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`glass-card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 ${
              project.highlight ? 'border-sky-400/40 bg-slate-900' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sky-300">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {project.accent}
              </span>
            </div>

            <p className="mt-5 text-base leading-7 text-slate-300">{project.shortDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Status</p>
              <p className="mt-2 text-sm font-medium text-slate-200">{project.status}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="primary-button"
              >
                View Details
              </button>
              <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
