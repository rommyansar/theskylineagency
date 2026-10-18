'use client';

import { useState } from 'react';
import { submitDemoRequest } from '../actions/demo';

export default function TalkCTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitDemoRequest(email);
      if (res.success) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setErrorMsg(res.error || 'Could not send request. Please try again.');
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenFullModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-project-modal'));
    }
  };

  return (
    <section className="talk-cta-section" id="contact">
      <div className="spheres-bg-left"></div>
      <div className="spheres-bg-right"></div>

      <div className="section-container">
        <h2 className="talk-cta-title">Ready to build your custom application?</h2>
        <p className="talk-cta-sub">
          Get in touch with our engineering team to discuss your project requirements and receive a custom estimate.
        </p>

        {/* Pill Form or Success Message */}
        <div className="talk-cta-form-wrap">
          {isSuccess ? (
            <div style={{
              backgroundColor: 'rgba(0, 203, 160, 0.12)',
              border: '1px solid var(--accent-teal)',
              borderRadius: '50px',
              padding: '16px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              boxShadow: '0 8px 30px rgba(0, 203, 160, 0.2)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>
                Thank you! Your project proposal request has been received. Our team will review and reply within 24 hours.
              </span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
              {errorMsg && (
                <div style={{ color: '#ff6b6b', fontSize: '13px', background: 'rgba(255, 107, 107, 0.12)', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(255, 107, 107, 0.25)' }}>
                  {errorMsg}
                </div>
              )}
              <form className="pill-form-container" onSubmit={handleSubmit} style={{ width: '100%' }}>
                <input 
                  type="email" 
                  className="pill-form-input" 
                  placeholder="Your work email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className="pill-form-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get a Proposal'}
                </button>
              </form>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
                Have detailed requirements?{' '}
                <button 
                  onClick={handleOpenFullModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-teal)',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '13px'
                  }}
                >
                  Fill out our project planner →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom 3 Badges aligned horizontally */}
        <div className="talk-cta-badges-row">
          <div className="talk-cta-badge" style={{ borderBottom: '4px solid #FF5F56' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#FF5F56' }}>BEST PARTNER</span>
            <span style={{ fontSize: '14px', fontWeight: 800 }}>Top 50</span>
            <span style={{ fontSize: '8px', color: 'var(--text-muted)' }}>Custom Software Agencies</span>
          </div>

          <div className="talk-cta-badge" style={{ borderBottom: '4px solid #8B5CF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#8B5CF6' }}>SPRING 2026</span>
            <span style={{ fontSize: '11px', fontWeight: 800 }}>Most Likely Recommend</span>
          </div>

          <div className="talk-cta-badge" style={{ borderBottom: '4px solid var(--accent-teal)' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: 'var(--accent-teal)' }}>SPRING 2026</span>
            <span style={{ fontSize: '13px', fontWeight: 800 }}>Best Relation</span>
          </div>
        </div>

      </div>
    </section>
  );
}
