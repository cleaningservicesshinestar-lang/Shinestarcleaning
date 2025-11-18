import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  rating?: number;
}

export function TestimonialCard({ name, title, content, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-lg transition">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-[#F4A942] text-[#F4A942]" />
        ))}
      </div>
      <p className="text-[#1A1A1A] leading-relaxed mb-6 text-pretty">{content}</p>
      <div>
        <p className="font-bold text-[#1A1A1A]">{name}</p>
        <p className="text-sm text-[#9CA3AF]">{title}</p>
      </div>
    </div>
  );
}
