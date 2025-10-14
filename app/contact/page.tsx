'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for tuning services, product inquiries, or technical support
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@turbogixxer.com" className="text-gray-600 hover:text-red-600">
                      info@turbogixxer.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-red-600">
                      (123) 456-7890
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri: 9am - 6pm PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">
                      123 Performance Drive<br />
                      Tuning City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="tuning">Tuning Services</option>
                    <option value="product">Product Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How long does remote tuning take?</h3>
              <p className="text-gray-600">
                Remote tuning typically takes 1-2 weeks depending on the complexity of your setup and 
                how quickly you can provide datalogs. We work with you through multiple revisions to 
                ensure optimal results.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship worldwide. International shipping rates and times vary by location. 
                Contact us for a shipping quote to your country.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for larger orders. 
                Payment is processed securely through our encrypted checkout system.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do you offer installation services?</h3>
              <p className="text-gray-600">
                We offer installation services for local customers. For remote customers, we provide 
                detailed installation instructions and technical support to help you or your local shop 
                complete the installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
