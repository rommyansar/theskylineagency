'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [isSolid, setIsSolid] = useState(false);
  const [isAway, setIsAway] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY;
      setIsSolid(y > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, y / totalHeight)));
      }

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const down = y > lastY && y > 160;
          const isLocked = document.body.classList.contains('locked');
          setIsAway(down && !isLocked);
          lastY = y;
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle('locked', next);
      return next;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('locked');
  };

  return (
    <>
      <header
        className={`nav ${isSolid ? 'solid' : ''} ${isAway ? 'away' : ''}`}
        style={{ '--sp': scrollProgress } as React.CSSProperties}
      >
        <div className="wrap">
          <Link href="/" className="wm" aria-label="Skyline, home">
            <img
              className="mark"
              src="/assets/img/ring-t-sm.webp"
              alt=""
              width={32}
              height={32}
            />
            <span className="wmt">
              <span>Skyline</span>
            </span>
          </Link>

          <nav className="links" aria-label="Main Navigation">
            <a href="#what-is-skyline">What We Do</a>
            <a href="#human-ai">Human × AI</a>
            <a href="#leaks">Leaks</a>
            <a href="#transform">Transform</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#who">Who It&apos;s For</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#engagement">Engagement</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button
            type="button"
            className="btn btn-s cta"
            onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
          >
            <span className="t">
              <i data-t="Let's Talk">Let&apos;s Talk</i>
            </span>
          </button>

          <button
            type="button"
            className="burger"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <nav
        className={`menu ${isMenuOpen ? 'open' : ''}`}
        id="menu"
        aria-label="Mobile Menu"
        aria-hidden={!isMenuOpen}
      >
        <a href="#what-is-skyline" onClick={closeMenu}>
          What We Do
        </a>
        <a href="#human-ai" onClick={closeMenu}>
          Human × AI
        </a>
        <a href="#leaks" onClick={closeMenu}>
          Leaks
        </a>
        <a href="#transform" onClick={closeMenu}>
          Transform
        </a>
        <a href="#capabilities" onClick={closeMenu}>
          Capabilities
        </a>
        <a href="#who" onClick={closeMenu}>
          Who It&apos;s For
        </a>
        <a href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>
        <a href="#engagement" onClick={closeMenu}>
          Engagement
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <div className="mf">
          <a href="mailto:contact@theskylineagency.com">contact@theskylineagency.com</a>
          <a href="https://wa.me/916005602936?text=I%20need%20a%20demo%20website" target="_blank" rel="noopener">
            WhatsApp: +91 6005602936
          </a>
          <span>Skyline · Custom Software, AI & Automation Hub</span>
        </div>
      </nav>
    </>
  );
}
