'use client';

export default function ClientChaseSection() {
  return (
    <section className="client-chase-section" id="client-chase">
      <div className="section-container">
        <div className="grid-two-col chase-grid">
          
          {/* Left Column: Mini Case Study Card */}
          <div className="chase-left-col">
            <div className="reminders-card" style={{ padding: '32px' }}>
              {/* Industry Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(0, 203, 160, 0.08)', padding: '6px 14px', borderRadius: '20px', marginBottom: '24px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hospitality</span>
              </div>

              {/* Project Title */}
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.3' }}>
                Guest Reservation & Check-In Platform
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                A fully custom booking engine and digital check-in system built for a boutique hotel group, replacing three separate legacy tools.
              </p>

              {/* Key Results */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent-teal)', lineHeight: 1 }}>4×</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>Faster Booking</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#F18978', lineHeight: 1 }}>60%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>Less Manual Work</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#8B5CF6', lineHeight: 1 }}>12wk</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>Delivery Time</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Next.js', 'PostgreSQL', 'Stripe API', 'Twilio SMS'].map((tech) => (
                  <span key={tech} style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', backgroundColor: 'var(--bg-primary)', padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Content */}
          <div className="chase-right-col">
            <h2 className="chase-title">We Build What Off-the-Shelf Can&apos;t</h2>
            
            <p className="chase-desc">
              Generic software forces your team to adapt. We do the opposite — we study how your business actually runs, then engineer a custom web application that fits your exact workflow, clients, and operations.
            </p>
            
            <p className="chase-desc">
              From reservation systems and client portals to inventory platforms and internal tools — every application we deliver is designed, coded, and deployed specifically for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
