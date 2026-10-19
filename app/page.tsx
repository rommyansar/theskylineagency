'use client';

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import ScrollReveal from './components/ScrollReveal';
import CustomCursor from './components/CustomCursor';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReelSection from './components/ReelSection';
import WhatIsSkyline from './components/WhatIsSkyline';
import HumanAiSection from './components/HumanAiSection';
import RevenueLeakSection from './components/RevenueLeakSection';
import WhatWeTransform from './components/WhatWeTransform';
import CapabilitiesTerminal from './components/CapabilitiesTerminal';
import SixDoorsSection from './components/SixDoorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import EngagementSection from './components/EngagementSection';
import FaqSection from './components/FaqSection';
import GlobalSection from './components/GlobalSection';
import ClosingCtaSection from './components/ClosingCtaSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DemoModal from './components/DemoModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDemoModalOpen(true);
    window.addEventListener('open-demo-modal', handleOpen);
    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, []);

  return (
    <>
      {/* 0. Preloader */}
      <Preloader />

      {/* 0.1 Scroll Reveal Observer */}
      <ScrollReveal />

      {/* 1. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 2. Interactive Starfield Background */}
      <Starfield />

      {/* 3. Header Navigation */}
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main id="top">
        {/* Section 1: Hero Choreography (liquid chrome, proximity letters, periodic glitch) */}
        <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 2: Cinematic Showreel Video (Asteroid Parity) */}
        <ReelSection />

        {/* Section 3: What is Skyline (Strikethrough & Underline Typography) */}
        <WhatIsSkyline />

        {/* Section 4: Human x AI (Paper & Void halves) */}
        <HumanAiSection />

        {/* Section 5: Revenue & System Leakage (Light ribbon flow & pulse callouts) */}
        <RevenueLeakSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 6: What We Transform (8 spectrum numbered areas) */}
        <WhatWeTransform />

        {/* Section 7: Capabilities Terminal (Typed directory tree) */}
        <CapabilitiesTerminal onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 8: Six Doors (Flickering corridor & audience groups) */}
        <SixDoorsSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 9: Client Messages & Testimonials (iPhone Lockscreen notification stack) */}
        <TestimonialsSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 10: Engagement Tiers (Three illuminated room portals) */}
        <EngagementSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 11: FAQ (Neon question wall & accordion) */}
        <FaqSection />

        {/* Section 12: Global Presence (Video backdrop & countries counter) */}
        <GlobalSection />

        {/* Section 13: Closing High-Impact Call to Action */}
        <ClosingCtaSection onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Demo & Architecture Proposal Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
