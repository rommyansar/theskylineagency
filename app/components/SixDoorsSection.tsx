'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface SixDoorsSectionProps {
  onOpenDemo?: () => void;
}

export default function SixDoorsSection({ onOpenDemo }: SixDoorsSectionProps) {
  const secRef = useRef<HTMLElement>(null);
  const [litId, setLitId] = useState<string>('clinic');
  const [darkDoorIdx, setDarkDoorIdx] = useState<number | null>(null);

  const doors = useMemo(
    () => [
      {
        id: 'clinic',
        no: '01',
        name: 'Clinics, salons, studios',
        sub: 'Appointments',
        color: '#CFE9FF',
        cx: '7.5%',
        cy: '11.5%',
        s: 1.0,
        tick: '44px',
        mcx: '9.5%',
        mcy: '22%',
        x: '3%',
        y: '16%',
        w: '17%',
        h: '82%',
        mx: '2%',
        my: '23%',
        mw: '16%',
        mh: '70%',
        tint: '#8FD6FF',
      },
      {
        id: 'store',
        no: '02',
        name: 'Online stores',
        sub: 'Orders',
        color: '#FFB15C',
        cx: '22.5%',
        cy: '17.5%',
        s: 0.92,
        tick: '40px',
        mcx: '25%',
        mcy: '29%',
        x: '21%',
        y: '24%',
        w: '11%',
        h: '72%',
        mx: '19%',
        my: '30%',
        mw: '12%',
        mh: '60%',
        tint: '#FF9A3C',
      },
      {
        id: 'shutter',
        no: '03',
        name: 'Trades and services',
        sub: 'Jobs',
        color: '#FFC46B',
        cx: '34.5%',
        cy: '23%',
        s: 0.84,
        tick: '36px',
        mcx: '35.5%',
        mcy: '33%',
        x: '34%',
        y: '29%',
        w: '9%',
        h: '64%',
        mx: '32%',
        my: '34%',
        mw: '8%',
        mh: '54%',
        tint: null,
      },
      {
        id: 'agency',
        no: '04',
        name: 'Property brokerages',
        sub: 'Enquiries',
        color: '#FFF1D6',
        cx: '45%',
        cy: '27.5%',
        s: 0.78,
        tick: '32px',
        mcx: '66%',
        mcy: '35.5%',
        x: '44%',
        y: '33%',
        w: '8%',
        h: '58%',
        mx: '62%',
        my: '36%',
        mw: '8%',
        mh: '52%',
        tint: null,
      },
      {
        id: 'workshop',
        no: '05',
        name: 'Courses and events',
        sub: 'Bookings',
        color: '#BFD8FF',
        cx: '53.5%',
        cy: '31%',
        s: 0.72,
        tick: '28px',
        mcx: '75%',
        mcy: '32%',
        x: '53%',
        y: '36%',
        w: '7%',
        h: '54%',
        mx: '71%',
        my: '33%',
        mw: '8%',
        mh: '56%',
        tint: '#FFB357',
      },
      {
        id: 'hall',
        no: '06',
        name: 'Founder brands',
        sub: 'Calls',
        color: '#FFD2A0',
        cx: '57.5%',
        cy: '33.5%',
        s: 0.66,
        tick: '30px',
        mcx: '90.5%',
        mcy: '27%',
        x: '60%',
        y: '39%',
        w: '7%',
        h: '48%',
        mx: '83%',
        my: '28%',
        mw: '15%',
        mh: '66%',
        tint: '#9FB6FF',
      },
    ],
    []
  );

  const groups = useMemo(
    () => [
      {
        door: 'clinic',
        no: '01',
        title: 'Growing businesses',
        desc: 'that have outgrown the way they currently work.',
        color: '#CFE9FF',
      },
      {
        door: 'store',
        no: '02',
        title: 'Established businesses',
        desc: "that know there's money, time or opportunity being left on the table.",
        color: '#FFB15C',
      },
      {
        door: 'agency',
        no: '04',
        title: 'Founders',
        desc: 'who need more than another supplier waiting for instructions.',
        color: '#FFF1D6',
      },
      {
        door: 'hall',
        no: '06',
        title: 'Teams',
        desc: 'that need technology, AI and better systems without replacing the human judgement behind them.',
        color: '#FFD2A0',
      },
    ],
    []
  );

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;

    const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (RM) return;

    let isVisible = false;
    let walkTimer: NodeJS.Timeout | null = null;
    let dropTimer: NodeJS.Timeout | null = null;
    let cur = 0;

    function walk() {
      if (!isVisible) return;
      cur = (cur + 1) % doors.length;
      setLitId(doors[cur].id);
      walkTimer = setTimeout(walk, 1800);
    }

    function drop() {
      if (!isVisible) return;
      const idx = Math.floor(Math.random() * doors.length);
      setDarkDoorIdx(idx);
      setTimeout(() => {
        setDarkDoorIdx(null);
      }, 1150);
      dropTimer = setTimeout(drop, 2800 + Math.random() * 3800);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
          if (isVisible) {
            if (!walkTimer) walk();
            if (!dropTimer) drop();
          } else {
            if (walkTimer) {
              clearTimeout(walkTimer);
              walkTimer = null;
            }
            if (dropTimer) {
              clearTimeout(dropTimer);
              dropTimer = null;
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sec);
    return () => {
      observer.disconnect();
      if (walkTimer) clearTimeout(walkTimer);
      if (dropTimer) clearTimeout(dropTimer);
    };
  }, [doors]);

  return (
    <section ref={secRef} className="s4" id="who" aria-labelledby="s4h">
      <div className="in">
        <div className="field">
          <picture className="plate" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet="/assets/s4/doors-m.webp" />
            <img src="/assets/s4/doors.webp" alt="" width={2560} height={1440} />
          </picture>

          {/* Door light spills & color hues */}
          {doors.map((door, idx) => (
            <span
              key={`door-${door.id}`}
              className={`door ${darkDoorIdx === idx ? 'dark' : ''}`}
              data-id={door.id}
              style={{
                '--x': door.x,
                '--y': door.y,
                '--w': door.w,
                '--h': door.h,
                '--mx': door.mx,
                '--my': door.my,
                '--mw': door.mw,
                '--mh': door.mh,
                '--dur': `${(5.8 + ((idx * 0.9) % 3.1)).toFixed(2)}s`,
                '--delay': `${(-((idx * 1.73) % 6)).toFixed(2)}s`,
              } as React.CSSProperties}
            />
          ))}

          {doors
            .filter((d) => d.tint)
            .map((door, idx) => (
              <span
                key={`tint-${door.id}`}
                className="tint"
                data-id={door.id}
                style={{
                  '--x': door.x,
                  '--y': door.y,
                  '--w': door.w,
                  '--h': door.h,
                  '--mx': door.mx,
                  '--my': door.my,
                  '--mw': door.mw,
                  '--mh': door.mh,
                  '--t': door.tint,
                  '--hdur': `${9 + idx * 2.5}s`,
                  '--hdelay': `${-(idx * 3.3)}s`,
                } as React.CSSProperties}
              />
            ))}

          {/* Perspective door labels with tick lines (Desktop) & Numbered Badges (Mobile) */}
          <div className="caps" aria-hidden="true">
            {doors.map((door) => {
              const isLit = litId === door.id;
              return (
                <span
                  key={door.id}
                  className={`cap ${isLit ? 'lit' : ''}`}
                  data-id={door.id}
                  onMouseEnter={() => setLitId(door.id)}
                  style={{
                    '--cx': door.cx,
                    '--cy': door.cy,
                    '--mcx': door.mcx,
                    '--mcy': door.mcy,
                    '--s': door.s,
                    '--tick': door.tick,
                    '--c': door.color,
                  } as React.CSSProperties}
                >
                  <span className="no">{door.no}</span>
                  <b>{door.name}</b>
                  <span className="k">{door.sub}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Mobile Door Legend */}
        <ul className="legend" aria-hidden="true">
          {doors.map((door) => {
            const isLit = litId === door.id;
            return (
              <li
                key={`legend-${door.id}`}
                data-door={door.id}
                className={isLit ? 'lit' : ''}
                onClick={() => setLitId(door.id)}
                style={{ '--c': door.color } as React.CSSProperties}
              >
                {door.name}
              </li>
            );
          })}
        </ul>

        <div className="copy">
          <span className="k">Who it is for</span>
          <h2 id="s4h">
            We&apos;re not for everyone. We&apos;re for owners who are ready to change things.
          </h2>
          <p className="lead">
            Asteroid works best with business owners who know something could be better and are actually prepared to change it. You don&apos;t need to know whether the answer is marketing, AI, technology, sales or operations before speaking to us. Figuring that out is part of our job.
          </p>

          <ul className="groups">
            {groups.map((group) => {
              const isLit = litId === group.door;
              return (
                <li
                  key={group.door}
                  data-door={group.door}
                  className={isLit ? 'lit' : ''}
                  onMouseEnter={() => setLitId(group.door)}
                  style={{ '--c': group.color } as React.CSSProperties}
                >
                  <i />
                  <span className="no">{group.no}</span>
                  <div>
                    <b>{group.title}</b>
                    <small>{group.desc}</small>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="act">
            <button
              type="button"
              className="btn btn-s"
              onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
            >
              <span className="t">
                <i data-t="Let's Talk">Let&apos;s Talk</i>
              </span>
              <span className="ar">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
