"use client";

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  rating?: number;
  index?: number;
}

export function TestimonialCard({ name, title, content, rating = 5, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ y: -5 }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
          >
            <Star size={18} className="fill-[#F4A942] text-[#F4A942]" />
          </motion.div>
        ))}
      </div>
      <p className="text-[#1A1A1A] leading-relaxed mb-6 text-pretty text-sm sm:text-base">{content}</p>
      <div>
        <p className="font-bold text-[#1A1A1A] text-sm sm:text-base">{name}</p>
        <p className="text-xs sm:text-sm text-[#9CA3AF]">{title}</p>
      </div>
    </motion.div>
  );
}
