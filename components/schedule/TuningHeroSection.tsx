import ServicePillar from './ServicePillar';

interface TuningHeroSectionProps {
  onBookClick: () => void;
}

export default function TuningHeroSection({ onBookClick }: TuningHeroSectionProps) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">
            Professional ECU Tuning
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Custom calibration for your exact setup. No canned maps. No guesswork. Street or track.
          </p>

          {/* 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ServicePillar
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Custom Calibration"
              description="Tailored fueling, ignition, boost, and safety limits for your build."
            />

            <ServicePillar
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Dyno Validation"
              description="Every change is verified under load. You see the numbers."
            />

            <ServicePillar
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Drivability Check"
              description="Power is useless if the car surges, stalls, or heat-soaks."
            />
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <button
              onClick={onBookClick}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition text-lg mb-4"
            >
              Book Your Session
            </button>
            <div>
              <button onClick={onBookClick} className="text-blue-600 hover:text-blue-700 font-medium">
                Remote tuning available
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
