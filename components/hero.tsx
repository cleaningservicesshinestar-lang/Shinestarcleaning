"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  primaryLink: string;
  secondaryLink?: string;
  imageSrc?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  primaryLink,
  secondaryLink,
  imageSrc 
}: HeroProps) {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-[#e2f1ff] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed text-pretty">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link 
                href={primaryLink}
                className="px-6 sm:px-8 py-3 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-sm sm:text-base"
              >
                {primaryCta}
              </Link>
              {secondaryCta && secondaryLink && (
                <Link 
                  href={secondaryLink}
                  className="px-6 sm:px-8 py-3 border-2 border-[#1C7CD6] text-[#1C7CD6] rounded-lg hover:bg-[#1C7CD6] hover:text-white transition-all font-semibold text-center text-sm sm:text-base transform hover:scale-105"
                >
                  {secondaryCta}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                src={imageSrc || "/placeholder.svg"}
                alt="Hero"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
