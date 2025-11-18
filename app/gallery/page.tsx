import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function Gallery() {
  const galleryImages = [
    { title: "Residential Living Room", category: "Residential", src: "/clean-modern-living-room-professional-cleaning.jpg" },
    { title: "Corporate Office", category: "Commercial", src: "/modern-corporate-office-workspace-clean-profession.jpg" },
    { title: "Industrial Warehouse", category: "Industrial", src: "/industrial-warehouse-factory-cleaning-equipment.jpg" },
    { title: "Bright Home", category: "Residential", src: "/clean-bright-home-interior-modern-living-room.jpg" },
    { title: "Medical Office", category: "Commercial", src: "/medical-office-clean-healthcare-facility.jpg" },
    { title: "Retail Store", category: "Commercial", src: "/retail-store-mall-shopping-clean-professional.jpg" },
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader
        title="Our Work Gallery"
        subtitle="See the transformation we bring to homes and businesses across Brisbane"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-lg text-[#9CA3AF]">Browse our portfolio of completed cleaning projects showcasing the quality and attention to detail we bring to every job.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-[#e2f1ff]">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff] text-primary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Impressed by Our Work?</h2>
          <p className="text-xl text-primary-200">Let us bring the same level of expertise and care to your space. Schedule a free consultation today.</p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-[#e2f1ff] rounded-lg font-bold hover:bg-white transition"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
