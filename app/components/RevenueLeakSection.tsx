'use client';

import { useEffect, useRef, useState } from 'react';

interface RevenueLeakSectionProps {
  onOpenDemo?: () => void;
}

export default function RevenueLeakSection({ onOpenDemo }: RevenueLeakSectionProps) {
  const secRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeCallout, setActiveCallout] = useState(0);

  useEffect(() => {
    const sec = secRef.current;
    const vid = videoRef.current;
    if (!sec) return;

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let pulseTimer: NodeJS.Timeout | undefined;

    const playVideo = () => {
      sec.classList.add('flowing');
      if (vid && !RM) {
        vid.play().catch(() => {});
      }
    };

    const pauseVideo = () => {
      if (vid && !vid.paused) {
        vid.pause();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sec.classList.add('on');
            playVideo();
            if (!RM) {
              clearInterval(pulseTimer);
              pulseTimer = setInterval(() => {
                setActiveCallout((prev) => (prev + 1) % 3);
              }, 1800);
            }
          } else {
            pauseVideo();
            clearInterval(pulseTimer);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);

    return () => {
      observer.disconnect();
      clearInterval(pulseTimer);
    };
  }, []);

  return (
    <section ref={secRef} className="s2" id="leaks" aria-labelledby="s2h">
      <div className="in">
        <div className="head">
          <span className="k">Revenue leakage</span>
          <h2 id="s2h">
            What&apos;s the point of pouring more in when it&apos;s <span className="am">leaking out?</span>
          </h2>
        </div>

        <div className="field">
          <picture className="plate" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet="/assets/s2/light-m.webp" width={1080} height={1920} />
            <img src="/assets/s2/light.webp" alt="" width={2560} height={1099} />
          </picture>
          <video
            ref={videoRef}
            className="lightflow"
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source media="(max-width: 760px)" src="/assets/s2/light-m.mp4" type="video/mp4" />
            <source src="/assets/s2/light.mp4" type="video/mp4" />
          </video>

          {/* Callout 1 */}
          <div
            className={`co ${activeCallout === 0 ? 'lit' : ''}`}
            style={{
              '--x': '10%',
              '--y': '43%',
              '--mx': '52%',
              '--my': '32.5%',
              '--d': '0.25s',
            } as React.CSSProperties}
            data-side="r"
          >
            <span className="ln" />
            <span className="dot" />
            <b>Attention becomes traffic</b>
            <p>More traffic won&apos;t fix a website that doesn&apos;t convert.</p>
          </div>

          {/* Callout 2 */}
          <div
            className={`co ${activeCallout === 1 ? 'lit' : ''}`}
            style={{
              '--x': '45.5%',
              '--y': '50%',
              '--mx': '49%',
              '--my': '54.8%',
              '--d': '0.7s',
            } as React.CSSProperties}
            data-side="l"
          >
            <span className="ln" />
            <span className="dot" />
            <b>Leads become sales. Or don&apos;t.</b>
            <p>More leads won&apos;t fix poor follow-up.</p>
          </div>

          {/* Callout 3 */}
          <div
            className={`co ${activeCallout === 2 ? 'lit' : ''}`}
            style={{
              '--x': '93%',
              '--y': '49%',
              '--w': '200px',
              '--mx': '51%',
              '--my': '85.7%',
              '--d': '1.15s',
            } as React.CSSProperties}
            data-side="r"
          >
            <span className="ln" />
            <span className="dot" />
            <b>Customers who stay</b>
            <p>More customers won&apos;t fix weak retention.</p>
          </div>
        </div>

        <div className="journey">
          <ol aria-label="The journey">
            <li>Attention</li>
            <li>Traffic</li>
            <li>Leads</li>
            <li>Sales</li>
            <li>Customers</li>
            <li>Retention</li>
          </ol>
          <p>
            Before adding more, we find out what&apos;s already being lost. Your next growth opportunity might already be in your own numbers.
          </p>
          <button
            type="button"
            className="btn btn-p"
            onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
          >
            <span className="t">
              <i data-t="Find My Leaks">Find My Leaks</i>
            </span>
            <span className="ar">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
