import React from 'react';
import { User, CalendarDays, MapPin } from 'lucide-react';

const Step1Form = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 sm:px-6 py-8">
      <div className="w-full max-w-md sm:max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 animate-fade-in">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Step 1: Basic Information</h2>
          <p className="text-sm text-gray-500">Let’s start by getting to know you.</p>
        </div>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-blue-600" />
            <input
              id="name"
              type="text"
              placeholder="e.g. Ayush Sharma"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Age Input */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <div className="flex items-center space-x-3">
            <CalendarDays className="w-5 h-5 text-blue-600" />
            <input
              id="age"
              type="number"
              placeholder="e.g. 18"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <input
              id="location"
              type="text"
              placeholder="e.g. New Delhi"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.location || ''}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={nextStep}
            className="w-full sm:w-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1Form;
