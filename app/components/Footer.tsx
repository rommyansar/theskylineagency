import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot" role="contentinfo">
      <div className="wrap">
        <div className="g">
          <div>
            <div className="wm">
              <img
                className="mark"
                src="/assets/img/ring-t-sm.webp"
                alt=""
                width={32}
                height={32}
                loading="lazy"
              />
              <span className="wmt">
                <span>Skyline</span>
              </span>
            </div>
            <address className="addr">
              <a href="mailto:contact@theskylineagency.com">contact@theskylineagency.com</a>
              <a href="tel:+916005602936">+91 6005602936</a>
              <span>London · New York · Dubai</span>
            </address>
          </div>

          <div className="col">
            <h4>Capabilities</h4>
            <a href="#transform">Custom Web Applications</a>
            <a href="#transform">Client Portals &amp; Dashboards</a>
            <a href="#transform">Workflow &amp; CRM Automation</a>
            <a href="#transform">Autonomous AI Agents</a>
            <a href="#transform">Cloud Architecture</a>
          </div>

          <div className="col">
            <h4>Company</h4>
            <a href="#what-is-skyline">What We Do</a>
            <a href="#human-ai">Human × AI</a>
            <a href="#who">Who It&apos;s For</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Engagement Tiers</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="col">
            <h4>Connect</h4>
            <a href="https://wa.me/916005602936?text=I%20need%20a%20demo%20website" target="_blank" rel="noopener noreferrer">
              WhatsApp (+91 6005602936)
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a href="mailto:contact@theskylineagency.com">
              Email Team
            </a>
          </div>
        </div>

        <div className="base">
          <span>Human Craftsmanship × AI Systems × Execution</span>
          <span>
            © {new Date().getFullYear()} Skyline Agency LLC. All rights reserved. ·{' '}
            <Link href="#">Terms</Link> · <Link href="#">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
