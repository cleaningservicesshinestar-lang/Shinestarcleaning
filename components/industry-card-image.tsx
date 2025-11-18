'use client';

interface IndustryCardImageProps {
  title: string;
  imageSrc: string;
}

export function IndustryCardImage({ title, imageSrc }: IndustryCardImageProps) {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}
