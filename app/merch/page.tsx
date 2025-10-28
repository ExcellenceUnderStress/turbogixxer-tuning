'use client';

import Link from 'next/link';

export default function Merch() {
  return (
    <div>
      {/* Section 4: Merch / Brand */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Rep the Build.
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Limited runs. No loud nonsense. Built for people who actually wrench.
            </p>

            {/* Product strip - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Product 1 - Hoodie */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                  [Hoodie Image]
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">TurboJixxer Hoodie</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">$49.99</div>
                  <Link
                    href="/merch"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Product 2 - Tee */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                  [Tee Image]
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">TurboJixxer Tee</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">$29.99</div>
                  <Link
                    href="/merch"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Product 3 - Decal pack */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                  [Decal Pack Image]
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Decal Pack</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">$14.99</div>
                  <Link
                    href="/merch"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Button under strip */}
            <Link
              href="/merch"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg font-semibold transition text-lg"
            >
              Shop TurboJixxer Gear
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
