'use client';

export default function ExpertsSection() {
  return (
    <section className="experts-section">
      <div className="section-container">
        <div className="experts-header">
          <h2 className="experts-title">Your Skyline Experts</h2>
          <p className="experts-sub">
            Experienced custom software architects and web developers committed to your success.
          </p>
        </div>

        <div className="grid-two-col" style={{ alignItems: 'flex-start', gap: '100px' }}>
          {/* Testimonial 1 */}
          <div className="expert-testimonial-card">
            <div className="expert-quote-col">
              <span className="expert-label">SOFTWARE ARCHITECTURE</span>
              <p className="expert-quote-text">
                “A custom web application should fit your business like a glove, not force you to change how you work.”
              </p>
              <h4 className="expert-quote-author">Ian Vacin</h4>
              <p className="expert-quote-title">Chief Software Architect</p>
            </div>
            <div className="expert-avatar-col">
              <div className="expert-avatar-img">
                <svg viewBox="0 0 100 100" fill="#999" style={{ borderRadius: '50%', width: '100%', height: '100%' }}>
                  <circle cx="50" cy="40" r="22"/>
                  <path d="M15 90c0-18 15-30 35-30s35 12 35 30H15z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="expert-testimonial-card">
            <div className="expert-quote-col">
              <span className="expert-label">TECHNICAL EXECUTION</span>
              <p className="expert-quote-text">
                “We work closely with your team from discovery to launch, delivering software that solves real operational challenges.”
              </p>
              <h4 className="expert-quote-author">Carla Caldwell</h4>
              <p className="expert-quote-title">Lead Web Developer</p>
            </div>
            <div className="expert-avatar-col">
              <div className="expert-avatar-img">
                <svg viewBox="0 0 100 100" fill="#888" style={{ borderRadius: '50%', width: '100%', height: '100%' }}>
                  <circle cx="50" cy="40" r="22"/>
                  <path d="M15 90c0-18 15-30 35-30s35 12 35 30H15z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
