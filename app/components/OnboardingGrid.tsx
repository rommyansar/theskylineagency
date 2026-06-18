'use client';

export default function OnboardingGrid() {
  return (
    <section className="services-onboarding-section" id="services">
      <div className="section-container">
        <div className="grid-two-col" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Column: 2x2 Grid */}
          <div className="onboarding-grid-left">
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <h3>1. Discovery & Blueprinting</h3>
              <p>We co-design your software's user flows, database structures, and requirements to align perfectly with your operations.</p>
            </div>
            
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h3>3. Full-Stack Engineering</h3>
              <p>We build secure backend architectures and responsive frontends, integrating custom APIs and third-party tools.</p>
            </div>
            
            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <h3>2. Custom UX/UI Design</h3>
              <p>We draft interactive mockups and user experiences styled around your brand, validating the design before coding starts.</p>
            </div>

            <div className="onboarding-grid-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3>4. Deployment & SLA Support</h3>
              <p>We deploy your web application to production, train your team, and provide ongoing hosting and service level support.</p>
            </div>
          </div>

          {/* Right Column: G2 Badges */}
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
                borderBottom: '6px solid #FF5F56'
              }}>
                <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#FF5F56' }}>CUSTOM SOFTWARE</span>
                <span style={{ fontSize: '18px', fontWeight: 800 }}>Top 50</span>
                <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Web Application Developers</span>
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
                <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#8B5CF6' }}>SPRING 2026</span>
                <span style={{ fontSize: '14px', fontWeight: 800 }}>Top Technical Execution</span>
                <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Clutch Rating</span>
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
              borderBottom: '8px solid var(--accent-teal)'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-teal)' }}>SPRING 2026</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.1 }}>Best Service Partner</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>CUSTOM DEVELOPMENT</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>TECHNICAL LEADER</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
