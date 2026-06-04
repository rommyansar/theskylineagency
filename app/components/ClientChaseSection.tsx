'use client';

import { useState } from 'react';

export default function ClientChaseSection() {
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  return (
    <section className="client-chase-section" id="client-chase">
      <div className="section-container">
        <div className="grid-two-col chase-grid">
          
          {/* Left Column: Interactive Client Task Auto-Reminders Mockup Card */}
          <div className="chase-left-col">
            <div className="reminders-card">
              <div className="reminders-card-header">
                <h3>Client Task Auto-Reminders</h3>
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
                    Automatically send <span className="text-blue-link">Gentle Reminders</span>
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
                    <span className="reminder-text">Reminder 7 days before task due-date</span>
                  </div>

                  <div className="reminder-item">
                    <span className="reminder-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="reminder-text">Reminder on task due-date</span>
                  </div>

                  <div className="reminder-item">
                    <span className="reminder-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="reminder-text">Daily reminder when overdue</span>
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
            <h2 className="chase-title">Automate the client chase</h2>
            
            <p className="chase-desc">
              Let Karbon do the chasing for you by automating client requests and reminders. Clients become part of your workflow, so they know exactly what they need to action, and you know what you are still waiting on.
            </p>
            
            <p className="chase-desc">
              Attachments are automatically stored and filed against the corresponding jobs the moment a client sends them. You will never lose documents sent via email again.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
