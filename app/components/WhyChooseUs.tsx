'use client';

import { useReveal } from '../hooks/useReveal';

export default function WhyChooseUs() {
  const sectionRef = useReveal();

  return (
    <section className="why-section" id="why" ref={sectionRef}>
      <div className="section-container">
        {/* Header Block */}
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">Why Skyline</span>
          <h2 className="section-title">The Operating System for Modern Firms</h2>
          <p style={{ maxWidth: '640px', margin: '16px auto 0', color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            Replace fragmented tools with a single workspace. Autopilot your client requests, streamline firm operations, and scale your margins.
          </p>
        </div>

        {/* Feature Pillar 1: Visibility & Control */}
        <div id="why-visibility" className="why-pillar-row reveal">
          <div className="why-pillar-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Visibility & Control
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              Know exactly where every client request stands
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Ditch the endless email threads. Skyline provides a unified dashboard tracking all active client tasks, pending file uploads, and approval stages in real-time.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Real-time task tracking and client statuses
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Centralized activity audit logs for compliance
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Visual progress charts per project
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px' }}>
              Get Full Visibility
            </a>
          </div>
          
          {/* Visual Mockup for Visibility */}
          <div className="why-pillar-visual">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '20px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Firm Activity Stream</span>
              <span style={{ fontSize: '11px', color: '#888', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Live Update</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #FF5F56' }}>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>tax_returns_2025.pdf</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Uploaded by Client • John & Co</div>
                </div>
                <span style={{ fontSize: '11px', color: '#FF5F56', fontWeight: 800, backgroundColor: 'rgba(255,95,86,0.1)', padding: '2px 8px', borderRadius: '4px' }}>Needs Review</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--accent-teal)' }}>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Bank Statements (March)</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Approved by Carla Caldwell</div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--accent-teal)', fontWeight: 800, backgroundColor: 'rgba(0,203,160,0.1)', padding: '2px 8px', borderRadius: '4px' }}>Approved</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #8B5CF6' }}>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Payroll Sheet Template</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Task assigned to Sarah Smith</div>
                </div>
                <span style={{ fontSize: '11px', color: '#8B5CF6', fontWeight: 800, backgroundColor: 'rgba(139,92,246,0.1)', padding: '2px 8px', borderRadius: '4px' }}>In Progress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pillar 2: Automation & Efficiency */}
        <div id="why-automation" className="why-pillar-row reveal">
          {/* Visual Mockup for Automation */}
          <div className="why-pillar-visual" style={{ order: 2 }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '20px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Client Chase Reminders (Autopilot)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
              {/* Timeline Connector Line */}
              <div style={{ position: 'absolute', left: '20px', top: '15px', bottom: '15px', width: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>1</div>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Initial File Request Sent</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Email template: Document Request</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F18978', color: '#121212', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>2</div>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Auto-Reminder 1 (3 Days Later)</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Friendly SMS check-in pinged to client</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-teal)', color: '#121212', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</div>
                <div>
                  <div style={{ color: 'var(--accent-teal)', fontSize: '13px', fontWeight: 700 }}>File Uploaded & Logged</div>
                  <div style={{ color: '#888', fontSize: '11px' }}>Stored in database, team notified</div>
                </div>
              </div>
            </div>
          </div>

          <div className="why-pillar-content" style={{ order: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F18978', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Automation & Efficiency
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              Put client reminders and uploads on autopilot
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Reminding clients to upload files takes up hours of your team&apos;s time. Skyline automates email and SMS reminders based on custom triggers so files arrive on schedule.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Scheduled email and SMS reminders
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Conditional triggers (e.g. if file is missing)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Instant notifications on upload
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px', backgroundColor: '#F18978' }}>
              Start Automating
            </a>
          </div>
        </div>

        {/* Feature Pillar 3: Collaboration & Connectivity */}
        <div id="why-collaboration" className="why-pillar-row reveal">
          <div className="why-pillar-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Collaboration & Connectivity
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              A secure, shared portal for you and your clients
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Give clients a clean, white-labeled client portal to access their document lists, review messages, and securely upload payroll, tax, or business sheets in seconds.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Secure portal with direct drag-and-drop uploads
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Integrated chat hub for instant support
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                API connections to Telegram, Slack, and REST databases
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px', backgroundColor: '#8B5CF6' }}>
              Explore Client Portal
            </a>
          </div>

          {/* Visual Mockup for Collaboration */}
          <div className="why-pillar-visual">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '20px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
              <span style={{ marginLeft: '12px', color: '#888', fontSize: '12px' }}>portal.skyline.agency/upload</span>
            </div>
            
            <div style={{ border: '2px dashed rgba(255,255,255,0.15)', borderRadius: '8px', padding: '32px 16px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.01)', cursor: 'pointer', marginBottom: '16px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
              </svg>
              <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Drag and drop documents here</div>
              <div style={{ color: '#555', fontSize: '11px', marginTop: '4px' }}>Supports PDF, PNG, CSV, XLSX (Max 10MB)</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
              <span style={{ color: '#FFFFFF', fontSize: '12px' }}>Uploaded: W2_statements.pdf</span>
              <span style={{ color: 'var(--accent-teal)', fontSize: '11px', fontWeight: 700 }}>✓ Uploaded</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
