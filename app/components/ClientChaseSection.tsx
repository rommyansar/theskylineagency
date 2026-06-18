'use client';

import { useState } from 'react';

export default function ClientChaseSection() {
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  return (
    <section className="client-chase-section" id="client-chase">
      <div className="section-container">
        <div className="grid-two-col chase-grid">
          
          {/* Left Column: Interactive Client Portal & Auto-Reminders Mockup Card */}
          <div className="chase-left-col">
            <div className="reminders-card">
              <div className="reminders-card-header">
                <h3>Client Portal & Auto-Reminders</h3>
              </div>
              
              <div className="reminders-card-body">
                {/* Toggle Row */}
                <div className="toggle-row">
                  <button 
                    type="button"
                    className={`toggle-switch ${remindersEnabled ? 'active' : ''}`}
                    onClick={() => setRemindersEnabled(!remindersEnabled)}
                    aria-label="Toggle auto reminders"
                  >
                    <span className="toggle-slider"></span>
                  </button>
                  <span className="toggle-label">
                    Automatically send <span className="text-blue-link">Milestone Alerts</span>
                  </span>
                </div>

                {/* Checklist items */}
                <div className={`reminders-list ${remindersEnabled ? 'enabled' : 'disabled'}`}>
                  <div className="reminder-item">
                    <span className="reminder-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="reminder-text">Alert 7 days before milestone due-date</span>
                  </div>

                  <div className="reminder-item">
                    <span className="reminder-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="reminder-text">SMS notification on due-date</span>
                  </div>

                  <div className="reminder-item">
                    <span className="reminder-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="reminder-text">Daily follow-up for missing deliverables</span>
                  </div>
                </div>

                {/* Save button */}
                <div className="reminders-card-footer">
                  <button type="button" className="btn-save">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Content */}
          <div className="chase-right-col">
            <h2 className="chase-title">Automate manual follow-ups</h2>
            
            <p className="chase-desc">
              Let your custom system handle client follow-ups. We build bespoke client portals and automated notifications directly into your platforms. Clients know exactly what files or approvals they need to provide, keeping your projects on track.
            </p>
            
            <p className="chase-desc">
              All uploads and form entries are automatically routed directly to your internal database or CRM, saving hours of manual data copy and filing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
