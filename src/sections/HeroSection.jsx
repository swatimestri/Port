export function HeroSection({ profile }) {
  const email = profile?.email || 'swatimestri23@gmail.com';
  const resumeUrl = profile?.resume || '/Swati-R-Mestri-Resume.pdf';

  const techBadges = [
    'Java',
    'Spring Boot',
    'React.js',
    'Python',
    'AI / ML',
    'REST APIs',
  ];

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="animate-fade-in">
            {/* Small uppercase introductory label */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(56,189,248,0.3)] bg-[#0C1425]/90 px-4 py-1.5 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#38BDF8]">
                SOFTWARE ENGINEER &bull; FULL-STACK &amp; AI
              </span>
            </div>

            {/* Prominent Editorial Name & Headline */}
            <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.035em] text-[#F4F6FC] sm:text-6xl lg:text-7xl xl:text-[80px] font-heading leading-[1.05]">
              Swati R.{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
                Mestri
              </span>
            </h1>

            {/* Two-line Editorial Role / Headline */}
            <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#E2E8F0] font-heading leading-snug">
              Architecting scalable software &amp;{' '}
              <span className="font-serif italic font-normal text-[#38BDF8]">
                intelligent AI systems.
              </span>
            </p>

            {/* Short, Readable Editorial Introduction */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#A4AEC0] font-normal">
              Computer Science Engineering undergraduate building resilient backend services,
              applied machine learning pipelines, and responsive modern web architectures with clean code craftsmanship.
            </p>

            {/* Two Primary Actions + Resume */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="primary-button group"
              >
                <span>Let&apos;s Connect</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href="#projects"
                className="secondary-button group"
              >
                <span>Explore Projects</span>
                <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>

              <a
                href={resumeUrl}
                download="Swati-R-Mestri-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(145,174,215,0.18)] bg-[#0C1425]/70 px-4 py-2 font-mono text-xs text-[#A4AEC0] transition hover:border-[#38BDF8]/40 hover:text-[#F4F6FC]"
              >
                <span>Resume</span>
                <span className="text-[#38BDF8]">PDF ↓</span>
              </a>
            </div>

            {/* Technical Highlights / Fact Details */}
            <div className="mt-10 pt-8 border-t border-[rgba(145,174,215,0.14)]">
              <p className="text-xs font-mono uppercase tracking-[0.24em] text-[#64748B]">
                Core Engineering Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-[rgba(145,174,215,0.14)] bg-[#0C1425]/70 px-3 py-1 font-mono text-xs font-medium text-[#A4AEC0] transition hover:border-[#38BDF8]/40 hover:text-[#F4F6FC]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Technical Panel / IDE Telemetry */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            {/* Ambient Backlight Cones */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(129, 140, 248, 0.15) 50%, transparent 75%)',
              }}
              aria-hidden="true"
            />

            <div className="glass-card relative overflow-hidden rounded-2xl border border-[rgba(145,174,215,0.2)] bg-[#0C1425]/90 p-5 shadow-glow">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-[rgba(145,174,215,0.12)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]/85" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/85" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]/85" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[rgba(145,174,215,0.12)] bg-[#050816]/80 px-3 py-1 font-mono text-[11px] text-[#A4AEC0]">
                  <span className="text-[#38BDF8]">ts</span>
                  <span>swati.engineer.ts</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code Snippet with Line Numbers */}
              <div className="my-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#A4AEC0]">
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">1</span>
                  <p>
                    <span className="text-[#818CF8]">const</span>{' '}
                    <span className="text-[#F4F6FC]">engineer</span>: <span className="text-[#38BDF8]">Developer</span> = {'{'}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">2</span>
                  <p className="pl-2">
                    <span className="text-[#A4AEC0]">name:</span>{' '}
                    <span className="text-[#A7F3D0]">&apos;Swati R. Mestri&apos;</span>,
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">3</span>
                  <p className="pl-2">
                    <span className="text-[#A4AEC0]">degree:</span>{' '}
                    <span className="text-[#A7F3D0]">&apos;B.E. Computer Science&apos;</span>,
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">4</span>
                  <p className="pl-2">
                    <span className="text-[#A4AEC0]">focus:</span> [
                    <span className="text-[#38BDF8]">&apos;Full-Stack&apos;</span>,{' '}
                    <span className="text-[#818CF8]">&apos;AI/ML&apos;</span>],
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">5</span>
                  <p className="pl-2">
                    <span className="text-[#A4AEC0]">internship:</span>{' '}
                    <span className="text-[#FDE047]">&apos;Athreya Tech (Java/Spring)&apos;</span>,
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">6</span>
                  <p className="pl-2">
                    <span className="text-[#A4AEC0]">status:</span>{' '}
                    <span className="text-emerald-400">&apos;Ready to ship impact&apos;</span>,
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="select-none text-[#64748B] text-right w-4">7</span>
                  <p>{'};'}</p>
                </div>
              </div>

              {/* Verified Metrics / Proof Points */}
              <div className="grid grid-cols-3 gap-3 border-t border-[rgba(145,174,215,0.12)] pt-4">
                <div className="rounded-xl border border-[rgba(145,174,215,0.1)] bg-[#050816]/70 p-3 text-center">
                  <p className="text-xl font-bold text-[#F4F6FC] font-heading">4+</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A4AEC0]">Projects</p>
                </div>
                <div className="rounded-xl border border-[rgba(145,174,215,0.1)] bg-[#050816]/70 p-3 text-center">
                  <p className="text-xl font-bold text-[#38BDF8] font-heading">1</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A4AEC0]">Internship</p>
                </div>
                <div className="rounded-xl border border-[rgba(145,174,215,0.1)] bg-[#050816]/70 p-3 text-center">
                  <p className="text-xl font-bold text-emerald-400 font-heading">2</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A4AEC0]">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
