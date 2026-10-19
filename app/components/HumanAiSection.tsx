'use client';

import { useEffect, useRef } from 'react';

export default function HumanAiSection() {
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
    <section ref={secRef} className="s03" id="human-ai" aria-labelledby="s03h">
      <h2 id="s03h" className="sr">
        Where human software craftsmanship meets artificial intelligence.
      </h2>
      <div className="halves">
        <div className="half human">
          <span className="k">Human</span>
          <div className="big" aria-hidden="true">
            HUMAN
          </div>
          <ul>
            <li style={{ '--d': '.1s' } as React.CSSProperties}>Software Architecture</li>
            <li style={{ '--d': '.2s' } as React.CSSProperties}>UX &amp; Design Craft</li>
            <li style={{ '--d': '.3s' } as React.CSSProperties}>Critical Judgement</li>
            <li style={{ '--d': '.4s' } as React.CSSProperties}>Business Context</li>
          </ul>
        </div>
        <div className="half ai">
          <span className="k">Artificial Intelligence</span>
          <div className="big" aria-hidden="true">
            AI
          </div>
          <ul>
            <li style={{ '--d': '.3s' } as React.CSSProperties}>Autonomous Agents</li>
            <li style={{ '--d': '.4s' } as React.CSSProperties}>Automated Pipelines</li>
            <li style={{ '--d': '.5s' } as React.CSSProperties}>24/7 Intelligence</li>
            <li style={{ '--d': '.6s' } as React.CSSProperties}>Instant Scaling</li>
          </ul>
        </div>
        <div className="seam">We engineer both.</div>
      </div>
      <div className="who">
        <span className="k">Skyline</span>
        <p>The developers behind the screen master both.</p>
        <small>
          AI gives us speed, intelligent workflows, and capabilities that simply weren&apos;t possible before. Our engineers bring architectural rigor, clean code, UX clarity, and the discernment to build systems that never fail.
        </small>
      </div>
    </section>
  );
}
