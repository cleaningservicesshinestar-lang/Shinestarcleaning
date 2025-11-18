import { Building2, Users, Briefcase, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function CommercialCleaningSection() {
  const services = [
    { icon: Briefcase, label: "Office Cleaning" },
    { icon: Building2, label: "Retail Cleaning" },
    { icon: Users, label: "School Cleaning" },
    { icon: CheckCircle, label: "Hospitality Cleaning" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative md:order-first">
            <div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/modern-corporate-office-workspace-clean-profession.jpg"
                alt="Commercial cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="md:order-last">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">Commercial Cleaning</h2>
            <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
              Elevate your business image with professional commercial cleaning. We maintain immaculate workspaces that enhance productivity, impress clients, and ensure employee health and satisfaction.
            </p>
            
            <div className="space-y-3 mb-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.label} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="font-semibold text-[#1A1A1A]">{service.label}</p>
                  </div>
                );
              })}
            </div>
            
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
