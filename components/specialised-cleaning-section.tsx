import { Sparkles, Wind, Droplets, Zap } from 'lucide-react';
import Link from 'next/link';

export function SpecialisedCleaningSection() {
  const services = [
    { icon: Droplets, label: "Carpet Cleaning", color: "from-purple-100 to-purple-200" },
    { icon: Wind, label: "Window Cleaning", color: "from-cyan-100 to-cyan-200" },
    { icon: Sparkles, label: "Floor Polishing", color: "from-amber-100 to-amber-200" },
    { icon: Zap, label: "High-Pressure Washing", color: "from-green-100 to-green-200" },
    { icon: Sparkles, label: "Disinfection", color: "from-red-100 to-red-200" },
    { icon: Wind, label: "Sanitisation", color: "from-blue-100 to-blue-200" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Specialised Cleaning Services</h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Premium expertise for unique and specialized cleaning challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className={`group p-8 rounded-xl bg-gradient-to-br ${service.color} border border-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#A855F7]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{service.label}</h3>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12 border border-purple-200 text-center">
          <p className="text-lg text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
            Each service is delivered with precision, care, and a commitment to exceeding your expectations. Our specialized training ensures pristine results every time.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 bg-[#A855F7] text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
