import Hero from '@/components/Hero';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StrategicFocusPreview from '@/components/StrategicFocusPreview';
import AssetAllocation from '@/components/AssetAllocation';
import SipCalculator from '@/components/SipCalculator';
import SelectedThinkingPreview from '@/components/SelectedThinkingPreview';
import FaqSection from '@/components/FaqSection';
import ConversationBanner from '@/components/ConversationBanner';

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Who We Are: Where experience meets portfolio clarity */}
      <WhoWeAreSection />

      {/* 4 Strategic Focus Pillars (Mutual Funds Only) */}
      <StrategicFocusPreview />

      {/* Multi-Asset Dynamic Rebalancing Allocation */}
      <AssetAllocation />

      {/* Interactive SIP & Compounding Visualizer */}
      <SipCalculator />

      {/* Selected Thinking (Ideas for the long view) */}
      <SelectedThinkingPreview />

      {/* Frequently Asked (Before we begin) */}
      <FaqSection />

      {/* Considered Conversation CTA Banner */}
      <ConversationBanner />
    </main>
  );
}
