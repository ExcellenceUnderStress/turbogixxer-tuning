'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
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

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/account" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <User size={20} />
              <span className="text-sm">Account</span>
            </Link>
            <Link href="/wishlist" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Heart size={20} />
              <span className="text-sm">Wishlist</span>
            </Link>
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

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/account" className="flex items-center gap-2 hover:text-blue-600 transition">
              <User size={20} />
              <span>Account</span>
            </Link>
            <Link href="/wishlist" className="flex items-center gap-2 hover:text-blue-600 transition">
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-2 hover:text-blue-600 transition">
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
