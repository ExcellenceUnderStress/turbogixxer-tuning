'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="md:sticky md:top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Expert ECU Tuning & Performance Parts</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition">
            <img 
              src="/TTLogo.png" 
              alt="Turbogixxer Tuning Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 mx-8">
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

          {/* Cart */}
          <div className="hidden md:flex items-center">
            <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition relative">
              <ShoppingCart size={20} />
              <span className="text-sm">Cart</span>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="py-2 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="py-2 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/schedule" className="py-2 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              Schedule
            </Link>
            <Link href="/merch" className="py-2 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              Merch
            </Link>
            <Link href="/faq" className="py-2 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link href="/cart" className="flex items-center gap-2 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
                <ShoppingCart size={20} />
                <span>Cart (0)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
