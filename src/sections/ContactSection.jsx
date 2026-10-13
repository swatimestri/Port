import { MarqueeStrip } from '../components/MarqueeStrip';

export function ContactSection() {
  const contactMethods = [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'swatimestri23@gmail.com',
      href: 'mailto:swatimestri23@gmail.com',
      external: false,
      isPrimary: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'swatimestri',
      href: 'https://github.com/swatimestri',
      external: true,
      isPrimary: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'in/swatimestri',
      href: 'https://www.linkedin.com/in/swatimestri/',
      external: true,
      isPrimary: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0-.01-3.24 1.62 1.62 0 0 0 .01 3.24M7.86 18.5V10.13H5.07V18.5h2.79z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="container-shell relative py-20 md:py-28 overflow-hidden">
      {/* Background Editorial Marquee inspired by Reference 1 */}
      <div className="absolute top-2 left-0 right-0 -z-10 pointer-events-none">
        <MarqueeStrip
          variant="background"
          speed="slow"
          items={["LET'S BUILD SOMETHING MEANINGFUL", "START A CONVERSATION", "OPEN FOR OPPORTUNITIES"]}
          separator="·"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Subtle atmospheric ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Section Heading & CTA */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.7)]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
                CONTACT
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#F4F6FC] sm:text-4xl lg:text-5xl font-heading leading-tight">
              Let&apos;s build something{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
                meaningful together.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A4AEC0] sm:text-lg font-normal">
              Have an opportunity, an engineering challenge, or just want to connect? My inbox is always open.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:swatimestri23@gmail.com"
              className="primary-button group"
            >
              Get in Touch
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {contactMethods.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className={`glass-card group relative flex items-center justify-between p-6 sm:p-7 ${
                contact.isPrimary ? 'md:col-span-2' : 'md:col-span-1'
              }`}
              aria-label={`${contact.label}: ${contact.value}`}
            >
              <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[rgba(150,175,210,0.18)] bg-[#050816]/90 text-[#7CB8E8] transition-all duration-300 group-hover:scale-105 group-hover:border-[#7CB8E8]/40 group-hover:bg-[#7CB8E8]/10 sm:h-14 sm:w-14">
                  {contact.icon}
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6E7A94] transition-colors group-hover:text-[#A0A9BC]">
                    {contact.label}
                  </span>
                  <span className="mt-1 block truncate text-base font-semibold text-[#F3F5FA] transition-colors group-hover:text-[#7CB8E8] sm:text-lg">
                    {contact.value}
                  </span>
                </div>
              </div>

              <div className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(150,175,210,0.14)] bg-[#050816]/60 text-[#A0A9BC] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#7CB8E8]/40 group-hover:text-[#7CB8E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
