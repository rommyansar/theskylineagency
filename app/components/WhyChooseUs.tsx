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
          <h2 className="section-title">Why Businesses Choose Skyline</h2>
          <p style={{ maxWidth: '640px', margin: '16px auto 0', color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            We don&apos;t sell software. We build it — from scratch, around your business, with a team that stays with you from discovery to deployment and beyond.
          </p>
        </div>

        {/* Pillar 1: Delivery Track Record */}
        <div id="why-visibility" className="why-pillar-row reveal">
          <div className="why-pillar-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Proven Delivery
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              On Time. On Budget. Every Project.
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              We scope projects honestly, set realistic timelines, and deliver exactly what we promise. Our structured development process means no surprise delays and no hidden costs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Transparent milestone-based project tracking
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Weekly progress updates with working demos
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Fixed-price contracts with no scope creep
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px' }}>
              Start a Project
            </a>
          </div>
          
          {/* Stats Visual */}
          <div className="why-pillar-visual">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '24px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Delivery Track Record</span>
              <span style={{ fontSize: '11px', color: '#888', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>2024–2026</span>
            </div>
            
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              {[
                { value: '50+', label: 'Applications Delivered', color: 'var(--accent-teal)' },
                { value: '98%', label: 'On-Time Delivery Rate', color: '#F18978' },
                { value: '12', label: 'Industries Served', color: '#8B5CF6' },
                { value: '4.9★', label: 'Average Client Rating', color: '#FFBD2E' },
              ].map((stat, idx) => (
                <div key={idx} style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: '#888', marginTop: '6px', fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar 2: Development Process */}
        <div id="why-automation" className="why-pillar-row reveal">
          {/* Process Timeline Visual */}
          <div className="why-pillar-visual" style={{ order: 2 }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '20px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Our Development Process</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
              {/* Timeline Connector Line */}
              <div style={{ position: 'absolute', left: '20px', top: '15px', bottom: '15px', width: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

              {[
                { step: '01', title: 'Discovery Workshop', desc: 'We map your processes and define requirements', color: 'var(--accent-teal)' },
                { step: '02', title: 'Design & Prototype', desc: 'Interactive mockups for your review', color: '#F18978' },
                { step: '03', title: 'Full-Stack Build', desc: 'Agile sprints with weekly demos', color: '#8B5CF6' },
                { step: '04', title: 'Launch & Support', desc: 'Production deployment with SLA coverage', color: '#FFBD2E' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: item.color, color: '#121212', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700 }}>{item.title}</div>
                    <div style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-pillar-content" style={{ order: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F18978', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              Structured Process
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              From Idea to Production in Weeks
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Every project follows our proven four-phase methodology. You&apos;re involved at every stage — from initial discovery through launch — so the final product is exactly what your business needs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Requirements locked before any code is written
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Design sign-off before engineering begins
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Working demos at every milestone
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px', backgroundColor: '#F18978' }}>
              See Our Process
            </a>
          </div>
        </div>

        {/* Pillar 3: Technology & Expertise */}
        <div id="why-collaboration" className="why-pillar-row reveal">
          <div className="why-pillar-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Technical Expertise
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              Senior Engineers. Modern Stack. Production-Ready.
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Your project is built by experienced full-stack developers using the same technologies powering the world&apos;s top platforms — not outsourced to junior contractors.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Full-stack React, Next.js, and Node.js expertise
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Enterprise-grade security and performance
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Cloud deployment on AWS, Vercel, or your infrastructure
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '15px', backgroundColor: '#8B5CF6' }}>
              Meet Our Team
            </a>
          </div>

          {/* Technology Capabilities Visual */}
          <div className="why-pillar-visual">
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '20px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Technology Capabilities</span>
            </div>
            
            {/* Tech Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript'], color: '#8B5CF6' },
                { label: 'Backend', items: ['Node.js', 'Python', 'GraphQL'], color: 'var(--accent-teal)' },
                { label: 'Data', items: ['PostgreSQL', 'Redis', 'Supabase'], color: '#F18978' },
                { label: 'Cloud', items: ['AWS', 'Vercel', 'Docker'], color: '#FFBD2E' },
                { label: 'APIs', items: ['Stripe', 'Twilio', 'SendGrid'], color: '#27C93F' },
              ].map((cat) => (
                <div key={cat.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '60px', fontSize: '10px', fontWeight: 800, color: cat.color, textTransform: 'uppercase', letterSpacing: '0.04em', flexShrink: 0 }}>
                    {cat.label}
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
                    {cat.items.map((item) => (
                      <div key={item} style={{ flex: 1, padding: '7px 0', textAlign: 'center', backgroundColor: `${cat.color}10`, borderRadius: '5px', fontSize: '11px', fontWeight: 700, color: '#FFFFFF', border: `1px solid ${cat.color}25` }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
