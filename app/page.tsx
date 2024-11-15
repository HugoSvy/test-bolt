"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AppFeatures } from "@/components/app-features";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <AppFeatures />
      <CTASection />
      <Footer />
    </main>
  );
}