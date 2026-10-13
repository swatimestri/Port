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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/85 px-4 py-8 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[rgba(150,175,210,0.2)] bg-[#0D1527] shadow-glow"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[rgba(150,175,210,0.12)] bg-[#0D1527]/95 px-6 py-5 backdrop-blur-md">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#7CB8E8]">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="mt-1 text-2xl font-bold text-[#F3F5FA] font-heading">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[rgba(150,175,210,0.18)] bg-[#0A1020] px-4 py-1.5 font-mono text-xs text-[#A0A9BC] transition hover:border-[#7CB8E8]/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7CB8E8]"
            aria-label="Close project details"
          >
            Close ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
          {/* Overview */}
          <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7A94]">Overview</p>
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#F3F5FA]">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Problem</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#A0A9BC]">{project.problem}</p>
            </div>
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Solution</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#A0A9BC]">{project.solution}</p>
            </div>
          </div>

          {/* Architecture */}
          <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
            <h4 className="font-heading text-base font-bold text-[#F3F5FA]">System Architecture</h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.architecture.map((step, index) => (
                <div key={step} className="flex items-center gap-2.5 rounded-full border border-[rgba(150,175,210,0.15)] bg-[#0A1020] px-3.5 py-1.5 text-xs text-[#F3F5FA]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7CB8E8]/15 font-mono text-[11px] font-semibold text-[#7CB8E8]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Status */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Technology Stack</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-[rgba(124,184,232,0.2)] bg-[rgba(124,184,232,0.06)] px-2.5 py-1 font-mono text-xs text-[#7CB8E8]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Status &amp; Milestone</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#A0A9BC]">{project.status}</p>
            </div>
          </div>

          {/* Key Features & Contribution */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Key Features</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#A0A9BC]">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#7CB8E8]" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Individual Contribution</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#A0A9BC]">
                {project.myContribution.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Development Process & Challenges */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Development Process</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#A0A9BC]">{project.developmentProcess}</p>
            </div>
            <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
              <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Challenges Solved</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-[#A0A9BC]">
                {project.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Improvements & Results */}
          <div className="rounded-xl border border-[rgba(150,175,210,0.12)] bg-[#050816]/60 p-5">
            <h4 className="font-heading text-base font-bold text-[#F3F5FA]">Measurable Impact &amp; Results</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#A0A9BC]">{project.results}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View on GitHub ↗
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
