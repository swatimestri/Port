import { SectionHeading } from '../components/SectionHeading';

export function AboutSection() {
  const focusPoints = [
    {
      label: 'Core Focus',
      value: 'Full-Stack Engineering',
      detail: 'Building resilient backend APIs and responsive modern frontends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      label: 'Specialization',
      value: 'Applied AI & ML',
      detail: 'Exploring intelligent models, NLP pipelines, and computer vision.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      label: 'Engineering Philosophy',
      value: 'Clean Architecture',
      detail: 'Writing maintainable code with solid separation of concerns.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      ),
    },
    {
      label: 'Career Direction',
      value: 'Software Engineer',
      detail: 'Ready to contribute productively to engineering teams.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5 text-[#7CB8E8]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="container-shell py-20 md:py-24">
      <SectionHeading
        eyebrow="ABOUT"
        title="Software engineering with a"
        serifAccent="product mindset."
        description="Building a foundation in computer science, scalable software engineering, and applied AI while focusing on real-world problem solving."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Main Narrative Card */}
        <div className="glass-card flex flex-col justify-between p-7 md:p-9">
          <div className="space-y-5 text-base leading-relaxed text-[#A0A9BC] sm:text-lg">
            <p>
              I am a Computer Science Engineering undergraduate with a strong foundation in full-stack development,
              system design, and modern web architectures. My academic coursework and internship experience have given me
              hands-on proficiency in Java, Spring Boot, React, and production development practices.
            </p>
            <p>
              I take pride in transforming ideas into reliable, well-tested software. Whether collaborating across cross-functional teams
              or optimizing database queries, I approach every challenge with curiosity, discipline, and a focus on clean engineering.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(150,175,210,0.12)] flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7A94]">Degree</span>
            <span className="font-heading text-sm font-semibold text-[#F3F5FA]">B.E. Computer Science (2021 – 2025)</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {focusPoints.map((point) => (
            <div key={point.value} className="glass-card flex flex-col justify-between p-6">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(150,175,210,0.14)] bg-[#050816]/70">
                  {point.icon}
                </div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E7A94]">
                  {point.label}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-[#F3F5FA] font-heading">
                  {point.value}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#A0A9BC]">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
