'use client';

import { useState } from 'react';
import { submitDemoRequest } from '../actions/demo';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await submitDemoRequest(email);
      if (res.success) {
        alert(`Thank you! Project request sent for: ${email}`);
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
            <form onSubmit={handleSubmit} className="hero-pill-form">
              <input
                type="email"
                placeholder="Your work email address"
                className="hero-pill-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
        </div>
      </div>
    </section>
  );
}
