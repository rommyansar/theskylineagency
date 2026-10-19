'use client';

interface EngagementSectionProps {
  onOpenDemo?: () => void;
}

export default function EngagementSection({ onOpenDemo }: EngagementSectionProps) {
  return (
    <section className="s13" id="engagement" aria-labelledby="s13h">
      <div className="wrap">
        <div className="head">
          <span className="k">Engagement</span>
          <h2 id="s13h">How involved do you want us?</h2>
        </div>

        <ul className="tiers">
          <li className="tier t1">
            <div className="cut" aria-hidden="true" />
            <div className="cap">
              <h3>Skyline Core</h3>
              <p>Full access to Skyline&apos;s custom software engineering and digital capabilities for your core platform.</p>
              <small>Custom Web App · Database Architecture · Modern UI/UX · API Integrations</small>
            </div>
          </li>

          <li className="tier t2">
            <div className="cut" aria-hidden="true" />
            <div className="cap">
              <h3>Skyline + Automation</h3>
              <p>Everything in Core, plus end-to-end automated workflows, CRM pipelines, and custom AI agents.</p>
              <small>Core Software + Autonomous AI Workflows + Dynamic Pipelines</small>
            </div>
          </li>

          <li className="tier t3">
            <div className="cut" aria-hidden="true" />
            <div className="cap">
              <h3>Skyline Partner</h3>
              <p>Dedicated engineering team, continuous sprints, and fractional technical leadership as you scale.</p>
              <small>Dedicated Team + Continuous Sprints + Cloud Infrastructure + 24/7 SLA</small>
            </div>
          </li>
        </ul>

        <div className="sum">
          <p>
            You&apos;re not choosing 10 generic services from a menu. We analyze what your business actually needs and engineer the exact software and systems to power your growth.
          </p>
          <button
            type="button"
            className="btn btn-g"
            onClick={onOpenDemo || (() => window.dispatchEvent(new CustomEvent('open-demo-modal')))}
          >
            <span className="t">
              <i data-t="Talk About My Project">Talk About My Project</i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
