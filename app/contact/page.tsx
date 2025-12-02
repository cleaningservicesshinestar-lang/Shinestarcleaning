"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { QuoteForm } from "@/components/quote-form";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FAQSection } from "@/components/faq-section";
import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0433 711 477",
      link: "tel:0433711477",
      details: "Available Mon-Sat, 8AM-6PM AEST"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@shinestarcleaning.com.au",
      link: "mailto:info@shinestarcleaning.com.au",
      details: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Brisbane, Queensland, Australia",
      link: "/service-areas",
      details: "View full service areas"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "",
      link: "",
      details: "Monday - Friday: 8AM - 6PM AEST\nSaturday: 9AM - 4PM AEST\nSunday: Closed"
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Get in Touch"
        subtitle="We're here to answer your questions and provide a free cleaning quote"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">Contact Information</h2>
                <p className="text-[#9CA3AF] text-sm sm:text-base">Reach out to us through any of these channels</p>
              </div>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 sm:p-6 bg-[#FAFAF8] rounded-lg border border-[#E5E7EB] hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1A1A1A] mb-1 text-sm sm:text-base">{info.title}</h3>
                      {info.content && (
                        info.link ? (
                          <a href={info.link} className="text-[#9CA3AF] hover:text-primary transition break-all text-sm sm:text-base block">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[#9CA3AF] text-sm sm:text-base">{info.content}</p>
                        )
                      )}
                      {info.details && (
                        info.title === "Hours" ? (
                          <ul className="text-[#9CA3AF] text-xs sm:text-sm space-y-1 mt-1">
                            {info.details.split('\n').map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <>
                            {info.title === "Service Area" && info.link ? (
                              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
                                <a href={info.link} className="hover:text-primary transition">
                                  {info.details}
                                </a>
                              </p>
                            ) : (
                              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">{info.details}</p>
                            )}
                          </>
                        )
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center"
            >
              <div className="text-center space-y-4 p-6 sm:p-8">
                <MapPin size={48} className="mx-auto text-primary" />
                <h3 className="font-bold text-[#1A1A1A] text-base sm:text-lg">Service Coverage Map</h3>
                <p className="text-[#9CA3AF] text-sm sm:text-base">Available across Brisbane and surrounding regions</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#FAFAF8] to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-[#E5E7EB]"
          >
            <div className="max-w-2xl space-y-2 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">Get Your Free Quote</h2>
              <p className="text-[#9CA3AF] text-sm sm:text-base">Fill out the form below and we'll provide a personalized quote within 24 hours</p>
            </div>
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      <FAQSection />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
          >
            Ready to Experience the Shine Star Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#9CA3AF] mb-6 sm:mb-8"
          >
            Join hundreds of satisfied customers who trust us with their cleaning needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a 
              href="/contact" 
              className="px-6 sm:px-8 py-3 bg-primary text-white rounded-lg hover:bg-[#004AAD] transition-all font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Your Cleaning Today
            </a>
            <a 
              href="tel:0433711477" 
              className="px-6 sm:px-8 py-3 border-2 border-[#1C7CD6] text-[#1C7CD6] rounded-lg hover:bg-[#1C7CD6] hover:text-white transition-all font-semibold text-sm sm:text-base transform hover:scale-105"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
