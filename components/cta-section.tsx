"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#004AAD] text-white rounded-xl sm:rounded-2xl"
    >
      <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            href={buttonLink}
            className="inline-block px-6 sm:px-8 py-3 bg-white text-[#004AAD] rounded-lg hover:bg-[#1C7CD6] hover:text-white transition-all font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
