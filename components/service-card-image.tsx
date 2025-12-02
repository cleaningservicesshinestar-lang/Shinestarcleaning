'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardImageProps {
  title: string;
  description: string;
  imageSrc: string;
  index?: number;
}

export function ServiceCardImage({ title, description, imageSrc, index = 0 }: ServiceCardImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/services/${title.split(' ')[0].toLowerCase()}`} className="block group h-full">
        <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <motion.img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-white/90 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
