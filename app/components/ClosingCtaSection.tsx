'use client';

interface ClosingCtaSectionProps {
  onOpenDemo?: () => void;
}

export default function ClosingCtaSection({ onOpenDemo }: ClosingCtaSectionProps) {
  return (
    <section className="talk" id="contact" aria-label="Contact Skyline">
      <div className="wrap">
        <span className="eyebrow">Start Transforming Today</span>
        <h2>Let&apos;s build software that actually moves the needle.</h2>
        <p>
          Tell us where your business friction is, what isn&apos;t scaling, or what you want to automate. We&apos;ll schedule a 20-minute architecture session and map out the exact software blueprint for your company.
        </p>
        <div className="act">
          <button
            type="button"
            className="btn btn-p"
            onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
          >
            <span className="t">
              <i data-t="Request Architecture Proposal">Request Architecture Proposal</i>
            </span>
            <span className="ar">→</span>
          </button>
          <a
            className="btn btn-s"
            href="https://wa.me/916005602936?text=I%20need%20a%20demo%20website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="t">
              <i data-t="Chat on WhatsApp">Chat on WhatsApp</i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
