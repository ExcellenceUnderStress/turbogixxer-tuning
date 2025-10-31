'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in navigation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-transparent transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 py-4">
          <Link href="/" className="text-white hover:text-blue-400 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400 transition font-medium">
            About
          </Link>
          <Link href="/schedule" className="text-white hover:text-blue-400 transition font-medium">
            Schedule
          </Link>
          <Link href="/merch" className="text-white hover:text-blue-400 transition font-medium">
            Merch
          </Link>
          <Link href="/faq" className="text-white hover:text-blue-400 transition font-medium">
            FAQ
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full text-left font-semibold text-white text-lg flex items-center justify-between"
          >
            Menu
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {mobileMenuOpen && (
            <div className="mt-4 space-y-3 pb-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <Link 
                href="/" 
                className="block py-3 font-medium text-white hover:text-blue-400 text-base border-b border-white/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-3 font-medium text-white hover:text-blue-400 text-base border-b border-white/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/schedule" 
                className="block py-3 font-medium text-white hover:text-blue-400 text-base border-b border-white/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link 
                href="/merch" 
                className="block py-3 font-medium text-white hover:text-blue-400 text-base border-b border-white/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Merch
              </Link>
              <Link 
                href="/faq" 
                className="block py-3 font-medium text-white hover:text-blue-400 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
