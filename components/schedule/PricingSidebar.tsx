import PricingCard from './PricingCard';

export default function PricingSidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-2xl font-bold mb-6 text-white">Pricing</h3>
          
          <PricingCard
            title="Dyno Tuning Session"
            price="$750"
            features={[
              { text: 'Up to 4 hours on dyno' },
              { text: 'Custom calibration' },
              { text: 'Dyno graphs & data' },
              { text: 'Road test verification' }
            ]}
          />

          <PricingCard
            title="Remote Tuning"
            price="$600"
            features={[
              { text: 'Email/phone support' },
              { text: 'Multiple revisions' },
              { text: 'Data logging analysis' },
              { text: 'Tune from anywhere' }
            ]}
          />

          <PricingCard
            title="Consultation"
            price="$150"
            features={[
              { text: '1 hour session' },
              { text: 'Build recommendations' },
              { text: 'Performance analysis' }
            ]}
          />
        </div>

        {/* Info Box */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h4 className="font-bold text-white mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What to Expect
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• We&apos;ll review your request within 24 hours</li>
            <li>• Confirmation call to discuss your build</li>
            <li>• Pre-session checklist provided</li>
            <li>• Payment due before scheduled date</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
