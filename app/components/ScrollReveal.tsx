'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add js class to html root
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const FINE = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const $$ = (s: string, r?: Element | Document) =>
      Array.prototype.slice.call((r || document).querySelectorAll(s)) as HTMLElement[];

    /* ---------- 1. HEADLINES: split plain h2s into words for word-by-word blur-in arrival ---------- */
    const wordCleanups: Array<() => void> = [];
    const h2s = $$('main h2');
    h2s.forEach((h) => {
      if (h.children.length || h.classList.contains('sr') || h.closest('.menu, .nav, .s06 .lane')) return;
      const text = h.textContent?.trim();
      if (!text || text.length > 95) return;
      h.removeAttribute('data-rv');
      h.setAttribute('data-words', '');
      h.innerHTML = text
        .split(/\s+/)
        .map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`)
        .join(' ');
    });

    if (RM || !('IntersectionObserver' in window)) {
      $$('[data-words]').forEach((h) => h.classList.add('w-in'));
    } else {
      const wordsIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('w-in');
              wordsIo.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      $$('[data-words]').forEach((h) => {
        const r = h.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
          h.classList.add('w-in');
        } else {
          wordsIo.observe(h);
        }
      });
      wordCleanups.push(() => wordsIo.disconnect());
    }

    /* ---------- 2. SCROLL REVEALS: tag text blocks, stagger siblings with blur-in ---------- */
    const SKIP =
      '.nav, .menu, .pre, .foot, .stage, .tk, .s06, .hero3, .s02 .lines, .s03 .half li, .s05 .panels li, .s3 li, .s2 .co, .s4 .list, .s13 .cut, .legal';
    const secs = $$('main > section');
    secs.forEach((sec) => {
      const candidates = $$(
        'h2, h3, .k, .lead, .intro, .ct > p, .who p, .who small, .body p, .cap, .sum p, .sum .btn, .act, .nums li, .others li, .ig li, dl > div, .list li, .steps li, .faq details, .tier .cap, .copy > *, .sh, .nh, .oh',
        sec
      ).filter(
        (el) =>
          !el.closest(SKIP) &&
          !el.hasAttribute('data-rv') &&
          !el.hasAttribute('data-words') &&
          !el.querySelector('[data-rv]') &&
          !el.querySelector('[data-words]') &&
          el.getBoundingClientRect().height > 0
      );

      if (!candidates.length) return;

      const parentCount = new Map<HTMLElement, number>();
      candidates.forEach((el) => {
        const p = el.parentElement;
        if (!p) return;
        const count = parentCount.get(p) || 0;
        parentCount.set(p, count + 1);
        el.style.setProperty('--i', String(Math.min(count, 8)));
        el.setAttribute('data-rv', '');
      });
    });

    if (RM) {
      $$('[data-rv]').forEach((el) => el.classList.add('rv-in'));
    } else {
      const rvIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('rv-in');
              rvIo.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -20px 0px', threshold: 0.05 }
      );

      $$('[data-rv]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
          el.classList.add('rv-in');
        } else {
          rvIo.observe(el);
        }
      });
      wordCleanups.push(() => rvIo.disconnect());
    }

    /* ---------- 3. AMBIENT GLOW: one hue per section crossfading between two fixed layers ---------- */
    let ambCleanup = () => {};
    if (FINE && !RM && 'IntersectionObserver' in window) {
      const C = '#22E8FF';
      const M = '#FF2D95';
      const U = '#7A5CFF';
      const HUE: Record<string, string> = {
        hero: '',
        'what-is-skyline': U,
        'human-ai': U,
        leaks: M,
        transform: C,
        capabilities: U,
        who: M,
        testimonials: U,
        engagement: U,
        faq: C,
        global: M,
        contact: M,
      };

      const glowSecs = secs.filter((s) => s.id in HUE);
      if (glowSecs.length) {
        let ambEl = document.querySelector('.amb') as HTMLElement | null;
        if (!ambEl) {
          ambEl = document.createElement('div');
          ambEl.className = 'amb';
          ambEl.setAttribute('aria-hidden', 'true');
          ambEl.innerHTML = '<i></i><i></i>';
          document.body.appendChild(ambEl);
        }

        const layers = $$(('i'), ambEl);
        let cur = 0;
        let color: string | null = null;

        const setGlow = (c: string, right: boolean) => {
          if (c === color) return;
          color = c;
          if (!c) {
            layers.forEach((l) => l.classList.remove('on'));
            return;
          }
          const n = 1 - cur;
          layers[n].style.setProperty('--c', c);
          layers[n].style.setProperty('--ax', right ? '78%' : '22%');
          layers[n].style.setProperty('--ay', right ? '36%' : '64%');
          layers[n].classList.add('on');
          layers[cur].classList.remove('on');
          cur = n;
        };

        const ambIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                setGlow(HUE[e.target.id] || '', glowSecs.indexOf(e.target as HTMLElement) % 2 === 0);
              }
            });
          },
          { rootMargin: '-40% 0px -40% 0px' }
        );

        glowSecs.forEach((s) => ambIo.observe(s));

        const tail = document.querySelector('main > .talk, .foot');
        let ambTailIo: IntersectionObserver | null = null;
        if (tail && !(tail.id in HUE)) {
          ambTailIo = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (e.isIntersecting) setGlow('', false);
              });
            },
            { rootMargin: '-40% 0px -40% 0px' }
          );
          ambTailIo.observe(tail);
        }

        ambCleanup = () => {
          ambIo.disconnect();
          ambTailIo?.disconnect();
          ambEl?.remove();
        };
      }
    }

    /* ---------- 4. NUMBER COUNTERS: count up smoothly on entrance ---------- */
    let counterCleanup = () => {};
    if ('IntersectionObserver' in window) {
      const counters = $$('.s09 .nums b, .count b, .ct dt, [data-counter]');
      if (counters.length) {
        const cIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              cIo.unobserve(e.target);
              const el = e.target as HTMLElement;
              const txt = el.textContent || '';
              const m = txt.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
              if (!m || RM) return;

              const pre = m[1];
              const num = m[2];
              const post = m[3];
              const dec = (num.split('.')[1] || '').length;
              const target = parseFloat(num.replace(/,/g, ''));
              const t0 = performance.now();
              const dur = 1100 + Math.min(900, target / 100);

              const fmt = (v: number) => {
                let s = v.toFixed(dec);
                if (num.indexOf(',') > -1) {
                  s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
                return s;
              };

              const step = (now: number) => {
                const k = Math.min(1, (now - t0) / dur);
                const ease = 1 - Math.pow(1 - k, 3);
                el.textContent = pre + fmt(target * ease) + post;
                if (k < 1) {
                  requestAnimationFrame(step);
                } else {
                  el.textContent = txt;
                  el.classList.add('done');
                }
              };
              requestAnimationFrame(step);
            });
          },
          { threshold: 0.5 }
        );

        counters.forEach((el) => cIo.observe(el));
        counterCleanup = () => cIo.disconnect();
      }
    }

    /* ---------- 5. LEAVING SECTION: text blurs and fades as it slides off top (desktop) ---------- */
    let leaveCleanup = () => {};
    if (FINE && !RM) {
      const SEL =
        '.head, .copy, .body, .ct, .sum, .who, .cap, .lines, .labs, .nh, .oh, .sh, .act, .ticket, .places, .tag, .journey, .s02 .wrap';
      const items = secs.map((s) => ({
        s,
        els: $$(SEL, s),
        hs: $$('h2', s),
        last: -1,
      }));

      let ticking = false;
      const frame = () => {
        ticking = false;
        const vh = window.innerHeight;
        items.forEach((it) => {
          const r = it.s.getBoundingClientRect();
          let p = 0;
          if (r.top < 0 && r.bottom > 0) {
            p = Math.max(0, Math.min(1, (vh * 0.38 - r.bottom) / (vh * 0.3)));
          }
          const q = Math.round(p * 6) / 6;
          if (q === it.last) return;
          it.last = q;
          it.els.forEach((el) => {
            el.style.opacity = q <= 0 ? '' : (1 - q * 0.75).toFixed(2);
          });
          it.hs.forEach((h) => {
            h.style.filter = q <= 0 ? '' : `blur(${(q * 8).toFixed(1)}px)`;
          });
        });
      };

      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(frame);
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      frame();

      leaveCleanup = () => window.removeEventListener('scroll', onScroll);
    }

    return () => {
      wordCleanups.forEach((fn) => fn());
      ambCleanup();
      counterCleanup();
      leaveCleanup();
    };
  }, []);

  return null;
}

