import { Type as type, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition">
      <div className="w-14 h-14 bg-[#1C7CD6] rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
