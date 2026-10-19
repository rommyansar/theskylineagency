'use client';

import { useEffect, useRef } from 'react';

export default function ReelSection() {
  const secRef = useRef<HTMLElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vids = [desktopVideoRef.current, mobileVideoRef.current];
          vids.forEach((vid) => {
            if (!vid) return;
            if (entry.isIntersecting) {
              vid.play().catch(() => {});
            } else {
              vid.pause();
            }
          });
        });
      },
      { threshold: 0 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={secRef} className="reel" id="showreel" aria-label="Skyline Showreel">
      <video
        ref={desktopVideoRef}
        className="film d"
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/img/reel-poster-1.webp"
      >
        <source src="/assets/video/reel-d1.mp4" type="video/mp4" />
      </video>
      <video
        ref={mobileVideoRef}
        className="film m"
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/img/reel-poster-m1.webp"
      >
        <source src="/assets/video/reel-m1.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
