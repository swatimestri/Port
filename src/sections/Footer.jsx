export function Footer({ profile, socialLinks, onReplayIntro }) {
  const currentYear = new Date().getFullYear();
  const email = profile?.email || 'swatimestri23@gmail.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(150,175,210,0.12)] bg-[#050816]/90 backdrop-blur-md">
      <div className="container-shell py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identity & Role */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-[0.16em] text-[#F3F5FA]">
                SWATI R. MESTRI
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#7CB8E8]" aria-hidden="true" />
            </div>
            <p className="mt-1 font-body text-xs text-[#A0A9BC]">
              Software Engineer &amp; Full-Stack Developer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#A0A9BC]">
            <a
              href={socialLinks?.github || 'https://github.com/swatimestri'}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7CB8E8]"
            >
              GitHub ↗
            </a>
            <a
              href={socialLinks?.linkedin || 'https://www.linkedin.com/in/swatimestri/'}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7CB8E8]"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${email}`}
              className="transition hover:text-[#7CB8E8]"
            >
              Email ↗
            </a>
            <a
              href={profile?.resume || '/Swati-R-Mestri-Resume.pdf'}
              download="Swati-R-Mestri-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7CB8E8]"
            >
              Resume (PDF)
            </a>

            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(150,175,210,0.16)] bg-[#0A1020]/80 px-3 py-1 text-xs text-[#A0A9BC] transition hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
                aria-label="Replay intro sequence"
              >
                <span>Intro</span>
                <span className="text-[10px] text-[#38BDF8]">↻</span>
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="ml-1 inline-flex items-center gap-1 rounded-full border border-[rgba(150,175,210,0.16)] bg-[#0A1020]/80 px-3 py-1 text-xs text-[#F3F5FA] transition hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
              aria-label="Back to top"
            >
              <span>Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-[rgba(150,175,210,0.08)] flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#6E7A94] font-mono">
          <p>© {currentYear} Swati R. Mestri. Designed with precision &amp; care.</p>
          <p className="mt-2 sm:mt-0">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
