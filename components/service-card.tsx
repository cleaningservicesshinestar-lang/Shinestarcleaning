"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 sm:p-8 bg-white rounded-2xl border border-[#E6E6E6] hover:shadow-xl hover:border-[#1C7CD6] transition-all duration-300 group cursor-pointer h-full"
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-12 h-12 bg-[#1C7CD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <Icon className="text-white" size={24} />
      </motion.div>
      <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">{description}</p>
    </motion.div>
  );
}
