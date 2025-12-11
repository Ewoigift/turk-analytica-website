// components/CTABanner.tsx
import React from 'react';
import Link from 'next/link';

export const CTABanner = () => {
  return (
    <section className="bg-ta-green py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-gray-800 mb-8 font-body font-semibold">
            Partner with Turk Analytica for cut-edge software, specialized messaging, and reliable POS systems. Let's start your project today.
          </p>
          
          <Link href="/contact" passHref>
            {/* Button styled for high visibility against the green background */}
            <button
                className="inline-flex items-center justify-center px-10 py-4 border-4 border-ta-teal text-lg font-bold rounded-full 
                           text-white bg-ta-teal hover:bg-white hover:text-gray-800 hover:border-white transition-all duration-300 shadow-xl"
            >
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};