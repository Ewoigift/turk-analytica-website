// app/page.tsx

import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceCard, coreServices } from '@/components/ServiceCard';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ProjectCard } from '@/components/ProjectCard'; 
import { featuredProjects } from '@/data/portfolio'; 
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { CTABanner } from '@/components/CTABanner';


export default function Home() {
  return (
    <>
      <Hero />
      
      {/* -------------------- Services Preview Section -------------------- */}
      <section id="services-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">
              Our Core <span className="text-ta-teal">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover how Turk Analytica empowers your business with reliable technology across crucial sectors.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
              <ServiceCard 
                key={service.title}
                {...service}
              />
            ))}
          </div>

        </div>
      </section>
      
      {/* -------------------- Why Choose Us Section -------------------- */}
      <WhyChooseUs />
      
      {/* ------------------ Portfolio Preview Section ------------------ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">
              Featured <span className="text-ta-teal">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              A look at how Turk Analytica has delivered high-impact technology solutions across various industries.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                category={project.category}
                href={project.href}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full 
                         text-white bg-ta-green hover:bg-ta-teal transition-colors duration-300 shadow-md"
            >
              View All Portfolio Work
            </Link>
          </div>

        </div>
      </section>
      {/* ---------------- End Portfolio Preview Section ---------------- */}

      {/* ------------------ Testimonials Slider Section ------------------ */}
      <TestimonialSlider />
      {/* ---------------- End Testimonials Slider Section ---------------- */}
      
     {/* ------------------ CTA Banner Section ------------------ */}
      <CTABanner />
      {/* ---------------- End CTA Banner Section ---------------- */}
    </>
  );
}