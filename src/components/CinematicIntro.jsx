import { useEffect, useState, useRef } from 'react';

export function CinematicIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const hasFinishedRef = useRef(false);

  const stages = [
    { code: 'SYS_INIT', text: 'Initializing runtime environment & kernel modules...' },
    { code: 'COMPILING', text: 'Loading core stack: Java, Spring Boot, React & REST APIs...' },
    { code: 'AI_PIPELINE', text: 'Calibrating intelligent models: Computer Vision & NLP...' },
    { code: 'TELEMETRY', text: 'Synthesizing dark atmospheric canvas & interface shaders...' },
    { code: 'ALL_SYSTEMS_GO', text: 'System ready. Launching portfolio experience...' },
  ];

  useEffect(() => {
    // Lock body scroll while intro is playing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Target duration: 3.8 seconds (in requested 3-5s window)
    const duration = 3800;
    const startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out progression
      const currentPct = Math.floor(rawProgress * 100);
      setProgress(currentPct);

      // Update telemetry stage
      if (rawProgress < 0.22) {
        setCurrentStage(0);
      } else if (rawProgress < 0.48) {
        setCurrentStage(1);
      } else if (rawProgress < 0.72) {
        setCurrentStage(2);
      } else if (rawProgress < 0.92) {
        setCurrentStage(3);
      } else {
        setCurrentStage(4);
      }

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        if (!hasFinishedRef.current) {
          hasFinishedRef.current = true;
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.style.overflow = originalOverflow;
              if (onComplete) onComplete();
            }, 700);
          }, 350);
        }
      }
    };

    frameId = requestAnimationFrame(tick);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 300);
  };

  const formattedPct = String(progress).padStart(3, '0');

  return (
    <aside
      aria-label="Portfolio system boot loading sequence"
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#050816] text-[#F4F6FC] transition-all duration-700 ease-out select-none p-6 sm:p-10 md:p-12 overflow-hidden ${
        isExiting ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cinematic Radial Ambient Glows matching Website Palette */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-35 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(129, 140, 248, 0.15) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-[450px] w-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Sub-pixel 48px Atmospheric Engineering Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* HUD Corner Tech Accents */}
      <div className="pointer-events-none absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-[#38BDF8]/40" aria-hidden="true" />
      <div className="pointer-events-none absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-[#38BDF8]/40" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[#38BDF8]/40" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#38BDF8]/40" aria-hidden="true" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[rgba(145,174,215,0.12)] pb-4">
        {/* System Telemetry Beacon */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
            SWATI_SYSTEM // V1.0.0
          </span>
        </div>

        {/* Center Skip Pill */}
        <button
          type="button"
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 rounded-full border border-[rgba(145,174,215,0.2)] bg-[#0C1425]/80 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#A4AEC0] backdrop-blur-md transition hover:border-[#38BDF8]/60 hover:text-[#F4F6FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          aria-label="Skip sequence"
        >
          <span>Skip Boot</span>
          <span className="text-[10px] text-[#64748B] group-hover:text-[#38BDF8]">[ESC]</span>
        </button>

        {/* Node Location Metadata */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#A4AEC0]/80">
          <span className="text-[#818CF8]">LOC:</span>
          <span>15.36°N, 75.12°E</span>
        </div>
      </div>

      {/* Centerpiece: Tech Emblem & Identity */}
      <div className="my-auto flex flex-col items-center justify-center text-center">
        {/* Concentric Rotating Orbital Rings */}
        <div className="relative mb-8 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-[#38BDF8]/30" />
          {/* Inner Counter-Rotating Ring */}
          <div className="absolute inset-2 animate-[spin_6s_linear_infinite_reverse] rounded-full border-t-2 border-r border-[#818CF8]/60 border-transparent" />
          {/* Glowing Center Core */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(56,189,248,0.4)] bg-[#0C1425]/90 shadow-[0_0_30px_rgba(56,189,248,0.25)] sm:h-20 sm:w-20">
            <span className="font-heading text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] sm:text-2xl">
              SM
            </span>
          </div>
        </div>

        {/* Identity & Role matching Website Typography */}
        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#F4F6FC] sm:text-4xl md:text-5xl">
          Swati R.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
            Mestri
          </span>
        </h1>
        <p className="mt-2.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#38BDF8]">
          SOFTWARE ENGINEER &bull; FULL-STACK &amp; AI
        </p>

        {/* Dynamic Terminal Telemetry Feed */}
        <div className="mt-8 w-full max-w-lg rounded-xl border border-[rgba(145,174,215,0.16)] bg-[#0C1425]/85 p-3.5 sm:p-4 backdrop-blur-md shadow-card">
          <div className="flex items-center justify-between border-b border-[rgba(145,174,215,0.1)] pb-2 mb-2 font-mono text-[11px] text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>KERNEL_PROCESS</span>
            </span>
            <span className="text-[#818CF8]">{stages[currentStage].code}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-[#A4AEC0] text-left">
            <span className="text-[#38BDF8] select-none">&gt;</span>
            <span className="truncate">{stages[currentStage].text}</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry HUD & High-Tech Segmented Progress */}
      <div className="border-t border-[rgba(145,174,215,0.12)] pt-5">
        <div className="mb-3 flex items-center justify-between font-mono text-xs text-[#A4AEC0]">
          <div className="flex items-center gap-2">
            <span className="text-[#64748B]">LOAD_STATUS:</span>
            <span className="font-semibold text-[#F4F6FC]">{progress === 100 ? 'COMPLETE' : 'STREAMING'}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold font-heading text-[#F4F6FC] tabular-nums sm:text-3xl">
              {formattedPct}
            </span>
            <span className="text-xs text-[#38BDF8]">%</span>
          </div>
        </div>

        {/* High-Tech Glowing Progress Bar with Scanning Head */}
        <div
          className="relative h-2 w-full overflow-hidden rounded-full bg-[#121C34] border border-[rgba(145,174,215,0.15)]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] transition-all duration-75 ease-out shadow-[0_0_15px_rgba(56,189,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer Technical Metrics Bar */}
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#64748B]">
          <div className="flex items-center gap-3">
            <span>MEM: 64MB / 128MB</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">STACK: REACT + SPRING</span>
          </div>
          <div>
            <span>TARGET: PORT_5173 // LOCALHOST</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
