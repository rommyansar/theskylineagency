'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhatWeTransform() {
  const secRef = useRef<HTMLElement>(null);
  const [liveIdx, setLiveIdx] = useState(0);

  const areas = [
    {
      num: '01',
      title: 'Strategy & Business',
      desc: "From figuring out where the business should go next to figuring out why it isn't getting there.",
    },
    {
      num: '02',
      title: 'Marketing & Growth',
      desc: 'Attention is nice. Revenue is nicer. We build marketing around what happens after the click too.',
    },
    {
      num: '03',
      title: 'Brand & Creative',
      desc: 'Branding, content, design, video, 2D, 3D and everything people actually see before deciding what they think of you.',
    },
    {
      num: '04',
      title: 'Web, Software & Technology',
      desc: 'Websites, apps, platforms and custom software built around what the business actually needs.',
    },
    {
      num: '05',
      title: 'AI & Automation',
      desc: 'AI tools, agents, workflows and automations that remove repetitive work instead of creating more of it.',
    },
    {
      num: '06',
      title: 'Sales & Customer Experience',
      desc: 'Better follow-up, better systems, better journeys and fewer good leads quietly disappearing.',
    },
    {
      num: '07',
      title: 'People & Operations',
      desc: 'Hiring, onboarding, documentation, processes and the unglamorous things that suddenly become very important when a business grows.',
    },
    {
      num: '08',
      title: 'Finance & Management',
      desc: 'Planning, forecasting, performance and management support for decisions that deserve more than a spreadsheet and a guess.',
    },
  ];

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (RM) return;

    let timer: NodeJS.Timeout | null = null;
    let isVisible = false;

    function walk() {
      if (!isVisible) return;
      setLiveIdx((prev) => (prev + 1) % areas.length);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
          if (isVisible) {
            sec.classList.add('on');
            if (!timer) {
              timer = setInterval(walk, 2000);
            }
          } else {
            if (timer) {
              clearInterval(timer);
              timer = null;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [areas.length]);

  return (
    <section ref={secRef} className="s05" id="transform" aria-labelledby="s05h">
      <div className="wrap">
        <div className="head">
          <span className="k">Asteroid</span>
          <h2 id="s05h">
            If something is costing you growth, <span className="gr">it belongs on our desk.</span>
          </h2>
          <p className="lead">
            We go where the problem is, whether that means rebuilding your website, fixing your sales process, introducing AI or rethinking how customers experience your business.
          </p>
        </div>
        <ol className="areas">
          {areas.map((area, idx) => (
            <li
              key={idx}
              className={liveIdx === idx ? 'live' : ''}
              onMouseEnter={() => setLiveIdx(idx)}
            >
              <span className="n">{area.num}</span>
              <b>{area.title}</b>
              <p>{area.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
