'use client';

import CardNav from './CardNav';

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      bgColor: '#009dd1',
      textColor: '#ffffff',
      links: [
        { label: 'Dyno Tuning', href: '/schedule', ariaLabel: 'Book dyno tuning session' },
        { label: 'Remote Tuning', href: '/schedule', ariaLabel: 'Book remote tuning session' },
        { label: 'Dyno Rental', href: '/schedule', ariaLabel: 'Rent dyno time' }
      ]
    },
    {
      label: 'About',
      bgColor: '#1a1a1a',
      textColor: '#ffffff',
      links: [
        { label: 'Our Process', href: '/about', ariaLabel: 'Learn about our tuning process' },
        { label: 'The Tuner', href: '/about', ariaLabel: 'Meet Kenny' },
        { label: 'FAQ', href: '/faq', ariaLabel: 'Frequently asked questions' }
      ]
    },
    {
      label: 'Shop',
      bgColor: '#2a2a2a',
      textColor: '#ffffff',
      links: [
        { label: 'Merch', href: '/merch', ariaLabel: 'Shop merchandise' },
        { label: 'Contact', href: '/contact', ariaLabel: 'Contact us' }
      ]
    }
  ];

  return (
    <CardNav
      logo="/TTLogo-White.svg"
      logoAlt="Turbogixxer Tuning"
      items={navItems}
      baseColor="rgba(255, 255, 255, 0.15)"
      menuColor="#ffffff"
      buttonBgColor="#009dd1"
      buttonTextColor="#ffffff"
    />
  );
}
