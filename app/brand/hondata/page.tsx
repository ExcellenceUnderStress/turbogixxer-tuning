'use client';

import { ShoppingCart } from 'lucide-react';

export default function HondataPage() {
  const products = [
    {
      id: 1,
      name: 'Hondata Kpro V4',
      category: 'Full Tuning System',
      price: 1295,
      description: 'Complete engine management system for Honda/Acura'
    },
    {
      id: 2,
      name: 'Hondata S300',
      category: 'Full Tuning System',
      price: 895,
      description: 'Advanced tuning for OBD1 Honda/Acura vehicles'
    },
    {
      id: 3,
      name: 'Hondata Flashpro',
      category: 'Full Tuning System',
      price: 695,
      description: 'User-friendly tuning solution for modern Hondas'
    },
    {
      id: 4,
      name: '2006-2009 S2000 ECU Reflash',
      category: 'ECU Reflashing Service',
      price: 450,
      description: 'Professional ECU reflashing service'
    },
    {
      id: 5,
      name: '2002-2004 RSX ECU Reflash',
      category: 'ECU Reflashing Service',
      price: 450,
      description: 'Professional ECU reflashing service'
    },
    {
      id: 6,
      name: '2006-2011 Civic SI ECU Reflash',
      category: 'ECU Reflashing Service',
      price: 450,
      description: 'Professional ECU reflashing service'
    },
    {
      id: 7,
      name: 'Hondata Coil Pack Retrofit (CPR)',
      category: 'Hardware & Accessories',
      price: 395,
      description: 'Upgrade to coil-on-plug ignition'
    },
    {
      id: 8,
      name: 'Hondata Traction Control',
      category: 'Hardware & Accessories',
      price: 295,
      description: 'Advanced traction control system'
    }
  ];

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Hondata Products</h1>
        <p className="text-gray-600 text-lg">
          Advanced ECU reflashing and tuning solutions for Honda and Acura vehicles. 
          Hondata is the industry leader in Honda/Acura engine management.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Hondata</span>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{product.category}</div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">About Hondata</h2>
        <p className="text-gray-700 mb-4">
          Hondata is the premier manufacturer of performance engine management systems for Honda and Acura vehicles. 
          With over 20 years of experience, Hondata products are trusted by professional tuners and enthusiasts worldwide.
        </p>
        <p className="text-gray-700">
          Whether you need a complete standalone ECU like the Kpro, a piggyback system like the S300, or simple 
          reflashing with Flashpro, Hondata has the solution for your tuning needs.
        </p>
      </div>
    </div>
  );
}
