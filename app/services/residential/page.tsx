"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Shield, Leaf, Clock, Home, Sparkles, Wind, Droplets, Trash2, Zap } from 'lucide-react';

export default function ResidentialPage() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Residential Cleaning Services"
        subtitle="Transform your home into a spotless sanctuary with our professional residential cleaning"
        imageSrc="/clean-bright-home-interior-modern-living-room.jpg"
      />

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">What We Offer</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Comprehensive cleaning solutions tailored to your home</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Home className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Regular Cleaning</h3>
              <p className="text-[#9CA3AF]">Weekly or bi-weekly maintenance cleaning to keep your home fresh and tidy between deep cleans.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Sparkles className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Deep Cleaning</h3>
              <p className="text-[#9CA3AF]">Intensive cleaning that reaches every corner including baseboards, vents, and hard-to-reach areas.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Carpet & Upholstery</h3>
              <p className="text-[#9CA3AF]">Professional cleaning of carpets, rugs, and furniture using eco-friendly solutions and advanced equipment.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Wind className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Window Cleaning</h3>
              <p className="text-[#9CA3AF]">Crystal-clear windows inside and out for a bright, welcoming home that sparkles.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Post-Construction</h3>
              <p className="text-[#9CA3AF]">Specialized cleaning after renovations or construction to remove dust, debris, and residue.</p>
            </div>

            <div className="p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-[#F4A942] hover:shadow-lg transition">
              <Trash2 className="w-12 h-12 text-[#119933] mb-4" />
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Move In/Out Cleaning</h3>
              <p className="text-[#9CA3AF]">Complete cleaning when you move into a new home or preparing your current home for sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Cleaning Process</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">A systematic approach to exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard step={1} title="Assessment" description="We evaluate your home and discuss your cleaning preferences and priorities." index={0} />
            <StepCard step={2} title="Preparation" description="Our team prepares equipment and gathers supplies for thorough, efficient cleaning." index={1} />
            <StepCard step={3} title="Cleaning" description="We execute our detailed cleaning plan with attention to every detail and surface." index={2} />
            <StepCard step={4} title="Inspection" description="Quality check ensures everything meets our high standards before we leave." index={3} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Why Choose Shine Star</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">What makes us the best choice for your home</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Trained & Insured"
              description="All staff professionally trained and fully insured for complete peace of mind."
              index={0}
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="We use sustainable, non-toxic products safe for your family and pets."
              index={1}
            />
            <FeatureCard
              icon={Clock}
              title="Reliable & Punctual"
              description="We arrive on schedule and complete your cleaning efficiently."
              index={2}
            />
            <FeatureCard
              icon={CheckCircle}
              title="100% Satisfaction"
              description="If you're not happy, we'll return at no extra charge until you are."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Happy Homeowners</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">What our residential clients are saying</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              title="Homeowner, Downtown"
              content="Shine Star has been cleaning our home for over a year now. The team is professional, punctual, and thorough. Our house has never looked better!"
              rating={5}
              index={0}
            />
            <TestimonialCard
              name="James Rodriguez"
              title="Homeowner, Suburbs"
              content="Highly impressed with the attention to detail. They clean areas we didn't even think about. Definitely recommend to all my friends."
              rating={5}
              index={1}
            />
            <TestimonialCard
              name="Emma Davis"
              title="Homeowner, Riverside"
              content="Best decision we made. Having professional cleaners gives us more time with family. Quality work at fair prices!"
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
            title="Ready for a Cleaner Home?"
            subtitle="Schedule your residential cleaning service today and experience the Shine Star difference"
            buttonText="Get Your Free Quote"
            buttonLink="/contact"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
