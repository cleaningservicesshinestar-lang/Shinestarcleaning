"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Shield, Leaf, Clock, Building2, Users, BarChart3, Zap } from 'lucide-react';

export default function CommercialPage() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Commercial Cleaning Services"
        subtitle="Professional cleaning solutions that enhance your business environment and impress clients"
        imageSrc="/modern-corporate-office-workspace-clean-profession.jpg"
      />

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Industries We Serve</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Specialized commercial cleaning for diverse business sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary hover:shadow-lg transition">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Corporate Offices</h3>
              <p className="text-[#9CA3AF]">Professional cleaning for executive offices, meeting rooms, and workspaces to create a polished environment.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary hover:shadow-lg transition">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Retail Spaces</h3>
              <p className="text-[#9CA3AF]">Keep your storefront immaculate with daily floor care, window cleaning, and display maintenance.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary hover:shadow-lg transition">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Medical Offices</h3>
              <p className="text-[#9CA3AF]">HIPAA-compliant cleaning with sanitization protocols to ensure health and safety standards.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Hospitality</h3>
              <p className="text-[#9CA3AF]">Hotels, restaurants, and venues with turn-over cleaning and ongoing maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Services</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Comprehensive commercial cleaning solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Daily Office Cleaning</strong> - Floors, restrooms, break rooms, and common areas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Window & Glass Cleaning</strong> - Interior and exterior glass surfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Floor Care</strong> - Stripping, waxing, buffing, and maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Carpet Cleaning</strong> - Professional deep cleaning and stain removal</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Sanitization</strong> - Health-focused disinfection services</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Restroom Services</strong> - Complete sanitation and restocking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>Waste Management</strong> - Trash removal and recycling coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#1A1A1A]"><strong>After Hours Service</strong> - Flexible scheduling to fit your operations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Why Businesses Choose Shine Star</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Partner with commercial cleaning experts</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Bonded & Insured"
              description="Complete protection with comprehensive commercial insurance coverage."
              index={0}
            />

            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="Green cleaning solutions safe for employees and the environment."
              index={1}
            />
            <FeatureCard
              icon={BarChart3}
              title="Efficiency"
              description="Trained teams maximize cleaning while minimizing disruption to operations."
              index={2}
            />
            <FeatureCard
              icon={CheckCircle}
              title="Quality Guarantee"
              description="Satisfaction guarantee with regular quality inspections and reporting."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">What Our Business Clients Say</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Trusted by leading companies in the area</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Michael Chen"
              title="Office Manager, Tech Company"
              content="We switched to Shine Star for our office cleaning and haven't looked back. They go above and beyond and always pay attention to detail."
              rating={5}
              index={0}
            />
            <TestimonialCard
              name="Lisa Anderson"
              title="Retail Store Manager"
              content="Reliable, professional, and responsive. Our storefront has never looked better. They fit perfectly into our busy schedule."
              rating={5}
              index={1}
            />
            <TestimonialCard
              name="David Thompson"
              title="Medical Office Administrator"
              content="Exceptional attention to hygiene standards and professionalism. Our patients immediately notice the difference."
              rating={5}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Elevate Your Business Environment"
            subtitle="Let Shine Star handle your commercial cleaning so you can focus on what matters"
            buttonText="Schedule a Consultation"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
