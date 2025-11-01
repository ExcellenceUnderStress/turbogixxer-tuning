interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-700 last:border-0 last:pb-0">
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <div className="text-3xl font-bold text-blue-500 mb-3">{price}</div>
      <ul className="space-y-2 text-sm text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
