import { Type as type, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-[#E6E6E6] hover:shadow-lg hover:border-[#1C7CD6] transition-all duration-300 group cursor-pointer">
      <div className="w-12 h-12 bg-[#1C7CD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#9CA3AF] leading-relaxed">{description}</p>
    </div>
  );
}
