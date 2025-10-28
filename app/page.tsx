'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Center block - Left side */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Numbers Don&apos;t Lie. Neither Do Our Tunes.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Precision ECU tuning backed by real data. Dyno-proven results built for how you drive. Book your session or grab official TurboJixxer gear.
              </p>

              {/* Buttons - Side by side on desktop, stacked on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/schedule"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-center"
                >
                  Schedule Your Tune
                </Link>
                <Link
                  href="/merch"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition text-center"
                >
                  Shop TurboJixxer Gear
                </Link>
              </div>

              {/* Trust line */}
              <p className="text-sm text-gray-400">
                Supported platforms: Hondata / Haltech / KTuner / MoTeC
              </p>
            </div>

            {/* Visual anchor - Right side on desktop, below on mobile */}
            <div className="relative">
              <div className="relative bg-gray-700 rounded-lg overflow-hidden aspect-[4/3]">
                {/* Placeholder for dyno photo */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Dyno Pull Photo]
                </div>
                
                {/* Overlay tag */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">421 WHP / 288 WTQ</div>
                  <div className="text-sm text-blue-100">Verified on Mustang Dyno</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final Booking Banner / Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text */}
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to tune</h2>
              <p className="text-xl text-blue-100">Lock in dyno time and get real numbers.</p>
            </div>

            {/* Right button */}
            <Link
              href="/schedule"
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-bold transition text-lg whitespace-nowrap"
            >
              Schedule Your Tune
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
