// app/layout.tsx

import type { Metadata } from 'next';
// Assuming a global CSS file exists at this path
import './globals.css'; 

// Import the structural components
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Define the site metadata for SEO
export const metadata: Metadata = {
  title: 'Turk Analytica | Digital Transformation in Africa',
  description: 'Your partner for custom software solutions, Bulk SMS, USSD, and P.O.S Systems across Kenya and East Africa.',
  keywords: ['Software Development', 'Bulk SMS', 'USSD', 'POS Systems', 'Kenya', 'Africa'],
  authors: [{ name: 'Turk Analytica' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The entire application is wrapped in the structural components */}
        <Navbar />
        
        {/* Main content area where individual pages (e.g., /about, /services) will render */}
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}