import { useEffect, useRef, useState } from 'react';

export function CinematicBackground() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (videoRef.current && !reducedMotion) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user interaction
      });
    }
  }, [reducedMotion]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Base Void */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* 2. Real Cinematic Video Layer (Pexels Abstract Digital Flow) */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-55' : 'opacity-0'
          }`}
        >
          <source src="/cinematic-bg.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/32399073/13820342_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      )}

      {/* 3. Dark Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/82 to-[#050816]/95" />

      {/* 4. Ambient Cyan & Violet Atmospheric Cones */}
      <div
        className="absolute -top-32 left-1/2 h-[750px] w-[1100px] -translate-x-1/2 rounded-full opacity-65 blur-[140px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.28) 0%, rgba(129, 140, 248, 0.16) 45%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-[42%] -right-36 h-[550px] w-[700px] rounded-full opacity-45 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.16) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-20 -left-36 h-[550px] w-[700px] rounded-full opacity-45 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
        }}
      />

      {/* 5. Engineering Sub-Pixel Matrix Grid with Elliptical Radial Mask */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(145, 174, 215, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(145, 174, 215, 0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 20%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 20%, black 40%, transparent 95%)',
        }}
      />

      {/* 6. Edge Vignette to Focus Content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,8,22,0.85)_100%)]" />
    </div>
  );
}
