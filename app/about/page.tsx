"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";
import { Heart, Target, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    {
      name: "Prabin Thapa",
      role: "Founder & CEO",
      image: "/professional-operations-manager.png",
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
  ];

  const commitments = [
    {
      title: "Green Products",
      description: "We use only certified eco-friendly, biodegradable cleaning products"
    },
    {
      title: "Reduced Waste",
      description: "Minimal disposable materials and sustainable packaging throughout our operations"
    },
    {
      title: "Water Conservation",
      description: "Efficient cleaning methods that minimize water usage without compromising results"
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader
        title="About Shine Star Cleaning Services"
        subtitle="Professional cleaning with integrity, expertise, and a commitment to excellence"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C7CD6]">Our Story</h2>
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed text-pretty">
                At Shine Star Cleaning Services, we believe a clean space isn't just about appearance—it's
                about comfort, productivity, health, and peace of mind. Based in Brisbane, we specialise
                in both home cleaning and commercial cleaning services, offering flexible, affordable,
                and high-quality solutions.
              </p>
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed text-pretty">
                <span className="text-primary font-semibold">Our goal is simple: </span>
                to make your environment shine while you enjoy more free time and a
                stress-free experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="/professional-cleaning-team-working-together.jpg"
                alt="Shine Star Cleaning team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e2f1ff]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Mission & Values</h2>
            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty px-4">
              Guiding principles that define who we are
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="To deliver exceptional cleaning services that exceed expectations, enhance wellbeing, and create healthy environments for homes and businesses."
              index={0}
            />
            <FeatureCard
              icon={Heart}
              title="Excellence"
              description="We pursue perfection in every detail, treating every property with the care and professionalism we'd give our own homes."
              index={1}
            />
            <FeatureCard
              icon={Leaf}
              title="Sustainability"
              description="Committed to eco-friendly practices that protect our customers, staff, and the environment with every cleaning we perform."
              index={2}
            />
            <FeatureCard
              icon={Users}
              title="Community"
              description="We believe in building lasting relationships with our customers and contributing positively to the Brisbane community."
              index={3}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A]">Meet the Team</h2>
            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty px-4">
              Dedicated professionals committed to your satisfaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">{member.name}</h3>
                <p className="text-[#1C7CD6] font-semibold text-sm sm:text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1C7CD6] text-white rounded-xl sm:rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Our Commitment to the Planet</h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-pretty">
                At Shine Star, we believe that exceptional cleaning doesn't mean harming the environment. That's why we're committed to sustainable, eco-friendly cleaning practices that protect your health and our planet.
              </p>
              
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-6 h-6 bg-[#01d61d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#2D5A4D] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{commitment.title}</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{commitment.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="/eco-friendly-green-cleaning-sustainable.jpg"
                alt="Eco-friendly cleaning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
