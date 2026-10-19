'use client';

import { useState, useEffect } from 'react';
import { submitDemoRequest } from '../actions/demo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitDemoRequest(email);
      if (res.success) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setErrorMsg(res.error || 'Could not send request.');
      }
    } catch {
      setErrorMsg('An error occurred. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`dpop ${isOpen ? 'show' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dpoph"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dpop-card">
        <button
          className="dpop-x"
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>
        <span className="k">Free, before we even talk</span>
        <h2 id="dpoph">Get a demo platform blueprint now.</h2>
        <p>
          Message us on WhatsApp or submit your work email. We&apos;ll build a demo architecture and system blueprint tailored for your business before you commit to anything.
        </p>

        {isSuccess ? (
          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              background: 'rgba(34, 232, 255, 0.1)',
              border: '1px solid var(--cyan)',
              color: '#fff',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            ✓ Thank you! Proposal request received. Our team will reach out within 2 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
            {errorMsg && (
              <div style={{ color: '#ff4a5a', fontSize: '13px' }}>{errorMsg}</div>
            )}
            <input
              type="email"
              placeholder="Your work email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                height: '46px',
                padding: '0 14px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                background: '#07070C',
                color: 'var(--ink)',
                fontSize: '15px',
              }}
            />
            <button
              type="submit"
              className="btn btn-p dpop-go"
              disabled={isSubmitting}
            >
              <span className="t">
                <i data-t={isSubmitting ? 'Sending...' : 'Get My Free Proposal'}>
                  {isSubmitting ? 'Sending...' : 'Get My Free Proposal'}
                </i>
              </span>
              <span className="ar">→</span>
            </button>
          </form>
        )}

        <div style={{ textAlign: 'center', marginTop: '4px' }}>
          <span style={{ fontSize: '12px', color: 'var(--mute)' }}>— or chat instantly —</span>
          <a
            className="btn btn-s"
            href="https://wa.me/916005602936?text=I%20need%20a%20demo%20website"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            <span className="t">
              <i data-t="Get Demo on WhatsApp">Get Demo on WhatsApp</i>
            </span>
            <span className="ar">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
