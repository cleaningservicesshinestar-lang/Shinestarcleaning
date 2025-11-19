import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { Heart, Target, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />
      
      <PageHeader
        title="About Shine Star Cleaning Services"
        subtitle="Professional cleaning with integrity, expertise, and a commitment to excellence"
      />



      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1C7CD6]">Our Story</h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
              At Shine Star Cleaning Services, we believe a clean space isn’t just about appearance—it’s
              about comfort, productivity, health, and peace of mind. Based in Brisbane, we specialise
              in both home cleaning and commercial cleaning services, offering flexible, affordable,
              and high-quality solutions.
              </p>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
              <p className="text-lg text-primary leading-relaxed">Our goal is simple: </p> to make your environment shine while you enjoy more free time and a
              stress-free experience.
              </p>
              
                 
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/professional-cleaning-team-working-together.jpg"
                alt="Shine Star Cleaning team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Mission & Values</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Guiding principles that define who we are</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="To deliver exceptional cleaning services that exceed expectations, enhance wellbeing, and create healthy environments for homes and businesses."
            />
            <FeatureCard
              icon={Heart}
              title="Excellence"
              description="We pursue perfection in every detail, treating every property with the care and professionalism we'd give our own homes."
            />
            <FeatureCard
              icon={Leaf}
              title="Sustainability"
              description="Committed to eco-friendly practices that protect our customers, staff, and the environment with every cleaning we perform."
            />
            <FeatureCard
              icon={Users}
              title="Community"
              description="We believe in building lasting relationships with our customers and contributing positively to the Brisbane community."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Meet the Team</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Dedicated professionals committed to your satisfaction</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica Martinez",
                role: "Founder & CEO",
                image: "/professional-woman-ceo-business-owner.jpg",
              },
              {
                name: "Robert Thompson",
                role: "Operations Manager",
                image: "/professional-operations-manager.png",
              },
              {
                name: "Lisa Anderson",
                role: "Quality Assurance Lead",
                image: "/professional-woman-quality-supervisor.jpg",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">{member.name}</h3>
                <p className="text-[#1C7CD6] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C7CD6] text-white rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Commitment to the Planet</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                At Shine Star, we believe that exceptional cleaning doesn't mean harming the environment. That's why we're committed to sustainable, eco-friendly cleaning practices that protect your health and our planet.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#01d61d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2D5A4D] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Green Products</h4>
                    <p className="text-gray-300">We use only certified eco-friendly, biodegradable cleaning products</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#01d61d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2D5A4D] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Reduced Waste</h4>
                    <p className="text-gray-300">Minimal disposable materials and sustainable packaging throughout our operations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#01d61d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2D5A4D] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Water Conservation</h4>
                    <p className="text-gray-300">Efficient cleaning methods that minimize water usage without compromising results</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/eco-friendly-green-cleaning-sustainable.jpg"
                alt="Eco-friendly cleaning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
