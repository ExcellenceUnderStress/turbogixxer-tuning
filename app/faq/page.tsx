'use client';

import Link from 'next/link';
import { FAQCategory } from '@/components/FAQCategory';
import HeaderSection from '@/components/HeaderSection';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Getting Started',
      icon: '🚗',
      questions: [
        {
          q: 'What should I bring to my dyno appointment?',
          a: 'Bring your tuning device (Hondata, KTuner, etc.), laptop if needed, any previous tune files, maintenance records, and a list of all modifications done to your vehicle. Also bring your registration and insurance information.'
        },
        {
          q: 'How long does a typical dyno session take?',
          a: 'Most dyno tuning sessions take 3-5 hours depending on the complexity of your setup and how well the car is prepared. First-time setups or heavily modified vehicles may require additional time.'
        },
        {
          q: 'How should I prepare my car for tuning?',
          a: 'Ensure your vehicle is in good mechanical condition: check for vacuum leaks, verify all sensors are working, ensure your wideband O2 sensor is calibrated, and make sure you have at least half a tank of quality fuel.'
        }
      ]
    },
    {
      category: 'ECU Platforms',
      icon: '⚙️',
      questions: [
        {
          q: 'Which ECU platforms do you support?',
          a: 'We support Hondata (FlashPro, S300), Haltech (Elite series), KTuner (V1.2, V2), MoTeC (M1 series), AEM (Infinity, Series 2), Neptune RTP, HP Tuners, SCT, and Nismotronic. Contact us if your ECU isn\'t listed.'
        },
        {
          q: 'Can you tune my stock ECU?',
          a: 'For Honda/Acura vehicles, we can flash tune stock ECUs using Hondata FlashPro or KTuner. For other makes, a standalone or piggyback ECU may be required. Contact us to discuss your specific vehicle.'
        },
        {
          q: 'Do I need to purchase tuning software before my appointment?',
          a: 'Yes, you must have your ECU and tuning software/device purchased and installed before your dyno appointment. We can help recommend the right platform for your build.'
        }
      ]
    },
    {
      category: 'Payment & Policy',
      icon: '💳',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, credit/debit cards (Visa, MasterCard, Amex), Venmo, Zelle, and PayPal. Payment is due upon completion of services.'
        },
        {
          q: 'Do you require a deposit?',
          a: 'Yes, we require a 50% deposit to secure your dyno appointment. This deposit is non-refundable within 48 hours of your scheduled appointment time.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Cancellations or rescheduling must be done at least 48 hours before your appointment to receive a full refund of your deposit. Cancellations within 48 hours forfeit the deposit.'
        }
      ]
    },
    {
      category: 'Remote Tuning',
      icon: '🌐',
      questions: [
        {
          q: 'What do I need for remote tuning?',
          a: 'You\'ll need your ECU with tuning software installed, a reliable wideband O2 sensor, ability to datalog, a safe area to drive and perform pulls, and the ability to email/upload log files.'
        },
        {
          q: 'How long does remote tuning take?',
          a: 'Remote tuning typically takes 1-2 weeks depending on your schedule and ability to complete the required pulls. We\'ll send you a base map to start, then work through multiple revision rounds.'
        },
        {
          q: 'Is remote tuning as good as dyno tuning?',
          a: 'Remote tuning can achieve excellent results when done properly, but dyno tuning allows for more precise optimization. We can typically get you within 5-10% of dyno-tuned power with remote tuning.'
        }
      ]
    },
    {
      category: 'Retunes & Support',
      icon: '🔄',
      questions: [
        {
          q: 'Do I get free retunes?',
          a: 'We include 2-4 weeks of revision support (depending on package) after your initial tune for minor adjustments. After this period, or if you make modifications, retuning starts at $200.'
        },
        {
          q: 'What modifications require a retune?',
          a: 'Major modifications like turbo upgrades, injector changes, camshaft swaps, intake manifold changes, or significant boost increases require retuning. Minor changes like exhausts typically don\'t.'
        },
        {
          q: 'Can I watch while you tune my car?',
          a: 'Absolutely! We encourage customers to observe the tuning process. It\'s a great learning experience and helps you understand what we\'re doing with your vehicle.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <HeaderSection />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          {faqs.map((category, categoryIndex) => (
            <FAQCategory
              key={categoryIndex}
              category={category.category}
              icon={category.icon}
              questions={category.questions}
              categoryIndex={categoryIndex}
            />
          ))}

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-4">
              Can&apos;t find what you&apos;re looking for? Our team is here to help answer any questions you might have.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
