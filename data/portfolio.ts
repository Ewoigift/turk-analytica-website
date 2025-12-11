// data/portfolio.ts

// The interface for a project card
export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string; // Path to the project thumbnail image
  category: string;
  href: string;
}

// The featured project data array for Turk Analytica
export const featuredProjects: ProjectCardProps[] = [
  {
    title: "Financial Data Aggregator",
    description: "Built a custom Python-based software solution for real-time aggregation and analysis of financial market data for Turk Analytica.",
    imageSrc: "/images/portfolio/project-finance.jpg", 
    category: "Software Development",
    href: "/portfolio/financial-aggregator",
  },
  {
    title: "National Election SMS System",
    description: "Developed and managed a high-volume bulk SMS gateway for disseminating election results and voter alerts to over 5 million users.",
    imageSrc: "/images/portfolio/project-sms.jpg", 
    category: "Bulk SMS",
    href: "/portfolio/election-sms-system",
  },
  {
    title: "Retail Chain P.O.S. Integration",
    description: "Integrated secure and robust P.O.S. systems across 50 retail locations, including inventory management synchronization.",
    imageSrc: "/images/portfolio/project-pos.jpg", 
    category: "P.O.S. Systems",
    href: "/portfolio/retail-pos-integration",
  },
];