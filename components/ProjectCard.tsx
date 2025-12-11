// components/ProjectCard.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ProjectCardProps } from '@/data/portfolio'; // Import the interface

// Note: The featuredProjects array is no longer defined here.

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, category, href }) => {
  return (
    <Link 
      href={href} 
      className="block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden 
                 transition-all duration-300 transform group hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={`Project: ${title}`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Prioritize loading for home page visibility
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <span className="text-xs font-semibold uppercase text-ta-teal tracking-wider">
          {category}
        </span>
        
        <h3 className="text-xl font-heading font-bold text-gray-800 mt-2 mb-3 group-hover:text-ta-green transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* View Case Study Link (using ArrowRight icon) */}
        <div className="flex items-center text-sm font-semibold text-ta-green transition-colors">
          <span>View Case Study</span>
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};