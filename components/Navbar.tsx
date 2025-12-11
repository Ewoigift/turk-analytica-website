'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/Button'; 

// --- Turk Analytica Navigation Links ---
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export { navLinks };
// --- End Navigation Links ---

// Custom hook to detect scroll
const useScrollListener = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrolled;
};

// Placeholder until you switch to usePathname
const isActive = (href: string) => {
  if (typeof window === 'undefined') return false;
  const pathname = window.location.pathname;
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollListener();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu if resizing to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 border-b
        ${
          isMenuOpen
            ? 'bg-gray-900 shadow-xl border-gray-700' // SOLID when menu is open
            : scrolled
              ? 'bg-white/95 shadow-lg backdrop-blur-sm border-gray-200'
              : 'bg-white/90 border-transparent'
        }
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-heading font-extrabold text-ta-green z-50"
        >
          Turk Analytica
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                text-gray-600 hover:text-ta-teal font-body font-medium py-2 transition-colors
                ${isActive(link.href) ? 'border-b-2 border-ta-green text-ta-green font-semibold' : ''}
              `}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden z-50">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className={`p-2 rounded-md transition-colors ${
              isMenuOpen
                ? 'text-white hover:bg-gray-700'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <div
        className={`
          fixed inset-0 bg-gray-800 z-40 lg:hidden flex flex-col pt-20
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className={`
                text-lg font-heading text-white py-3 px-2 rounded-md transition-colors
                hover:bg-gray-700
                ${isActive(link.href) ? 'border-l-4 border-ta-green text-ta-green font-bold' : ''}
              `}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4">
            <Button variant="secondary" className="w-full" onClick={toggleMenu}>
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
