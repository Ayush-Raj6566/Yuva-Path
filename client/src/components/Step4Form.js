import React from 'react';
import { Compass, Target } from 'lucide-react';
import {Animation4} from "./CartoonAnimation"
const Step4Form = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md sm:max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in">
        <Animation4/>
        <h2 className="text-xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
          Step 4: Career Preferences
        </h2>

        <div className="space-y-5">
          {/* Work Environment */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Work Environment</label>
            <select
              value={formData.environment || ''}
              onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select --</option>
              <option value="Office">Office</option>
              <option value="Field">Field Work</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Work Style */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Work Style</label>
            <select
              value={formData.workStyle || ''}
              onChange={(e) => setFormData({ ...formData, workStyle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select --</option>
              <option value="Team">Teamwork</option>
              <option value="Independent">Independent</option>
              <option value="Flexible">Flexible / Both</option>
            </select>
          </div>

          {/* Personality Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Personality Type</label>
            <select
              value={formData.personality || ''}
              onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select --</option>
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
              <option value="Ambivert">Ambivert</option>
            </select>
          </div>

          {/* Career Goal */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Career Goal</label>
            <div className="relative">
              <Target className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="E.g., Become a Data Scientist"
                value={formData.goal || ''}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Relocation */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Willing to Relocate?</label>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="relocate"
                  value="Yes"
                  checked={formData.relocate === 'Yes'}
                  onChange={(e) => setFormData({ ...formData, relocate: e.target.value })}
                />
                Yes
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="relocate"
                  value="No"
                  checked={formData.relocate === 'No'}
                  onChange={(e) => setFormData({ ...formData, relocate: e.target.value })}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Back
          </button>

          <button
            onClick={() => {
              const { environment, workStyle, personality, goal, relocate } = formData;
              if (environment && workStyle && personality && goal && relocate) {
                nextStep();
              } else {
                alert("Please fill in all fields before proceeding.");
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            Get Career Suggestions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4Form;
