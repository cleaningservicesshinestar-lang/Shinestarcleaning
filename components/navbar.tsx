"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "Residential Cleaning", href: "/services/residential" },
    { name: "Commercial Cleaning", href: "/services/commercial" },
    { name: "Industrial Cleaning", href: "/services/industrial" },
    { name: "Specialised Cleaning", href: "/services/specialised" },
    { name: "Pressure Cleaning", href: "/services/pressure" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#E6E6E6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 font-bold text-lg md:text-xl text-[#1C7CD6]">
            <img
              src="/logo_nav.png"
              alt="Shine Star Cleaning Logo"
              className="w-auto h-14 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-[#333333] hover:text-[#1C7CD6] transition font-medium">Home</Link>
            <Link href="/about" className="text-[#333333] hover:text-[#1C7CD6] transition font-medium">About</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-2 text-[#333333] hover:text-[#1C7CD6] transition font-medium">
                Services
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-[#E6E6E6] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-[#333333] hover:bg-[#1C7CD6]/10 hover:text-[#1C7CD6] transition font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="text-[#333333] hover:text-[#1C7CD6] transition font-medium">Gallery</Link>
            <Link href="/service-areas" className="text-[#333333] hover:text-[#1C7CD6] transition font-medium">Service Areas</Link>
            <Link href="/contact" className="text-[#333333] hover:text-[#1C7CD6] transition font-medium">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition font-semibold shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-[#1C7CD6]" /> : <Menu size={24} className="text-[#1C7CD6]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#E6E6E6] animate-in fade-in slide-in-from-top-2 duration-300">
            <Link href="/" className="block py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition">Home</Link>
            <Link href="/about" className="block py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition">About</Link>
            
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition flex items-center justify-between"
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 bg-[#E6E6E6]/30 rounded">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-[#333333] hover:text-[#1C7CD6] transition font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className="block py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition">Gallery</Link>
            <Link href="/service-areas" className="block py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition">Service Areas</Link>
            <Link href="/contact" className="block py-3 text-[#333333] hover:text-[#1C7CD6] font-medium transition">Contact</Link>
            <Link 
              href="/contact" 
              className="block mt-4 px-6 py-2.5 bg-[#1C7CD6] text-white rounded-lg text-center font-semibold hover:bg-[#004AAD] transition"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
