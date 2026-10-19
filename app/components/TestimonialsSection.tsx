'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const secRef = useRef<HTMLElement>(null);
  const isHoveredRef = useRef(false);

  const testimonials = [
    {
      name: 'Tim · Holden Grange',
      avatar: '/assets/clients/holden-grange-lb1.webp',
      isDark: false,
      quote:
        "Probably the best engineering team I've hired in my professional career. They built our entire client portal and automated systems from scratch: design, backend, and seamless workflow automation.",
    },
    {
      name: 'Marcus · AMZ Digital',
      avatar: '/assets/clients/amz-lb1.webp',
      isDark: true,
      quote:
        'Skyline replaced 4 different SaaS subscriptions with one custom internal platform. Our team now processes leads 10x faster with zero errors.',
    },
    {
      name: 'Elena · Cleopatra Ink',
      avatar: '/assets/clients/cleopatra-ink-lb1.webp',
      isDark: true,
      quote:
        'The speed and polish of the software they delivered exceeded everything we imagined. High-converting, rock-solid, and beautifully engineered.',
    },
    {
      name: 'James · Winning Circle',
      avatar: '/assets/clients/winning-circle-lb1.webp',
      isDark: false,
      quote:
        'They didn’t just write code; they understood our commercial goals. Our client retention jumped by 34% within 60 days of launching the new portal.',
    },
  ];

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (RM) return;

    let timer: NodeJS.Timeout | null = null;
    let inView = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          inView = e.isIntersecting;
          if (inView && !timer) {
            timer = setInterval(() => {
              if (!isHoveredRef.current) {
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
              }
            }, 4600);
          } else if (!inView && timer) {
            clearInterval(timer);
            timer = null;
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(sec);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [testimonials.length]);

  const current = testimonials[activeTestimonial];

  return (
    <section
      ref={secRef}
      className="tst"
      id="testimonials"
      aria-labelledby="tsth"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="wrap">
        <div className="copy">
          <span className="k">Client Messages</span>
          <h2 id="tsth">
            The kind of message owners <span className="c">send us.</span>
          </h2>
          <p>
            From the UK, United States, Germany, and Dubai. Real feedback from founders who scaled their operations and revenue with our custom software.
          </p>
          <button
            type="button"
            className="btn btn-p"
            onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
          >
            <span className="t">
              <i data-t="Start Your Project">Start Your Project</i>
            </span>
            <span className="ar">→</span>
          </button>
        </div>

        <div className="phone" aria-label="Client testimonial lockscreen">
          <div className="lock" aria-hidden="true">
            9:41
          </div>
          <div className="lockd" aria-hidden="true">
            Friday · Skyline
          </div>

          <div className="stack">
            <figure className="note">
              <span className={`av ${current.isDark ? 'd' : 'w'}`}>
                <img
                  src={current.avatar}
                  alt={`${current.name} logo`}
                  width={244}
                  height={202}
                  loading="lazy"
                />
              </span>
              <div>
                <figcaption className="t">
                  <span className="nm">{current.name}</span>
                  <span className="when" aria-hidden="true">
                    now
                  </span>
                </figcaption>
                <blockquote>{current.quote}</blockquote>
              </div>
            </figure>
            <span className="back" aria-hidden="true" />
            <span className="back b2" aria-hidden="true" />
          </div>

          <div className="minis">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                type="button"
                className={`av ${t.isDark ? 'd' : 'w'}`}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  cursor: 'pointer',
                  border: activeTestimonial === idx ? '2px solid var(--cyan)' : '1px solid rgba(255,255,255,0.1)',
                  transform: activeTestimonial === idx ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.25s',
                }}
                aria-label={`View testimonial from ${t.name}`}
              >
                <img src={t.avatar} alt="" width={48} height={48} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
