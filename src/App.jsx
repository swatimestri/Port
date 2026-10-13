import { useMemo, useState } from 'react';
import { profile, navItems, skillCategories, experience, projects, achievements, education, certifications, socialLinks } from './data/siteContent';
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

  const featuredProjects = useMemo(() => projects.filter((project) => project.highlight), []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-400/30">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-white hover:text-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full">
              SWATI
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="#contact" className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/20 focus:outline-none focus:ring-2 focus:ring-sky-400">
                Let&apos;s Connect
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 space-y-2 border-t border-slate-800 pt-4 lg:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-900 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-center text-sm font-semibold text-sky-200">
                Let&apos;s Connect
              </a>
            </div>
          ) : null}
        </nav>
      </header>

      <main id="home">
        <HeroSection profile={profile} socialLinks={socialLinks} />
        <AboutSection profile={profile} />
        <SkillsSection skillCategories={skillCategories} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} onSelectProject={setSelectedProject} featuredProjects={featuredProjects} />
        <GitHubActivitySection />
        <AchievementsSection achievements={achievements} />
        <EducationSection education={education} certifications={certifications} />
        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} socialLinks={socialLinks} />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
