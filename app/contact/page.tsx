import HeaderSection from '@/components/HeaderSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <HeaderSection />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your tuning needs..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-gray-300">
              <p><strong>Phone:</strong> Contact for appointment scheduling</p>
              <p><strong>Email:</strong> turbogixxer@gmail.com</p>
              <p><strong>Hours:</strong> By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
