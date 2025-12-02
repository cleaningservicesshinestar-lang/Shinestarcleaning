"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const serviceLinks = [
    { name: "Residential Cleaning", href: "/services/residential" },
    { name: "Commercial Cleaning", href: "/services/commercial" },
    { name: "Industrial Cleaning", href: "/services/industrial" },
    { name: "Specialised Cleaning", href: "/services/specialised" },
    { name: "Pressure Cleaning", href: "/services/pressure" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md border-[#E6E6E6]' 
          : 'bg-white/95 backdrop-blur-md shadow-sm border-[#E6E6E6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg md:text-xl text-[#1C7CD6] transition-transform hover:scale-105"
          >
            <img
              src="/logo_nav.png"
              alt="Shine Star Cleaning Logo"
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
            <Link 
              href="/" 
              className="text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base"
            >
              About
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1.5 xl:gap-2 text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <motion.div
                initial={false} // ❗ Prevent delayed initial animation
                animate={{ opacity: 1, y: 0 }} // Smooth but instant
                transition={{ duration: 0.15 }} // Faster response
                className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#E6E6E6] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2"
              >
                {serviceLinks.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-[#333333] hover:bg-[#1C7CD6]/10 hover:text-[#1C7CD6] transition-colors font-medium text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <Link 
              href="/gallery" 
              className="text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base"
            >
              Gallery
            </Link>
            <Link 
              href="/service-areas" 
              className="text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base"
            >
              Service Areas
            </Link>
            <Link 
              href="/contact" 
              className="text-[#333333] hover:text-[#1C7CD6] transition-colors font-medium text-sm xl:text-base"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="px-4 xl:px-6 py-2 xl:py-2.5 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition-all font-semibold text-sm xl:text-base shadow-sm hover:shadow-md transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#1C7CD6] transition-transform rotate-0" />
            ) : (
              <Menu size={24} className="text-[#1C7CD6] transition-transform" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#E6E6E6]"
            >
              <div className="py-4 space-y-1">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors rounded-lg"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors rounded-lg"
                >
                  About
                </Link>
                
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors flex items-center justify-between rounded-lg"
                  >
                    Services
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-4 bg-[#E6E6E6]/20 rounded-lg ml-4 mr-4 mt-1 space-y-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              className="block py-2.5 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/10 transition-colors font-medium text-sm rounded-lg"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/gallery" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors rounded-lg"
                >
                  Gallery
                </Link>
                <Link 
                  href="/service-areas" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors rounded-lg"
                >
                  Service Areas
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#333333] hover:text-[#1C7CD6] hover:bg-[#1C7CD6]/5 font-medium transition-colors rounded-lg"
                >
                  Contact
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 mx-4 px-6 py-3 bg-[#1C7CD6] text-white rounded-lg text-center font-semibold hover:bg-[#004AAD] transition-colors shadow-md"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
