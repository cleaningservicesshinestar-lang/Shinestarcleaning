import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { Sparkles, Building2, Factory, Zap, Wind, Droplets, CheckCircle, Shield, Clock, Leaf, Phone } from 'lucide-react';
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";

import { ServiceCardImage } from "@/components/service-card-image";
import { IndustryCardImage } from "@/components/industry-card-image";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Sparkling Spaces, Every Time"
        subtitle="Premium cleaning solutions for homes, offices, and industries. Experience the difference professional care makes."
        primaryCta="Book a Cleaning"
        secondaryCta="Get a Free Quote"
        primaryLink="/contact"
        secondaryLink="/contact"
        imageSrc="/clean-modern-living-room-professional-cleaning.jpg"
      />

      {/* Welcome Section */}
      {/* <section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/p2.jpeg')" }}
      > */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT CONTENT */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Welcome to Shine Star Cleaning Services – Brisbane's Trusted Cleaning Experts
            </h2>

            <p className="text-lg text-[#6B7280] leading-relaxed">
              Shine Star Cleaning Services is your reliable partner for domestic and commercial
              cleaning across Brisbane, Australia. We take pride in delivering spotless results,
              exceptional customer service, and tailored cleaning solutions that fit your space,
              schedule, and budget. Whether it's your home, office, retail shop, or workspace, our
              trained professionals ensure every corner shines.
            </p>

            <a 
              href="tel:0433711477"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition font-semibold shadow-lg hover:shadow-xl text-lg w-fit"
            >
              <Phone size={24} />
              <span>Call Us: 0433711477</span>
            </a>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center md:justify-evenly">
            <img 
              src="/Logo.png" 
              alt="Cleaning Service" 
              className="w-full max-w-md object-contain rounded-xl"
            />
          </div>

        </div>
      </section>


      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f67c7] text-balance">Our Services</h2>
            <p className="text-xl text-[#3f77d8] max-w-2xl mx-auto text-pretty">Comprehensive cleaning solutions tailored to your specific needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCardImage
              title="Residential Cleaning"
              description="Keep your home spotless with our thorough residential cleaning services. From regular maintenance to deep cleaning."
              imageSrc="/clean-bright-home-interior-modern-living-room.jpg"
            />
            <ServiceCardImage
              title="Commercial Cleaning"
              description="Professional office and commercial space cleaning that creates a welcoming, productive environment."
              imageSrc="/modern-corporate-office-workspace-clean-profession.jpg"
            />
            <ServiceCardImage
              title="Industrial Cleaning"
              description="Heavy-duty industrial cleaning for warehouses and manufacturing facilities with specialized equipment."
              imageSrc="/industrial-warehouse-factory-cleaning-equipment.jpg"
            />
            <ServiceCardImage
              title="Deep Cleaning"
              description="Intensive cleaning services that reach every corner, including baseboards, vents, and hard-to-reach areas."
              imageSrc="/clean-modern-living-room-professional-cleaning.jpg"
            />
            <ServiceCardImage
              title="Pressure Cleaning"
              description="Powerful pressure cleaning for all outdoor surfaces."
              imageSrc="/pressure-cleaning.png"
            />
            <ServiceCardImage
              title="Window Cleaning"
              description="Crystal-clear windows inside and out. We handle everything from residential to high-rise commercial properties."
              imageSrc="/modern-corporate-office-workspace-clean-profession.jpg"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">How It Works</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Three simple steps to a cleaner space</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <StepCard
              step={1}
              title="Contact Us"
              description="Reach out by phone or submit an online form."
            />
            <StepCard
              step={2}
              title="Get a Quote"
              description="We’ll provide a free, no-obligation estimate."
            />
            <StepCard
              step={3}
              title="Book Your Cleaning"
              description="Choose your date and time."
            />
            <StepCard
              step={4}
              title="We Clean, You Relax"
              description="Our team arrives fully equipped and ready to shine."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Why Choose Shine Star?</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">What sets us apart from the competition</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Trained & Insured"
              description="All our staff are professionally trained and fully insured for your peace of mind."
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="We use sustainable, environmentally-friendly cleaning methods and products."
            />
            <FeatureCard
              icon={Clock}
              title="Reliable & On-Time"
              description="We respect your time and always arrive when scheduled. Punctuality guaranteed."
            />
            <FeatureCard
              icon={CheckCircle}
              title="100% Satisfaction"
              description="If you're not completely satisfied, we'll return at no charge until you are."
            />
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f67c7] text-balance">Industries We Serve</h2>
            <p className="text-xl text-[#3f77d8] max-w-2xl mx-auto text-pretty">Trusted by businesses across multiple sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCardImage
              title="Medical Offices & Clinics"
              imageSrc="/clean-bright-home-interior-modern-living-room.jpg"
            />
            <IndustryCardImage
              title="Retail Stores & Malls"
              imageSrc="/modern-corporate-office-workspace-clean-profession.jpg"
            />
            <IndustryCardImage
              title="Corporate Offices"
              imageSrc="/modern-corporate-office-workspace-clean-profession.jpg"
            />
            <IndustryCardImage
              title="Hospitality & Hotels"
              imageSrc="/clean-bright-home-interior-modern-living-room.jpg"
            />
            <IndustryCardImage
              title="Educational Institutions"
              imageSrc="/industrial-warehouse-factory-cleaning-equipment.jpg"
            />
            <IndustryCardImage
              title="Industrial Facilities"
              imageSrc="/industrial-warehouse-factory-cleaning-equipment.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready for a Cleaner Space?"
            subtitle="Join hundreds of satisfied customers who trust Shine Star Cleaning Services"
            buttonText="Get a Free Quote Today"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
