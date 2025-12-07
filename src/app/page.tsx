import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full">

      {/* Top Section */}
      <section className="w-full border-b border-gray-200">
        <HeroSection />
      </section>

      {/* Key Features */}
      <section className="w-full bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturesSection />
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="w-full py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <PricingPreview />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <CTASection />
      </section>

    </main>
  );
}
