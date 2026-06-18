'use client';

import { useState } from 'react';
import Image from 'next/image';
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
    <section className="hero-banner">
      {/* Nice Karbon-style background and overlay */}
      <div className="hero-banner-bg" />
      <div className="hero-banner-overlay" />

      <div className="hero-banner-inner">
        <div className="hero-banner-content">
          <h1 className="hero-banner-heading">
            <span className="text-peach">Custom software</span>{' '}
            <span className="text-white">built around your business</span>
          </h1>

          <p className="hero-banner-desc">
            We design, develop, and engineer custom web applications, internal platforms, and client portals tailored to your unique business operations.
          </p>

          {/* Inline Form + Or + Outline Button */}
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
                {isSubmitting ? 'Sending...' : 'Book a Demo'}
              </button>
            </form>
          </div>
        </div>

        {/* Product screenshot — overflowing right edge, Karbon-style */}
        <div className="hero-product-float">
          <div className="hero-product-overflow-wrap">
            <Image
              src="/hero-automation.png"
              alt="Skyline Workflow Automation Dashboard"
              width={960}
              height={820}
              className="hero-product-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
