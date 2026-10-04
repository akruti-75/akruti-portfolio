import React, { useEffect, useRef } from 'react';

const BLOBS = [
  { c: '124,92,255', x: 0.2, y: 0.25, r: 0.5, s: 0.8 },
  { c: '255,92,138', x: 0.8, y: 0.2, r: 0.42, s: 0.62 },
  { c: '51,214,193', x: 0.55, y: 0.8, r: 0.45, s: 0.5 },
];

const AuroraBackground: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      BLOBS.forEach((b, i) => {
        const x = (b.x + Math.sin((t * b.s) / 1000 + i * 2) * 0.16) * w;
        const y = (b.y + Math.cos((t * b.s) / 1000 + i) * 0.14) * h;
        const r = b.r * Math.max(w, h) * 0.6;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${b.c},.30)`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      ctx.globalCompositeOperation = 'source-over';
      t += 16;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="hidden dark:block fixed inset-0 w-full h-full -z-10 pointer-events-none" />;
};

export default AuroraBackground;
