import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="/TTLogo-White@2x.png" 
            alt="Turbogixxer Tuning Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/store" className="hover:text-blue-400 transition">Store</Link></li>
              <li><Link href="/combo-deals" className="hover:text-blue-400 transition">Combo Deals</Link></li>
              <li><Link href="/tuning-service" className="hover:text-blue-400 transition">Tuning Services</Link></li>
              <li><Link href="/used-parts" className="hover:text-blue-400 transition">Used Parts</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              <li><Link href="/tuning-agreement" className="hover:text-blue-400 transition">Tuning Agreement</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/payments-shipping" className="hover:text-blue-400 transition">Payments & Shipping</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400 transition">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@turbogixxer.com" className="hover:text-blue-400 transition">
                  info@turbogixxer.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition">
                  (123) 456-7890
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>Copyright © 2013-2025 Turbogixxer Tuning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
