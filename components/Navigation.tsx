'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 py-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            About
          </Link>
          <Link href="/schedule" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Schedule
          </Link>
          <Link href="/merch" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Merch
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
            FAQ
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full text-left font-semibold text-gray-900 text-lg flex items-center justify-between"
          >
            Menu
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {mobileMenuOpen && (
            <div className="mt-4 space-y-3 pb-4">
              <Link 
                href="/" 
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/schedule" 
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link 
                href="/merch" 
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Merch
              </Link>
              <Link 
                href="/faq" 
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base"
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
