import HeroSection from "./components/HeroSection";
import ClientChaseSection from "./components/ClientChaseSection";
import OnboardingGrid from "./components/OnboardingGrid";
import ThreePillarsSection from "./components/ThreePillarsSection";
import PracticeManagementSection from "./components/PracticeManagementSection";
import ReviewsSection from "./components/ReviewsSection";
import TalkCTASection from "./components/TalkCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main style={{ marginTop: '0px' }}>
        {/* Section 1: Services Hero (Coral theme) */}
        <HeroSection />

        {/* Section 2: Automate Client Chase Section */}
        <ClientChaseSection />

        {/* Section 3: Onboarding 2x2 Grid & Badges (Solid Black theme) */}
        <OnboardingGrid />

        {/* Section 4: Three Pillars Interactive Features (Solid White theme) */}
        <ThreePillarsSection />

        {/* Section 5: Practice Management Carousel (Sand/Light Gray theme) */}
        <PracticeManagementSection />

        {/* Section 8: Reviews & Social Proof */}
        <ReviewsSection />

        {/* Section 9: Let's Talk CTA (Textured Dark theme) */}
        <TalkCTASection />

        {/* Section 10: Sitemap Footer */}
        <Footer />
      </main>
    </>
  );
}
