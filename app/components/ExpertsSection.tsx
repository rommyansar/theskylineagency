'use client';

export default function ExpertsSection() {
  return (
    <section className="experts-section">
      <div className="section-container">
        <div className="experts-header">
          <h2 className="experts-title">Your Skyline Experts</h2>
          <p className="experts-sub">
            Experienced practice management specialists committed to your success.
          </p>
        </div>

        <div className="grid-two-col" style={{ alignItems: 'flex-start', gap: '100px' }}>
          {/* Testimonial 1 */}
          <div className="expert-testimonial-card">
            <div className="expert-quote-col">
              <span className="expert-label">PROCESS OPTIMIZATION</span>
              <p className="expert-quote-text">
                “Effective and efficient processes are a critical component of making your business scalable and maximizing profitability.”
              </p>
              <h4 className="expert-quote-author">Ian Vacin</h4>
              <p className="expert-quote-title">Co-Founder & Chief Partnerships Officer</p>
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
              <span className="expert-label">TEAM TRAINING</span>
              <p className="expert-quote-text">
                “It’s important to have your team onboard early. Live group training is a key way of ensuring a smooth transition.”
              </p>
              <h4 className="expert-quote-author">Carla Caldwell</h4>
              <p className="expert-quote-title">Skyline Expert</p>
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
