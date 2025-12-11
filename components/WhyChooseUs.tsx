// components/WhyChooseUs.tsx

import Image from 'next/image'; // ✅ NEW IMPORT
import { IconRenderer } from '@/components/IconRenderer'; 

// Data for features/values
const features = [
  {
    iconName: "Target", 
    title: "Goal-Oriented Solutions",
    description: "We align our technology with your business objectives, ensuring every product delivers measurable results.",
  },
  {
    iconName: "Users", 
    title: "Dedicated Local Team",
    description: "Our experts are readily available, providing personalized support and intimate knowledge of the local market.",
  },
  {
    iconName: "Zap", 
    title: "Cutting-Edge Technology",
    description: "We utilize the latest frameworks and practices to build high-performance, future-proof applications.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Text Content (Unchanged) */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-2">
              Our Value Proposition
            </h2>
            <h3 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">
              Why Partner with <span className="text-ta-green">Turk Analytica</span>?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              We deliver technology that is reliable, scalable, and perfectly tuned to the dynamics of the African business environment.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  
                  <div className="flex-shrink-0 p-3 rounded-full bg-ta-teal/10 text-ta-teal">
                    <IconRenderer name={feature.iconName} size={24} strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Image Implementation */}
          <div className="lg:w-1/2 flex items-center justify-center">
            {/* The outer div manages height, inner div holds the image */}
            <div className="relative w-full h-80 lg:h-full lg:min-h-[400px] overflow-hidden rounded-xl shadow-2xl">
              
              {/* ✅ Image Component Code */}
              <Image
                src="/images/why-choose-us.jpg" // ⬅️ Replace this path if your image is elsewhere
                alt="A diverse team collaborating on digital strategy, representing our commitment."
                fill
                className="object-cover" // Ensures the image covers the container without distortion
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};