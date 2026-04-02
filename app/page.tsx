import SplineWrapper from "./components/SplineWrapper";
import ServicesSection from "./components/ServicesSection";
import SelectedWork from "./components/SelectedWork";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero — LOCKED */}
      <section className="hero">
        <div className="hero-brand">
          <h1>TheSkyLine Agency</h1>
          <p>Turn Your Business Into a Real Brand</p>
        </div>
        <SplineWrapper />
      </section>

      {/* Main Content Area that slides over hero */}
      <main className="content">
        {/* Section 1: Services */}
        <ServicesSection />

        {/* Section 3: Portfolio */}
        <SelectedWork />

        {/* Section 4: Pricing */}
        <PricingSection />

        {/* Section 5: Process */}
        <ProcessSection />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 6: CTA */}
        <CTASection />

        {/* Footer */}
        <footer className="footer">
          <div className="section-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <p className="footer-text" style={{ margin: 0 }}>
              © 2025 TheSkyline.agency — All rights reserved.
            </p>
            <a 
              href="https://www.instagram.com/theskyline.agency/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Instagram
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
