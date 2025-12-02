"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section
      className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center"
      style={
        imageSrc
          ? { backgroundImage: `url(${imageSrc})` }
          : { background: "linear-gradient(to bottom right, #1C7CD6, #004AAD)" }
      }
    >
      {/* Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      )}

      {/* Text on top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto space-y-4 sm:space-y-6 text-white z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance px-4">
          {title}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-pretty px-4"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
