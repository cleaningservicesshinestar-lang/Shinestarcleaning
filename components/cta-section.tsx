import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#004AAD] text-white rounded-2xl">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-200 text-pretty">{subtitle}</p>
        )}
        <Link 
          href={buttonLink}
          className="inline-block px-8 py-3 bg-[#1C7CD6] text-white rounded-lg hover:bg-white hover:text-[#004AAD] transition font-bold"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
