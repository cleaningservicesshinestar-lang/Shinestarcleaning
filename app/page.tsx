"use client";

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
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home spotless with our thorough residential cleaning services. From regular maintenance to deep cleaning.",
      imageSrc: "/clean-bright-home-interior-modern-living-room.jpg"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning that creates a welcoming, productive environment.",
      imageSrc: "/modern-corporate-office-workspace-clean-profession.jpg"
    },
    {
      title: "Industrial Cleaning",
      description: "Heavy-duty industrial cleaning for warehouses and manufacturing facilities with specialized equipment.",
      imageSrc: "/industrial-warehouse-factory-cleaning-equipment.jpg"
    },
    {
      title: "Deep Cleaning",
      description: "Intensive cleaning services that reach every corner, including baseboards, vents, and hard-to-reach areas.",
      imageSrc: "/clean-modern-living-room-professional-cleaning.jpg"
    },
    {
      title: "Pressure Cleaning",
      description: "Powerful pressure cleaning for all outdoor surfaces.",
      imageSrc: "/pressure-cleaning.png"
    },
    {
      title: "Window Cleaning",
      description: "Crystal-clear windows inside and out. We handle everything from residential to high-rise commercial properties.",
      imageSrc: "/modern-corporate-office-workspace-clean-profession.jpg"
    }
  ];

  const industries = [
    { title: "Medical Offices & Clinics", imageSrc: "/medical-office-clean-healthcare-facility.jpg" },
    { title: "Retail Stores & Malls", imageSrc: "/retail-store-mall-shopping-clean-professional.jpg" },
    { title: "Corporate Offices", imageSrc: "/modern-corporate-office-workspace-clean-profession.jpg" },
    { title: "Hospitality & Hotels", imageSrc: "/hospitality-hotel-room-clean-luxury.jpg" },
    { title: "Educational Institutions", imageSrc: "/industrial-warehouse-factory-cleaning-equipment.jpg" },
    { title: "Industrial Facilities", imageSrc: "/industrial-warehouse-factory-cleaning-equipment.jpg" }
  ];

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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT — TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
                Welcome to Shine Star Cleaning Services – Brisbane's Trusted Cleaning Experts
              </h2>

              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed text-pretty">
                Shine Star Cleaning Services is your reliable partner for domestic and commercial
                cleaning across Brisbane, Australia. We take pride in delivering spotless results,
                exceptional customer service, and tailored cleaning solutions that fit your space,
                schedule, and budget. Whether it's your home, office, retail shop, or workspace, our
                trained professionals ensure every corner shines.
              </p>

              <motion.a
                href="tel:0433711477"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition-all font-semibold shadow-lg hover:shadow-xl text-base sm:text-lg w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
                <span>Call Us: 0433 711 477</span>
              </motion.a>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <img 
                src="/Logo.png" 
                alt="Cleaning Service" 
                className="w-full max-w-sm sm:max-w-md object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f67c7] text-balance">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-[#3f77d8] max-w-2xl mx-auto text-pretty px-4">
              Comprehensive cleaning solutions tailored to your specific needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCardImage
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-balance">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty px-4">
              Three simple steps to a cleaner space
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <StepCard
              step={1}
              title="Contact Us"
              description="Reach out by phone or submit an online form."
              index={0}
            />
            <StepCard
              step={2}
              title="Get a Quote"
              description="We'll provide a free, no-obligation estimate."
              index={1}
            />
            <StepCard
              step={3}
              title="Book Your Cleaning"
              description="Choose your date and time."
              index={2}
            />
            <StepCard
              step={4}
              title="We Clean, You Relax"
              description="Our team arrives fully equipped and ready to shine."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-balance">
              Why Choose Shine Star?
            </h2>
            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty px-4">
              What sets us apart from the competition
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCard
              icon={Shield}
              title="Trained & Insured"
              description="All our staff are professionally trained and fully insured for your peace of mind."
              index={0}
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="We use sustainable, environmentally-friendly cleaning methods and products."
              index={1}
            />
            <FeatureCard
              icon={Clock}
              title="Reliable & On-Time"
              description="We respect your time and always arrive when scheduled. Punctuality guaranteed."
              index={2}
            />
            <FeatureCard
              icon={CheckCircle}
              title="100% Satisfaction"
              description="If you're not completely satisfied, we'll return at no charge until you are."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f67c7] text-balance">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-[#3f77d8] max-w-2xl mx-auto text-pretty px-4">
              Trusted by businesses across multiple sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <IndustryCardImage
                key={industry.title}
                title={industry.title}
                imageSrc={industry.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <FAQSection />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
