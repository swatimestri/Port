export function HeroSection({ profile, socialLinks }) {
  return (
    <section className="container-shell relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-90">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-sky-300">{profile.role}</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-xl font-medium text-slate-300 md:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="secondary-button">
              Download Resume
            </a>
            <a href="#contact" className="secondary-button">
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 transition hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md">
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 transition hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md">
              LinkedIn
            </a>
            <a href={socialLinks.email} className="text-sm font-medium text-slate-200 transition hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md">
              Email
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="glass-card relative w-full max-w-md overflow-hidden p-6">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Developer Workspace</p>
                  <p className="mt-2 text-lg font-semibold text-white">Core Stack</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-200">
                <div className="text-sky-300">const profile = &#123;</div>
                <div className="ml-4 text-slate-300">role: &apos;Aspiring Software Engineer&apos;,</div>
                <div className="ml-4 text-slate-300">focus: [&apos;Full-Stack&apos;, &apos;AI/ML&apos;, &apos;Problem Solving&apos;],</div>
                <div className="ml-4 text-slate-300">stack: [&apos;Java&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;Python&apos;],</div>
                <div className="text-sky-300">&#125;;</div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-slate-200">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <div className="text-2xl font-bold text-sky-300">4+</div>
                  <div className="mt-1 text-xs text-slate-400">Projects</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <div className="text-2xl font-bold text-violet-300">1</div>
                  <div className="mt-1 text-xs text-slate-400">Internship</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <div className="text-2xl font-bold text-emerald-300">2</div>
                  <div className="mt-1 text-xs text-slate-400">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
