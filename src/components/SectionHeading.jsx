export function SectionHeading({
  eyebrow,
  title,
  serifAccent,
  description,
  className = '',
  centered = false,
}) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`mb-3.5 inline-flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.7)]" aria-hidden="true" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#F4F6FC] sm:text-4xl lg:text-5xl font-heading leading-[1.15]">
        {title}{' '}
        {serifAccent && (
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
            {serifAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#A4AEC0] sm:text-lg font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

