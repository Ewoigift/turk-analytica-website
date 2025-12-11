// app/about/page.tsx

import { IconRenderer } from '@/components/IconRenderer'; 
import { Button } from '@/components/Button'; 

// --- Data ---
const coreValues = [
    {
        name: "Integrity",
        description: "Operating with transparency and unwavering ethical standards in all our client interactions and solutions.",
        iconName: "Target", 
    },
    {
        name: "Innovation",
        description: "Continuously seeking new technologies and creative approaches to solve complex business challenges.",
        iconName: "Zap", 
    },
    {
        name: "Excellence",
        description: "Committed to delivering high-quality, reliable, and scalable products that exceed expectations.",
        iconName: "Users", 
    },
];
// --- End Data ---

export default function AboutUsPage() {
  return (
    <div className="pt-20"> 

     {/* 1. Hero / Title Section (FIXED IMAGE SIZING AND STACKING) */}
      <section className="relative bg-[#1A383A] py-16 sm:py-24 overflow-hidden">  
        {/* Content Layer (Centered Text, white color, z-20) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 text-white">
          <h1 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-2">
            Who We Are
          </h1>
          <h2 className="text-5xl font-heading font-extrabold leading-tight">
            Driving Digital Transformation <span className="text-ta-green">in Africa</span>
          </h2>
          <p className="mt-4 text-xl opacity-80 max-w-3xl mx-auto">
            Turk Analytica is founded on regional expertise and a commitment to delivering world-class technology tailored for success across the African continent.
          </p>
        </div>
      </section>

      {/* 2. Mission & Story Section (Unchanged) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Story Text (STICKY) */}
            <div className="lg:col-span-1 lg:sticky lg:top-28 pt-4">
              <h3 className="text-4xl font-heading font-extrabold text-gray-900 mb-6 border-b-4 border-ta-green pb-2 inline-block">
                Our Story
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Turk Analytica was founded on the principle that African businesses deserve access to world-class, customized technology built for local success. We blend global standards with regional expertise.
              </p>
              <div className="mt-8">
                <p className="text-lg text-gray-700 font-semibold mb-4">
                    Learn how our journey began and our commitment to the continent.
                </p>
                <Button variant="primary" size="lg" asChild>
                    <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </div>

            {/* Mission/Vision Blocks (COLOR BACKGROUNDS) */}
            <div className="lg:col-span-2 space-y-10">
                
                {/* Vision Block */}
                <div className="p-8 rounded-xl shadow-xl bg-ta-teal/10 border-l-8 border-ta-teal">
                    <h4 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-1">Vision</h4>
                    <p className="text-3xl font-heading font-extrabold text-gray-900 mb-4">
                        To be the leading technology partner unlocking Africa&apos;s vast digital potential.
                    </p>
                    <p className="text-lg text-gray-700">
                        We aim to set the standard for regional excellence, providing reliable, scalable, and innovative solutions that drive the next generation of African enterprises.
                    </p>
                </div>

                {/* Mission Block */}
                <div className="p-8 rounded-xl shadow-xl bg-ta-green/10 border-l-8 border-ta-green">
                    <h4 className="text-sm font-heading font-semibold text-ta-green uppercase tracking-widest mb-1">Mission</h4>
                    <p className="text-3xl font-heading font-extrabold text-gray-900 mb-4">
                        To empower businesses with custom-built technology solutions that drive efficiency and measurable growth.
                    </p>
                    <p className="text-lg text-gray-700">
                        We focus on delivering products that are robust, secure, and perfectly tailored to meet the unique challenges and opportunities of your market.
                    </p>
                </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Core Values Section (Unchanged) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-heading font-extrabold text-gray-900 text-center mb-12">
            Our Guiding Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-ta-teal">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-ta-teal/10 text-ta-teal">
                        <IconRenderer name={value.iconName as 'Target' | 'Zap' | 'Users'} size={24} strokeWidth={2} />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-gray-900">{value.name}</h4>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Simple Call to Action (CTA) Banner (Unchanged) */}
      <section className="py-16 bg-ta-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          <h3 className="text-3xl font-heading font-extrabold mb-4 md:mb-0">
            Ready to Start Your Project?
          </h3>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Contact Our Team Today</a>
          </Button>
        </div>
      </section>
      
    </div>
  );
}