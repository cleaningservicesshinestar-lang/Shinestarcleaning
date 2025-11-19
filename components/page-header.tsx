export function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section
      className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center bg-no-repeat"
      style={
        imageSrc
          ? { backgroundImage: `url(${imageSrc})` }
          : { background: "linear-gradient(to bottom right, #1C7CD6, #004AAD)" }
      }
    >
      {/* Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      {/* Text on top */}
      <div className="relative max-w-4xl mx-auto space-y-6 text-white">
        <h1 className="text-6xl md:text-7xl font-bold text-balance">
          {title}
        </h1>

        {subtitle && (
          <p className="text-2xl md:text-3xl text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
