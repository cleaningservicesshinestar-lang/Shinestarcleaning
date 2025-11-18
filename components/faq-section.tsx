'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    id: "1",
    q: "Do you bring your own cleaning supplies?",
    a: "Yes. Our team arrives fully equipped with professional-grade cleaning products and tools. You don't need to provide anything."
  },
  {
    id: "2",
    q: "Are your cleaners police-checked and insured?",
    a: "Absolutely. All Shine Star cleaners are background-checked, trained, and covered by full public liability insurance."
  },
  {
    id: "3",
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many clients prefer us to clean while they're away. You can provide secure access instructions."
  },
  {
    id: "4",
    q: "How long does a typical cleaning session take?",
    a: "It depends on your home size and service type, but most standard cleanings take 1.5–3 hours."
  },
  {
    id: "5",
    q: "Do you offer one-time cleaning or only regular services?",
    a: "We offer both! Choose from one-time, weekly, fortnightly, or monthly cleaning options."
  },
  {
    id: "6",
    q: "What areas do you service?",
    a: "We cover all major areas within your region. You can confirm your suburb when booking."
  },
  {
    id: "7",
    q: "Can I cancel or reschedule my booking?",
    a: "Yes, you can cancel or reschedule with at least 24 hours' notice."
  },
  {
    id: "8",
    q: "Do you guarantee your work?",
    a: "Yes! If you're not satisfied, we offer a 24-hour satisfaction guarantee and will return to fix any issues."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f67c7] text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#3f77d8] max-w-2xl mx-auto text-pretty">
            Answers to the questions we get asked the most.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-white border border-[#E6E6E6] rounded-lg data-[state=open]:border-[#1C7CD6] transition overflow-hidden shadow-sm hover:shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#FAFAF8] transition data-[state=open]:bg-[#FAFAF8]">
                  <span className="font-semibold text-lg text-primary text-balance">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-[#3f77d8] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1C7CD6] to-[#004AAD] rounded-xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={28} />
            <h3 className="text-2xl md:text-3xl font-bold">Still have questions?</h3>
          </div>
          <p className="text-[#E5E7EB] mb-6 max-w-2xl mx-auto">
            Our team is here to help. Get in touch with us through any of our contact channels and we'll be happy to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-[#004AAD] rounded-lg hover:bg-[#E6E6E6] transition font-semibold"
            >
              Contact Us
            </a>
            <a 
              href="tel:+15551234567" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#004AAD] transition font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
