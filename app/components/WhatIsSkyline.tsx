'use client';

import { useEffect, useRef } from 'react';

export default function WhatIsSkyline() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sec.classList.add('on');
            observer.unobserve(sec);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={secRef} className="s02" id="what-is-skyline" aria-labelledby="s02h">
      <div className="wrap">
        <span className="k">What is Asteroid</span>
        <div className="grid">
          <div>
            <h2 id="s02h">
              Business <span className="u">transformation.</span> Without the corporate{' '}
              <span className="x">bullshit.</span>
            </h2>
            <div className="lines" aria-hidden="true">
              <span style={{ '--d': '1.5s' } as React.CSSProperties}>
                Sometimes the ad is the problem.
              </span>
              <span style={{ '--d': '1.7s' } as React.CSSProperties}>
                Sometimes it&apos;s the website.
              </span>
              <span style={{ '--d': '1.9s' } as React.CSSProperties}>
                Sometimes nobody follows up.
              </span>
            </div>
          </div>
          <div className="body">
            <p>
              Your business doesn&apos;t need another agency. It needs someone willing to look at the whole thing and fix what actually matters.
            </p>
            <p>
              Asteroid works across marketing, sales, technology, AI, people, operations, customer experience and management, because businesses don&apos;t struggle neatly inside individual departments.
            </p>
            <p className="last">We go where the problem goes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
