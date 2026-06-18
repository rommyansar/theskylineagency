'use client';

import { useState } from 'react';

// Card 1 Mockup: AI & Automation
const AIAgentsMockup = () => (
  <div className="mockup-container dark-theme">
    <div className="poly-bg-overlay"></div>
    <div className="floating-card ai-agents-card">
      <div className="mockup-row">
        <div className="avatar avatar-sara">S</div>
        <div className="mockup-text-container">
          <p className="mockup-text-muted">Sara assigned the task to <strong>AI Assistant</strong></p>
        </div>
      </div>
      <div className="mockup-row">
        <div className="avatar avatar-bookkeeper">A</div>
        <div className="mockup-text-container">
          <p className="mockup-text-main"><strong>AI Assistant</strong> connected to project database <span className="mockup-pulse-dot"></span></p>
          <p className="mockup-text-sub">Analyzing project deadlines and resources...</p>
          <p className="mockup-text-sub">Preparing daily status report...</p>
        </div>
      </div>
      <div className="mockup-chat-bubble">
        <div className="chat-avatar">A</div>
        <div className="chat-content">
          <p className="chat-message">
            <strong>AI Assistant</strong> <span className="mention">@Sara</span> I have compiled the client onboarding package for Reach Foundation and attached it for review.
          </p>
          <div className="chat-file-attachment">
            <span className="file-icon">📊</span>
            <span className="file-name">Client Onboarding Pack.pdf</span>
            <span className="check-icon">✓</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Card 2 Mockup: Billing & Payments
const BillingPaymentsMockup = () => (
  <div className="mockup-container dark-theme">
    <div className="poly-bg-overlay"></div>
    <div className="floating-card billing-card">
      <div className="billing-header">
        <div className="billing-logo">
          <span className="logo-dot logo-dot-green"></span>
          <span className="logo-dot logo-dot-blue"></span>
          <span className="logo-text">ACME OPERATIONS</span>
        </div>
        <div className="billing-invoice-info">
          <span className="invoice-title">Payment</span>
          <span className="invoice-meta">Invoice KIN-008248 &bull; Due 330.75</span>
        </div>
      </div>
      <div className="billing-body">
        <div className="billing-sidebar">
          <div className="sidebar-item">Requests</div>
          <div className="sidebar-item active">Billing</div>
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Log Out</div>
        </div>
        <div className="billing-main">
          <div className="payment-tabs">
            <div className="payment-tab active">
              <span className="tab-icon">💳</span>
              <span>Card</span>
            </div>
            <div className="payment-tab">
              <span className="tab-icon">🏦</span>
              <span>Bank</span>
            </div>
          </div>
          <div className="autopay-section">
            <div className="autopay-toggle-container">
              <span className="autopay-label">AUTO-PAY</span>
              <div className="toggle-switch active">
                <span className="toggle-thumb"></span>
              </div>
            </div>
            <p className="autopay-desc">Enable automatic payment for future invoices</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Card 3 Mockup: Client Engagements
const ClientEngagementsMockup = () => (
  <div className="mockup-container light-theme">
    <div className="sand-bg-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </div>
    
    <div className="proposal-doc-underlay">
      <div className="doc-header">
        <div className="billing-logo">
          <span className="logo-dot logo-dot-green"></span>
          <span className="logo-dot logo-dot-blue"></span>
          <span className="logo-text">ACME OPERATIONS</span>
        </div>
        <h4 className="doc-title">Introduction</h4>
      </div>
      <div className="doc-body-lines">
        <span className="line line-long"></span>
        <span className="line line-medium"></span>
        <span className="line line-short"></span>
        <span className="line line-long"></span>
      </div>
    </div>

    <div className="floating-steps-card">
      <div className="steps-list">
        <div className="step-item completed">
          <span className="step-dot"></span>
          <span className="step-label">Introduction</span>
        </div>
        <div className="step-item">
          <span className="step-dot"></span>
          <span className="step-label">Services</span>
        </div>
        <div className="step-item">
          <span className="step-dot"></span>
          <span className="step-label">Pricing</span>
        </div>
        <div className="step-item">
          <span className="step-dot"></span>
          <span className="step-label">Payment</span>
        </div>
        <div className="step-item">
          <span className="step-dot"></span>
          <span className="step-label">Agreement</span>
        </div>
      </div>
      <button className="continue-btn" type="button">
        <span>Continue</span>
        <span className="cursor-pointer-icon">🖰</span>
      </button>
    </div>
  </div>
);

// Card 4 Mockup: Client Management
const ClientManagementMockup = () => (
  <div className="mockup-container light-theme">
    <div className="sand-bg-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-3"></div>
    </div>
    
    <div className="floating-card management-card">
      <div className="management-actions">
        <button className="mgmt-action-btn" type="button">Post a Note</button>
        <button className="mgmt-action-btn" type="button">Send Email</button>
      </div>
      <div className="timeline-section">
        <div className="timeline-month">February</div>
        <div className="timeline-item">
          <div className="timeline-avatar avatar-sarah">SS</div>
          <div className="timeline-info">
            <span className="timeline-user">Sarah Sharpe</span>
            <span className="timeline-activity">Project Timeline &bull; 14 Abigail</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-avatar avatar-abigail">AS</div>
          <div className="timeline-info">
            <span className="timeline-user">Abigail Silvers</span>
            <span className="timeline-activity">Sent onboarding questionnaire</span>
          </div>
        </div>
        <div className="timeline-month">January</div>
        <div className="timeline-item">
          <div className="timeline-avatar avatar-pam">PZ</div>
          <div className="timeline-info">
            <span className="timeline-user">Pam Zwolliken</span>
            <span className="timeline-activity">Completed task 'Project Setup'</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function PracticeManagementSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: 'AI & Automation',
      desc: 'AI integrations tailored to automate repetitive categorization, data extraction, and support within your custom application.'
    },
    {
      title: 'Billing & Payments',
      desc: 'Build custom checkout checkouts, automatic invoicing, and multi-currency billing workflows.'
    },
    {
      title: 'Client Portals',
      desc: 'Deliver branded spaces for your clients to sign agreements, submit files, and track project status.'
    },
    {
      title: 'Operations Dashboards',
      desc: 'Maintain clear, searchable records of client profiles, project histories, milestones, and audit trails.'
    }
  ];

  const totalSlides = cards.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    // Show 3 items on desktop, so max slide index is 1 (totalSlides - 3 = 1)
    // We adjust max slide offset responsively via CSS transform, but for slide index max is 1
    setCurrentSlide((prev) => (prev < totalSlides - 3 ? prev + 1 : prev));
  };

  return (
    <section className="practice-mgmt-section" id="practice-mgmt">
      <div className="section-container">
        
        {/* Header with Carousel controls */}
        <div className="practice-mgmt-header">
          <div className="practice-mgmt-header-text">
            <h2 className="practice-mgmt-title">
              Manage Your Entire Operations
            </h2>
            <p className="practice-mgmt-sub">
              Bespoke digital platforms engineered to power your business workflows, clients, and revenue.
            </p>
          </div>
          
          {/* Scroll Buttons */}
          <div className="practice-mgmt-controls">
            <button 
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="control-btn prev-btn"
              aria-label="Scroll to previous item"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button 
              onClick={handleNext}
              disabled={currentSlide >= totalSlides - 3}
              className="control-btn next-btn"
              aria-label="Scroll to next item"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentSlide * 35}%)`
            }}
          >
            {cards.map((card, idx) => (
              <div key={idx} className="carousel-card-item">
                {/* Mockup Display Box */}
                <div className="card-mockup-box" style={{ padding: 0, height: '190px', border: 'none', background: 'none' }}>
                  {idx === 0 && <AIAgentsMockup />}
                  {idx === 1 && <BillingPaymentsMockup />}
                  {idx === 2 && <ClientEngagementsMockup />}
                  {idx === 3 && <ClientManagementMockup />}
                </div>

                {/* Card Title & Content */}
                <div className="card-body-content">
                  <h3 className="card-body-title">
                    {card.title}
                  </h3>
                  <p className="card-body-desc">
                    {card.desc}
                  </p>
                  
                  <a href="#contact" className="card-body-link">
                    Explore
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4h8M6 1l3 3-3 3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
