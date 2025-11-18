'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav K.",
    image: "/testimonial-aarav.jpg",
    rating: 5,
    review: "Amazing service! My house has never looked this clean.",
  },
  {
    id: 2,
    name: "Priya S.",
    image: "/testimonial-priya.jpg",
    rating: 5,
    review: "Reliable and professional. Perfect for our office.",
  },
  {
    id: 3,
    name: "Michael T.",
    image: "/testimonial-michael.jpg",
    rating: 4,
    review: "Very friendly team and excellent attention to detail. Will definitely book again.",
  },
  {
    id: 4,
    name: "Sarah W.",
    image: "/testimonial-sarah.jpg",
    rating: 5,
    review: "The best cleaning company I've ever used—fast, efficient, and super polite.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFAF8] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">What Our Clients Say</h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto text-pretty">Real experiences from happy customers</p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fade-in"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#1C7CD6] text-[#1C7CD6]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#1A1A1A] leading-relaxed mb-6 text-pretty flex-grow">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#E6E6E6]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 rounded-full shadow-sm" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-[#1A1A1A] text-sm">{testimonial.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-1 h-1 bg-[#1C7CD6] rounded-full"></div>
                      <span className="text-xs text-[#9CA3AF] font-medium">Verified Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden space-y-8">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm min-h-[400px] flex flex-col">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#1C7CD6] text-[#1C7CD6]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#1A1A1A] leading-relaxed mb-6 text-pretty flex-grow text-lg">
                "{testimonials[currentIndex].review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E6E6E6]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 rounded-full shadow-sm" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonials[currentIndex].name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-1 h-1 bg-[#1C7CD6] rounded-full"></div>
                    <span className="text-xs text-[#9CA3AF] font-medium">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-[#1C7CD6]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-[#1C7CD6]" />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#1C7CD6] w-8'
                    : 'bg-[#E6E6E6] hover:bg-[#D1D5DB]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
