// components/ServiceCard.tsx

import Link from 'next/link';
import { IconRenderer } from '@/components/IconRenderer'; 

// --- Data Structure and Definitions ---
export interface Service {
  title: string;
  description: string;
  iconName: 'Code' | 'MessageSquare' | 'Smartphone' | 'Monitor';
  href: string;
  color: 'ta-green' | 'ta-teal';
}

// Data for core services
export const coreServices: Service[] = [
  {
    title: "Software Development",
    description: "Tailored applications built for scale, efficiency, and seamless user experience.",
    iconName: "Code",
    href: "#", ///services/software-development
    color: "ta-green",
  },
  {
    title: "Bulk SMS Gateway",
    description: "Reliable, high-speed messaging for marketing, notifications, and client communication.",
    iconName: "MessageSquare",
    href: "#", ///services/bulk-sms
    color: "ta-teal",
  },
  {
    title: "USSD Applications",
    description: "Mobile-based services delivered via USSD for reach across all feature and smartphones.",
    iconName: "Smartphone",
    href: "#", // /services/ussd-applications
    color: "ta-green",
  },
  {
    title: "P.O.S Systems",
    description: "Integrated point-of-sale solutions designed to streamline retail and service operations.",
    iconName: "Monitor",
    href: "#", // /services/pos-systems
    color: "ta-teal",
  },
];
// --- End Data ---

export const ServiceCard: React.FC<Service> = ({ title, description, iconName, href, color }) => {
  return (
    <Link href={href}>
      <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full border-t-4 border-${color}`}>
        
        {/* ICON RENDERER FIX */}
        <div className={`text-${color} mb-4`}>
          <IconRenderer name={iconName} size={40} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 font-body">{description}</p>
        
        <p className={`mt-4 text-${color} font-semibold flex items-center`}>
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </p>
      </div>
    </Link>
  );
};