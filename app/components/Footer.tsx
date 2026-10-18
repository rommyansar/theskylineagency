'use client';

import { useState } from 'react';

type LegalModalType = 'terms' | 'privacy' | 'cookies' | null;

export default function Footer() {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  const handleOpenProjectModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-project-modal'));
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    const el = document.getElementById('contact');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer-section">
        <div className="section-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <a href="/" className="footer-logo">
                Skyline<span className="accent-dot">.</span>
              </a>
              <p className="footer-desc">
                Building custom web applications, operations dashboards, client portals, and internal tools tailored to your unique business requirements.
              </p>
              <div className="footer-social-row">
                <a href="https://www.instagram.com/theskyline.agency/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/theskylineagency" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column 1: Why Skyline */}
            <div>
              <h4 className="footer-title">Why Skyline</h4>
              <ul className="footer-links">
                <li><a href="/why#why-visibility">Proven Delivery</a></li>
                <li><a href="/why#why-automation">Development Process</a></li>
                <li><a href="/why#why-collaboration">Technical Expertise</a></li>
              </ul>
            </div>

            {/* Links Column 2: Platform */}
            <div>
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="/#services">Services Overview</a></li>
                <li><a href="/#reviews">Customer Reviews</a></li>
                <li><a href="/pricing">Pricing Plans</a></li>
              </ul>
            </div>

            {/* Links Column 3: Contact */}
            <div>
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li>
                  <a href="#contact" onClick={handleOpenProjectModal}>
                    Start a Project
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleScrollToContact}>
                    Inquiries
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <span className="footer-copyright">
              © 2026 Skyline Agency. All rights reserved.
            </span>
            <div className="footer-bottom-links">
              <button 
                onClick={() => setLegalModal('terms')} 
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Terms of Use
              </button>
              <button 
                onClick={() => setLegalModal('privacy')} 
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setLegalModal('cookies')} 
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal & Policy Modals */}
      {legalModal && (
        <div className="checkout-overlay" onClick={() => setLegalModal(null)}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <div className="checkout-header">
              <h3>
                {legalModal === 'terms' && 'Terms of Use'}
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'cookies' && 'Cookie Preferences'}
              </h3>
              <button className="checkout-close" onClick={() => setLegalModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="checkout-body" style={{ maxHeight: '70vh', overflowY: 'auto', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {legalModal === 'terms' && (
                <div>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>1. Scope of Engagement</h4>
                  <p style={{ marginBottom: '16px' }}>
                    Skyline Agency delivers bespoke software development, web applications, integrations, and ongoing engineering support in accordance with milestone specifications agreed upon in each client contract.
                  </p>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>2. Intellectual Property</h4>
                  <p style={{ marginBottom: '16px' }}>
                    Upon settlement of milestone invoices, full ownership rights to all custom application source code, databases, and architectural assets are transferred entirely to the client.
                  </p>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>3. Warranty & SLA</h4>
                  <p style={{ marginBottom: '20px' }}>
                    Every production deployment includes our 30-day bug-fix guarantee alongside custom maintenance and SLA options for enterprise infrastructure.
                  </p>
                </div>
              )}

              {legalModal === 'privacy' && (
                <div>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>Information We Collect</h4>
                  <p style={{ marginBottom: '16px' }}>
                    When you submit a project inquiry, booking request, or contact form, we collect the contact details you provide (such as your name, work email address, company name, and project scope) solely to evaluate your requirements and communicate regarding your proposal.
                  </p>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>Data Protection & Confidentiality</h4>
                  <p style={{ marginBottom: '16px' }}>
                    We never sell or share your business ideas, contact data, or project specifications with third-party advertisers. All client submissions are protected by mutual non-disclosure standards.
                  </p>
                  <h4 style={{ color: '#121212', marginBottom: '8px', fontSize: '16px' }}>Contact</h4>
                  <p style={{ marginBottom: '20px' }}>
                    For any questions regarding your data or to request data removal, reach out directly at contact@theskyline.agency.
                  </p>
                </div>
              )}

              {legalModal === 'cookies' && (
                <div>
                  <p style={{ marginBottom: '16px' }}>
                    We use cookies and essential local storage to maintain session preferences, secure form submissions, and ensure smooth navigation across our website.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                      <div>
                        <strong style={{ color: '#121212' }}>Essential Cookies</strong>
                        <div style={{ fontSize: '12px', color: '#666' }}>Required for site navigation, forms, and security.</div>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-teal-dark, #0d9488)' }}>Active</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                      <div>
                        <strong style={{ color: '#121212' }}>Performance & Analytics</strong>
                        <div style={{ fontSize: '12px', color: '#666' }}>Anonymous metrics to monitor site speed and usability.</div>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#121212' }}>Enabled</span>
                    </div>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setLegalModal(null)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
