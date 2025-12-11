// components/IconRenderer.tsx
'use client';

import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

// Defining all icon names used for safety and type checking
type IconName = 'Code' | 'MessageSquare' | 'Smartphone' | 'Monitor' | 'Target' | 'Users' | 'Zap';

interface IconRendererProps extends LucideProps {
  name: IconName;
}

// Dynamically import icons using a simplified and robust structure.
const iconCache = new Map<string, ComponentType<LucideProps>>();

const dynamicIcon = (iconName: string): ComponentType<LucideProps> => {
  if (!iconCache.has(iconName)) {
    iconCache.set(
      iconName,
      dynamic(
        // ✅ FIX: Directly return the named export (the icon component) from the resolved module.
        () => import('lucide-react').then((mod) => mod[iconName as keyof typeof mod] as ComponentType<LucideProps>),
        { 
          ssr: false, // Force client-side rendering
          // Use a simple loading state that doesn't rely on Lucide
          loading: () => <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" /> 
        }
      )
    );
  }
  return iconCache.get(iconName)!;
};

export const IconRenderer = ({ name, ...props }: IconRendererProps) => {
  if (!name) return null;

  const IconComponent = dynamicIcon(name);

  // Since IconComponent is now guaranteed to be a valid element type (or the loading component),
  // this should resolve the runtime error.
  return <IconComponent {...props} />;
};