'use client';

export default function About() {
  return (
    <div>
      {/* About Turbogixxer Tuning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              About Turbogixxer Tuning
            </h1>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Kenny Sampson</strong> is the founder and lead tuner at <strong>Turbogixxer Tuning</strong>, an independent EFI performance shop specializing in dyno tuning, ECU calibration, and remote e-tuning for high-performance vehicles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With over <strong>20 years of hands-on experience</strong>, Kenny began tuning in South Florida in the late 2000s, focusing on Honda and Acura platforms using systems like Hondata, Neptune, and AEM. In 2013, he became the <strong>first official KTuner dealer</strong>, offering ECU flashing, swaps, and custom tunes for models such as the RSX Type-S and TSX.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2016, he relocated to the Pacific Northwest and joined <strong>SpeedFactory Racing</strong> in Tacoma, WA, to expand their in-house tuning program. By 2020, Kenny revived <strong>Turbogixxer Tuning</strong> as an independent operation based in <strong>Auburn, WA</strong>, broadening his focus to include domestic platforms like Ford and GM EFI systems alongside his import expertise.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <strong>Dyno Tuning</strong> – In-person sessions on Dyno
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <strong>E-Tuning</strong> – Remote calibration via datalog review (fast turnaround, typically within 24 hours)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <strong>ECU Flashing & Swaps</strong> – Authorized KTuner & HRTuning dealer
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <strong>Custom Maps</strong> – Bolt-ons, turbo kits, E85/methanol conversions, all-motor builds
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <strong>Standalone Support</strong> – Haltech, Motec, AEM Infinity
                  </div>
                </li>
              </ul>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Tuning Philosophy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tuning Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Power is built on <strong>reliability</strong>. Every tune prioritizes:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conservative ignition timing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Knock monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Smooth drivability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Safe air/fuel targets</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Kenny works best with owners who understand the process and value long-term performance over peak dyno numbers.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:turbogixxer@gmail.com" className="text-blue-600 hover:underline">
                    turbogixxer@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong>{' '}
                  <a 
                    href="https://instagram.com/turbogixxertuning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    @turbogixxertuning
                  </a>
                </li>
                <li>
                  <strong>Facebook:</strong>{' '}
                  <a 
                    href="https://facebook.com/turbogixxertuning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Turbogixxer Tuning
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Auburn, WA (appointments required)
                </li>
              </ul>
              <p className="text-gray-600 italic mt-4">
                *Travel tuning available upon request.*
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

          </div>
        </div>
      </section>
    </div>
  );
}
