'use client';

import { useReveal } from '../hooks/useReveal';

const services = [
  {
    num: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'App Development',
    description: 'Native & cross-platform apps built for ultimate performance, infinite scale, and seamless user experiences.',
    bentoClass: 'bento-wide',
  },
  {
    num: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Web Dev',
    description: 'High-converting, visually stunning websites that represent your brand at its absolute best.',
    bentoClass: 'bento-tall',
  },
  {
    num: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Custom Software',
    description: 'Tailored systems engineered to solve your unique business bottlenecks.',
    bentoClass: 'bento-square',
  },
  {
    num: '04',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.56 9.8A4 4 0 1 1 15.44 9.8" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    title: 'AI Automation',
    description: 'Intelligent workflows that multiply your output without adding headcount.',
    bentoClass: 'bento-square',
  },
];

export default function ServicesSection() {
  const sectionRef = useReveal();

  return (
    <section className="services-section-bento" id="services" ref={sectionRef}>
      <div className="section-container">
        
        <div className="bento-header reveal">
          <div className="bento-header-left">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">We engineer<br/>your unfair advantage.</h2>
          </div>
          <div className="bento-header-right">
            <p className="section-subtitle">
              Moving beyond traditional boundaries, we build digital products that command attention and drive relentless growth.
            </p>
          </div>
        </div>

        <div className="bento-grid">
          {services.map((service, i) => (
            <div className={`bento-card ${service.bentoClass} reveal reveal-delay-${i + 1}`} key={i}>
              <div className="bento-bg-elements">
                <span className="bento-large-num">{service.num}</span>
                <div className="bento-glow-orb"></div>
              </div>
              
              <div className="bento-content">
                <div className="bento-icon">{service.icon}</div>
                <div className="bento-text-wrap">
                  <h3 className="bento-title">{service.title}</h3>
                  <p className="bento-desc">{service.description}</p>
                </div>
              </div>
              
              {/* Optional animated border effect */}
              <div className="bento-border-gradient"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
