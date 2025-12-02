'use client';

import { motion } from 'framer-motion';

interface IndustryCardImageProps {
  title: string;
  imageSrc: string;
  index?: number;
}

export function IndustryCardImage({ title, imageSrc, index = 0 }: IndustryCardImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
        <motion.img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-4 sm:p-6">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-white"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
