import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { CheckCircle, Zap, Droplets, Shield, Factory } from 'lucide-react';
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "Pressure Washing Services | Shine Star",
  description: "Professional high-pressure exterior cleaning for homes, driveways, buildings, and commercial surfaces.",
};

export default function PressurePage() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Pressure Washing Services"
        subtitle="Powerful high-pressure cleaning for residential and commercial surfaces"
        imageSrc="/pressure-cleaning.png"
      />

      {/* Pressure Washing Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Pressure Cleaning Solutions</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Safe, efficient, and effective exterior cleaning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">Driveway & Concrete Cleaning</h3>
              <p className="text-[#9CA3AF]">Remove oil stains, dirt, and grime from driveways, pathways, and concrete surfaces.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">House Wash</h3>
              <p className="text-[#9CA3AF]">Soft and high-pressure washing for building exteriors, walls, and cladding.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Factory className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">Commercial Exterior Cleaning</h3>
              <p className="text-[#9CA3AF]">Professional washing for shopfronts, warehouses, and commercial façades.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">Mould & Mildew Removal</h3>
              <p className="text-[#9CA3AF]">Safe removal of mould, algae, and slippery buildup on outdoor surfaces.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">Deck & Patio Cleaning</h3>
              <p className="text-[#9CA3AF]">Restore timber decks, patios, and outdoor tiles to their original finish.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#1A1A1A]">Roof & Gutter Cleaning</h3>
              <p className="text-[#9CA3AF]">High-reach washing for roofs and clogged gutters using safe techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Why Choose Our Pressure Cleaning</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">Professional results with eco-friendly methods</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Eco-Safe Detergents",
                  desc: "Biodegradable cleaning solutions that protect surfaces and the environment.",
                },
                {
                  title: "Experienced Technicians",
                  desc: "Fully trained staff skilled in high-pressure and soft-wash systems.",
                },
                {
                  title: "Advanced Equipment",
                  desc: "Commercial-grade washers for deep, long-lasting cleaning.",
                },
                {
                  title: "Fast Turnaround",
                  desc: "Quick and efficient service with minimal disruption.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-[#9CA3AF] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Affordable Pricing",
                  desc: "Competitive rates for both homes and commercial properties.",
                },
                {
                  title: "Guaranteed Results",
                  desc: "We ensure spotless surfaces and customer satisfaction.",
                },
                {
                  title: "Safe for All Surfaces",
                  desc: "Tailored pressure settings for concrete, wood, tiles, metal, and more.",
                },
                {
                  title: "Fully Insured",
                  desc: "Peace of mind knowing your property is protected.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-[#9CA3AF] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Customer Reviews</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">Trusted by homeowners and businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="James Carter"
              title="Homeowner"
              content="My driveway looks brand new! Shine Star did an amazing job removing years of stains."
              rating={5}
            />
            <TestimonialCard
              name="Elena Moore"
              title="Business Owner"
              content="Excellent service! Our storefront instantly looks brighter and more welcoming."
              rating={5}
            />
            <TestimonialCard
              name="Dylan Harris"
              title="Property Manager"
              content="Reliable, professional, and high-quality results. Highly recommended for commercial cleaning."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Need Professional Pressure Washing?"
            subtitle="Get in touch today for a fast and free quote"
            buttonText="Get Pressure Wash Quote"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
