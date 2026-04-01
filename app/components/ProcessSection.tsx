'use client';

import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn your business, goals, and audience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    description: 'We craft interfaces that convert and impress.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build',
    description: 'We engineer robust, scalable systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, test, and ensure everything works.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const sectionRef = useReveal();

  return (
    <section className="process-section" id="process" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">How we work</span>
          <h2 className="section-title">Our Process</h2>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div className={`process-step reveal reveal-delay-${i + 1}`} key={i}>
              <div className="step-icon-wrap">
                {step.icon}
              </div>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
