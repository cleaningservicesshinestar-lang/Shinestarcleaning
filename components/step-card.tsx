interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-[#1C7CD6] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
          {step}
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#9CA3AF] leading-relaxed text-pretty">{description}</p>
      </div>
    </div>
  );
}
