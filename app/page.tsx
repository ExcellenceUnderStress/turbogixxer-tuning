'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredCategories = [
    {
      title: 'Hondata',
      description: 'Advanced ECU reflashing for Honda vehicles',
      image: '/images/hondata.jpg',
      link: '/brand/hondata'
    },
    {
      title: 'Haltech',
      description: 'Elite engine management for custom builds',
      image: '/images/haltech.jpg',
      link: '/brand/haltech'
    },
    {
      title: 'Ktuner',
      description: 'Affordable tuning for modern engines',
      image: '/images/ktuner.jpg',
      link: '/brand/ktuner'
    },
    {
      title: 'Tuning Service',
      description: 'Professional dyno and remote tuning',
      image: '/images/tuning.jpg',
      link: '/tuning-service'
    },
    {
      title: 'EFI Tuning Supplies',
      description: 'Wideband sensors and injectors',
      image: '/images/supplies.jpg',
      link: '/category/fuel-systems'
    },
    {
      title: 'Turbo Manifolds',
      description: 'High-flow manifolds for boosted setups',
      image: '/images/turbo.jpg',
      link: '/category/performance-parts'
    }
  ];

  const brands = [
    { name: 'Ktuner', logo: '/ktunerlogo.png' },
    { name: 'Haltech', logo: '/haltechlogo.png' },
    { name: 'AEM', logo: '/aemlogo.png' },
    { name: 'Turbosmart', logo: '/TTLogo.png' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Expert ECU Tuning for Peak Performance
            </h1>
            <p className="text-xl mb-8 text-white">
              Professional tuning services and premium performance parts for Honda, Acura, and more. 
              Specializing in Hondata, Haltech, and Ktuner solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="/store"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2"
              >
                Shop Now
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/tuning-service"
                className="bg-white hover:bg-gray-100 text-[#121926] px-8 py-3 rounded-lg font-semibold transition"
              >
                Book Tuning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.title}
                href={category.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{category.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#121926] group-hover:text-blue-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-[#121926] mb-4">{category.description}</p>
                  <span className="text-blue-600 font-semibold flex items-center gap-2">
                    View More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Official Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition h-32"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="py-16 bg-[#117b97]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#F5FEFF]">Check Out Our Combo Deals</h2>
          <p className="text-xl mb-8 text-[#F5FEFF]">Save big on bundled performance packages</p>
          <Link
            href="/combo-deals"
            className="bg-white text-[#121926] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
          >
            View Deals
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Why Choose Turbogixxer Tuning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Expert Tuning</h3>
              <p className="text-[#121926]">
                Professional dyno and remote tuning services with years of experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Premium Parts</h3>
              <p className="text-[#121926]">
                Authorized dealer for top brands like Hondata, Haltech, and Ktuner
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Customer Support</h3>
              <p className="text-[#121926]">
                Dedicated support team to help you get the most out of your setup
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
