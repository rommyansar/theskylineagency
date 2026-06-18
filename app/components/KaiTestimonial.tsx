'use client';

export default function KaiTestimonial() {
  const milestones = [
    { phase: 'Discovery & Requirements', status: 'completed', weeks: 'Weeks 1–2' },
    { phase: 'UI/UX Design & Prototyping', status: 'completed', weeks: 'Weeks 3–5' },
    { phase: 'Full-Stack Development', status: 'active', weeks: 'Weeks 6–10' },
    { phase: 'Testing & Production Launch', status: 'upcoming', weeks: 'Weeks 11–12' },
  ];

  return (
    <section className="testimonial-section">
      <div className="section-container">
        <div className="grid-two-col">
          {/* Left Column - Quote & Info */}
          <div className="testimonial-quote-block">
            <span className="testimonial-label">CLIENT STORY</span>
            
            <div style={{ position: 'relative' }}>
              <span className="quote-mark-large">&ldquo;</span>
              <h2 className="testimonial-quote-text" style={{ position: 'relative', zIndex: 2 }}>
                Skyline didn&apos;t hand us a template. They sat with our team, mapped every process, and built a system that runs the way we actually work.
              </h2>
            </div>

            <p className="testimonial-desc" style={{ marginTop: '24px' }}>
              From initial discovery through production launch, Skyline delivered a custom operations platform that consolidated five disconnected tools into one unified system.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>Pretium Group</span>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }}></div>
              <span style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Verified Client</span>
            </div>

            <a href="#case-studies" className="testimonial-link">
              View the full project story
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="6" x2="13" y2="6" />
                <polyline points="7 1 13 6 7 11" />
              </svg>
            </a>
          </div>

          {/* Right Column - Static Project Delivery Timeline */}
          <div>
            <div className="mockup-card-container">
              <div className="mockup-header">
                <div>
                  <h3 className="mockup-title">Project Delivery Timeline</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Pretium Group — Operations Platform</p>
                </div>
                <span className="mockup-badge" style={{ backgroundColor: 'rgba(0,203,160,0.1)', color: 'var(--accent-teal)' }}>12 Weeks</span>
              </div>

              {/* Vertical Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative', marginTop: '8px' }}>
                {milestones.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', padding: '16px 0' }}>
                    {/* Timeline Line */}
                    {idx < milestones.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        left: '11px',
                        top: '38px',
                        bottom: '-2px',
                        width: '2px',
                        backgroundColor: m.status === 'completed' ? 'var(--accent-teal)' : 'rgba(255,255,255,0.08)',
                      }}></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: m.status === 'completed' 
                        ? 'var(--accent-teal)' 
                        : m.status === 'active' 
                          ? '#F18978' 
                          : 'rgba(255,255,255,0.08)',
                      border: m.status === 'upcoming' ? '2px solid rgba(255,255,255,0.15)' : 'none',
                    }}>
                      {m.status === 'completed' && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {m.status === 'active' && (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#121212' }}></div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '14px', 
                        fontWeight: 700, 
                        color: m.status === 'upcoming' ? 'var(--text-muted)' : 'var(--text-primary)',
                        marginBottom: '2px'
                      }}>
                        {m.phase}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {m.weeks}
                        {m.status === 'active' && (
                          <span style={{ marginLeft: '8px', color: '#F18978', fontWeight: 700, fontSize: '11px' }}>● In Progress</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Status */}
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                  Phase 3 of 4
                </span>
                <span style={{ color: '#F18978', fontWeight: 700 }}>
                  On Track for Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
