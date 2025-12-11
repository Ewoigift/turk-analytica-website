// app/services/page.tsx

import { Button } from '@/components/Button';
import { IconRenderer } from '@/components/IconRenderer';
import { ServiceCard, coreServices } from '@/components/ServiceCard'; // Reusing service data and card component

// Data for the Process/Approach Section
const serviceProcess = [
  {
    step: "Consultation & Strategy",
    iconName: "Target",
    description: "We start by deeply understanding your business goals and market challenges to define a precise technology roadmap."
  },
  {
    step: "Development & Iteration",
    iconName: "Code",
    description: "Using agile methodologies, we rapidly build and deploy solutions, providing constant visibility and opportunity for feedback."
  },
  {
    step: "Deployment & Integration",
    iconName: "Zap",
    description: "We ensure seamless integration with your existing infrastructure, guaranteeing zero downtime and high performance from day one."
  },
  {
    step: "Support & Scaling",
    iconName: "Monitor",
    description: "Our partnership continues post-launch with dedicated local support, maintenance, and strategic planning for future growth."
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20"> {/* Add padding top to clear the fixed Navbar */}

      {/* 1. Hero Section (High-Contrast Style) */}
      <section className="bg-gray-900 py-20 sm:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-2">
            Our Expertise
          </h1>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight max-w-4xl mx-auto">
            Reliable Technology <span className="text-ta-green">Built for African Growth</span>
          </h2>
          <p className="mt-4 text-xl opacity-80 max-w-3xl mx-auto">
            From seamless mobile connectivity to robust enterprise software, we provide tailored solutions that connect you directly to your customers.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
                <a href="/contact">Start Your Project Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Core Services Grid (Reusing Home Page components) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-heading font-extrabold text-gray-900 text-center mb-12">
            Explore Our Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
                // Reusing the ServiceCard component
                <ServiceCard 
                    key={service.title}
                    {...service} 
                />
            ))}
          </div>
        </div>
      </section>

    {/* 3. Our Process / Approach Section (REVISED TIMELINE STRUCTURE) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-heading font-extrabold text-gray-900 text-center mb-4">
                Our Proven Delivery Process
            </h3>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                We partner with you every step of the way to guarantee success, from initial idea to long-term scaling.
            </p>
            
            <div className="relative">
                {/* Horizontal Line for Timeline Effect (Fixed to the Grid Area) */}
                {/* We use grid-cols-4 and set the line to span the necessary columns */}
                <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-10 h-1 bg-gray-300 z-0" />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {serviceProcess.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center lg:pt-10 lg:pb-10">
                            
                            {/* Icon with Counter */}
                            <div className="relative mb-6">
                                {/* The background circle/dot on the timeline */}
                                <div className="absolute inset-0 w-12 h-12 bg-gray-50 rounded-full border-4 border-ta-teal mx-auto" />
                                
                                {/* Icon */}
                                <div className="p-3 rounded-full bg-ta-teal text-white relative flex items-center justify-center">
                                    <IconRenderer name={step.iconName as 'Target' | 'Code' | 'Zap' | 'Monitor'} size={24} strokeWidth={2} />
                                </div>
                            </div>

                            {/* Content */}
                            <h4 className="text-2xl font-heading font-bold text-gray-900 mb-2 mt-4">{step.step}</h4>
                            <p className="text-gray-600 px-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. Final Call to Action (CTA) Banner */}
      <section className="py-16 bg-ta-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          <h3 className="text-3xl font-heading font-extrabold mb-4 md:mb-0">
            Ready to Discuss Your Custom Solution?
          </h3>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Get Your Free Consultation</a>
          </Button>
        </div>
      </section>
      
    </div>
  );
}