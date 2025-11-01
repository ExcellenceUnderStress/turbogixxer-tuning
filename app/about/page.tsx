'use client';

import AboutSection from '@/components/AboutSection';
import ServicesList from '@/components/ServicesList';
import ContactInfo from '@/components/ContactInfo';
import HeaderSection from '@/components/HeaderSection';

export default function About() {
  const services = [
    {
      title: 'Dyno Tuning',
      description: 'In-person sessions on Dyno'
    },
    {
      title: 'E-Tuning',
      description: 'Remote calibration via datalog review (fast turnaround, typically within 24 hours)'
    },
    {
      title: 'ECU Flashing & Swaps',
      description: 'Authorized KTuner & HRTuning dealer'
    },
    {
      title: 'Custom Maps',
      description: 'Bolt-ons, turbo kits, E85/methanol conversions, all-motor builds'
    },
    {
      title: 'Standalone Support',
      description: 'Haltech, Motec, AEM Infinity'
    }
  ];

  const contacts = [
    {
      label: 'Email',
      value: 'turbogixxer@gmail.com',
      href: 'mailto:turbogixxer@gmail.com'
    },
    {
      label: 'Instagram',
      value: '@turbogixxertuning',
      href: 'https://instagram.com/turbogixxertuning',
      isExternal: true
    },
    {
      label: 'Facebook',
      value: 'Turbogixxer Tuning',
      href: 'https://facebook.com/turbogixxertuning',
      isExternal: true
    },
    {
      label: 'Location',
      value: 'Auburn, WA (appointments required)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <HeaderSection />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About Turbogixxer Tuning
        </h1>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          {/* Introduction */}
          <AboutSection>
            <p>
              <strong className="text-white">Kenny Sampson</strong> is the founder and lead tuner at <strong className="text-white">Turbogixxer Tuning</strong>, an independent EFI performance shop specializing in dyno tuning, ECU calibration, and remote e-tuning for high-performance vehicles.
            </p>
            <p>
              With over <strong className="text-white">20 years of hands-on experience</strong>, Kenny began tuning in South Florida in the late 2000s, focusing on Honda and Acura platforms using systems like Hondata, Neptune, and AEM. In 2013, he became the <strong className="text-white">first official KTuner dealer</strong>, offering ECU flashing, swaps, and custom tunes for models such as the RSX Type-S and TSX.
            </p>
            <p>
              In 2016, he relocated to the Pacific Northwest and joined <strong className="text-white">SpeedFactory Racing</strong> in Tacoma, WA, to expand their in-house tuning program. By 2020, Kenny revived <strong className="text-white">Turbogixxer Tuning</strong> as an independent operation based in <strong className="text-white">Auburn, WA</strong>, broadening his focus to include domestic platforms like Ford and GM EFI systems alongside his import expertise.
            </p>
          </AboutSection>

          {/* Services */}
          <AboutSection title="Services">
            <ServicesList services={services} />
          </AboutSection>

          {/* Tuning Philosophy */}
          <AboutSection title="Tuning Philosophy">
            <p>
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
            <p className="mt-4">
              Kenny works best with owners who understand the process and value long-term performance over peak dyno numbers.
            </p>
          </AboutSection>

          {/* Contact */}
          <AboutSection title="Contact" showDivider={false}>
            <ContactInfo 
              contacts={contacts} 
              footer="*Travel tuning available upon request.*"
            />
          </AboutSection>
        </div>
      </div>
    </div>
  );
}
