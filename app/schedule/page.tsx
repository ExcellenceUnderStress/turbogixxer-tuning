'use client';

import { useState } from 'react';

export default function Schedule() {
  const [formData, setFormData] = useState({
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Vehicle Info
    year: '',
    make: '',
    model: '',
    modifications: '',
    tuningGoals: '',
    // Scheduling
    preferredDate: '',
    preferredTime: '',
    serviceType: 'dyno',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic
    alert('Thank you! We will contact you shortly to confirm your appointment.');
  };

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Section 2: Tuning / Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
              Professional ECU Tuning
            </h1>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Custom calibration for your exact setup. No canned maps. No guesswork. Street or track.
            </p>

            {/* 3 Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Calibration</h3>
                <p className="text-gray-600">
                  Tailored fueling, ignition, boost, and safety limits for your build.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Dyno Validation</h3>
                <p className="text-gray-600">
                  Every change is verified under load. You see the numbers.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Drivability Check</h3>
                <p className="text-gray-600">
                  Power is useless if the car surges, stalls, or heat-soaks.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition text-lg mb-4"
              >
                Book Your Session
              </button>
              <div>
                <button onClick={scrollToForm} className="text-blue-600 hover:text-blue-700 font-medium">
                  Remote tuning available
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Results / Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Data Over Hype
          </h2>

          {/* Two-column row */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left side */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You leave with data. Before and after graphs. Notes on what changed. Safe, usable power.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Baseline vs final pull</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Power and torque curve</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Calibration notes</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                View Sample Pulls
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right side - Dyno graph card */}
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-500">
                [Dyno Graph Image]
              </div>
              {/* Badge in corner */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-bold">+52 WHP Gain</div>
                <div className="text-sm">Pump Gas</div>
              </div>
            </div>
          </div>

          {/* Optional stat row */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Tuned Builds</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Ford / GM</div>
              <div className="text-gray-600">Specialized Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Book Your Tuning Session</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we&apos;ll contact you to schedule your appointment
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="card p-8">
                  {/* Contact Information */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="mb-10 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Vehicle Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label htmlFor="year" className="block text-sm font-semibold text-gray-900 mb-2">
                          Year *
                        </label>
                        <input
                          type="text"
                          id="year"
                          name="year"
                          required
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="2024"
                        />
                      </div>
                      <div>
                        <label htmlFor="make" className="block text-sm font-semibold text-gray-900 mb-2">
                          Make *
                        </label>
                        <input
                          type="text"
                          id="make"
                          name="make"
                          required
                          value={formData.make}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="Ford"
                        />
                      </div>
                      <div>
                        <label htmlFor="model" className="block text-sm font-semibold text-gray-900 mb-2">
                          Model *
                        </label>
                        <input
                          type="text"
                          id="model"
                          name="model"
                          required
                          value={formData.model}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                          placeholder="Mustang GT"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="modifications" className="block text-sm font-semibold text-gray-900 mb-2">
                        Current Modifications
                      </label>
                      <textarea
                        id="modifications"
                        name="modifications"
                        value={formData.modifications}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-gray-900 bg-white"
                        placeholder="List any mods: exhaust, intake, turbo, supercharger, injectors, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="tuningGoals" className="block text-sm font-semibold text-gray-900 mb-2">
                        Tuning Goals *
                      </label>
                      <textarea
                        id="tuningGoals"
                        name="tuningGoals"
                        required
                        value={formData.tuningGoals}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-gray-900 bg-white"
                        placeholder="What are you trying to achieve? (e.g., max power, track reliability, street manners)"
                      />
                    </div>
                  </div>

                  {/* Service Type and Scheduling */}
                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Your Session
                    </h3>
                    <div className="mb-6">
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900"
                      >
                        <option value="dyno">Dyno Tuning Session</option>
                        <option value="remote">Remote Tuning</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900"
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 4pm)</option>
                          <option value="evening">Evening (4pm - 7pm)</option>
                        </select>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      * Note: Date and time are subject to availability. We&apos;ll contact you to confirm.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="w-full btn-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition"
                    >
                      Submit Appointment Request
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-600">
                      By submitting this form, you agree to be contacted regarding your appointment.
                    </p>
                  </div>
                </form>
              </div>

              {/* Right Column - Pricing */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <div className="card p-6 mb-6">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Pricing</h3>
                    
                    {/* Dyno Tuning */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Dyno Tuning Session</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-3">$750</div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Up to 4 hours on dyno</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Custom calibration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Dyno graphs & data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Road test verification</span>
                        </li>
                      </ul>
                    </div>

                    {/* Remote Tuning */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Remote Tuning</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-3">$600</div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Email/phone support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Multiple revisions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Data logging analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Tune from anywhere</span>
                        </li>
                      </ul>
                    </div>

                    {/* Consultation */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Consultation</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-3">$150</div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>1 hour session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Build recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Performance analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What to Expect
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• We&apos;ll review your request within 24 hours</li>
                      <li>• Confirmation call to discuss your build</li>
                      <li>• Pre-session checklist provided</li>
                      <li>• Payment due before scheduled date</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
