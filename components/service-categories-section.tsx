import Link from "next/link";
import { Home, Building2, Factory, Sparkles } from 'lucide-react';

export function ServiceCategoriesSection() {
  const categories = [
    {
      title: "Residential Cleaning",
      description: "Professional cleaning solutions for your home",
      icon: Home,
      color: "from-blue-50 to-blue-100",
      accent: "#3B82F6"
    },
    {
      title: "Commercial Cleaning",
      description: "Pristine workspaces that inspire productivity",
      icon: Building2,
      color: "from-slate-50 to-slate-100",
      accent: "#64748B"
    },
    {
      title: "Industrial Cleaning",
      description: "Heavy-duty cleaning for demanding environments",
      icon: Factory,
      color: "from-orange-50 to-orange-100",
      accent: "#EA580C"
    },
    {
      title: "Specialised Cleaning",
      description: "Expert care for unique cleaning challenges",
      icon: Sparkles,
      color: "from-purple-50 to-purple-100",
      accent: "#A855F7"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">Our Cleaning Services</h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Professional cleaning solutions tailored for every space.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative p-8 rounded-xl bg-gradient-to-br ${category.color} border border-white hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: category.accent }}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: category.accent }}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{category.title}</h3>
                  <p className="text-[#9CA3AF] text-sm mb-6">{category.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-semibold transition-all group-hover:gap-2"
                    style={{ color: category.accent }}
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
