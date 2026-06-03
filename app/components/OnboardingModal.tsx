'use client';

import { useState } from 'react';
import { submitOnboarding } from '../actions/onboarding';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'App Development',
    budget: '$5,000 - $10,000',
    details: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      setErrorMsg('Please fill in your name and email.');
      return;
    }
    setErrorMsg('');
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitOnboarding(formData);
      if (res.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(res.error || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        {/* Close Button */}
        <button className="onboarding-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="onboarding-success">
            <div className="success-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2>Project Request Sent!</h2>
            <p>Thank you for reaching out. We have logged your details and will get back to you within 24 hours to schedule our kickoff call.</p>
            <button className="onboarding-submit-btn" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="onboarding-form">
            {/* Form Header */}
            <div className="onboarding-header-wrap">
              <span className="onboarding-step-indicator">Step {step} of 3</span>
              <h2>Start your project</h2>
              <p>Tell us about your project, and we&apos;ll help you bring it to life.</p>
            </div>

            {/* Step Progress Bar */}
            <div className="onboarding-progress-bar">
              <div className="onboarding-progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            {errorMsg && <div className="onboarding-error-banner">{errorMsg}</div>}

            {/* Form Steps */}
            <div className="onboarding-step-container">
              {step === 1 && (
                <div className="onboarding-step">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="onboarding-step">
                  <div className="form-group">
                    <label htmlFor="projectType">What service do you need? *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="App Development">App Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="AI Automation">AI Automation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="onboarding-step">
                  <div className="form-group">
                    <label htmlFor="details">Tell us about your goals *</label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe what you want to build, key features, deadlines, or design inspiration..."
                      rows={5}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer Navigation */}
            <div className="onboarding-footer">
              {step > 1 && (
                <button type="button" className="onboarding-back-btn" onClick={handleBack} disabled={isSubmitting}>
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button type="button" className="onboarding-next-btn" onClick={handleNext}>
                  Continue
                </button>
              ) : (
                <button type="submit" className="onboarding-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="onboarding-spinner"></div>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
