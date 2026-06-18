'use client';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              Skyline<span className="accent-dot">.</span>
            </a>
            <p className="footer-desc">
              Building custom web applications, operations dashboards, client portals, and internal tools tailored to your unique business requirements.
            </p>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/theskyline.agency/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/theskylineagency" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: Why Skyline */}
          <div>
            <h4 className="footer-title">Why Skyline</h4>
            <ul className="footer-links">
              <li><a href="/why#why-visibility">Visibility & Control</a></li>
              <li><a href="/why#why-automation">Automation & Efficiency</a></li>
              <li><a href="/why#why-collaboration">Collaboration & Connectivity</a></li>
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div>
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><a href="#services">Services Overview</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
              <li><a href="/pricing">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Links Column 3: Contact */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="#contact">Book a Demo</a></li>
              <li><a href="#contact">Inquiries</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Skyline Agency. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
