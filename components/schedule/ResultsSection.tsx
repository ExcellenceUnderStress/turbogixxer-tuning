import StatCard from './StatCard';

export default function ResultsSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Data Over Hype
        </h2>

        {/* Two-column row */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              You leave with data. Before and after graphs. Notes on what changed. Safe, usable power.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Baseline vs final pull</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Power and torque curve</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Calibration notes</span>
              </li>
            </ul>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View Sample Pulls
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right side - Dyno graph card */}
          <div className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-[4/3] bg-gray-700 flex items-center justify-center text-gray-400">
              [Dyno Graph Image]
            </div>
            {/* Badge in corner */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-xl font-bold">+52 WHP Gain</div>
              <div className="text-sm">Pump Gas</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCard value="500+" label="Tuned Builds" />
          <StatCard value="Ford / GM" label="Specialized Platforms" />
          <StatCard value="25+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}
