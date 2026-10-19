'use client';

import { useEffect, useRef, useCallback } from 'react';

interface CapabilitiesTerminalProps {
  onOpenDemo?: () => void;
}

export default function CapabilitiesTerminal({ onOpenDemo }: CapabilitiesTerminalProps) {
  const termRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<() => void>(() => {});

  const handleReplayClick = useCallback(() => {
    if (replayRef.current) {
      replayRef.current();
    }
  }, []);

  useEffect(() => {
    const term = termRef.current;
    if (!term) return;
    const termEl = term;

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (RM || !('IntersectionObserver' in window)) {
      termEl.classList.add('done');
      return;
    }

    termEl.classList.add('typing');

    // Collect all directory bold titles and file list items
    const lines: HTMLElement[] = [];
    termEl.querySelectorAll<HTMLElement>('.dir').forEach((d) => {
      const b = d.querySelector<HTMLElement>('b');
      if (b) lines.push(b);
      d.querySelectorAll<HTMLElement>('li').forEach((li) => lines.push(li));
    });

    const say = termEl.querySelector<HTMLElement>('.prompt .say');
    if (!say) return;
    const sayEl = say;

    // Remember the full text of every line, start each one empty
    const full = lines.map((el) => {
      const original = el.getAttribute('data-text') || el.textContent || '';
      el.setAttribute('data-text', original);
      el.textContent = '';
      return original;
    });

    const sayHTML = sayEl.innerHTML;
    const sayText = sayEl.getAttribute('data-text') || sayEl.textContent || '';
    sayEl.setAttribute('data-text', sayText);
    sayEl.textContent = '';

    let started = false;
    let stepTimer: NodeJS.Timeout | null = null;
    let lineTimer: NodeJS.Timeout | null = null;
    let sayTimer: NodeJS.Timeout | null = null;

    function clearTimers() {
      if (stepTimer) clearTimeout(stepTimer);
      if (lineTimer) clearTimeout(lineTimer);
      if (sayTimer) clearTimeout(sayTimer);
      stepTimer = null;
      lineTimer = null;
      sayTimer = null;
    }

    function typeLine(i: number, cb: () => void) {
      if (i >= lines.length) return cb();
      const el = lines[i];
      const t = full[i];
      let n = 0;
      el.classList.add('typed');

      function step() {
        n += 2;
        el.textContent = t.slice(0, n);
        if (n < t.length) {
          stepTimer = setTimeout(step, 9);
        } else {
          el.textContent = t; // Ensure exact final text
          lineTimer = setTimeout(() => {
            typeLine(i + 1, cb);
          }, 18);
        }
      }
      step();
    }

    function typeSay() {
      let n = 0;
      sayEl.classList.add('typed');
      function step() {
        n += 1;
        sayEl.textContent = sayText.slice(0, n);
        if (n < sayText.length) {
          sayTimer = setTimeout(step, 24);
        } else {
          sayEl.innerHTML = sayHTML;
          termEl.classList.add('done');
        }
      }
      step();
    }

    function startAnimation() {
      clearTimers();
      termEl.classList.remove('done');
      termEl.classList.add('typing');
      lines.forEach((el) => {
        el.classList.remove('typed');
        el.textContent = '';
      });
      sayEl.classList.remove('typed');
      sayEl.textContent = '';
      setTimeout(() => {
        typeLine(0, typeSay);
      }, 100);
    }

    replayRef.current = startAnimation;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started) return;
          started = true;
          io.disconnect();
          setTimeout(() => {
            typeLine(0, typeSay);
          }, 200);
        });
      },
      { threshold: 0.25 }
    );

    io.observe(termEl);

    return () => {
      io.disconnect();
      clearTimers();
    };
  }, []);

  return (
    <section className="s06" id="capabilities" aria-labelledby="s06h">
      <div className="wrap">
        <span className="k">Asteroid Capabilities</span>
        <h2 id="s06h">
          If your business needs it, <span className="gr">chances are we do it.</span>
        </h2>

        <div
          ref={termRef}
          className="term"
          role="region"
          aria-label="Everything we do, as a directory listing"
        >
          <div className="bar" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <span>asteroid@build:~$ capabilities/</span>
            <button
              type="button"
              className="term-replay"
              onClick={handleReplayClick}
              title="Replay typing animation"
              aria-label="Replay animation"
            >
              ↺ Replay
            </button>
          </div>

          <div className="tree">
            {/* 01: strategy/ */}
            <div className="dir" data-dir="strategy/">
              <b>strategy/</b>
              <ul>
                <li>business-strategy.md</li>
                <li>market-research.md</li>
                <li>go-to-market.md</li>
                <li>business-setup.md</li>
                <li>expansion.md</li>
              </ul>
            </div>

            {/* 02: marketing/ */}
            <div className="dir" data-dir="marketing/">
              <b>marketing/</b>
              <ul>
                <li>paid-media.md</li>
                <li>seo.md</li>
                <li>lead-generation.md</li>
                <li>social-media.md</li>
                <li>content.md</li>
                <li>email-marketing.md</li>
              </ul>
            </div>

            {/* 03: brand/ */}
            <div className="dir" data-dir="brand/">
              <b>brand/</b>
              <ul>
                <li>branding.md</li>
                <li>creative-direction.md</li>
                <li>graphic-design.md</li>
                <li>copywriting.md</li>
                <li>photography.md</li>
                <li>video-production.md</li>
              </ul>
            </div>

            {/* 04: technology/ */}
            <div className="dir" data-dir="technology/">
              <b>technology/</b>
              <ul>
                <li>websites.md</li>
                <li>e-commerce.md</li>
                <li>web-applications.md</li>
                <li>mobile-apps.md</li>
                <li>custom-software.md</li>
                <li>crm.md</li>
                <li>integrations.md</li>
              </ul>
            </div>

            {/* 05: ai/ */}
            <div className="dir" data-dir="ai/">
              <b>ai/</b>
              <ul>
                <li>custom-ai-tools.md</li>
                <li>ai-agents.md</li>
                <li>workflow-automation.md</li>
                <li>chatbots.md</li>
                <li>ai-voice-calls.md</li>
              </ul>
            </div>

            {/* 06: sales/ */}
            <div className="dir" data-dir="sales/">
              <b>sales/</b>
              <ul>
                <li>sales-strategy.md</li>
                <li>lead-management.md</li>
                <li>customer-journeys.md</li>
                <li>appointment-booking.md</li>
                <li>outbound-calling.md</li>
              </ul>
            </div>

            {/* 07: people/ */}
            <div className="dir" data-dir="people/">
              <b>people/</b>
              <ul>
                <li>recruitment.md</li>
                <li>hiring.md</li>
                <li>onboarding.md</li>
                <li>training.md</li>
                <li>team-structures.md</li>
                <li>sops.md</li>
              </ul>
            </div>

            {/* 08: finance/ */}
            <div className="dir" data-dir="finance/">
              <b>finance/</b>
              <ul>
                <li>operations.md</li>
                <li>helpdesk.md</li>
                <li>back-office-support.md</li>
                <li>financial-consulting.md</li>
                <li>forecasting.md</li>
                <li>management-support.md</li>
              </ul>
            </div>
          </div>

          <p className="prompt">
            <span className="ps">asteroid@build:~$</span>{' '}
            <span className="say">
              And if it isn&apos;t on the list,{' '}
              <button
                type="button"
                onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: 'var(--mag)',
                  borderBottom: '1px solid rgba(255, 45, 149, 0.6)',
                  cursor: 'pointer',
                  font: 'inherit',
                }}
              >
                ask us anyway.
              </button>
            </span>
            <i className="cur" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}
