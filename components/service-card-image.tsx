'use client';

import Link from 'next/link';

interface ServiceCardImageProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function ServiceCardImage({ title, description, imageSrc }: ServiceCardImageProps) {
  return (
    <Link href={`/services/${title.split(' ')[0].toLowerCase()}`} className="block group">
    <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    </Link>
  );
}
