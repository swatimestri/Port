import { useEffect, useRef } from 'react';

export function AtmosphericBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count
    const particleCount = Math.floor(Math.min(width, 1440) / 18);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.55 + 0.2,
        targetAlpha: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Subtle twinkle
          p.alpha += (p.targetAlpha - p.alpha) * 0.02;
          if (Math.abs(p.targetAlpha - p.alpha) < 0.01) {
            p.targetAlpha = Math.random() * 0.6 + 0.2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(121, 185, 232, ${p.alpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Abyssal Canvas Ground */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Cinematic Luminous Top Cones (Hero Ambient Bloom) */}
      <div
        className="absolute -top-40 left-1/2 h-[750px] w-[1100px] -translate-x-1/2 rounded-full opacity-80 blur-[130px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.25) 0%, rgba(129, 140, 248, 0.14) 40%, transparent 75%)',
        }}
      />

      {/* Secondary Mid-Page Ambient Violet Bloom */}
      <div
        className="absolute top-[38%] -right-32 h-[550px] w-[700px] rounded-full opacity-60 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Third Contact Ambient Cyan Bloom */}
      <div
        className="absolute bottom-10 -left-32 h-[550px] w-[700px] rounded-full opacity-55 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 70%)',
        }}
      />

      {/* Engineering Sub-Pixel Matrix Grid with Elliptical Radial Mask */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(145, 174, 215, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(145, 174, 215, 0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 20%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 20%, black 40%, transparent 95%)',
        }}
      />

      {/* Canvas Luminous Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-75" />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,8,22,0.7)_100%)]" />
    </div>
  );
}
