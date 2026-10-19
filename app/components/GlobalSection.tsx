'use client';

import { useEffect, useRef } from 'react';

export default function GlobalSection() {
  const secRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const places = [
    'United Kingdom',
    'United States',
    'UAE',
    'Qatar',
    'Germany',
    'Singapore',
    'Australia',
  ];

  useEffect(() => {
    const sec = secRef.current;
    const vid = videoRef.current;
    if (!sec || !vid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={secRef} className="s11" id="global" aria-labelledby="s11h">
      <video
        ref={videoRef}
        className="film"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/img/end.webp"
        aria-hidden="true"
      >
        <source src="/assets/video/end.mp4" type="video/mp4" />
      </video>
      <div className="veil" aria-hidden="true" />
      <div className="wrap mid">
        <span className="k">Global Presence</span>
        <h2 id="s11h">Somewhere, it&apos;s always business hours.</h2>
        <p className="count">
          <b>7+</b> countries worked across, and counting.
        </p>
        <ul className="places" aria-label="Countries worked across">
          {places.map((place, idx) => (
            <li key={idx}>{place}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
