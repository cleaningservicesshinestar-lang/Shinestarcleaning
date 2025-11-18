import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Shield, Leaf, Zap, Factory, HardHat, AlertCircle, Wrench } from 'lucide-react';

export const metadata = {
  title: "Industrial Cleaning Services | Shine Star",
  description: "Heavy-duty industrial cleaning for warehouses, factories, and manufacturing facilities. Specialized equipment and trained personnel.",
};

export default function IndustrialPage() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Industrial Cleaning Services"
        subtitle="Specialized heavy-duty cleaning for warehouses, factories, and industrial facilities"
        imageSrc="/industrial-warehouse-factory-cleaning-equipment.jpg"
      />

      {/* Industrial Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Industrial Solutions</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Comprehensive cleaning for demanding industrial environments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Factory className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Warehouse Cleaning</h3>
              <p className="text-[#9CA3AF]">Large-scale floor cleaning, debris removal, and dust control for warehousing operations.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Wrench className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Manufacturing Facility Cleaning</h3>
              <p className="text-[#9CA3AF]">Equipment degreasing, production line cleaning, and machine maintenance area sanitization.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <AlertCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Hazardous Material Cleanup</h3>
              <p className="text-[#9CA3AF]">Specialized training and protocols for handling industrial spills and contamination.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <HardHat className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Construction Site Cleanup</h3>
              <p className="text-[#9CA3AF]">Post-construction debris removal and site preparation for operational readiness.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">High-Pressure Washing</h3>
              <p className="text-[#9CA3AF]">Industrial-grade pressure washing for exterior surfaces, loading docks, and equipment.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Safety Compliance</h3>
              <p className="text-[#9CA3AF]">Cleaning protocols that meet OSHA and industry safety standards and regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Why We're Your Industrial Partner</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Specialized expertise in heavy-duty industrial environments</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Specialized Equipment</h3>
                  <p className="text-[#9CA3AF] mt-1">Heavy-duty machinery including high-pressure washers, industrial vacuums, and specialized cleaning systems.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Trained Professionals</h3>
                  <p className="text-[#9CA3AF] mt-1">Staff certified in industrial safety, hazmat protocols, and equipment operation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Safety Compliance</h3>
                  <p className="text-[#9CA3AF] mt-1">Full compliance with OSHA, EPA, and industry-specific safety regulations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">24/7 Availability</h3>
                  <p className="text-[#9CA3AF] mt-1">Emergency and after-hours cleaning to minimize disruption to your operations.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Custom Solutions</h3>
                  <p className="text-[#9CA3AF] mt-1">Tailored cleaning plans designed for your specific industry and facility requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Environmental Focus</h3>
                  <p className="text-[#9CA3AF] mt-1">Eco-friendly disposal methods and sustainable cleaning practices.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Proven Track Record</h3>
                  <p className="text-[#9CA3AF] mt-1">Years of successful projects in manufacturing, warehousing, and industrial sectors.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Competitive Pricing</h3>
                  <p className="text-[#9CA3AF] mt-1">Cost-effective solutions without compromising on quality and safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">What Industrial Clients Say</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Trusted by major manufacturing and warehouse operators</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Robert Williams"
              title="Facility Manager, Manufacturing"
              content="Shine Star transformed our production facility. Their team understands industrial operations and delivers exceptional results on schedule."
              rating={5}
            />
            <TestimonialCard
              name="Patricia Johnson"
              title="Operations Director, Logistics"
              content="Professional and reliable. They've handled our warehouse cleaning for two years with zero issues. Highly recommended."
              rating={5}
            />
            <TestimonialCard
              name="Kevin Davis"
              title="Safety Officer, Industrial Plant"
              content="Excellent compliance record. Their team knows OSHA standards inside and out. Our facility has never been cleaner or safer."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready for Professional Industrial Cleaning?"
            subtitle="Contact our team to discuss your facility's specific cleaning needs"
            buttonText="Get Industrial Quote"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
