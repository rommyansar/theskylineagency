'use client';

import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'app' | 'website' | 'software' | 'ai'>('website');
  const sectionRef = useReveal();
  
  const [checkoutPkg, setCheckoutPkg] = useState<{name: string, price: string} | null>(null);
  const [formStep, setFormStep] = useState<'form' | 'qr'>('form');

  const handleContinue = (pkgName: string, pkgPrice: string) => {
    setCheckoutPkg({ name: pkgName, price: pkgPrice });
    setFormStep('form');
  };

  const closeCheckout = () => {
    setCheckoutPkg(null);
  };

  const appPackages = [
    {
      name: 'Silver Mobile APP Package',
      price: '150',
      description: "Basic and Static Mobile App with 5 Screen (No API Integration) Figma to Flutter Mobile App",
      delivery: "6-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: false,
      features: [
        { text: "Functional Android app", included: true },
        { text: "Functional IOS App", included: true },
        { text: "App design", included: false },
        { text: "App submission", included: false },
        { text: "App icon", included: false },
        { text: "Splash screen", included: true },
        { text: "Ad network integration", included: false },
        { text: "Source code", included: true },
      ]
    },
    {
      name: 'Gold Mobile APP Package',
      price: '750',
      description: "Medium Sized App with 10-15 Screens involving Responsive UI (Client's Provided API's Integration)",
      delivery: "14-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: true,
      features: [
        { text: "Functional Android app", included: true },
        { text: "Functional IOS App", included: true },
        { text: "App design", included: true },
        { text: "App submission", included: true },
        { text: "App icon", included: true },
        { text: "Splash screen", included: true },
        { text: "Ad network integration", included: true },
        { text: "Source code", included: true },
      ]
    },
    {
      name: 'Platinum Mobile APP Package',
      price: '1,500',
      description: "Customizable 20-25 Screens App Development + API integration + Responsive UI + Admin Panel",
      delivery: "30-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: false,
      features: [
        { text: "Functional Android app", included: true },
        { text: "Functional IOS App", included: true },
        { text: "App design", included: true },
        { text: "App submission", included: true },
        { text: "App icon", included: true },
        { text: "Splash screen", included: true },
        { text: "Ad network integration", included: true },
        { text: "Source code", included: true },
      ]
    }
  ];

  const websitePackages = [
    {
      name: 'Metro Path',
      price: '100',
      description: "Basic website up to 1 pages following your design and referece no API integration",
      delivery: "3-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: false,
      features: [
        { text: "Functional website", included: true },
        { text: "1 page", included: true },
        { text: "Content upload", included: true },
        { text: "5 plugins/extensions", included: true },
        { text: "E-commerce functionality", included: false },
        { text: "1 product", included: true },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: false },
        { text: "Autoresponder integration", included: false },
        { text: "Speed optimization", included: false },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ]
    },
    {
      name: 'Metro Ways',
      price: '280',
      description: "Business website following clients design 3-5 pages basic API integration",
      delivery: "10-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: true,
      features: [
        { text: "Functional website", included: true },
        { text: "3 pages", included: true },
        { text: "Content upload", included: true },
        { text: "8 plugins/extensions", included: true },
        { text: "E-commerce functionality", included: true },
        { text: "5 products", included: true },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: true },
        { text: "Autoresponder integration", included: false },
        { text: "Speed optimization", included: true },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ]
    },
    {
      name: 'Metro Lines',
      price: '480',
      description: "Scalable website development following your design basic API integration (Customizable)",
      delivery: "14-day delivery",
      revisions: "Unlimited Revisions",
      isPopular: false,
      features: [
        { text: "Functional website", included: true },
        { text: "6 pages", included: true },
        { text: "Content upload", included: true },
        { text: "10 plugins/extensions", included: true },
        { text: "E-commerce functionality", included: true },
        { text: "10 products", included: true },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: true },
        { text: "Autoresponder integration", included: true },
        { text: "Speed optimization", included: true },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ]
    }
  ];

  const softwarePackages = [
    {
      name: 'Starter Mobile Friendly Website',
      price: '350',
      description: "Basic Static website price where it will display 3 pages",
      delivery: "10-day delivery",
      revisions: "1 Revision",
      isPopular: false,
      features: [
        { text: "3 pages", included: true },
        { text: "Design customization", included: true },
        { text: "Content upload", included: false },
        { text: "Responsive design", included: true },
        { text: "Source code", included: true },
      ]
    },
    {
      name: 'Advance Mobile Friendly Website',
      price: '500',
      description: "Basic Package + Up to 8 Pages + Google Map & Analytics Integration",
      delivery: "21-day delivery",
      revisions: "3 Revisions",
      isPopular: true,
      features: [
        { text: "8 pages", included: true },
        { text: "Design customization", included: true },
        { text: "Content upload", included: false },
        { text: "Responsive design", included: true },
        { text: "Source code", included: true },
      ]
    },
    {
      name: 'Premium Mobile Friendly Website',
      price: '995',
      description: "Standard Package + 12 Pages, Payment Gateways, 15 Days free support,",
      delivery: "30-day delivery",
      revisions: "9 Revisions",
      isPopular: false,
      features: [
        { text: "10 pages", included: true },
        { text: "Design customization", included: true },
        { text: "Content upload", included: true },
        { text: "Responsive design", included: true },
        { text: "Source code", included: true },
      ]
    }
  ];

  const aiPackages = [
    {
      name: 'AI Feature Integration',
      price: '250',
      description: "Add an AI feature (chatbot, automation, or GPT) to your web app.",
      delivery: "6-day delivery",
      revisions: "1 Revision",
      isPopular: false,
      features: [
        { text: "Functional Web App", included: false },
        { text: "Desktop Application", included: false },
        { text: "AI model integration", included: true },
        { text: "AI Model Fine-tuning", included: false },
        { text: "Chatbot integration", included: true },
        { text: "Source Code", included: true },
      ]
    },
    {
      name: 'AI Web Application',
      price: '300',
      description: "Custom AI powered web application with automation features, authentication, and API integrations.",
      delivery: "10-day delivery",
      revisions: "2 Revisions",
      isPopular: true,
      features: [
        { text: "Functional Web App", included: true },
        { text: "Desktop Application", included: false },
        { text: "AI model integration", included: true },
        { text: "AI Model Fine-tuning", included: true },
        { text: "Chatbot integration", included: true },
        { text: "Source Code", included: true },
      ]
    },
    {
      name: 'AI SaaS Platform',
      price: '350',
      description: "A scalable AI SaaS with automation, GPT, database, and production deployment.",
      delivery: "14-day delivery",
      revisions: "5 Revisions",
      isPopular: false,
      features: [
        { text: "Functional Web App", included: true },
        { text: "Desktop Application", included: true },
        { text: "AI model integration", included: true },
        { text: "AI Model Fine-tuning", included: true },
        { text: "Chatbot integration", included: true },
        { text: "Source Code", included: true },
      ]
    }
  ];

  const packages = activeTab === 'app' ? appPackages : activeTab === 'software' ? softwarePackages : activeTab === 'ai' ? aiPackages : websitePackages;

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Investment</span>
          <h2 className="section-title">Clear, Transparent Pricing</h2>
        </div>

        <div className="pricing-tabs reveal reveal-delay-1">
          <button
            className={`pricing-tab ${activeTab === 'website' ? 'active' : ''}`}
            onClick={() => setActiveTab('website')}
          >
            Website Development
          </button>
          <button
            className={`pricing-tab ${activeTab === 'app' ? 'active' : ''}`}
            onClick={() => setActiveTab('app')}
          >
            App Development
          </button>
          <button
            className={`pricing-tab ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => setActiveTab('software')}
          >
            Custom SaaS & Software
          </button>
          <button
            className={`pricing-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            AI & Automation
          </button>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div className={`pricing-card reveal reveal-delay-${i + 1} ${pkg.isPopular ? 'popular' : ''}`} key={i}>
              {pkg.isPopular && <div className="popular-badge">Recommended</div>}

              <div className="pricing-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price-wrap">
                  <span className="pricing-currency">US$</span>
                  <span className="pricing-price">{pkg.price}</span>
                </div>
                <p className="pricing-desc">{pkg.description}</p>
              </div>

              <div className="pricing-meta">
                <div className="pricing-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{pkg.delivery}</span>
                </div>
                <div className="pricing-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.34 5.34"></path>
                  </svg>
                  <span>{pkg.revisions}</span>
                </div>
              </div>

              <div className="pricing-features">
                <h4 className="pricing-features-title">What&apos;s Included</h4>
                <ul className="pricing-features-list">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`pricing-feature-item ${feature.included ? 'included' : 'excluded'}`}>
                      <span className="feature-icon">
                        {feature.included ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        )}
                      </span>
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-action">
                <button className="pricing-button" onClick={() => handleContinue(pkg.name, pkg.price)}>
                  Continue
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

      {/* Checkout Modal */}
      {checkoutPkg && (
        <div className="checkout-overlay" onClick={closeCheckout}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()}>
            <div className="checkout-header">
              <h3>Secure Checkout</h3>
              <button className="checkout-close" onClick={closeCheckout}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="checkout-body">
              <div className="checkout-pkg-info">
                <div className="checkout-pkg-name">{checkoutPkg.name}</div>
                <div className="checkout-pkg-price">US${checkoutPkg.price}</div>
              </div>

              {formStep === 'form' ? (
                <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setFormStep('qr'); }}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@company.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number (Optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label>Project Details *</label>
                    <textarea required rows={3} placeholder="Tell us briefly about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="checkout-submit">Proceed to Payment</button>
                </form>
              ) : (
                <div className="qr-view">
                  <h4>Scan to Pay</h4>
                  <p>Please scan the QR code to complete the payment for your project.</p>
                  
                  <div className="qr-image-wrap">
                    <img src="/qr-code.jpg" alt="Payment QR Code" />
                  </div>
                  
                  <div className="qr-note">
                    After successful payment, our team will review your submitted details and contact you within 24 hours.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
