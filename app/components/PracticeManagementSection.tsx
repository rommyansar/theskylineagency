'use client';

import { useState } from 'react';

export default function PracticeManagementSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      industry: 'Hospitality',
      industryColor: '#F18978',
      title: 'Reservation & Guest Management',
      desc: 'A custom booking engine and guest check-in platform for a boutique hotel chain, replacing three disconnected legacy systems.',
      result: '4× faster reservations',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    },
    {
      industry: 'Professional Services',
      industryColor: 'var(--accent-teal)',
      title: 'Client Portal & Project Tracker',
      desc: 'A branded client portal where customers track project milestones, sign contracts, and upload documents — built for a consulting firm.',
      result: '60% less admin overhead',
      tech: ['React', 'Node.js', 'AWS'],
    },
    {
      industry: 'E-Commerce',
      industryColor: '#8B5CF6',
      title: 'Custom Inventory Platform',
      desc: 'A real-time inventory management system with supplier integrations and automated restocking alerts for a multi-warehouse retailer.',
      result: '90% reduction in stock-outs',
      tech: ['TypeScript', 'Redis', 'REST APIs'],
    },
    {
      industry: 'Healthcare',
      industryColor: '#FFBD2E',
      title: 'Patient Intake & Staff Portal',
      desc: 'A HIPAA-aware digital intake system and internal staff scheduling platform for a regional healthcare provider.',
      result: '3× faster patient processing',
      tech: ['Next.js', 'Supabase', 'Twilio'],
    },
  ];

  const totalSlides = projects.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 3 ? prev + 1 : prev));
  };

  return (
    <section className="practice-mgmt-section" id="practice-mgmt">
      <div className="section-container">
        
        {/* Header with Carousel controls */}
        <div className="practice-mgmt-header">
          <div className="practice-mgmt-header-text">
            <h2 className="practice-mgmt-title">
              Recent Projects
            </h2>
            <p className="practice-mgmt-sub">
              Custom web applications we&apos;ve designed, built, and deployed for businesses across industries.
            </p>
          </div>
          
          {/* Scroll Buttons */}
          <div className="practice-mgmt-controls">
            <button 
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="control-btn prev-btn"
              aria-label="Scroll to previous item"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button 
              onClick={handleNext}
              disabled={currentSlide >= totalSlides - 3}
              className="control-btn next-btn"
              aria-label="Scroll to next item"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentSlide * 35}%)`
            }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="carousel-card-item">
                {/* Project Visual */}
                <div className="card-mockup-box" style={{ padding: 0, height: '190px', border: 'none', background: 'none' }}>
                  <div className="mockup-container dark-theme" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div className="poly-bg-overlay"></div>
                    
                    {/* Industry Icon & Result */}
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '20px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: `${project.industryColor}15`, padding: '5px 12px', borderRadius: '16px', marginBottom: '14px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 800, color: project.industryColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{project.industry}</span>
                      </div>
                      <div style={{ fontSize: '32px', fontWeight: 800, color: project.industryColor, lineHeight: 1 }}>{project.result.split(' ')[0]}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontWeight: 600 }}>{project.result.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="card-body-content">
                  <h3 className="card-body-title">
                    {project.title}
                  </h3>
                  <p className="card-body-desc">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', backgroundColor: 'var(--bg-primary)', padding: '3px 8px', borderRadius: '3px', border: '1px solid var(--border-light)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a href="#contact" className="card-body-link">
                    View Project
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4h8M6 1l3 3-3 3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
