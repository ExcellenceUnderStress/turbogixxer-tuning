'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Fade in header after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling up - hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling down or at top - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 bg-transparent transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full h-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-[1280px] px-8 flex justify-between items-center">
          {/* Left Content - Logo and Navigation */}
          <div className="flex justify-start items-center gap-8">
            {/* Logo */}
            <Link href="/" className="w-36 flex justify-start items-start">
              <div className="w-36 h-8 relative">
                <img 
                  src="/TTLogo-White.svg" 
                  alt="TurboJixxer Tuning" 
                  className="h-8 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-start items-center gap-5">
              {/* Schedule Link */}
              <Link href="/schedule" className="flex justify-center items-center gap-1 overflow-hidden">
                <span className="text-white text-base font-semibold leading-6">Schedule</span>
              </Link>

              {/* FAQ Link */}
              <Link href="/faq" className="flex justify-center items-center gap-1 overflow-hidden">
                <span className="text-white text-base font-semibold leading-6">FAQ</span>
              </Link>

              {/* Shop Link */}
              <Link href="/merch" className="flex justify-center items-center gap-1 overflow-hidden">
                <span className="text-white text-base font-semibold leading-6">Shop</span>
              </Link>

              {/* About/Gallery Link */}
              <Link href="/about" className="flex justify-center items-center gap-1 overflow-hidden">
                <span className="text-white text-base font-semibold leading-6">About/Gallery</span>
              </Link>
            </nav>
          </div>

          {/* Right Content - Action Buttons */}
          <div className="hidden md:flex justify-start items-center gap-3">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm border-2 border-white/10 flex justify-center items-center gap-1.5 overflow-hidden transition"
            >
              <div className="px-0.5 flex justify-center items-center">
                <span className="text-white text-base font-semibold leading-6">Contact</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/schedule" className="py-2 font-semibold text-white hover:text-blue-400 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Schedule
            </Link>
            <Link href="/faq" className="py-2 font-semibold text-white hover:text-blue-400 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/merch" className="py-2 font-semibold text-white hover:text-blue-400 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="py-2 font-semibold text-white hover:text-blue-400 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
              About/Gallery
            </Link>
            <div className="pt-4 border-t border-gray-700 flex flex-col gap-3">
              <Link href="/contact" className="px-4 py-2.5 bg-blue-600 rounded-lg text-center text-white font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
