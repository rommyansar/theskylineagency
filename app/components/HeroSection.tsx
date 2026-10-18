'use client';

import { useState } from 'react';
import { submitDemoRequest } from '../actions/demo';

export default function HeroSection() {
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
        setErrorMsg(res.error || 'Could not send proposal request.');
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero-banner minimal-hero">
      {/* Premium background and overlay */}
      <div className="hero-banner-bg" />
      <div className="hero-banner-overlay" />

      <div className="hero-banner-inner">
        <div className="hero-banner-content">
          <h1 className="hero-banner-heading">
            <span className="text-peach">Custom software</span><br />
            <span className="text-white">built around your business</span>
          </h1>

          <p className="hero-banner-desc">
            We design, develop, and engineer custom web applications, internal platforms, and client portals tailored to your unique business operations.
          </p>

          <div className="hero-cta-inline-wrap">
            {isSuccess ? (
              <div style={{
                backgroundColor: 'rgba(241, 137, 120, 0.15)',
                border: '1px solid #F18978',
                borderRadius: '40px',
                padding: '14px 28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#FFFFFF'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F18978" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontWeight: 700, fontSize: '15px' }}>
                  Thank you! Proposal request sent. We&apos;ll be in touch shortly.
                </span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {errorMsg && (
                  <div style={{ color: '#ff6b6b', fontSize: '13px', background: 'rgba(255, 107, 107, 0.12)', padding: '6px 14px', borderRadius: '6px' }}>
                    {errorMsg}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="hero-pill-form">
                  <input
                    type="email"
                    placeholder="Your work email address"
                    className="hero-pill-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit" 
                    className="hero-pill-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get a Proposal'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
