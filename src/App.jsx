import { useEffect, useMemo, useState } from 'react';
import { profile, navItems, skillCategories, experience, projects, achievements, education, certifications, socialLinks } from './data/siteContent';
import { CinematicBackground } from './components/CinematicBackground';
import { CinematicIntro } from './components/CinematicIntro';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ProjectModal } from './components/ProjectModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { GitHubActivitySection } from './sections/GitHubActivitySection';
import { AchievementsSection } from './sections/AchievementsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Clean up any ?intro= query parameters from address bar on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('intro')) {
      const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  const featuredProjects = useMemo(() => projects.filter((project) => project.highlight), []);

  const email = profile?.email || 'swatimestri23@gmail.com';
  const resumeUrl = profile?.resume || '/Swati-R-Mestri-Resume.pdf';

  return (
    <div className="relative min-h-screen text-[#F4F6FC]">
      {/* Cinematic Intro Screen */}
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {/* Real Cinematic Video & Atmospheric Layer */}
      <CinematicBackground />

      {/* Main UI Container with proper z-index elevation above background */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Sticky Editorial Header */}
        <header className="sticky top-0 z-40 border-b border-[rgba(145,174,215,0.12)] bg-[#050816]/75 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8" aria-label="Main navigation">
            <div className="flex items-center justify-between">
              {/* Logo / Monogram */}
              <a
                href="#home"
                className="group inline-flex items-center gap-2 font-heading text-base font-bold tracking-[0.2em] text-[#F4F6FC] transition hover:text-[#38BDF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-md"
              >
                <span>SWATI</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] transition-transform duration-300 group-hover:scale-125 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs font-medium uppercase tracking-[0.14em] text-[#A4AEC0] transition duration-200 hover:text-[#F4F6FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-md"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href={resumeUrl}
                  download="Swati-R-Mestri-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !py-2 !px-4 !text-xs font-medium"
                >
                  <span>Get Resume</span>
                  <span className="text-[10px] text-[#38BDF8]">↓</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="primary-button !py-2 !px-4 !text-xs"
                >
                  Let&apos;s Connect
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(145,174,215,0.18)] bg-[#0C1425]/90 text-[#F4F6FC] lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span className="flex flex-col gap-1.5">
                  <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </span>
              </button>
            </div>

            {/* Mobile Drawer Menu */}
            {menuOpen && (
              <div className="mt-3 space-y-2 border-t border-[rgba(145,174,215,0.12)] pt-3 pb-2 lg:hidden animate-fade-in">
                <div className="grid grid-cols-2 gap-1.5">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#A4AEC0] transition hover:bg-[#0C1425] hover:text-[#F4F6FC]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-[rgba(145,174,215,0.1)]">
                  <a
                    href={resumeUrl}
                    download="Swati-R-Mestri-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="secondary-button w-full justify-center !text-xs !py-2.5"
                  >
                    Get Resume (PDF)
                  </a>
                  <a
                    href={`mailto:${email}`}
                    onClick={() => setMenuOpen(false)}
                    className="primary-button w-full justify-center !text-xs !py-2.5"
                  >
                    Let&apos;s Connect ↗
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Sections */}
        <main id="home" className="flex-1">
          <HeroSection profile={profile} socialLinks={socialLinks} />
          
          {/* Editorial Transition Marquee */}
          <MarqueeStrip className="my-6 md:my-10" />

          <AboutSection profile={profile} />
          <SkillsSection skillCategories={skillCategories} />
          <ExperienceSection experience={experience} />
          <ProjectsSection projects={projects} onSelectProject={setSelectedProject} featuredProjects={featuredProjects} />
          <GitHubActivitySection />
          <AchievementsSection achievements={achievements} />
          <EducationSection education={education} certifications={certifications} />
          <ContactSection />
        </main>

        {/* Editorial Footer */}
        <Footer
          profile={profile}
          socialLinks={socialLinks}
          onReplayIntro={() => setShowIntro(true)}
        />
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
