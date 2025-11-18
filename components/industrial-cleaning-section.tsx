import { Factory, Shield, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export function IndustrialCleaningSection() {
  const services = [
    { icon: Factory, label: "Warehouse Cleaning" },
    { icon: Zap, label: "Factory Floor Cleaning" },
    { icon: Shield, label: "Equipment Cleaning" },
    { icon: AlertCircle, label: "Safety & Compliance" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">Industrial Cleaning</h2>
            <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
              Heavy-duty industrial cleaning for the most demanding environments. Our trained specialists use advanced equipment and safety protocols to maintain your facilities while prioritizing worker health and operational efficiency.
            </p>
            
            <div className="space-y-3 mb-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.label} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="font-semibold text-[#1A1A1A]">{service.label}</p>
                  </div>
                );
              })}
            </div>
            
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Industrial Service Inquiry
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-orange-300 to-red-400 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/industrial-warehouse-factory-cleaning-equipment.jpg"
                alt="Industrial cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
