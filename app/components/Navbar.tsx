'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { submitOnboarding } from '../actions/onboarding';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Demo Modal State
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openDemoModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDemoModalOpen(true);
    setDemoSuccess(false);
    setDemoForm({ name: '', email: '', company: '', details: '' });
    setDemoError('');
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDemoForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingDemo(true);
    setDemoError('');

    try {
      const res = await submitOnboarding({
        name: demoForm.name,
        email: demoForm.email,
        company: demoForm.company,
        projectType: 'Demo Booking Request',
        budget: 'N/A',
        details: demoForm.details,
      });

      if (res.success) {
        setDemoSuccess(true);
      } else {
        setDemoError(res.error || 'Failed to submit request.');
      }
    } catch (err: any) {
      setDemoError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmittingDemo(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/" className="nav-logo">
            Skyline<span className="accent-dot">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="nav-links desktop-only">
            <a href="/why" className={`nav-link ${pathname === '/why' ? 'active' : ''}`}>
              Why Skyline
            </a>

            <a href={isHome ? '#reviews' : '/#reviews'} className="nav-link">
              Reviews
            </a>

            <a href={isHome ? '#services' : '/#services'} className="nav-link">
              Services
            </a>
            
            <a href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>
              Pricing
            </a>
          </div>

          {/* CTA buttons */}
          <div className="nav-cta-group desktop-only">
            <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '14px' }} onClick={openDemoModal}>
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <a href="/why" className="mobile-nav-link" onClick={closeMobileMenu}>Why Skyline</a>
            <a href={isHome ? '#reviews' : '/#reviews'} className="mobile-nav-link" onClick={closeMobileMenu}>Reviews</a>
            <a href={isHome ? '#services' : '/#services'} className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
            <a href="/pricing" className="mobile-nav-link" onClick={closeMobileMenu}>Pricing</a>
            <a href="#contact" className="mobile-nav-cta" onClick={(e) => { closeMobileMenu(); openDemoModal(e); }}>
              Book a Demo
            </a>
          </div>
        </div>
      </nav>

      {/* Global Book a Demo Modal */}
      {isDemoModalOpen && (
        <div className="checkout-overlay" onClick={closeDemoModal}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <div className="checkout-header">
              <h3>Book a Demo</h3>
              <button className="checkout-close" onClick={closeDemoModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="checkout-body">
              {!demoSuccess ? (
                <form className="checkout-form" onSubmit={handleDemoSubmit}>
                  {demoError && (
                    <div className="checkout-error-msg" style={{ color: '#ff4d4d', fontSize: '13px', marginBottom: '16px', background: 'rgba(255, 77, 77, 0.08)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255, 77, 77, 0.15)' }}>
                      {demoError}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="demo-name">Name *</label>
                    <input 
                      type="text" 
                      id="demo-name"
                      name="name" 
                      required 
                      value={demoForm.name}
                      onChange={handleInputChange}
                      placeholder="John Smith" 
                      disabled={isSubmittingDemo}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-email">Work Email Address *</label>
                    <input 
                      type="email" 
                      id="demo-email"
                      name="email" 
                      required 
                      value={demoForm.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      disabled={isSubmittingDemo}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-company">Company Name (Optional)</label>
                    <input 
                      type="text" 
                      id="demo-company"
                      name="company" 
                      value={demoForm.company}
                      onChange={handleInputChange}
                      placeholder="Apex Financial Partners" 
                      disabled={isSubmittingDemo}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-details">Requirements / Message (Optional)</label>
                    <textarea 
                      id="demo-details"
                      name="details" 
                      rows={3} 
                      value={demoForm.details}
                      onChange={handleInputChange}
                      placeholder="Tell us about your firm size, workflows, or objectives..."
                      disabled={isSubmittingDemo}
                    />
                  </div>
                  <button type="submit" className="checkout-submit" disabled={isSubmittingDemo} style={{ backgroundColor: '#F18978', color: '#121212', fontWeight: '800' }}>
                    {isSubmittingDemo ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              ) : (
                <div className="qr-view" style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(241, 137, 120, 0.1)', color: '#F18978', marginBottom: '16px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#121212' }}>Request Received!</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                    Thank you for booking a demo. Our team will review your details and reach out to schedule your live walkthrough shortly.
                  </p>
                  <button 
                    onClick={closeDemoModal} 
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
    </>
  );
}
