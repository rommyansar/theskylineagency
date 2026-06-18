'use client';

export default function ServicesSection() {
  return (
    <section className="features-section" id="services">
      <div className="section-container">
        
        {/* Feature 1: Custom Web Application Development */}
        <div className="feature-block">
          <div className="grid-two-col">
            {/* Left Content */}
            <div>
              <span className="feature-label">WHAT WE BUILD</span>
              <h2 className="feature-title">Custom Web Application Development</h2>
              <p className="feature-desc">
                We architect and build full-stack web applications from scratch — designed around your specific business processes, not generic templates.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Custom database architecture modeled on your data</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Role-based access control and admin panels</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Third-party API integrations and middleware</span>
                </li>
              </ul>
              <a href="#contact" className="testimonial-link">Start your project →</a>
            </div>
            
            {/* Right: Code / Architecture Visual */}
            <div>
              <div style={{
                backgroundColor: '#1a1a2e',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '0',
                fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
                overflow: 'hidden',
              }}>
                {/* Editor Top Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                  <span style={{ marginLeft: '10px', fontSize: '11px', color: '#666', fontWeight: 600 }}>api/bookings/route.ts</span>
                </div>

                {/* Code Lines */}
                <div style={{ fontSize: '11px', lineHeight: '1.8', color: '#e0e0e0' }}>
                  <div><span style={{ color: '#c792ea' }}>export async function</span> <span style={{ color: '#82aaff' }}>POST</span><span style={{ color: '#89ddff' }}>(</span><span style={{ color: '#f78c6c' }}>req</span><span style={{ color: '#89ddff' }}>)</span> <span style={{ color: '#89ddff' }}>{'{'}</span></div>
                  <div style={{ paddingLeft: '16px' }}><span style={{ color: '#c792ea' }}>const</span> body = <span style={{ color: '#c792ea' }}>await</span> req.<span style={{ color: '#82aaff' }}>json</span>()</div>
                  <div style={{ paddingLeft: '16px' }}><span style={{ color: '#c792ea' }}>const</span> booking = <span style={{ color: '#c792ea' }}>await</span> db.<span style={{ color: '#82aaff' }}>insert</span>(<span style={{ color: '#c3e88d' }}>reservations</span>)</div>
                  <div style={{ paddingLeft: '16px', color: '#546e7a' }}>{'// Send SMS confirmation'}</div>
                  <div style={{ paddingLeft: '16px' }}><span style={{ color: '#c792ea' }}>await</span> twilio.<span style={{ color: '#82aaff' }}>send</span>(<span style={{ color: '#89ddff' }}>{'{'}</span></div>
                  <div style={{ paddingLeft: '32px' }}>to: body.<span style={{ color: '#f78c6c' }}>phone</span>,</div>
                  <div style={{ paddingLeft: '32px' }}>body: <span style={{ color: '#c3e88d' }}>{"`Confirmed: ${booking.id}`"}</span></div>
                  <div style={{ paddingLeft: '16px' }}><span style={{ color: '#89ddff' }}>{'}'}</span>)</div>
                  <div style={{ paddingLeft: '16px' }}><span style={{ color: '#c792ea' }}>return</span> Response.<span style={{ color: '#82aaff' }}>json</span>(booking)</div>
                  <div><span style={{ color: '#89ddff' }}>{'}'}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Design & User Experience */}
        <div className="feature-block reversed">
          <div className="grid-two-col">
            {/* Left: Design Showcase */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                aspectRatio: '4/3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px',
              }}>
                {/* Before/After Labels */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#FF5F56', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Before</span>
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>After Skyline</span>
                  </div>
                </div>

                {/* Before/After Cards */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  {/* Before */}
                  <div style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px', border: '1px dashed rgba(0,0,0,0.15)' }}>
                    <div style={{ height: '8px', width: '70%', backgroundColor: '#ddd', borderRadius: '2px', marginBottom: '8px' }}></div>
                    <div style={{ height: '8px', width: '90%', backgroundColor: '#ddd', borderRadius: '2px', marginBottom: '8px' }}></div>
                    <div style={{ height: '8px', width: '50%', backgroundColor: '#ddd', borderRadius: '2px', marginBottom: '12px' }}></div>
                    <div style={{ height: '24px', width: '100%', backgroundColor: '#ccc', borderRadius: '4px', marginBottom: '8px' }}></div>
                    <div style={{ height: '24px', width: '100%', backgroundColor: '#ccc', borderRadius: '4px' }}></div>
                    <div style={{ fontSize: '10px', color: '#999', marginTop: '10px', textAlign: 'center' }}>Spreadsheets & email chains</div>
                  </div>

                  {/* After */}
                  <div style={{ flex: 1, padding: '16px', backgroundColor: '#fafffe', borderRadius: '8px', border: '1px solid rgba(0,203,160,0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ height: '8px', width: '40%', backgroundColor: 'var(--accent-teal)', borderRadius: '2px', opacity: 0.3 }}></div>
                      <div style={{ height: '8px', width: '20%', backgroundColor: 'var(--accent-teal)', borderRadius: '2px' }}></div>
                    </div>
                    <div style={{ height: '40px', width: '100%', backgroundColor: 'rgba(0,203,160,0.08)', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                      <div style={{ height: '6px', width: '60%', backgroundColor: 'var(--accent-teal)', borderRadius: '2px', opacity: 0.4 }}></div>
                    </div>
                    <div style={{ height: '40px', width: '100%', backgroundColor: 'rgba(0,203,160,0.08)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                      <div style={{ height: '6px', width: '45%', backgroundColor: 'var(--accent-teal)', borderRadius: '2px', opacity: 0.4 }}></div>
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--accent-teal)', marginTop: '10px', textAlign: 'center', fontWeight: 700 }}>Custom web application</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="feature-label">HOW WE DESIGN</span>
              <h2 className="feature-title">User Experience Built Around Your Brand</h2>
              <p className="feature-desc">
                Every interface we create is designed from scratch to match your brand identity and how your users actually think. No templates. No generic UI kits.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Interactive prototypes validated before development</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Responsive design for desktop, tablet, and mobile</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Accessibility-first design following WCAG standards</span>
                </li>
              </ul>
              <a href="#contact" className="testimonial-link">See our design process →</a>
            </div>
          </div>
        </div>

        {/* Feature 3: Technology & Infrastructure */}
        <div className="feature-block">
          <div className="grid-two-col">
            {/* Left Content */}
            <div>
              <span className="feature-label">OUR TECHNOLOGY</span>
              <h2 className="feature-title">Modern Tech Stack & Infrastructure</h2>
              <p className="feature-desc">
                We build on battle-tested, modern frameworks and cloud infrastructure — ensuring your application is fast, secure, and scalable from day one.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Next.js, React, TypeScript, Node.js</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>PostgreSQL, Redis, Supabase, AWS</span>
                </li>
                <li className="feature-list-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Stripe, Twilio, SendGrid, REST & GraphQL APIs</span>
                </li>
              </ul>
              <a href="#contact" className="testimonial-link">Discuss your tech requirements →</a>
            </div>
            
            {/* Right: Tech Stack Visual */}
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
                gap: '20px',
              }}>
                {/* Tech Categories */}
                {[
                  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript'], color: '#8B5CF6' },
                  { label: 'Backend', items: ['Node.js', 'Python', 'REST APIs'], color: 'var(--accent-teal)' },
                  { label: 'Database', items: ['PostgreSQL', 'Redis', 'Supabase'], color: '#F18978' },
                  { label: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'Docker'], color: '#FFBD2E' },
                ].map((cat) => (
                  <div key={cat.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '80px', fontSize: '10px', fontWeight: 800, color: cat.color, textTransform: 'uppercase', letterSpacing: '0.04em', flexShrink: 0 }}>
                      {cat.label}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                      {cat.items.map((item) => (
                        <div key={item} style={{ flex: 1, padding: '8px 0', textAlign: 'center', backgroundColor: `${cat.color}08`, borderRadius: '6px', fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', border: `1px solid ${cat.color}20` }}>
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

      </div>
    </section>
  );
}
