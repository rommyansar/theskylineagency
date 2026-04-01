'use client';

import { useReveal } from '../hooks/useReveal';

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Built for Performance',
    description: 'Every line of code is optimized for speed and reliability.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: 'Designed to Convert',
    description: 'Interfaces engineered to turn visitors into customers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    title: 'Scalable Systems',
    description: 'Architecture that grows seamlessly with your business.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Long-term Support',
    description: 'We stay with you post-launch — updates, fixes, growth.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useReveal();

  return (
    <section className="why-section" id="why" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">The difference</span>
          <h2 className="section-title">Why Choose Us</h2>
        </div>
        <div className="why-grid">
          {reasons.map((reason, i) => (
            <div className={`why-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="why-icon">{reason.icon}</div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
