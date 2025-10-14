import Link from 'next/link';
import { Users, Target, Award, Wrench } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your premier destination for high-performance automotive tuning solutions since 2013
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to <strong>Turbogixxer Tuning</strong>, your premier destination for high-performance 
              automotive tuning solutions. Founded in 2013, we&apos;ve built a reputation as leaders in ECU 
              modifications, engine management systems, and custom tuning services for enthusiasts and 
              professionals alike. Whether you&apos;re boosting a Honda with Hondata, optimizing a universal 
              setup with Haltech, or fine-tuning with Ktuner, our expertise ensures you get the perfect 
              balance of power, reliability, and driveability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Turbogixxer Tuning started as a passion project in a small garage, driven by a love for 
              turbocharged performance and precision engineering. Over the years, we&apos;ve grown into a 
              trusted name in the tuning community, serving thousands of customers across the globe. From 
              street cars to track beasts, our journey has been fueled by innovation and a commitment to 
              pushing the limits of what&apos;s possible with EFI systems and turbo setups.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Turbogixxer, our mission is simple: to deliver top-tier tuning products and services that 
              transform your vehicle into a high-performance machine. We believe in quality over quantity, 
              which is why we only partner with industry-leading brands like AEM, Turbosmart, HP Tuners, 
              and SCT.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Personalized advice to match the right parts and tunes to your build
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600 text-sm">
                  Access to the latest tools, from reflashes to fully tunable ECUs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600 text-sm">
                  Transparent processes, fast shipping, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Meet the Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our team consists of certified tuners, engineers, and automotive enthusiasts with decades 
              of combined experience:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Founder & Lead Tuner</h3>
                <p className="text-gray-600">
                  With over 15 years in the industry, specializing in forced induction and dyno tuning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Technical Specialists</h3>
                <p className="text-gray-600">
                  Experts in Hondata, Haltech, and Ktuner systems, ensuring every tune is optimized for 
                  safety and performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Support Staff</h3>
                <p className="text-gray-600">
                  Dedicated to handling your orders, questions, and custom requests with speed and 
                  professionalism.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8 italic">
              We&apos;re more than just a shop—we&apos;re a community of gearheads who live and breathe 
              performance tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  <Target size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Thousands of successful tunes and satisfied customers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  <Wrench size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Services</h3>
                <p className="text-gray-600">
                  From combo deals to EFI supplies and turbo manifolds, we have everything under one roof
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Commitment to Excellence</h3>
                <p className="text-gray-600">
                  All products rigorously tested with tuning agreement for peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our store for the best in tuning solutions or get in touch with our team today
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Store
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-sm text-black">
          <p>Site designed by MindFusion FX</p>
          <p className="mt-2">Copyright © 2013-2025 Turbogixxer Tuning. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
