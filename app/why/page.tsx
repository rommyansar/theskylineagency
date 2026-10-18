import WhyChooseUs from "../components/WhyChooseUs";
import TalkCTASection from "../components/TalkCTASection";
import Footer from "../components/Footer";

export default function WhyPage() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-primary)' }}>
      <WhyChooseUs />
      <TalkCTASection />
      <Footer />
    </main>
  );
}
