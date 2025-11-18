import { Home, Sparkles, RotateCcw, Package, Zap } from 'lucide-react';
import Link from 'next/link';

export function ResidentialCleaningSection() {
  const services = [
    { icon: Home, label: "Home Cleaning" },
    { icon: Sparkles, label: "Apartment Cleaning" },
    { icon: Zap, label: "Deep Cleaning" },
    { icon: RotateCcw, label: "Move-in/Move-out Cleaning" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">Residential Cleaning</h2>
            <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
              Transform your home into a spotless sanctuary. Our residential cleaning services combine attention to detail with eco-friendly practices to create the perfect living environment for you and your family.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.label} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{service.label}</p>
                  </div>
                );
              })}
            </div>
            
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book Residential Cleaning
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/clean-bright-home-interior-modern-living-room.jpg"
                alt="Residential cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
