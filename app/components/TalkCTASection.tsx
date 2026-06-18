'use client';

import { useState } from 'react';
import { submitDemoRequest } from '../actions/demo';

export default function TalkCTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await submitDemoRequest(email);
      if (res.success) {
        alert(`Thank you! Demo request booked for: ${email}`);
        setEmail('');
      } else {
        alert(`Could not send request: ${res.error}`);
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
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

        {/* Pill Form */}
        <div className="talk-cta-form-wrap">
          <form className="pill-form-container" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="pill-form-input" 
              placeholder="Your work email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button 
              type="submit" 
              className="pill-form-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get a Proposal'}
            </button>
          </form>
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
