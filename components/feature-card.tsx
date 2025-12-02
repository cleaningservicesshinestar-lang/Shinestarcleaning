"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1C7CD6] rounded-lg flex items-center justify-center mb-4 shadow-lg"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white" size={24} />
      </motion.div>
      <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  );
}
