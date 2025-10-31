import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="/TTLogo-White@2x.png" 
            alt="TurboJixxer Tuning Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <p className="text-gray-300 mb-2">Auburn, WA</p>
          <p className="text-gray-300">
            <a href="mailto:info@turbojixxer.com" className="hover:text-blue-400 transition">
              info@turbojixxer.com
            </a>
          </p>
        </div>

        {/* Platform Logos */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 text-blue-400">Supported Platforms</h3>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-gray-300">Hondata</span>
            <span className="text-gray-300">Haltech</span>
            <span className="text-gray-300">KTuner</span>
            <span className="text-gray-300">MoTeC</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 text-blue-400">Follow Us</h3>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2013-2025 TurboJixxer Tuning. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
                Terms
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
                Refund Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/merch" className="text-gray-400 hover:text-blue-400 transition">
                Merch Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
