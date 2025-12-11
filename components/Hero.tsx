// components/Hero.tsx
'use client';

import React from 'react';
import { Button } from '@/components/Button';

export const Hero = () => {
  return (
    // Set a fixed height (e.g., 85vh) for the hero section
    <section className="relative w-full h-[100vh] overflow-hidden">
      
      {/* 1. Video Background Layer (Must be z-0) */}
      <div className="absolute inset-0 z-0">
        
        {/* ✅ Video Implementation */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile devices to prevent full-screen takeover
          className="w-full h-full object-cover" // Ensures video covers the entire container
        >
          <source src="/videos/hero-bg1.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Dark Overlay Layer (To ensure text is readable, z-10) */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* 3. Text/Content Layer (Centered and responsive, positioned above the overlay, z-20) */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          
          {/* Main Heading - Using Poppins (font-heading) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight">
            Future-Proof Technology for the <span className="text-ta-green">African Market</span>
          </h1>
          
          {/* Subtext - Using Inter (font-body) */}
          <p className="text-lg sm:text-xl font-body mb-8 opacity-90">
            We deliver tailored software development, robust mobile messaging, and integrated POS solutions built for scale and regional excellence.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg" className="px-10">
              <a href="#services-section">Explore Our Services</a>
            </Button>
            <Button variant="secondaryOutline" size="lg" className="px-10">
              <a href="/contact">Get a Quote</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};