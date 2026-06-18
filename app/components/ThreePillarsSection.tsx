'use client';

import { useState } from 'react';

type TabId = 'portals' | 'platforms' | 'integrations';

export default function ThreePillarsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('portals');

  const tabs = [
    {
      id: 'portals' as TabId,
      label: 'Client-Facing Applications',
      number: '01',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      quote: '"They built exactly what we described — a booking platform that feels like it was always ours."',
      author: 'Paul Sweeney, Founder at Pretium Group',
      desc: 'We design and develop customer-facing web applications — booking platforms, client portals, e-commerce storefronts, and self-service dashboards — tailored to your brand and business logic.',
      linkText: 'See how we build client applications',
      linkUrl: '#case-studies'
    },
    {
      id: 'platforms' as TabId,
      label: 'Internal Business Platforms',
      number: '02',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      quote: '"Our admin panel replaced three tools and cut onboarding time in half."',
      author: 'Katherine White, Operations Director at Ivory Consulting',
      desc: 'We engineer admin panels, staff management systems, and internal operations platforms that centralize your data, automate routine tasks, and give your team a single source of truth.',
      linkText: 'See how we build internal platforms',
      linkUrl: '#case-studies'
    },
    {
      id: 'integrations' as TabId,
      label: 'APIs & System Integrations',
      number: '03',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      quote: '"They connected our payment gateway, CRM, and inventory in one week."',
      author: 'Ali Redwood, Founder at Redwood Services',
      desc: 'We connect your platforms to any third-party API — payment processors, CRMs, shipping providers, analytics tools — building robust middleware and data pipelines that keep your systems in sync.',
      linkText: 'See how we build integrations',
      linkUrl: '#case-studies'
    }
  ];

  return (
    <section className="three-pillars-section" id="product">
      <div className="section-container">
        <div className="grid-two-col pillars-grid">
          
          {/* Left Side: Interactive Tabs and Content */}
          <div className="pillars-left-col">
            <div className="pillars-tab-headers">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <span className="pillar-tab-icon">{tab.icon}</span>
                    <span className="pillar-tab-label">{tab.label}</span>
                    <span className="pillar-tab-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Testimonial & Description for Active Tab */}
            {tabs.map((tab) => {
              if (tab.id !== activeTab) return null;
              return (
                <div key={tab.id} className="pillar-active-content">
                  <div className="pillar-testimonial-block">
                    <p className="pillar-active-quote">
                      {tab.quote}
                    </p>
                    <span className="pillar-active-cite">
                      — {tab.author}
                    </span>
                  </div>
                  <p className="pillar-active-desc">
                    {tab.desc}
                  </p>
                  <a href={tab.linkUrl} className="pillar-active-link">
                    {tab.linkText}
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 6h12M8 1l5 5-5 5" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Side: Static Visual Mockups (no interactive product UIs) */}
          <div className="pillars-right-col">
            <div className="pillar-mockup-box">
              
              {/* Tab 1: Client Application — Browser mockup of a polished portal */}
              {activeTab === 'portals' && (
                <div className="pillar-mockup-content automation-mockup">
                  {/* Browser Chrome */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.06)', marginBottom: '20px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                    <span style={{ marginLeft: '8px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>reservations.clientbrand.com</span>
                  </div>

                  {/* App Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>Upcoming Reservations</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>3 confirmed this week</div>
                    </div>
                    <div style={{ padding: '6px 14px', backgroundColor: 'var(--accent-teal)', borderRadius: '6px', fontSize: '11px', fontWeight: 800, color: '#121212' }}>+ New Booking</div>
                  </div>

                  {/* Reservation Cards */}
                  {[
                    { guest: 'Sarah Mitchell', date: 'Jun 24 — Jun 27', room: 'Suite 402', status: 'Confirmed', color: 'var(--accent-teal)' },
                    { guest: 'James Thornton', date: 'Jun 25 — Jun 28', room: 'Room 201', status: 'Checked In', color: '#8B5CF6' },
                    { guest: 'Emma Rodriguez', date: 'Jun 26 — Jun 29', room: 'Suite 105', status: 'Pending', color: '#FFBD2E' },
                  ].map((r, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '8px', borderLeft: `3px solid ${r.color}` }}>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{r.guest}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{r.date} · {r.room}</div>
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: r.color, backgroundColor: `${r.color}15`, padding: '3px 8px', borderRadius: '4px' }}>{r.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Internal Platform — Dashboard with charts */}
              {activeTab === 'platforms' && (
                <div className="pillar-mockup-content collaboration-mockup">
                  {/* Browser Chrome */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.06)', marginBottom: '16px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                    <span style={{ marginLeft: '8px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>admin.ivoryconsulting.com</span>
                  </div>

                  {/* KPI Row */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    {[
                      { label: 'Active Projects', value: '24', change: '+3', color: 'var(--accent-teal)' },
                      { label: 'Team Members', value: '12', change: '', color: '#8B5CF6' },
                      { label: 'Avg Delivery', value: '8.2 wk', change: '-1.5', color: '#F18978' },
                    ].map((kpi, idx) => (
                      <div key={idx} style={{ flex: 1, padding: '12px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>{kpi.value}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 600 }}>{kpi.label}</div>
                        {kpi.change && <div style={{ fontSize: '10px', color: kpi.color, fontWeight: 800, marginTop: '4px' }}>{kpi.change}</div>}
                      </div>
                    ))}
                  </div>

                  {/* Mini Bar Chart */}
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px' }}>PROJECTS DELIVERED — 2026</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
                      {[35, 55, 45, 70, 60, 85].map((h, idx) => (
                        <div key={idx} style={{ flex: 1, height: `${h}%`, backgroundColor: idx === 5 ? 'var(--accent-teal)' : 'rgba(0,0,0,0.06)', borderRadius: '3px' }}></div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted)', marginTop: '6px' }}>
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Integrations — Architecture / Connection Diagram */}
              {activeTab === 'integrations' && (
                <div className="pillar-mockup-content visibility-mockup">
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>System Integration Map</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Custom middleware connecting your business tools</div>
                  </div>

                  {/* Center Hub */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    {/* Top Row - External Services */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                      {['Stripe', 'Twilio', 'AWS S3'].map((svc) => (
                        <div key={svc} style={{ padding: '8px 14px', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '6px', fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', border: '1px solid rgba(0,0,0,0.06)' }}>{svc}</div>
                      ))}
                    </div>

                    {/* Connector Lines */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: '2px', height: '20px', backgroundColor: 'var(--accent-teal)', opacity: 0.4 }}></div>
                      ))}
                    </div>

                    {/* Central API Hub */}
                    <div style={{ padding: '14px 28px', backgroundColor: 'var(--accent-teal)', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#121212' }}>Your Custom API</div>
                      <div style={{ fontSize: '10px', color: '#121212', opacity: 0.7 }}>Built by Skyline</div>
                    </div>

                    {/* Connector Lines */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: '2px', height: '20px', backgroundColor: '#8B5CF6', opacity: 0.4 }}></div>
                      ))}
                    </div>

                    {/* Bottom Row - Internal Systems */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                      {['Client Portal', 'Admin Panel', 'Analytics'].map((svc) => (
                        <div key={svc} style={{ padding: '8px 14px', backgroundColor: 'rgba(139,92,246,0.08)', borderRadius: '6px', fontSize: '11px', fontWeight: 700, color: '#8B5CF6', border: '1px solid rgba(139,92,246,0.15)' }}>{svc}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
