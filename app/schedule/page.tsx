'use client';

import { useState } from 'react';
import TuningHeroSection from '@/components/schedule/TuningHeroSection';
import ResultsSection from '@/components/schedule/ResultsSection';
import ContactInfoSection from '@/components/schedule/ContactInfoSection';
import VehicleInfoSection from '@/components/schedule/VehicleInfoSection';
import SchedulingSection from '@/components/schedule/SchedulingSection';
import PricingSidebar from '@/components/schedule/PricingSidebar';
import HeaderSection from '@/components/HeaderSection';

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
      <HeaderSection />
      <TuningHeroSection onBookClick={scrollToForm} />
      
      <ResultsSection />

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Book Your Tuning Session</h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we&apos;ll contact you to schedule your appointment
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-md p-8">
                  <ContactInfoSection 
                    formData={{
                      firstName: formData.firstName,
                      lastName: formData.lastName,
                      email: formData.email,
                      phone: formData.phone
                    }}
                    onChange={handleChange}
                  />

                  <VehicleInfoSection
                    formData={{
                      year: formData.year,
                      make: formData.make,
                      model: formData.model,
                      modifications: formData.modifications,
                      tuningGoals: formData.tuningGoals
                    }}
                    onChange={handleChange}
                  />

                  <SchedulingSection
                    formData={{
                      serviceType: formData.serviceType,
                      preferredDate: formData.preferredDate,
                      preferredTime: formData.preferredTime
                    }}
                    onChange={handleChange}
                  />

                  {/* Submit Button */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <button
                      type="submit"
                      className="w-full btn-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition"
                    >
                      Submit Appointment Request
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-400">
                      By submitting this form, you agree to be contacted regarding your appointment.
                    </p>
                  </div>
                </form>
              </div>

              {/* Right Column - Pricing */}
              <PricingSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
