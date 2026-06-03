'use client';

import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import OnboardingModal from './OnboardingModal';

export default function CTASection() {
  const sectionRef = useReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="cta-button reveal reveal-delay-2"
          style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            Start a Project
            <span className="cta-arrow">→</span>
          </span>
        </button>
      </div>

      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
