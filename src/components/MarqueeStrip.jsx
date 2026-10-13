export function MarqueeStrip({
  items = [
    'DESIGN MINDFULLY',
    'BUILD WITH PURPOSE',
    'ARCHITECT RESILIENT SYSTEMS',
    'KEEP LEARNING',
    'FULL-STACK & AI',
  ],
  separator = '·',
  className = '',
  speed = 'normal', // 'normal' | 'slow'
  variant = 'editorial', // 'editorial' | 'background'
}) {
  const contentString = items.join(`  ${separator}  `) + `  ${separator}  `;
  // Repeat content 4 times to guarantee full viewport seamless loop
  const repeatArray = [0, 1, 2, 3];

  const animationClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  if (variant === 'background') {
    return (
      <div
        className={`pointer-events-none select-none overflow-hidden opacity-[0.06] ${className}`}
        aria-hidden="true"
      >
        <div className={`flex w-max ${animationClass}`}>
          {repeatArray.map((i) => (
            <span
              key={i}
              className="mr-8 font-serif italic text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl whitespace-nowrap"
            >
              {contentString}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden py-4 border-y border-[rgba(145,174,215,0.1)] bg-[#050816]/40 backdrop-blur-sm select-none ${className}`}
      aria-label="Core principles ticker"
    >
      <div className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}>
        {repeatArray.map((i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            {items.map((item, idx) => (
              <span key={idx} className="flex items-center">
                <span className="font-serif italic text-base sm:text-lg tracking-wide text-[#E2E8F0]/70 transition-colors group-hover:text-[#F4F6FC]">
                  {item}
                </span>
                <span className="mx-4 text-xs font-mono text-[#38BDF8]/60 sm:mx-6" aria-hidden="true">
                  {separator}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
