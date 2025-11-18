import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter  } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#004AAD] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-15 h-15  rounded-lg flex items-center justify-center">
              <img
              src="/white-logo-1.png"
              alt="Shine Star Cleaning Logo"
              className="w-auto h-14 object-contain"
            />
              </div>
              <h3 className="font-bold text-2xl">Shine Star
              <p className="font-medium text-base">Cleaning Services</p></h3>  
            </div>

            <p className="text-gray-300 text-sm mb-4">Professional Cleaning You Can Trust</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61583922482027&sk=about" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C7CD6] transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/shinestarcleaning" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C7CD6] transition">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/shine-star-cleaning" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C7CD6] transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/shinestarcleaning" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C7CD6] transition">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@shine.star.cleani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-400 hover:text-brand-green transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                >
                  <title>TikTok</title>
                  <path d="M9.5 3.5c.5 0 .9.4.9.9v11.4a2.7 2.7 0 11-2.7-2.7h.9V9a4.5 4.5 0 104.5 4.5V6.3a5.2 5.2 0 004.5 2.5v-2A3.3 3.3 0 0115 3.5h-5.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-[#1C7CD6] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#1C7CD6] transition">About</Link></li>
              <li><Link href="/services" className="hover:text-[#1C7CD6] transition">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#1C7CD6] transition">Gallery</Link></li>
              <li><Link href="/service-areas" className="hover:text-[#1C7CD6] transition">Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-[#1C7CD6] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/residential" className="hover:text-[#1C7CD6] transition">Residential</Link></li>
              <li><Link href="/services/commercial" className="hover:text-[#1C7CD6] transition">Commercial</Link></li>
              <li><Link href="/services/industrial" className="hover:text-[#1C7CD6] transition">Industrial</Link></li>
              <li><Link href="/services/specialised" className="hover:text-[#1C7CD6] transition">Specialized</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0433711477" className="hover:text-[#1C7CD6] transition">0433 711 477</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@shinestarcleaning.com.au" className="hover:text-[#1C7CD6] transition">info@shinestarcleaning.com.au</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Brisbane, Queensland, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Shine Star Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
