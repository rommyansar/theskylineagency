'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let pts: Array<{ x: number; y: number; z: number; r: number; p: number }> = [];
    let mx = 0;
    let my = 0;
    let animationId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reset = () => {
      const r = cv.getBoundingClientRect();
      W = cv.width = Math.max(1, r.width * dpr);
      H = cv.height = Math.max(1, r.height * dpr);
      pts = [];
      const n = Math.round((W * H) / (9000 * dpr * dpr));
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random(),
          r: (0.4 + Math.random() * 1.2) * dpr,
          p: Math.random() * 6,
        });
      }
    };

    reset();
    window.addEventListener('resize', reset);

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const frame = (t: number) => {
      const sy = window.scrollY;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const ox = mx * 30 * p.z * dpr;
        const oy = my * 30 * p.z * dpr - ((sy * 0.08 * p.z * dpr) % H);
        const x = p.x + ox;
        const y = (((p.y + oy) % H) + H) % H;
        const a = 0.2 + 0.55 * p.z * (0.6 + 0.4 * Math.sin(t / 900 + p.p));
        ctx.fillStyle = `rgba(225, 228, 240, ${a})`;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(frame);
    };

    animationId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', reset);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="stars" aria-hidden="true" />;
}
