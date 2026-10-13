import { useEffect } from 'react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-glow"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Close project details"
          >
            Close
          </button>
        </div>

        <div className="space-y-8 px-6 py-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Overview</p>
            <p className="mt-3 text-slate-200">{project.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Problem</h4>
              <p className="mt-3 text-slate-300">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Solution</h4>
              <p className="mt-3 text-slate-300">{project.solution}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h4 className="text-lg font-semibold text-white">Architecture</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.architecture.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-300">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Technology Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Status / Achievement</h4>
              <p className="mt-3 text-slate-300">{project.status}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Key Features</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">My Contribution</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                {project.myContribution.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Development Process</h4>
              <p className="mt-3 text-slate-300">{project.developmentProcess}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h4 className="text-lg font-semibold text-white">Challenges</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                {project.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h4 className="text-lg font-semibold text-white">Future Improvements</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              {project.futureImprovements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h4 className="text-lg font-semibold text-white">Results</h4>
            <p className="mt-3 text-slate-300">{project.results}</p>
          </div>

          <div className="flex flex-wrap gap-3 pb-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              GitHub
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Live Demo
              </a>
            ) : (
              <span className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-400">
                Live Demo Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
