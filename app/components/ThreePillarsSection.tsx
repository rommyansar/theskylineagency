'use client';

import { useState } from 'react';

type TabId = 'automation' | 'collaboration' | 'visibility';

export default function ThreePillarsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('automation');

  const tabs = [
    {
      id: 'automation' as TabId,
      label: 'Automation & Efficiency',
      number: '01',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      quote: '"Enabled us to be more efficient, productive and profitable."',
      author: 'G2 Review from Paul Sweeney, Pretium Solutions',
      desc: 'Get more out of every team member by automating tasks, standardizing common processes, scheduling data collection and scaling onboarding.',
      linkText: 'How Skyline saves each employee 18.5 hours a week',
      linkUrl: '#automation-case'
    },
    {
      id: 'collaboration' as TabId,
      label: 'Collaboration & Connectivity',
      number: '02',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      quote: '"The perfect program for team collaboration and accountability."',
      author: 'G2 Review from Katherine White, Ivory Planning Group',
      desc: 'Unite the firm with one place to collaborate on email, clients, jobs and tasks. Get more work done together, whether people are remote or in the office.',
      linkText: 'How Skyline connects your team',
      linkUrl: '#collaboration-case'
    },
    {
      id: 'visibility' as TabId,
      label: 'Visibility & Control',
      number: '03',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      quote: '"Finally in control of my practice."',
      author: 'G2 Review from Ali Redwood, TaxAssist Accountants',
      desc: 'Enjoy peace of mind knowing where every job stands, who’s working on what, and what’s being said to clients. No blind spots. Nothing falls through the cracks.',
      linkText: 'How Skyline puts you in control',
      linkUrl: '#visibility-case'
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

          {/* Right Side: Mockup Display based on activeTab */}
          <div className="pillars-right-col">
            <div className="pillar-mockup-box">
              
              {/* Tab 1: Automation Mockup */}
              {activeTab === 'automation' && (
                <div className="pillar-mockup-content automation-mockup">
                  <div className="mockup-header">
                    <span className="mockup-header-title">Workflow Automation</span>
                    <button className="mockup-header-btn">Add Request</button>
                  </div>
                  
                  <div className="mockup-card-main">
                    <div className="mockup-card-left">
                      <div className="mockup-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <line x1="20" y1="8" x2="20" y2="14" />
                          <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="mockup-card-title">New Client Onboarding</h4>
                        <span className="mockup-card-subtitle">Trigger: Signed Proposal</span>
                      </div>
                    </div>
                    <div className="mockup-card-badge">
                      2 Automators
                    </div>
                  </div>

                  {/* Visual Process Connector Nodes */}
                  <div className="mockup-subtasks-flow">
                    <div className="mockup-flow-node">
                      <span>Auto-create checklist folder</span>
                      <span className="node-status-done">Done</span>
                    </div>
                    <div className="mockup-flow-node">
                      <span>Send client request form</span>
                      <span className="node-status-pending">Triggered</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Collaboration Mockup */}
              {activeTab === 'collaboration' && (
                <div className="pillar-mockup-content collaboration-mockup">
                  <div className="mockup-header" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '10px' }}>
                    <span className="mockup-header-title">Shared Project Inbox</span>
                  </div>

                  <div className="mockup-chat-bubble-container">
                    <div className="mockup-chat-row">
                      <div className="mockup-chat-avatar avatar-red">KW</div>
                      <div className="mockup-chat-body">
                        <div className="mockup-chat-meta">
                          <span className="mockup-chat-author">Katherine White</span>
                          <span className="mockup-chat-time">10:42 AM</span>
                        </div>
                        <p className="mockup-chat-text">
                          Hey team, did we get the proposal out? The client is asking for a timeline.
                        </p>
                      </div>
                    </div>

                    <div className="mockup-chat-action">
                      <div className="mockup-action-left">
                        <div className="mockup-chat-avatar avatar-teal">SG</div>
                        <span className="mockup-action-text">
                          Sara Goepel assigned task to Yohan Seimon
                        </span>
                      </div>
                      <span className="mockup-action-time">10:44 AM</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Visibility Mockup */}
              {activeTab === 'visibility' && (
                <div className="pillar-mockup-content visibility-mockup">
                  <div className="mockup-header" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span className="mockup-header-title">Capacity Tracking</span>
                    <div className="mockup-header-stats">
                      <div className="mockup-stat-item">
                        <span className="stat-dot dot-teal"></span>
                        <span>Sara Goepel (4)</span>
                      </div>
                      <div className="mockup-stat-item">
                        <span className="stat-dot dot-purple"></span>
                        <span>Yohan Seimon (2)</span>
                      </div>
                    </div>
                  </div>

                  {/* Task Card list */}
                  <div className="mockup-task-cards-list">
                    {[
                      {
                        title: 'Monthly Accounts',
                        client: 'Pacific Coast Logistics',
                        status: 'In Progress',
                        budget: '3h 30m',
                        actual: '1h 15m',
                        remaining: '2h 15m',
                        colorClass: 'color-teal'
                      },
                      {
                        title: 'Service Proposal',
                        client: 'Farmer Fresh Markets',
                        status: 'In Progress',
                        budget: '2h',
                        actual: '30m',
                        remaining: '1h 30m',
                        colorClass: 'color-teal'
                      },
                      {
                        title: 'Internal Process Review',
                        client: 'Individual Tax - Harriet London',
                        status: 'In Progress',
                        budget: '3h 30m',
                        actual: '1h',
                        remaining: '2h 30m',
                        colorClass: 'color-purple'
                      }
                    ].map((card, idx) => (
                      <div key={idx} className="mockup-task-card">
                        <div className="task-card-header">
                          <div>
                            <span className="task-card-title">{card.title}</span>
                            <span className="task-card-client">{card.client}</span>
                          </div>
                          <span className="task-card-status">{card.status}</span>
                        </div>
                        <div className="task-card-metrics">
                          <span>Budget: <strong>{card.budget}</strong></span>
                          <span>Actual: <strong>{card.actual}</strong></span>
                          <span>Remaining: <strong className={card.colorClass}>{card.remaining}</strong></span>
                        </div>
                      </div>
                    ))}
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
