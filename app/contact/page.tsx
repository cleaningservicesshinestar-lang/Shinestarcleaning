import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { QuoteForm } from "@/components/quote-form";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FAQSection } from "@/components/faq-section";

export default function Contact() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Get in Touch"
        subtitle="We're here to answer your questions and provide a free cleaning quote"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Contact Information</h2>
                <p className="text-[#9CA3AF]">Reach out to us through any of these channels</p>
              </div>

              <div className="flex gap-4 p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary transition">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Phone</h3>
                  <a href="tel:0433711477" className="text-[#9CA3AF] hover:text-primary transition">0433 711 477</a>
                  <p className="text-sm text-[#9CA3AF]">Available Mon-Sat, 8AM-6PM AEST</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary transition">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Email</h3>
                  <a href="mailto:info@shinestarcleaning.com.au" className="text-[#9CA3AF] hover:text-primary transition">info@shinestarcleaning.com.au</a>
                  <p className="text-sm text-[#9CA3AF]">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary transition">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Service Area</h3>
                  <p className="text-[#9CA3AF]">Brisbane, Queensland, Australia</p>
                  <p className="text-sm text-[#9CA3AF]"><a href="/service-areas" className="hover:text-primary transition">View full service areas</a></p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary transition">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Hours</h3>
                  <ul className="text-[#9CA3AF] text-sm space-y-1">
                    <li>Monday - Friday: 8AM - 6PM AEST</li>
                    <li>Saturday: 9AM - 4PM AEST</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-96 rounded-2xl overflow-hidden shadow-lg bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <MapPin size={48} className="mx-auto text-primary" />
                <h3 className="font-bold text-[#1A1A1A] text-lg">Service Coverage Map</h3>
                <p className="text-[#9CA3AF]">Available across Brisbane and surrounding regions</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FAFAF8] to-white rounded-2xl p-8 md:p-12 border border-[#E5E7EB]">
            <div className="max-w-2xl space-y-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Get Your Free Quote</h2>
              <p className="text-[#9CA3AF]">Fill out the form below and we'll provide a personalized quote within 24 hours</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Ready to Experience the Shine Star Difference?</h2>
          <p className="text-xl text-[#9CA3AF] mb-8">Join hundreds of satisfied customers who trust us with their cleaning needs</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-[#E59A2E] transition font-semibold"
            >
              Schedule Your Cleaning Today
            </a>
            <a 
              href="tel:0433711477" 
              className="px-8 py-3 border-2 border-[#2D5A4D] text-[#2D5A4D] rounded-lg hover:bg-[#2D5A4D] hover:text-white transition font-semibold"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
