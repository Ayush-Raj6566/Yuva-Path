import React from 'react';
import { GraduationCap, Star, SlidersHorizontal, BookOpen } from 'lucide-react';
import {Animation3} from './CartoonAnimation';
const Step3Form = ({ formData, setFormData, nextStep, prevStep }) => {
  const qualifications = [
    '10th Pass', '12th Pass', 'Diploma', 'Undergraduate', 'Postgraduate',
    'PhD or Higher', 'Other'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md sm:max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in">
        <Animation3/>
        <h2 className="text-xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
          Step 3: Academic Details
        </h2>

        <div className="space-y-5">
          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Highest Qualification</label>
            <select
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Qualification --</option>
              {qualifications.map((q, i) => (
                <option key={i} value={q}>{q}</option>
              ))}
            </select>
          </div>

          {/* Stream */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Current Stream / Specialization</label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="E.g., Science, Commerce, Computer Science"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={formData.stream || ''}
                onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Skills</label>
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="E.g., Coding, Writing, Public Speaking"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={formData.skills || ''}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
            </div>
          </div>

          {/* Academic Performance */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Academic Performance (Percentage or Grade)</label>
            <div className="relative">
              <Star className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="E.g., 85% or A+"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={formData.performance || ''}
                onChange={(e) => setFormData({ ...formData, performance: e.target.value })}
              />
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
              const { qualification, stream, skills, performance } = formData;
              if (qualification && stream && skills && performance) {
                nextStep();
              } else {
                alert("Please fill in all fields before proceeding.");
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3Form;
