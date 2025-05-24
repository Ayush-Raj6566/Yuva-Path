import React from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';

const interests = [
  "Science & Research", "Technology", "Engineering", "Commerce & Finance",
  "Law & Legal Services", "Healthcare & Medicine", "Government & Civil Services",
  "Arts & Design", "Media & Communication", "Education & Teaching", "Psychology & Social Work",
  "Sports & Fitness", "Business & Management", "Hospitality & Tourism", "Agriculture & Environment",
  "Aviation & Aerospace", "Defense & Military", "Transportation & Logistics", "Language & Literature",
  "Skilled Trades & Technical Work", "Event Management", "Entrepreneurship & Startups",
  "Real Estate & Urban Planning", "Maritime & Shipping", "Beauty & Wellness", "Food & Culinary Arts",
  "Biotechnology", "Zoology & Wildlife", "Marine Biology", "Archaeology", "Anthropology", "Sociology",
  "Political Science & Public Policy", "Library & Information Science", "Data & Statistics",
  "Renewable Energy", "Mining & Geology", "Forensic Science", "Embedded Systems", "Game Design & Development",
  "Audio Engineering", "Photography", "Editing & Post Production", "Voice & Performing Arts", "E-commerce",
  "Fashion Technology", "Logistics & Supply Chain", "Human Resource Management", "Intellectual Property & Patents",
  "NGO & Development Sector"
];

const Step2Form = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md sm:max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in">
        <h2 className="text-xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
          Step 2: Choose Your Interest
        </h2>

        <div className="space-y-4">
          {/* Interest Dropdown */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Select Your Interest Domain</label>
            <div className="relative">
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">-- Choose an interest --</option>
                {interests.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              <ChevronDown className="absolute top-3 right-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Preferred Work Environment */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Preferred Work Environment</label>
            <select
              value={formData.environment || ''}
              onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select --</option>
              <option value="Office">Office</option>
              <option value="Remote">Remote</option>
              <option value="Field">Field</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Passion Level */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Passion Level</label>
            <select
              value={formData.passion || ''}
              onChange={(e) => setFormData({ ...formData, passion: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select --</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <button
          onClick={nextStep}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
