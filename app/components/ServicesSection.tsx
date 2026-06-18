'use client';

export default function ServicesSection() {
  return (
    <section className="features-section" id="services">
      <div className="section-container">
        
        {/* Feature 1: Workflow Automation */}
        <div className="feature-block">
          <div className="grid-two-col">
            {/* Left Content */}
            <div>
              <span className="feature-label">OPERATIONAL EXCELLENCE</span>
              <h2 className="feature-title">Bespoke Web Application Development</h2>
              <p className="feature-desc">
                We build custom systems tailored to your workflows, eliminating manual data silos and operational bottlenecks.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Bespoke database architecture modeled for your workflow</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Tailored user roles and administrative controls</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Custom integrations with third-party software APIs</span>
                </li>
              </ul>
              <a href="#workflows" className="testimonial-link">Explore custom web apps</a>
            </div>
            
            {/* Right Mockup */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '30px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>Custom Project Onboarding Flow</span>
                  <span style={{ color: 'var(--accent-teal-hover)', fontWeight: 700, fontSize: '14px' }}>Active</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span>Step 1: Sign Proposal</span>
                    <span style={{ color: 'var(--text-muted)' }}>Auto-trigger</span>
                  </div>
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span>Step 2: Gather Asset Requirements</span>
                    <span style={{ color: 'var(--text-muted)' }}>Assigned to Project Lead</span>
                  </div>
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span>Step 3: Setup Portal Access</span>
                    <span style={{ color: 'var(--text-muted)' }}>Conditional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Client Collaboration */}
        <div className="feature-block reversed">
          <div className="grid-two-col">
            {/* Left Mockup */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '30px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-green-bg)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green-text)" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--text-primary)' }}>Secure Client Portal</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Updated 2 mins ago</p>
                  </div>
                </div>
                <div style={{ border: '1px dashed var(--border-light)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Upload Onboarding Documents</p>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Drag & drop files here or browse</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="feature-label">CLIENT EXPERIENCE</span>
              <h2 className="feature-title">Branded Client & Customer Portals</h2>
              <p className="feature-desc">
                Provide a secure, branded portal where your clients can track milestones, review status updates, sign contracts, and communicate with your team directly.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Encrypted file uploads and digital eSignatures</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Bespoke text notifications and email updates</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Interactive progress tracking and outstanding checklist items</span>
                </li>
              </ul>
              <a href="#portal" className="testimonial-link">Explore client portals</a>
            </div>
          </div>
        </div>

        {/* Feature 3: Analytics & Reporting */}
        <div className="feature-block">
          <div className="grid-two-col">
            {/* Left Content */}
            <div>
              <span className="feature-label">BUSINESS INTELLIGENCE</span>
              <h2 className="feature-title">Operations Dashboards & Analytics</h2>
              <p className="feature-desc">
                Track team performance, project budgets, and key business performance metrics in real-time from a central custom dashboard.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Real-time operations tracking and team capacity logs</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Automated time logs and custom budget alerts</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Detailed project milestone and performance reports</span>
                </li>
              </ul>
              <a href="#analytics" className="testimonial-link">Explore reporting features</a>
            </div>
            
            {/* Right Mockup */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '30px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>MONTHLY REVENUE</span>
                  <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>$48,250</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '8px' }}>
                  <div style={{ width: '100%', height: '40%', backgroundColor: 'var(--border-light)', borderRadius: '4px' }}></div>
                  <div style={{ width: '100%', height: '60%', backgroundColor: 'var(--border-light)', borderRadius: '4px' }}></div>
                  <div style={{ width: '100%', height: '80%', backgroundColor: 'var(--border-light)', borderRadius: '4px' }}></div>
                  <div style={{ width: '100%', height: '95%', backgroundColor: 'var(--accent-teal)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May (Current)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
