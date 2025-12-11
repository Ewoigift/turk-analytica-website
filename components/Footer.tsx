import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './Button'; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Hard-coded list of primary navigation links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-10">
          
          {/* Brand/Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-3xl font-heading font-extrabold text-ta-green mb-4">
              Turk Analytica
            </h3>
            <p className="text-sm text-gray-400">
              Your partner in innovative software solutions, Bulk SMS, USSD, and P.O.S Systems.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              📞 <a href="tel:+254701039083" className="hover:text-ta-teal transition-colors">+254 701 039 083</a>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              📧 <a href="mailto:info@turkanalytica.com" className="hover:text-ta-teal transition-colors">info@turkanalytica.com</a>
            </p>
          </div>

          {/* Quick Links (NOW HARD-CODED) */}
          <div>
            <h4 className="text-xl font-heading font-extrabold mb-5 border-b-2 border-ta-teal pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {/* Iterating over the local, hard-coded quickLinks array */}
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-ta-teal transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-extrabold mb-5 border-b-2 border-ta-teal pb-2">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
             <li><Link href="#"  className="text-gray-300 hover:text-ta-teal transition-colors font-medium">Software Development</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-ta-teal transition-colors font-medium">Bulk SMS Gateways</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-ta-teal transition-colors font-medium">USSD Applications</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-ta-teal transition-colors font-medium">P.O.S Systems</Link></li>
              </ul>
          </div>

          {/* Follow Us / CTA */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-xl font-heading font-extrabold mb-5 border-b-2 border-ta-teal pb-2">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-ta-green transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-ta-green transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-ta-green transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-ta-green transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            
            <div className='mt-8'>
                <Link href="/contact" passHref>
                    <Button variant='primary' className='w-full'>Get a Free Quote</Button>
                </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Turk Analytica. All rights reserved. | Powered by Asekosi.</p>
        </div>
      </div>
    </footer>
  );
};