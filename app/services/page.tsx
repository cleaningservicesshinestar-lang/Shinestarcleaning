import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { Sparkles, Building2, Factory, Zap, Droplets, Wind, Check } from 'lucide-react';

export default function Services() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <PageHeader
        title="Our Cleaning Services"
        subtitle="Comprehensive cleaning solutions for every space and need"
      />

      {/* Main Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Our Service Categories</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Choose the service that's right for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Sparkles}
              title="Residential Cleaning"
              description="Professional home cleaning services including living areas, bedrooms, kitchens, and bathrooms. We handle regular maintenance or deep cleaning."
            />
            <ServiceCard
              icon={Building2}
              title="Commercial Cleaning"
              description="Create a professional impression with our comprehensive office and retail cleaning services. Perfect for ongoing maintenance."
            />
            <ServiceCard
              icon={Factory}
              title="Industrial Cleaning"
              description="Heavy-duty industrial cleaning for warehouses, manufacturing plants, and commercial facilities using specialized equipment."
            />
            <ServiceCard
              icon={Zap}
              title="Deep Cleaning"
              description="Intensive cleaning services targeting every detail including baseboards, vents, upholstery, and hard-to-reach areas."
            />
            <ServiceCard
              icon={Droplets}
              title="Carpet Cleaning"
              description="Professional carpet and upholstery cleaning with eco-friendly methods that remove deep stains and odors effectively."
            />
            <ServiceCard
              icon={Wind}
              title="Window Cleaning"
              description="Crystal-clear windows for residential and commercial properties. We handle interior, exterior, and high-rise window cleaning."
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1A1A1A] text-center mb-16">Specialized Cleaning Services</h2>
          
          <div className="space-y-12">
            {/* Residential */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#F4A942] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Residential Cleaning Services</h3>
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                    Transform your living space into a spotless sanctuary. Our residential cleaning includes dusting, vacuuming, mopping, bathroom sanitization, kitchen deep-clean, and more.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Regular maintenance cleaning",
                      "Deep cleaning services",
                      "Move-in/move-out cleaning",
                      "Post-party cleanup",
                      "Pet-friendly cleaning",
                      "Eco-friendly options",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <Check size={20} className="text-[#F4A942] flex-shrink-0" />
                        <span className="text-[#1A1A1A]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#F4A942] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Commercial Cleaning Services</h3>
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                    Create a professional, welcoming environment for your clients and employees. Our commercial services are designed to maintain cleanliness while minimizing business disruption.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Office cleaning",
                      "Retail store cleaning",
                      "Floor care & waxing",
                      "Window cleaning",
                      "Restroom maintenance",
                      "After-hours services",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <Check size={20} className="text-[#F4A942] flex-shrink-0" />
                        <span className="text-[#1A1A1A]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#F4A942] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Industrial Cleaning Services</h3>
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                    Heavy-duty industrial cleaning for demanding environments. We handle everything from warehouse floors to equipment cleaning with specialized methods and safety protocols.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Warehouse cleaning",
                      "Equipment cleaning",
                      "Floor stripping & waxing",
                      "Degreasing services",
                      "Pressure washing",
                      "Safety compliance",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <Check size={20} className="text-[#F4A942] flex-shrink-0" />
                        <span className="text-[#1A1A1A]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#F4A942] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Specialized Cleaning Services</h3>
                  <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                    Unique cleaning challenges require specialized solutions. We offer targeted services for specific needs that go beyond standard cleaning.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Carpet shampooing",
                      "Upholstery cleaning",
                      "Window cleaning",
                      "Tile grout cleaning",
                      "Disinfection services",
                      "Floor polishing",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <Check size={20} className="text-[#F4A942] flex-shrink-0" />
                        <span className="text-[#1A1A1A]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1A1A1A] text-center mb-4">Our Cleaning Process</h2>
          <p className="text-center text-[#9CA3AF] text-lg mb-12 text-pretty">We follow a comprehensive approach to ensure the highest quality results</p>
          
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We evaluate your space and discuss specific cleaning needs, preferences, and any special requirements."
              },
              {
                step: "2",
                title: "Preparation",
                description: "Our team gathers all necessary equipment and supplies, preparing the space for efficient cleaning."
              },
              {
                step: "3",
                title: "Cleaning",
                description: "We execute a systematic cleaning following our detailed checklist, ensuring no area is overlooked."
              },
              {
                step: "4",
                title: "Inspection",
                description: "We perform a thorough quality check to ensure every detail meets our high standards."
              },
              {
                step: "5",
                title: "Your Satisfaction",
                description: "We ask for your feedback and address any concerns. Your satisfaction is our guarantee."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-12 h-12 bg-[#F4A942] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                  <p className="text-[#9CA3AF]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Need a Custom Cleaning Solution?"
            subtitle="Contact us today to discuss your specific cleaning needs"
            buttonText="Get Your Personalized Quote"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
