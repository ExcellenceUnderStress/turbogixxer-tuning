'use client';

import { Check, Clock, Zap, Shield } from 'lucide-react';

export default function TuningServicePage() {
  const services = [
    {
      name: 'Remote E-Tuning',
      price: 'Starting at $400',
      description: 'Professional remote tuning from the comfort of your home',
      features: [
        'Email support throughout the process',
        'Multiple revision rounds included',
        'Datalog analysis and optimization',
        'Custom maps for your specific setup',
        'Works with Hondata, Ktuner, Haltech'
      ]
    },
    {
      name: 'Dyno Tuning',
      price: 'Starting at $600',
      description: 'In-person dyno tuning for maximum performance',
      features: [
        'Real-time tuning on our Dynojet',
        'Power and torque optimization',
        'AFR tuning for reliability',
        'Boost control setup',
        'Printout of dyno results'
      ]
    },
    {
      name: 'ECU Reflashing',
      price: 'Starting at $450',
      description: 'Quick and effective ECU reflashing service',
      features: [
        'Pre-configured base maps',
        'Quick turnaround time',
        'Emissions-friendly options',
        'Supports multiple platforms',
        'Mail-in service available'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Contact us with your vehicle details and performance goals'
    },
    {
      step: 2,
      title: 'Setup & Preparation',
      description: 'We guide you through the required equipment and setup process'
    },
    {
      step: 3,
      title: 'Tuning Process',
      description: 'Professional tuning with multiple revisions for optimal results'
    },
    {
      step: 4,
      title: 'Final Delivery',
      description: 'Receive your final tune with documentation and support'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-[#F5FEFF]">Professional Tuning Services</h1>
          <p className="text-xl text-[#F5FEFF] max-w-3xl">
            Expert ECU tuning for maximum performance, reliability, and drivability. 
            Over 10 years of experience tuning Honda, Acura, and more.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Our Tuning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-2 text-[#121926]">{service.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                <p className="text-[#121926] mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-[#121926]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Our Tuning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#121926]">{item.title}</h3>
                <p className="text-[#121926]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Why Choose Our Tuning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Maximum Power</h3>
              <p className="text-[#121926]">
                Extract every bit of performance from your engine safely
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Reliability First</h3>
              <p className="text-[#121926]">
                Conservative tuning approach for long-term engine health
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Quick Turnaround</h3>
              <p className="text-[#121926]">
                Fast service without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#121926]">Proven Results</h3>
              <p className="text-[#121926]">
                Hundreds of satisfied customers and successful tunes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-[#FCFCFD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121926]">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Hondata', 'Ktuner', 'Haltech', 'AEM', 'Neptune', 'HP Tuners', 'SCT', 'Nismotronic'].map((platform) => (
              <div key={platform} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition">
                <span className="font-semibold text-gray-800">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#117b97]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#F5FEFF]">Ready to Unlock Your Engine&apos;s Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F5FEFF]">
            Contact us today to discuss your tuning needs and get started on your performance journey.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#121926] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#121926] px-8 py-3 rounded-lg font-semibold transition text-[#F5FEFF]">
              View Agreement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
