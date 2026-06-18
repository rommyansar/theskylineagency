'use client';

export default function OnboardingGrid() {
  return (
    <section className="services-onboarding-section" id="services">
      <div className="section-container">
        <div className="grid-two-col" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Column: 2x2 Grid — Development Process */}
          <div className="onboarding-grid-left">
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h3>1. Discovery & Blueprinting</h3>
              <p>We study your operations, interview stakeholders, and document every requirement before a single line of code is written.</p>
            </div>
            
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <h3>2. Custom UX/UI Design</h3>
              <p>We create interactive prototypes styled around your brand — and validate every screen with your team before development begins.</p>
            </div>
            
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <h3>3. Full-Stack Engineering</h3>
              <p>We build secure backends, responsive frontends, and integrate custom APIs — with working demos at every milestone.</p>
            </div>

            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3>4. Launch & Ongoing Support</h3>
              <p>We deploy to production, train your team, and provide ongoing hosting, maintenance, and SLA support post-launch.</p>
            </div>
          </div>

          {/* Right Column: Client Statistics (replacing fake G2/Clutch badges) */}
          <div className="badges-col">
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{
                width: '120px',
                height: '150px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                borderBottom: '6px solid var(--accent-teal)'
              }}>
                <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-teal)' }}>PROJECTS</span>
                <span style={{ fontSize: '32px', fontWeight: 800 }}>50+</span>
                <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Applications Delivered</span>
              </div>

              <div style={{
                width: '120px',
                height: '150px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                borderBottom: '6px solid #8B5CF6'
              }}>
                <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#8B5CF6' }}>INDUSTRIES</span>
                <span style={{ fontSize: '32px', fontWeight: 800 }}>12</span>
                <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Sectors Served</span>
              </div>
            </div>

            <div style={{
              width: '260px',
              height: '240px',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
              borderBottom: '8px solid #F18978'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#F18978' }}>CLIENT SATISFACTION</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1.1 }}>98%</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>REPEAT & REFERRAL RATE</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>BASED ON 50+ ENGAGEMENTS</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
