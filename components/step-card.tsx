"use client";

import { motion } from 'framer-motion';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  index?: number;
}

export function StepCard({ step, title, description, index = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1C7CD6] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {step}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#9CA3AF] leading-relaxed text-pretty text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
}
