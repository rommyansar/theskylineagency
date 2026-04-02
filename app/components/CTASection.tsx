'use client';

import { useReveal } from '../hooks/useReveal';

export default function CTASection() {
  const sectionRef = useReveal();

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-glow-secondary" aria-hidden="true" />
      <div className="section-container cta-inner">
        <h2 className="cta-heading reveal">
          Let&apos;s Build Something<br />
          <span className="cta-gradient">That Works.</span>
        </h2>
        <p className="cta-sub reveal reveal-delay-1">
          Ready to turn your vision into a product that drives real results?
        </p>
        <a href="mailto:rommyansar@gmail.com" className="cta-button reveal reveal-delay-2">
          Start a Project
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
