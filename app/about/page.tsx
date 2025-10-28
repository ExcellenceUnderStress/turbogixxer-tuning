'use client';

export default function About() {
  return (
    <div>
      {/* Section 5: About the Tuner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">
              Built by a Tuner, Not a Brand.
            </h1>

            {/* Two-column layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              {/* Left block text */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  TurboJixxer is Kenny Sampson. EFI calibration, chassis dyno work, and real-world problem solving. No drama. No mystery file from some forum. You get a tune that matches your parts and your use.
                </p>
              </div>

              {/* Right block - Photo */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                  [Kenny working in-bay or on laptop in car]
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Auburn WA. Street and track support.
                </p>
              </div>
            </div>

            {/* Optional credibility note */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-600">
                Former work includes high power Hondas and full standalone setups. Specialty in Hondata, Haltech, KTuner, MoTeC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
