import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  primaryLink: string;
  secondaryLink?: string;
  imageSrc?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  primaryLink,
  secondaryLink,
  imageSrc 
}: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-[#e2f1ff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
              {title}
            </h1>
            <p className="text-xl text-[#9CA3AF] leading-relaxed text-pretty">
              {subtitle}
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <Link 
                href={primaryLink}
                className="px-8 py-3 bg-[#1C7CD6] text-white rounded-lg hover:bg-[#004AAD] transition font-semibold shadow-lg hover:shadow-xl"
              >
                {primaryCta}
              </Link>
              {secondaryCta && secondaryLink && (
                <Link 
                  href={secondaryLink}
                  className="px-8 py-3 border-2 border-[#1C7CD6] text-[#1C7CD6] rounded-lg hover:bg-[#1C7CD6] hover:text-white transition font-semibold"
                >
                  {secondaryCta}
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-4 duration-700">
              <img 
                src={imageSrc || "/placeholder.svg"} 
                alt="Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
