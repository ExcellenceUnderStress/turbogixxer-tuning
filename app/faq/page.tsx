'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <div>
      {/* Hero Section - More spacious */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Everything you need to know about our tuning services, policies, and procedures.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content - More visual with icons and better spacing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-4xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                        >
                          <span className="font-semibold text-lg text-gray-900 pr-8">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                          ) : (
                            <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual CTA Section with more spacing */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Our team is here to help answer any questions you might have.
              </p>
              <Link
                href="/schedule"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition inline-flex items-center gap-3 text-lg shadow-lg hover:shadow-xl"
              >
                <Calendar size={24} />
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Book your dyno session or remote tune today and join hundreds of satisfied customers.
          </p>
          <Link
            href="/schedule"
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold transition inline-block text-lg shadow-lg hover:shadow-xl"
          >
            View Pricing & Schedule
          </Link>
        </div>
      </section>
    </div>
  );
}
