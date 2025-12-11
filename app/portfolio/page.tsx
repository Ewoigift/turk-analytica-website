// app/portfolio/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { ChevronRight } from 'lucide-react';

// --- Project Data (Defined above) ---
const projects = [
  {
    id: 1,
    title: "Regional Logistics Tracking System",
    category: "Software Development",
    tags: ["Custom Software", "Logistics", "API Integration"],
    description: "A comprehensive web and mobile platform built to optimize route planning and real-time fleet tracking across three East African countries.",
    imagePath: "/images/portfolio/logistics-tracker.jpg", 
    client: "East Africa Cargo Solutions"
  },
  {
    id: 2,
    title: "National Bank SMS Alert System",
    category: "Bulk SMS Gateway",
    tags: ["Bulk SMS", "Transactional Messaging", "High Volume"],
    description: "Integrated a high-throughput SMS gateway to handle millions of transactional alerts, OTPs, and marketing messages daily for a major national bank.",
    imagePath: "/images/portfolio/bank-sms.jpg", 
    client: "First Central Bank"
  },
  {
    id: 3,
    title: "Agri-Advisory USSD Service",
    category: "USSD Applications",
    tags: ["USSD", "Mobile Engagement", "Agriculture"],
    description: "Developed a USSD application providing farmers with real-time weather forecasts, market prices, and farming tips, accessible on any mobile device.",
    imagePath: "/images/portfolio/agri-ussd.jpg", 
    client: "Ministry of Agriculture"
  },
  {
    id: 4,
    title: "Retail Chain P.O.S. Deployment",
    category: "P.O.S. Systems",
    tags: ["POS", "Inventory Management", "Multi-Store"],
    description: "Deployed a centralized Point-of-Sale (POS) system across 50 retail locations, including hardware setup and inventory migration.",
    imagePath: "/images/portfolio/retail-pos.jpg", 
    client: "MegaMart Retail"
  },
  // Add more projects to fill the grid...
  {
    id: 5,
    title: "Mobile Money Agent App",
    category: "Software Development",
    tags: ["Mobile App", "Fintech", "Security"],
    description: "A custom mobile application designed for secure, fast transactions for agents in the mobile money sector.",
    imagePath: "/images/portfolio/mobile-money.jpg", 
    client: "PesaFast Networks"
  },
];

const categories = ["All", "Software Development", "Bulk SMS Gateway", "USSD Applications", "P.O.S. Systems"];
// --- End Project Data ---


// --- Portfolio Card Component ---
interface ProjectCardProps {
    project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
            <Image
                src={project.imagePath} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
        
        <div className="p-6">
            {/* Category Tag */}
            <span className="text-xs font-semibold uppercase tracking-wider text-ta-teal bg-ta-teal/10 px-3 py-1 rounded-full mb-3 inline-block">
                {project.category}
            </span>
            
            {/* Title & Description */}
            <h3 className="text-xl font-heading font-extrabold text-gray-900 mb-2 group-hover:text-ta-green transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
            
            {/* View Project Link */}
            <Link 
                href={`/portfolio/${project.id}`} 
                className="text-ta-teal font-semibold flex items-center group-hover:translate-x-1 transition-transform"
            >
                View Details <ChevronRight size={18} className="ml-1" />
            </Link>
        </div>
    </div>
);
// --- End Portfolio Card Component ---


export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    
    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20"> 

      {/* 1. Hero / Title Section */}
      <section className="bg-gray-100 py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-2">
            Case Studies
          </h1>
          <h2 className="text-5xl font-heading font-extrabold text-gray-900 leading-tight">
            Proven Results in the African Market
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we&apos;ve leveraged our technical expertise to drive real, measurable success for businesses across the continent.
          </p>
        </div>
      </section>

      {/* 2. Filter/Category Bar */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                            ${activeCategory === category
                                ? 'bg-ta-green text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* 3. Project Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-600">No projects found in the selected category.</p>
                </div>
            )}
        </div>
      </section>

      {/* 4. Final Call to Action (CTA) Banner */}
      <section className="py-16 bg-ta-teal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          <h3 className="text-3xl font-heading font-extrabold mb-4 md:mb-0">
            Ready to Build Your Success Story?
          </h3>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
      
    </div>
  );
}