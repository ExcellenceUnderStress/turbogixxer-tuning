interface VehicleInfoSectionProps {
  formData: {
    year: string;
    make: string;
    model: string;
    modifications: string;
    tuningGoals: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function VehicleInfoSection({ formData, onChange }: VehicleInfoSectionProps) {
  return (
    <div className="mb-10 pt-8 border-t border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        Vehicle Information
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="year" className="block text-sm font-semibold text-gray-200 mb-2">
            Year *
          </label>
          <input
            type="text"
            id="year"
            name="year"
            required
            value={formData.year}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white bg-gray-700"
            placeholder="2024"
          />
        </div>
        <div>
          <label htmlFor="make" className="block text-sm font-semibold text-gray-200 mb-2">
            Make *
          </label>
          <input
            type="text"
            id="make"
            name="make"
            required
            value={formData.make}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white bg-gray-700"
            placeholder="Ford"
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-semibold text-gray-200 mb-2">
            Model *
          </label>
          <input
            type="text"
            id="model"
            name="model"
            required
            value={formData.model}
            onChange={onChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white bg-gray-700"
            placeholder="Mustang GT"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="modifications" className="block text-sm font-semibold text-gray-200 mb-2">
          Current Modifications
        </label>
        <textarea
          id="modifications"
          name="modifications"
          value={formData.modifications}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-white bg-gray-700"
          placeholder="List any mods: exhaust, intake, turbo, supercharger, injectors, etc."
        />
      </div>
      <div>
        <label htmlFor="tuningGoals" className="block text-sm font-semibold text-gray-200 mb-2">
          Tuning Goals *
        </label>
        <textarea
          id="tuningGoals"
          name="tuningGoals"
          required
          value={formData.tuningGoals}
          onChange={onChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-white bg-gray-700"
          placeholder="What are you trying to achieve? (e.g., max power, track reliability, street manners)"
        />
      </div>
    </div>
  );
}
