export function Footer({ profile, socialLinks }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="container-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">Aspiring Software Engineer</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">LinkedIn</a>
          <a href={socialLinks.email} className="transition hover:text-sky-300">Email</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">Resume</a>
        </div>
      </div>
    </footer>
  );
}
