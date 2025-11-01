'use client';

import MerchSection from '@/components/MerchSection';
import HeaderSection from '@/components/HeaderSection';

export default function Merch() {
  const merchProducts = [
    {
      name: 'Turbogixxer Tee',
      description: 'Premium cotton, clean design',
      price: 35,
      link: '/merch'
    },
    {
      name: 'Data-Driven Hoodie',
      description: 'Heavyweight fleece',
      price: 65,
      link: '/merch'
    },
    {
      name: 'Dyno Chart Sticker',
      description: 'Weatherproof vinyl',
      price: 8,
      link: '/merch'
    }
  ];

  return (
    <div className="min-h-screen bg-[#101518]">
      <HeaderSection />
      <MerchSection
        title="Show Your Support"
        subtitle="Turbogixxer gear reflects the same standard as the cars that wear the sticker—clean, functional, and earned."
        products={merchProducts}
        showButton={false}
        className="pt-32"
      />
    </div>
  );
}
