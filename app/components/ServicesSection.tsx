'use client';

import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'App Development',
    description: 'Native & cross-platform apps built for performance and scale.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Website Development',
    description: 'High-converting websites that represent your brand at its best.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Custom Software',
    description: 'Tailored systems engineered to solve your unique business problems.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.56 9.8A4 4 0 1 1 15.44 9.8" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    title: 'AI Automation',
    description: 'Intelligent workflows that eliminate bottlenecks and multiply output.',
  },
];

export default function ServicesSection() {
  const sectionRef = useReveal();

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`service-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-card-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
