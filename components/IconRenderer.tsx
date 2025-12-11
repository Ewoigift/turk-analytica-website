// components/IconRenderer.tsx
'use client';

import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

// Defining all icon names used for safety and type checking
export type IconName = 'Code' | 'MessageSquare' | 'Smartphone' | 'Monitor' | 'Target' | 'Users' | 'Zap';

interface IconRendererProps extends LucideProps {
  name: IconName;
}

// ✅ Pre-create all icon components outside of render
const iconComponents: Record<IconName, ComponentType<LucideProps>> = {
  Code: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Code }))),
  MessageSquare: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.MessageSquare }))),
  Smartphone: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Smartphone }))),
  Monitor: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Monitor }))),
  Target: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Target }))),
  Users: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Users }))),
  Zap: dynamic(() => import('lucide-react').then((mod) => ({ default: mod.Zap }))),
};

export const IconRenderer = ({ name, ...props }: IconRendererProps) => {
  if (!name) return null;

  // ✅ Simply look up the pre-created component
  const IconComponent = iconComponents[name];

  return <IconComponent {...props} />;
};