"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004AAD] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <img
                  src="/white-logo-1.png"
                  alt="Shine Star Cleaning Logo"
                  className="w-auto h-12 sm:h-14 object-contain"
                />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl">
                Shine Star
                <p className="font-medium text-sm sm:text-base">Cleaning Services</p>
              </h3>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">Professional Cleaning You Can Trust</p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=61583922482027&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C7CD6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/shinestarcleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C7CD6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/company/shine-star-cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C7CD6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/shinestarcleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C7CD6] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.tiktok.com/@shine.star.cleani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-400 hover:text-brand-green transition-colors"
                aria-label="TikTok"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <title>TikTok</title>
                  <path d="M9.5 3.5c.5 0 .9.4.9.9v11.4a2.7 2.7 0 11-2.7-2.7h.9V9a4.5 4.5 0 104.5 4.5V6.3a5.2 5.2 0 004.5 2.5v-2A3.3 3.3 0 0115 3.5h-5.5z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services/residential" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/services/specialised" className="hover:text-[#1C7CD6] transition-colors inline-block">
                  Specialized
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:0433711477" className="hover:text-[#1C7CD6] transition-colors break-all">
                  0433 711 477
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shinestarcleaning.com.au" className="hover:text-[#1C7CD6] transition-colors break-all">
                  info@shinestarcleaning.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Brisbane, Queensland, Australia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400"
        >
          <p>&copy; {currentYear} Shine Star Cleaning Services. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
