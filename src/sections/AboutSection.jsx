import { SectionHeading } from '../components/SectionHeading';

export function AboutSection({ profile }) {
  return (
    <section id="about" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="About"
        title="Software engineering student with a product mindset."
        description="I am building a foundation in computer science, practical software development, and applied AI while focusing on real-world problem solving."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-7 md:p-8">
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            I am a Computer Science Engineering undergraduate with a strong interest in full-stack development,
            system design, and AI-powered applications. My academic background and internship experience have helped me
            build practical skills in Java, web development, and software engineering workflows.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            I enjoy turning ideas into working software, collaborating across teams, and continuously learning modern
            technologies. My focus is on building scalable, user-friendly products that solve genuine problems in real-world contexts.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
            <p className="mt-3 text-xl font-semibold text-white">Full-Stack Development</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Interest</p>
            <p className="mt-3 text-xl font-semibold text-white">AI / ML</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Approach</p>
            <p className="mt-3 text-xl font-semibold text-white">Problem Solving</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Goal</p>
            <p className="mt-3 text-xl font-semibold text-white">Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
