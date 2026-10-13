import { SectionHeading } from '../components/SectionHeading';

export function GitHubActivitySection() {
  const pillars = [
    {
      label: 'Engineering Practice',
      title: 'Full-Stack Builds',
      description: 'End-to-end application development across frontend state management, backend REST services, and database persistence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      label: 'Experimentation',
      title: 'AI & Research Prototypes',
      description: 'Building multi-agent research tools, vision-language pipelines, and custom audio transcription systems with Python.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      label: 'Workflow Discipline',
      title: 'Version Control & Git',
      description: 'Maintaining clear commit histories, feature branches, and collaborative pull requests adhering to industry conventions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 9v12" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="OPEN SOURCE & CODE"
        title="Hands-on engineering through iterative code."
        description="My GitHub reflects a disciplined commitment to software engineering fundamentals, continuous learning, and production-oriented development."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item.title} className="glass-card flex flex-col justify-between p-7">
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(150,175,210,0.14)] bg-[#050816]/70">
                {item.icon}
              </div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E7A94]">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#F3F5FA] font-heading">
                {item.title}
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-[#A0A9BC]">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(150,175,210,0.1)] flex items-center gap-1.5 font-mono text-[11px] text-[#7CB8E8]">
              <span>github.com/swatimestri</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/swatimestri"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          View GitHub Profile ↗
        </a>
        <a
          href="#projects"
          className="secondary-button"
        >
          Explore Projects ↓
        </a>
      </div>
    </section>
  );
}
