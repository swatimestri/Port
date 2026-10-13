import { SectionHeading } from '../components/SectionHeading';

export function GitHubActivitySection() {
  return (
    <section className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="GitHub / Developer Activity"
        title="I build, iterate, and learn through hands-on coding."
        description="My GitHub reflects a focus on software engineering fundamentals, experimentation, and product-oriented development work."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Full-Stack Builds</h3>
          <p className="mt-4 text-slate-300">Working on end-to-end application development across frontend, backend, and deployment-friendly workflows.</p>
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI / ML</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Research & Prototypes</h3>
          <p className="mt-4 text-slate-300">Exploring AI-powered systems, NLP workflows, and applied machine learning use cases with a practical mindset.</p>
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Collaboration</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Version Control</h3>
          <p className="mt-4 text-slate-300">Using Git and GitHub as part of structured, team-oriented workflows with clean iteration and review practices.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="https://github.com/swatimestri" target="_blank" rel="noreferrer" className="primary-button">
          View GitHub Profile
        </a>
        <a href="#projects" className="secondary-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}
