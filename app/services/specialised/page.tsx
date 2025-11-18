import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Sparkles, Droplets, Wind, Zap, Shield, Leaf } from 'lucide-react';

export const metadata = {
  title: "Specialised Cleaning Services | Shine Star",
  description: "Specialized cleaning services including carpet, window, floor, pressure washing, disinfection, and sanitization. Expert solutions for unique cleaning needs.",
};

export default function SpecialisedPage() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Specialised Cleaning Services"
        subtitle="Expert solutions for unique cleaning challenges and specialized requirements"
        imageSrc="/professional-cleaning-team-working-together.jpg"
      />

      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Specialized Services</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Premium solutions for specific cleaning needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Professional Carpet Cleaning</h3>
              <p className="text-[#9CA3AF]">Deep carpet extraction using advanced hot water systems, stain removal, and deodorization services.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Steam extraction</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Stain treatment</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Pet odor removal</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Wind className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Window Cleaning</h3>
              <p className="text-[#9CA3AF]">Crystal-clear windows inside and out for residential and commercial properties, including high-rise access.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Interior & exterior</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> High-rise capability</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Frame cleaning</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Pressure Washing</h3>
              <p className="text-[#9CA3AF]">Professional-grade pressure washing for driveways, patios, building exteriors, and concrete surfaces.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Driveway cleaning</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Exterior surfaces</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Mold & mildew removal</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Upholstery Cleaning</h3>
              <p className="text-[#9CA3AF]">Professional cleaning for furniture, sofas, chairs, and upholstered items using eco-friendly methods.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Sofa cleaning</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Stain removal</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Fabric protection</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Floor Care & Restoration</h3>
              <p className="text-[#9CA3AF]">Hardwood stripping, waxing, buffing, tile restoration, and specialty floor treatments.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Floor stripping</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Waxing & buffing</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Tile grout cleaning</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:border-[#F4A942] hover:shadow-lg transition">
              <Leaf className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Disinfection & Sanitization</h3>
              <p className="text-[#9CA3AF]">Hospital-grade disinfection services using EPA-approved products and electrostatic technology.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Electrostatic spraying</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> EPA-approved products</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-purple-600 flex-shrink-0" /> Medical standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose These Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Why Choose Our Specialised Services</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Expert care for your most challenging cleaning needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Sparkles}
              title="Advanced Equipment"
              description="State-of-the-art cleaning technology for superior results."
            />
            <FeatureCard
              icon={Shield}
              title="Expert Technicians"
              description="Certified professionals with specialized training and expertise."
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="Safe, non-toxic products protecting your family and environment."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Guaranteed Results"
              description="We stand behind our work with satisfaction guarantees."
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">What Our Clients Say</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Satisfied customers across all specialised services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Jessica Turner"
              title="Homeowner - Carpet Cleaning"
              content="My carpets look like new! They removed stains I thought were permanent. Professional service and great pricing."
              rating={5}
            />
            <TestimonialCard
              name="Marcus Thompson"
              title="Business Owner - Window Cleaning"
              content="Crystal clear windows every time. They even cleaned the high windows on our storefront safely. Highly professional!"
              rating={5}
            />
            <TestimonialCard
              name="Amanda Rodriguez"
              title="Property Manager - Floor Care"
              content="Our hardwood floors are stunning after their restoration work. They handled everything with such care and expertise."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Service Pricing</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Competitive rates for premium specialized cleaning</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-[#E5E7EB]">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Pricing Guide</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-[#1A1A1A] font-medium">Carpet Cleaning</span>
                  <span className="text-[#2D5A4D] font-semibold">$1.50-$2.50/sq ft</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-[#1A1A1A] font-medium">Window Cleaning</span>
                  <span className="text-[#2D5A4D] font-semibold">From $200</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-[#1A1A1A] font-medium">Pressure Washing</span>
                  <span className="text-[#2D5A4D] font-semibold">$0.50-$1.50/sq ft</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-[#1A1A1A] font-medium">Upholstery Cleaning</span>
                  <span className="text-[#2D5A4D] font-semibold">Starting at $150</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-[#1A1A1A] font-medium">Floor Restoration</span>
                  <span className="text-[#2D5A4D] font-semibold">Custom Quote</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A] font-medium">Disinfection Service</span>
                  <span className="text-[#2D5A4D] font-semibold">Custom Quote</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Why Invest in Specialised Cleaning?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">Extends lifespan of your assets</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">Improves health and hygiene</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">Enhances appearance and value</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">Professional results guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">Saves time and effort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Need Specialised Cleaning?"
            subtitle="Contact us today for a free quote on any of our specialized services"
            buttonText="Request a Quote"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
