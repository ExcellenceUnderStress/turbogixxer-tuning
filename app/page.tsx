'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 pb-24 flex justify-center items-center gap-8">
        <div className="flex-1 max-w-[1280px] px-8 flex justify-center items-center gap-16">
          {/* Content */}
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-12">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <h1 className="self-stretch text-white text-6xl font-semibold leading-[72px]">
                  Numbers Don&apos;t Lie. Neither Do Our Tunes.
                </h1>
              </div>
              <p className="w-full max-w-[480px] text-gray-300 text-xl font-normal leading-8">
                Real-world drivability and consistent power for street, track, and competition setups.
              </p>
            </div>
            <div className="inline-flex justify-start items-start gap-3">
              <Link
                href="/schedule"
                className="px-5 py-4 bg-blue-600 hover:bg-blue-700 rounded-[10px] shadow-sm border-2 border-white/10 flex justify-center items-center gap-2 overflow-hidden transition"
              >
                <span className="text-white text-lg font-semibold leading-7">Schedule Your Tune</span>
              </Link>
              <Link
                href="/merch"
                className="px-5 py-4 bg-gray-600 hover:bg-gray-500 rounded-[10px] shadow-sm border border-white/10 flex justify-center items-center gap-2 overflow-hidden transition"
              >
                <span className="text-white text-lg font-semibold leading-7">Shop Turbogixxer Gear</span>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              MoTeC / Haltech / Hondata / KTuner Supported
            </p>
          </div>

          {/* Visual Content */}
          <div className="flex-1 h-[560px] relative">
            {/* Placeholder for dyno photo with overlay */}
            <div className="absolute inset-0 bg-gray-700 rounded-lg overflow-hidden">
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
      </section>

      {/* Section 2: Why It Matters */}
      <section className="py-24 bg-[#101518]">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-4 text-center">Why the Tune Matters</h2>
          <p className="text-gray-300 text-xl text-center mb-12 max-w-3xl mx-auto">
            Hardware only performs as well as the calibration behind it. A proper tune balances power, response, and reliability so everything works together.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-teal-500/20">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">Power That Lasts</h3>
              <p className="text-gray-300">Built to hold up, not just peak once.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-teal-500/20">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">Consistency</h3>
              <p className="text-gray-300">Same response every pull.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-teal-500/20">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">Proof</h3>
              <p className="text-gray-300">You see the data, not just the number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-4 text-center">Professional ECU Tuning Services</h2>
          <p className="text-gray-300 text-xl text-center mb-12">Full dyno calibration, street verification, and remote tuning options.</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <img src="/ktunerlogo.png" alt="KTuner" className="h-12 mb-4" />
              <h3 className="text-white font-semibold mb-2">Hondata / KTuner</h3>
              <p className="text-gray-400 text-sm mb-4">Honda/Acura platform tuning</p>
              <Link href="/schedule" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Book Session →</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <img src="/haltechlogo.png" alt="Haltech" className="h-12 mb-4" />
              <h3 className="text-white font-semibold mb-2">Haltech</h3>
              <p className="text-gray-400 text-sm mb-4">Standalone ECU calibration</p>
              <Link href="/schedule" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Book Session →</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <img src="/aemlogo.png" alt="AEM" className="h-12 mb-4" />
              <h3 className="text-white font-semibold mb-2">MoTeC / AEM</h3>
              <p className="text-gray-400 text-sm mb-4">Professional race systems</p>
              <Link href="/schedule" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Book Session →</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2 mt-12">Dyno Rental</h3>
              <p className="text-gray-400 text-sm mb-4">Self-service dyno time</p>
              <Link href="/schedule" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Book Session →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Results */}
      <section className="py-24 bg-[#101518]">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-12 text-center">Proven Builds. Real Data.</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-gray-700 aspect-square flex items-center justify-center text-gray-500">
                  [Build Photo]
                </div>
                <div className="bg-gray-900 p-6 flex flex-col justify-center">
                  <div className="text-teal-400 text-2xl font-bold mb-2">+47 WHP</div>
                  <div className="text-white font-semibold mb-1">B18C Civic</div>
                  <div className="text-gray-400 text-sm">Pump Gas</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-gray-700 aspect-square flex items-center justify-center text-gray-500">
                  [Build Photo]
                </div>
                <div className="bg-gray-900 p-6 flex flex-col justify-center">
                  <div className="text-teal-400 text-2xl font-bold mb-2">+62 WHP</div>
                  <div className="text-white font-semibold mb-1">K24 Integra</div>
                  <div className="text-gray-400 text-sm">E85</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/about" className="text-blue-400 hover:text-blue-300 font-semibold">View More Results →</Link>
          </div>
        </div>
      </section>

      {/* Section 5: The Process */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-4 text-center">What to Expect on Tune Day</h2>
          <p className="text-gray-400 text-xl text-center mb-16">Clear, proven process. No guesswork.</p>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-500">
                <span className="text-teal-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Pre-Inspection</h3>
              <p className="text-gray-400 text-sm">Check sensors, wiring, fluids, and readiness.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-500">
                <span className="text-teal-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Baseline Pulls</h3>
              <p className="text-gray-400 text-sm">Record starting performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-500">
                <span className="text-teal-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Calibration</h3>
              <p className="text-gray-400 text-sm">Incremental adjustments with live data feedback.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-500">
                <span className="text-teal-400 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Verification</h3>
              <p className="text-gray-400 text-sm">Confirm repeatable results under load.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-500">
                <span className="text-teal-400 text-2xl font-bold">5</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Handoff</h3>
              <p className="text-gray-400 text-sm">Charts, logs, and next-step recommendations.</p>
            </div>
          </div>
        </div>
      </section>
 {/* Section 10: Final Callout Banner */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-8 max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-3xl font-semibold">Ready to see what your setup can really do?</h2>
          <Link href="/schedule" className="px-8 py-4 bg-white hover:bg-gray-100 text-teal-600 rounded-lg font-bold transition whitespace-nowrap">
            Book Your Tune
          </Link>
        </div>
      </section>

      {/* Section 6: Merch Feature */}
      <section className="py-24 bg-[#101518]">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-4 text-center">Built. Tested. Represented.</h2>
          <p className="text-gray-400 text-xl text-center mb-12">Turbogixxer gear reflects the same standard as the cars that wear the sticker—clean, functional, and earned.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-teal-500 transition">
              <div className="aspect-square bg-gray-700 flex items-center justify-center text-gray-500">
                [Product Photo]
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">Turbogixxer Tee</h3>
                <p className="text-gray-400 text-sm mb-4">Premium cotton, clean design</p>
                <p className="text-teal-400 font-bold">$35</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-teal-500 transition">
              <div className="aspect-square bg-gray-700 flex items-center justify-center text-gray-500">
                [Product Photo]
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">Data-Driven Hoodie</h3>
                <p className="text-gray-400 text-sm mb-4">Heavyweight fleece</p>
                <p className="text-teal-400 font-bold">$65</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-teal-500 transition">
              <div className="aspect-square bg-gray-700 flex items-center justify-center text-gray-500">
                [Product Photo]
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">Dyno Chart Sticker</h3>
                <p className="text-gray-400 text-sm mb-4">Weatherproof vinyl</p>
                <p className="text-teal-400 font-bold">$8</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/merch" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition inline-block">
              Shop Turbogixxer Gear
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-12 text-center">Tuned. Tested. Trusted.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4">&quot;Pulls smooth, predictable power every time. Data sheets were detailed.&quot;</p>
              <p className="text-gray-500 font-mono text-sm">— Chris M., EG Hatch (Hondata)</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4">&quot;Best dyno experience I&apos;ve had. Kenny knows his stuff.&quot;</p>
              <p className="text-gray-500 font-mono text-sm">— Mike T., DC2 (KTuner)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: About the Tuner */}
      <section className="py-24 bg-[#101518]">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-700 rounded-lg aspect-[4/3] flex items-center justify-center text-gray-500">
              [Kenny working on car]
            </div>
            <div>
              <h2 className="text-white text-4xl font-semibold mb-6">Built by a Tuner, Not a Brand.</h2>
              <p className="text-gray-300 mb-6">
                Turbogixxer Tuning is a one-person operation focused on precision ECU calibration for Honda/Acura platforms and standalone systems. Every tune is done personally, with full transparency on the process and results.
              </p>
              <p className="text-gray-400 mb-8">
                Based in Auburn, WA. Supporting Hondata, Haltech, KTuner, and MoTeC platforms.
              </p>
              <Link href="/about" className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-semibold transition inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-white text-4xl font-semibold mb-12 text-center">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2">How long does a dyno tune take?</h3>
              <p className="text-gray-400">Typically 3-4 hours for a full calibration session.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Do I need a wideband installed?</h3>
              <p className="text-gray-400">Yes, a wideband O2 sensor is required for accurate tuning.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Can you tune remotely?</h3>
              <p className="text-gray-400">Yes, remote tuning is available for supported platforms with proper logging equipment.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/faq" className="text-blue-400 hover:text-blue-300 font-semibold">Read All FAQs →</Link>
          </div>
        </div>
      </section>

    
      {/* Section 11: Final Booking Banner / Footer CTA */}
      <section className="py-24 bg-gray-700">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-16 flex-wrap">
            {/* Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-5">
              <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-5">
                <h2 className="text-white text-3xl font-semibold leading-9">Book Dyno Time</h2>
                <p className="text-blue-200 text-xl font-normal leading-8">Set a time to dial in your build.</p>
              </div>
              <div className="flex justify-start items-start gap-3">
                <Link
                  href="/schedule"
                  className="w-80 px-4 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg shadow-sm border border-white/10 flex justify-center items-center gap-1.5 transition"
                >
                  <span className="text-blue-100 text-base font-semibold leading-6">Check Availability</span>
                </Link>
              </div>
            </div>

            {/* Logos wrap */}
            <div className="flex-1 flex justify-center items-start gap-8 flex-wrap content-start">
              {/* AEM Logo */}
              <div className="flex justify-start items-start gap-2 opacity-80">
                <img src="/aemlogo.png" alt="AEM" className="h-10 w-auto" />
              </div>
              
              {/* Haltech Logo */}
              <div className="flex justify-start items-start gap-2 opacity-80">
                <img src="/haltechlogo.png" alt="Haltech" className="h-10 w-auto" />
              </div>
              
              {/* KTuner Logo */}
              <div className="flex justify-start items-start gap-2 opacity-80">
                <img src="/ktunerlogo.png" alt="KTuner" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
