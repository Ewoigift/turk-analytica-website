// components/TestimonialSlider.tsx
'use client'; 

import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials'; 
import { useSwipeable } from 'react-swipeable'; // Import the new hook

// --- Testimonial Card (unchanged) ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
    <Quote size={48} className="text-ta-teal mb-6 opacity-75" strokeWidth={1.5} />
    
    <p className="text-xl md:text-2xl italic text-gray-700 font-body leading-relaxed mb-8">
      &quot;{testimonial.quote}&quot;
    </p>
    
    <div className="border-t border-gray-200 pt-6">
      <p className="text-lg font-heading font-bold text-gray-900">{testimonial.name}</p>
      <p className="text-sm text-gray-500 mt-1">{testimonial.title}, <span className="text-ta-teal font-semibold">{testimonial.company}</span></p>
    </div>
  </div>
);


export const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // --- Swiping Logic ---
  const handlers = useSwipeable({
    // Go to next slide on swipe left
    onSwipedLeft: () => nextSlide(), 
    // Go to previous slide on swipe right
    onSwipedRight: () => prevSlide(), 
    preventScrollOnSwipe: true,
    trackMouse: true, // Allows mouse dragging on desktop
  });
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (unchanged) */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback on the reliable service and cutting-edge solutions provided by **Turk Analytica**.
          </p>
        </div>

        {/* Slider Container - HANDLERS ARE APPLIED HERE */}
        <div 
          {...handlers} 
          className="relative max-w-4xl mx-auto cursor-grab active:cursor-grabbing" // Add cursor styles
        >
          
          {/* Slides (fixed height to prevent layout shift) */}
          <div className="h-96 md:h-80 relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                // Transition speed remains duration-700 (0.7 seconds)
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons (REMOVED) - replaced by swiping

          {/* Dot Indicators (Kept for visual reference) */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-ta-green scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};