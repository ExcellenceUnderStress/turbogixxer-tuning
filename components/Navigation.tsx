'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const categories = [
    'Engine Management & Electronics',
    'Performance Parts',
    'Fuel Systems',
    'Wiring & Connectors',
    'Sensors'
  ];

  const brands = [
    'AEM',
    'Borg Warner',
    'Fuel Injector Clinic',
    'Fuelab',
    'Haltech',
    'Hondata',
    'Ktuner',
    'Neptune',
    'Nismotronic',
    'Rywire',
    'Speed Factory',
    'Turbogixxer Tuning'
  ];

  const featured = [
    { name: 'Tuning Services', link: '/tuning-service' },
    { name: 'Turbogixxer Tuning Products', link: '/turbogixxer-tuning-products' },
    { name: 'Deals', link: '/combo-deals' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 py-4">
          <div
            className="relative group"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition font-medium py-2">
              Shop
              <ChevronDown size={16} />
            </button>

            {/* Mega Menu */}
            {showMegaMenu && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                <div className="bg-white text-gray-900 shadow-2xl rounded-2xl p-8 w-[900px] border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Shop</h2>
                  <p className="text-gray-500 text-sm">Get started and learn more about our products.</p>
                </div>
                
                <div className="grid grid-cols-3 gap-12">
                  {/* Shop by Category */}
                  <div>
                    <h3 className="font-bold text-base mb-4 text-blue-600">Shop By Category</h3>
                    <ul className="space-y-3">
                      {categories.map((category) => (
                        <li key={category}>
                          <Link
                            href={`/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="text-gray-700 hover:text-blue-600 transition text-sm block"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shop by Brand */}
                  <div>
                    <h3 className="font-bold text-base mb-4 text-blue-600">Shop By Brand</h3>
                    <ul className="space-y-3">
                      {brands.slice(0, 8).map((brand) => (
                        <li key={brand}>
                          <Link
                            href={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-gray-700 hover:text-blue-600 transition text-sm block"
                          >
                            {brand}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured */}
                  <div>
                    <h3 className="font-bold text-base mb-4 text-blue-600">Featured</h3>
                    <ul className="space-y-3">
                      {featured.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.link}
                            className="text-gray-700 hover:text-blue-600 transition text-sm block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full text-left font-semibold text-gray-900 text-lg flex items-center justify-between"
          >
            Menu
            <ChevronDown
              size={20}
              className={`transform transition ${mobileMenuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {mobileMenuOpen && (
            <div className="mt-4 space-y-3 pb-4">
              {/* Store Accordion */}
              <div className="border-b border-gray-200 pb-3">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'store' ? null : 'store')}
                  className="w-full text-left py-3 font-semibold text-gray-900 text-base flex items-center justify-between"
                >
                  Store
                  <ChevronDown
                    size={18}
                    className={`transform transition ${mobileAccordion === 'store' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'store' && (
                  <div className="pl-4 space-y-4 mt-3 max-h-96 overflow-y-auto">
                    <div>
                      <p className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide">Shop by Category</p>
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition text-sm"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide">Shop by Brand</p>
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          href={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition text-sm"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wide">Featured</p>
                      {featured.map((item) => (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base border-b border-gray-200">
                About
              </Link>
              <Link href="/contact" className="block py-3 font-medium text-gray-900 hover:text-blue-600 text-base">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
