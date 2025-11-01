interface SchedulingSectionProps {
  formData: {
    serviceType: string;
    preferredDate: string;
    preferredTime: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function SchedulingSection({ formData, onChange }: SchedulingSectionProps) {
  return (
    <div className="pt-8 border-t border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Schedule Your Session
      </h3>
      <div className="mb-6">
        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-200 mb-2">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-700 text-white"
        >
          <option value="dyno">Dyno Tuning Session</option>
          <option value="remote">Remote Tuning</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-200 mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={onChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white bg-gray-700"
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-200 mb-2">
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-700 text-white"
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="evening">Evening (4pm - 7pm)</option>
          </select>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        * Note: Date and time are subject to availability. We&apos;ll contact you to confirm.
      </p>
    </div>
  );
}
