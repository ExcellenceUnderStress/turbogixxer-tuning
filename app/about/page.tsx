'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About Turbogixxer Tuning
        </h1>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Kenny Sampson</strong> is the founder and lead tuner at <strong className="text-white">Turbogixxer Tuning</strong>, an independent EFI performance shop specializing in dyno tuning, ECU calibration, and remote e-tuning for high-performance vehicles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With over <strong className="text-white">20 years of hands-on experience</strong>, Kenny began tuning in South Florida in the late 2000s, focusing on Honda and Acura platforms using systems like Hondata, Neptune, and AEM. In 2013, he became the <strong className="text-white">first official KTuner dealer</strong>, offering ECU flashing, swaps, and custom tunes for models such as the RSX Type-S and TSX.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In 2016, he relocated to the Pacific Northwest and joined <strong className="text-white">SpeedFactory Racing</strong> in Tacoma, WA, to expand their in-house tuning program. By 2020, Kenny revived <strong className="text-white">Turbogixxer Tuning</strong> as an independent operation based in <strong className="text-white">Auburn, WA</strong>, broadening his focus to include domestic platforms like Ford and GM EFI systems alongside his import expertise.
            </p>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold mr-2">•</span>
                <div>
                  <strong className="text-white">Dyno Tuning</strong> – In-person sessions on Dyno
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold mr-2">•</span>
                <div>
                  <strong className="text-white">E-Tuning</strong> – Remote calibration via datalog review (fast turnaround, typically within 24 hours)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold mr-2">•</span>
                <div>
                  <strong className="text-white">ECU Flashing & Swaps</strong> – Authorized KTuner & HRTuning dealer
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold mr-2">•</span>
                <div>
                  <strong className="text-white">Custom Maps</strong> – Bolt-ons, turbo kits, E85/methanol conversions, all-motor builds
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold mr-2">•</span>
                <div>
                  <strong className="text-white">Standalone Support</strong> – Haltech, Motec, AEM Infinity
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          {/* Tuning Philosophy */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Tuning Philosophy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Power is built on <strong className="text-white">reliability</strong>. Every tune prioritizes:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Conservative ignition timing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Knock monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Smooth drivability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Safe air/fuel targets</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Kenny works best with owners who understand the process and value long-term performance over peak dyno numbers.
            </p>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:turbogixxer@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline">
                  turbogixxer@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Instagram:</strong>{' '}
                <a 
                  href="https://instagram.com/turbogixxertuning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  @turbogixxertuning
                </a>
              </li>
              <li>
                <strong className="text-white">Facebook:</strong>{' '}
                <a 
                  href="https://facebook.com/turbogixxertuning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Turbogixxer Tuning
                </a>
              </li>
              <li>
                <strong className="text-white">Location:</strong> Auburn, WA (appointments required)
              </li>
            </ul>
            <p className="text-gray-400 italic mt-4">
              *Travel tuning available upon request.*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
