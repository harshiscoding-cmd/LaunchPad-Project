import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitectureFlow from './components/ArchitectureFlow';
import TelemetryDashboard from './components/TelemetryDashboard';
import FeatureGrid from './components/FeatureGrid';
import PricingCalculator from './components/PricingCalculator';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A11] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#6366F1] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ArchitectureFlow />
        <TelemetryDashboard />
        <FeatureGrid />
        <PricingCalculator />
        <Testimonials />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
