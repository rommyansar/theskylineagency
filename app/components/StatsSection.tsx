'use client';

const stats = [
  { number: '16.5 hours', label: 'Saved per employee, every single week' },
  { number: '40%', label: 'Increase in new client onboarding speed' },
  { number: '18%', label: 'Average business growth in the first year' },
  { number: '98%', label: 'Client satisfaction and retention rate' },
  { number: '10x', label: 'Faster project task and pipeline setup' },
  { number: '95%', label: 'Reduction in email clutter and chasing clients' },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="grid-two-col">
          {/* Left Column - Text */}
          <div>
            <h2 className="stats-title">
              On average, Skyline saves each employee 16.5 hours a week.
            </h2>
            <p className="stats-sub">
              Workflows thrive when manual work is automated, communication is centralized, and deadlines are transparent to everyone.
            </p>
            <p className="stats-footnote">
              *Data based on the 2026 Skyline Customer Productivity & Efficiency Survey.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-number">{stat.number}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
