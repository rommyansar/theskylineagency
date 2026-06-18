'use client';

import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { submitPricingLead } from '../actions/onboarding';

export default function PricingSection() {
  const sectionRef = useReveal();
  
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lead form states
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handlePlanClick = (pkgName: string, pkgPrice: string, pkgBilling?: string) => {
    const formattedPrice = pkgPrice === 'Custom Pricing' ? 'Custom Pricing' : `$${pkgPrice}${pkgBilling || ''}`;
    setSelectedPlan({ name: pkgName, price: formattedPrice });
    setIsSuccess(false);
    setLeadForm({ name: '', email: '', phone: '', requirements: '' });
    setSubmitError('');
  };

  const closeForm = () => {
    setSelectedPlan(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLeadForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await submitPricingLead({
        planName: selectedPlan.name,
        planPrice: selectedPlan.price,
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        requirements: leadForm.requirements,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(res.error || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      name: 'Starter',
      price: '2,500+',
      billing: ' / project',
      description: "Essential design and development to digitize a single process or create a basic custom app.",
      isPopular: false,
      features: [
        'Custom App Blueprint',
        'Basic Database Setup',
        'Tailored User Interface',
        'Email API Integration'
      ]
    },
    {
      name: 'Professional',
      price: '6,000+',
      billing: ' / project',
      description: "Full custom web application development, including API integrations and a custom dashboard.",
      isPopular: true,
      features: [
        'Everything in Starter',
        'Advanced Custom Workflows',
        'Operations Dashboard',
        'Multi-user Roles'
      ]
    },
    {
      name: 'Business',
      price: '12,500+',
      billing: ' / project',
      description: "Enterprise-grade software complete with AI automation features and a dedicated client portal.",
      isPopular: false,
      features: [
        'Everything in Professional',
        'Custom AI Agent Features',
        'Branded Client Portal',
        'Priority SLA Support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      billing: '',
      description: "Large-scale bespoke software systems, legacy migrations, and dedicated developer teams.",
      isPopular: false,
      features: [
        'Unlimited Custom Systems',
        'Legacy System Migration',
        'Custom API Connections',
        '24/7 SLA Maintenance'
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Investment</span>
          <h2 className="section-title">Custom Development & Support Plans</h2>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div className={`pricing-card reveal reveal-delay-${i + 1} ${pkg.isPopular ? 'popular' : ''}`} key={i}>
              {pkg.isPopular && <div className="popular-badge">Recommended</div>}

              <div className="pricing-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price-wrap">
                  {pkg.price !== 'Custom Pricing' && <span className="pricing-currency">US$</span>}
                  <span className="pricing-price" style={pkg.price === 'Custom Pricing' ? { fontSize: '38px', letterSpacing: '-0.02em', marginTop: '4px' } : {}}>{pkg.price}</span>
                  {pkg.billing && <span className="pricing-billing" style={{ alignSelf: 'flex-end', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 600 }}>{pkg.billing}</span>}
                </div>
                <p className="pricing-desc">{pkg.description}</p>
              </div>

              <div className="pricing-features">
                <h4 className="pricing-features-title">What&apos;s Included</h4>
                <ul className="pricing-features-list">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="pricing-feature-item included">
                      <span className="feature-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent" style={{ color: 'var(--accent-teal)' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-action">
                <button className="pricing-button" onClick={() => handlePlanClick(pkg.name, pkg.price, pkg.billing)}>
                  {pkg.price === 'Custom Pricing' ? 'Contact Us' : 'Get Started'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Form Popup Modal */}
      {selectedPlan && (
        <div className="checkout-overlay" onClick={closeForm}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <div className="checkout-header">
              <h3>{selectedPlan.name} Plan Request</h3>
              <button className="checkout-close" onClick={closeForm}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="checkout-body">
              <div className="checkout-pkg-info" style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px', letterSpacing: '0.05em' }}>Selected Plan</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 800, fontSize: '18px', color: '#121212' }}>{selectedPlan.name}</span>
                  <span style={{ fontWeight: 800, color: 'var(--accent-teal-dark, #0d9488)' }}>{selectedPlan.price}</span>
                </div>
              </div>

              {!isSuccess ? (
                <form className="checkout-form" onSubmit={handleLeadSubmit}>
                  {submitError && (
                    <div className="checkout-error-msg" style={{ color: '#ff4d4d', fontSize: '13px', marginBottom: '16px', background: 'rgba(255, 77, 77, 0.08)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255, 77, 77, 0.15)' }}>
                      {submitError}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="lead-name">Name *</label>
                    <input 
                      type="text" 
                      id="lead-name"
                      name="name" 
                      required 
                      value={leadForm.name}
                      onChange={handleInputChange}
                      placeholder="John Smith" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lead-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="lead-email"
                      name="email" 
                      required 
                      value={leadForm.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lead-phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="lead-phone"
                      name="phone" 
                      value={leadForm.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lead-requirements">Requirements / Message (Optional)</label>
                    <textarea 
                      id="lead-requirements"
                      name="requirements" 
                      rows={3} 
                      value={leadForm.requirements}
                      onChange={handleInputChange}
                      placeholder="Tell us about your team size, custom requirement needs, or goals..."
                      disabled={isSubmitting}
                    />
                  </div>
                  <button type="submit" className="checkout-submit" disabled={isSubmitting} style={{ backgroundColor: 'var(--accent-teal)', color: '#000000', fontWeight: '800' }}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              ) : (
                <div className="qr-view" style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0d9488', marginBottom: '16px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#121212' }}>Request Received!</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                    Thank you for your interest. Our team will review your requirements and reach out to you shortly.
                  </p>
                  <button 
                    onClick={closeForm} 
                    style={{ 
                      padding: '10px 24px', 
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
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
