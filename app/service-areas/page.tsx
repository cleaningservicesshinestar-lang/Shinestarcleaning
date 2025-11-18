import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const serviceAreas = [
    { name: "Brisbane CBD", description: "City center and surrounding commercial districts" },
    { name: "East Brisbane", description: "Kangaroo Point, South Bank, Merton" },
    { name: "West Brisbane", description: "Toowong, St Lucia, Indooroopilly" },
    { name: "North Brisbane", description: "Northgate, Aspley, Chermside" },
    { name: "South Brisbane", description: "Woodridge, Waterford, Enoggera" },
    { name: "Bayside", description: "Wynnum, Manly, Balmoral" },
    { name: "Northern Suburbs", description: "Strathpine, Clontarf, Carseldine" },
    { name: "Surrounding Areas", description: "We also service outer suburbs and surrounding regions" },
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Service Areas"
        subtitle="We proudly serve homes and businesses across Brisbane and surrounding regions"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Coverage</h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">Based in Brisbane, Queensland, Shine Star Cleaning Services operates throughout the greater Brisbane metropolitan area and surrounding regions. If you're unsure whether we service your location, please don't hesitate to contact us.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-[#E5E7EB] rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-[#1A1A1A] text-lg">{area.name}</h3>
                </div>
                <p className="text-[#9CA3AF] text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Don't See Your Area Listed?</h2>
          <p className="text-lg text-[#9CA3AF]">We frequently expand our service areas. Contact us directly at 0433 711 477 to see if we can service your location or discuss arrangements for areas outside our regular coverage.</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="tel:0433711477"
              className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-[#1a3f36] transition"
            >
              Call Us
            </a>
            <a 
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
