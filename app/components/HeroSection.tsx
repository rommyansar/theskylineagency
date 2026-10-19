'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export default function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLImageElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLElement>(null);
  const bgpRef = useRef<HTMLDivElement>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    const word = wordRef.current;
    const spot = spotRef.current;
    const fig = figureRef.current;
    const head = headRef.current;
    const meta = metaRef.current;
    const side = sideRef.current;
    const bgp = bgpRef.current;

    if (!sec || !stage || !word || !fig || !head || !meta || !side || !bgp) return;

    const letters = Array.from(word.querySelectorAll('i'));
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let mx = -1;
    let my = -1;
    let hovering = false;
    let last = -1;
    let lrect: Array<{ x: number; y: number }> = [];

    const measureLetters = () => {
      const s = stage.getBoundingClientRect();
      lrect = letters.map((l) => {
        const b = l.getBoundingClientRect();
        return {
          x: b.left - s.left + b.width / 2,
          y: b.top - s.top + b.height / 2,
        };
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        const r = stage.getBoundingClientRect();
        mx = e.clientX - r.left;
        my = e.clientY - r.top;
        px = (mx / r.width - 0.5) * 2;
        py = (my / r.height - 0.5) * 2;
        hovering = true;
        sec.classList.add('hover');
      }
    };

    const onPointerLeave = () => {
      hovering = false;
      sec.classList.remove('hover');
      px = 0;
      py = 0;
      letters.forEach((l) => {
        l.style.transform = '';
        l.classList.remove('near');
      });
    };

    stage.addEventListener('pointermove', onPointerMove, { passive: true });
    stage.addEventListener('pointerleave', onPointerLeave);

    // Mobile Touch Parallax
    let touchStartX: number | null = null;
    const onTouchStart = () => {
      touchStartX = null;
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (touchStartX === null) touchStartX = t.clientX;
      px = Math.max(-1, Math.min(1, (t.clientX - touchStartX) / 160));
    };
    const onTouchEnd = () => {
      px = 0;
    };

    stage.addEventListener('touchstart', onTouchStart, { passive: true });
    stage.addEventListener('touchmove', onTouchMove, { passive: true });
    stage.addEventListener('touchend', onTouchEnd, { passive: true });

    // Hero LED flicker once per session
    try {
      const seen = sessionStorage.getItem('skyline-hero-flick') === '1';
      if (!seen) {
        sessionStorage.setItem('skyline-hero-flick', '1');
        sec.classList.add('flick');
        setTimeout(() => sec.classList.remove('flick'), 1000);
      }
    } catch (e) {}

    // Periodic Random Glitch
    let glitchTimeout: NodeJS.Timeout;
    let isGlitching = false;

    const burst = (n: number) => {
      if (isGlitching) return;
      isGlitching = true;
      word.classList.add('glitch');
      setTimeout(() => {
        word.classList.remove('glitch');
        isGlitching = false;
        if (n > 1) {
          setTimeout(() => burst(n - 1), 90 + Math.random() * 160);
        }
      }, 460);
    };

    const scheduleGlitch = () => {
      glitchTimeout = setTimeout(() => {
        if (document.visibilityState === 'visible' && last < 0.5) {
          burst(Math.random() < 0.35 ? 2 : 1);
        }
        scheduleGlitch();
      }, 2500 + Math.random() * 4000);
    };

    scheduleGlitch();
    setTimeout(() => burst(2), 1200);

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let animationId: number;

    const tick = () => {
      tx += (px - tx) * 0.06;
      ty += (py - ty) * 0.06;
      const rest = 1 - Math.min(1, last < 0 ? 0 : last / 0.6);

      bgp.style.transform = `translate(${tx * -10 * rest}px, ${ty * -7 * rest}px)`;
      fig.style.transform = `translateX(calc(-50% + ${tx * 6 * rest}px))`;
      word.style.setProperty('--px', `${tx * 18 * rest}px`);

      if (hovering && spot) {
        spot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        if (!lrect.length) measureLetters();
        for (let i = 0; i < letters.length; i++) {
          const d = Math.hypot(lrect[i].x - mx, lrect[i].y - my);
          const k = Math.max(0, 1 - d / 260);
          letters[i].style.transform = `translateY(${-k * 18}px) scale(${1 + k * 0.06})`;
          letters[i].classList.toggle('near', k > 0.35);
        }
      }

      // Scroll choreography
      const r = sec.getBoundingClientRect();
      const top = r.top + window.scrollY;
      const span = Math.max(1, sec.offsetHeight - window.innerHeight);
      const p = Math.max(0, Math.min(1, (window.scrollY - top) / span));

      if (p !== last) {
        last = p;
        sec.style.setProperty('--p', p.toFixed(3));
        const e = ease(Math.min(1, p / 0.75));

        // The title: lifts and fades
        word.style.opacity = (1 - e * 0.92).toFixed(3);
        word.style.transform = `translate(calc(-50% + var(--px, 0px)), ${-50 - e * 36}%) scale(${1 - e * 0.1})`;

        // The headline arrives
        const isNarrow = window.innerWidth <= 900;
        head.style.opacity = Math.min(1, e * 1.3).toFixed(3);
        head.style.transform = isNarrow
          ? `translateY(${(1 - e) * 40}vh)`
          : `translateY(calc(-50% + ${(1 - e) * 40}vh))`;

        // The left meta arrives
        const e2 = ease(Math.max(0, Math.min(1, (p - 0.1) / 0.7)));
        meta.style.opacity = Math.min(1, e2 * 1.3).toFixed(3);
        meta.style.transform = `translateY(${(1 - e2) * 40}vh)`;

        side.style.opacity = (0.42 + e * 0.58) / 0.42 > 1 ? '1' : '';
        sec.classList.toggle('on', e > 0.55);

        if (p > 0.01) {
          sec.classList.add('moved');
          setHasScrolled(true);
        } else {
          sec.classList.remove('moved');
          setHasScrolled(false);
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      lrect = [];
    };

    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(tick);

    return () => {
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerleave', onPointerLeave);
      stage.removeEventListener('touchstart', onTouchStart);
      stage.removeEventListener('touchmove', onTouchMove);
      stage.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      clearTimeout(glitchTimeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero3" id="hero" aria-label="Skyline">
      <div ref={stageRef} className="stage">
        <div className="field" aria-hidden="true" />
        <div ref={bgpRef} className="bgp" aria-hidden="true">
          <picture>
            <source media="(max-width: 760px)" srcSet="/assets/figure/skyline-bg.jpg" />
            <img
              src="/assets/figure/skyline-bg.jpg"
              alt="Skyline Cyber Metropolis Panorama"
              width={1376}
              height={768}
              fetchPriority="high"
            />
          </picture>
        </div>

        <aside ref={sideRef} className="side" aria-hidden="true">
          <span>SKYLINE</span>
          <span>ARCHITECT</span>
          <span>SOFTWARE</span>
          <span>AUTOMATE</span>
          <span>SCALE</span>
        </aside>

        <img
          ref={figureRef}
          className="figure"
          src="/assets/figure/skyline-tower.jpg"
          sizes="(max-width: 760px) 90vw, 48vh"
          alt="Skyline Cyber Tower Monolith"
          width={768}
          height={1376}
          fetchPriority="high"
        />

        <div ref={wordRef} className="word" aria-hidden="true">
          <i>S</i>
          <i>K</i>
          <i>Y</i>
          <i>L</i>
          <i>I</i>
          <i>N</i>
          <i>E</i>
          <span className="gl a">SKYLINE</span>
          <span className="gl b">SKYLINE</span>
        </div>

        <div ref={spotRef} className="spot" aria-hidden="true" />

        <div className="copy">
          <div ref={metaRef} className="meta">
            <div className="m">
              <span className="k">Hub</span>
              <b>Skyline Engineering</b>
            </div>
            <div className="m">
              <span className="k">Method</span>
              <b>Architect · Automate · Scale</b>
            </div>
            <div className="m">
              <span className="k">Global</span>
              <b>London · New York · Dubai</b>
            </div>
          </div>

          <div ref={headRef} className="head">
            <h1>
              <span className="pre-l">Architect your enterprise</span>{' '}
              <span className="big">WITHOUT</span>{' '}
              <span className="big cy">THE BOTTLENECKS</span>{' '}
              <span className="tail">that choke your growth.</span>
            </h1>
            <p>
              The clunky web apps. The manual spreadsheets. The missed leads. The messy operations. Skyline engineers custom software, client portals, and automated business systems that make your entire company run effortlessly.
            </p>
            <div className="act">
              <button
                type="button"
                className="btn btn-p"
                onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
              >
                <span className="t">
                  <i data-t="Engineer My Software">Engineer My Software</i>
                </span>
                <span className="ar">→</span>
              </button>
              <a className="btn btn-s" href="#what-is-skyline">
                <span className="t">
                  <i data-t="See What We Do">See What We Do</i>
                </span>
              </a>
            </div>
            <span className="sup">Human Expertise × AI Systems × Flawless Execution</span>
          </div>
        </div>

        {!hasScrolled && (
          <div className="hint" aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>
        )}
      </div>
    </section>
  );
}
