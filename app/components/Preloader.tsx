'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
        }, 350);
      } else {
        setPercent(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (isDone) return null;

  return (
    <div className={`pre ${percent === 100 ? 'done' : ''}`} aria-hidden="true">
      <img
        className="pring"
        src="/assets/img/ring-t-240.webp"
        alt=""
        width={240}
        height={240}
      />
      <div className="pct">{percent}%</div>
    </div>
  );
}
