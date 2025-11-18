interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C7CD6] to-[#004AAD] text-white text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-balance">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-200 text-pretty">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
