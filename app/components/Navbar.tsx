'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          Skyline<span className="accent-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#why" className="nav-link">
            Why Skyline
          </a>

          <a href="#reviews" className="nav-link">
            Reviews
          </a>

          <a href="#services" className="nav-link">
            Services
          </a>
          
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
        </div>

        {/* CTA buttons */}
        <div className="nav-cta-group desktop-only">
          <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '14px' }}>
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
          <a href="#why" className="mobile-nav-link" onClick={closeMobileMenu}>Why Skyline</a>
          <a href="#reviews" className="mobile-nav-link" onClick={closeMobileMenu}>Reviews</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
          <a href="#pricing" className="mobile-nav-link" onClick={closeMobileMenu}>Pricing</a>
          <a href="#contact" className="mobile-nav-cta" onClick={closeMobileMenu}>
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
