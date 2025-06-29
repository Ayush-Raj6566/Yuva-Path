import React from 'react';  
import { User, CalendarDays, MapPin, School, Briefcase, DollarSign } from 'lucide-react';  
import CartoonAnimation from './CartoonAnimation';
const Step1Form = ({ formData, setFormData, nextStep }) => {  
  return (  
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 sm:px-6 py-8">  
      <div className="w-full max-w-md sm:max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 animate-fade-in">  
        <div>
          <CartoonAnimation/>
        </div>
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
              placeholder="e.g. Ayush Raaj"  
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
  
        {/* Education Input */}  
        <div>  
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">  
            Highest Education  
          </label>  
          <div className="flex items-center space-x-3">  
            <School className="w-5 h-5 text-blue-600" />  
            <select  
              id="education"  
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"  
              value={formData.education || ''}  
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}  
              required  
            >  
              <option value="">Select your education</option>  
              <option value="10th">10th</option>  
              <option value="12th">12th</option>  
              <option value="Diploma">Diploma</option>  
              <option value="Bachelor’s">Bachelor’s</option>  
              <option value="Master’s">Master’s</option>  
              <option value="PhD">PhD</option>  
            </select>  
          </div>  
        </div>  
  
        {/* Skills Input */}  
        <div>  
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">  
            Top 3 Skills  
          </label>  
          <div className="flex items-center space-x-3">  
            <Briefcase className="w-5 h-5 text-blue-600" />  
            <input  
              id="skills"  
              type="text"  
              placeholder="e.g. Python, Communication, Excel"  
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"  
              value={formData.skills || ''}  
              onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(s => s.trim()) })}  
            />  
          </div>  
        </div>  
  
        {/* Work Experience Input */}  
        <div>  
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">  
            Work Experience  
          </label>  
          <div className="flex items-center space-x-3">  
            <Briefcase className="w-5 h-5 text-blue-600" />  
            <select  
              id="experience"  
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"  
              value={formData.experience || ''}  
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}  
            >  
              <option value="">Select experience</option>  
              <option value="None">No experience</option>  
              <option value="Internship">Internship</option>  
              <option value="Freelancing">Freelancing</option>  
              <option value="1 year">1 year</option>  
              <option value="2+ years">2+ years</option>  
            </select>  
          </div>  
        </div>  
  
        {/* Job Type Input */}  
        <div>  
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">  
            Preferred Job Type  
          </label>  
          <div className="flex items-center space-x-3">  
            <Briefcase className="w-5 h-5 text-blue-600" />  
            <select  
              id="jobType"  
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"  
              value={formData.jobType || ''}  
              onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}  
            >  
              <option value="">Select job type</option>  
              <option value="Full-time">Full-time</option>  
              <option value="Part-time">Part-time</option>  
              <option value="Remote">Remote</option>  
              <option value="Internship">Internship</option>  
              <option value="Freelance">Freelance</option>  
            </select>  
          </div>  
        </div>  
  
        {/* Salary Expectations Input */}  
        <div>  
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">  
            Expected Salary (INR/month)  
          </label>  
          <div className="flex items-center space-x-3">  
            <DollarSign className="w-5 h-5 text-blue-600" />  
            <select  
              id="salary"  
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"  
              value={formData.salary || ''}  
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}  
            >  
              <option value="">Select salary range</option>  
              <option value="Entry-level (₹10k–30k)">Entry-level (₹10k–30k)</option>  
              <option value="Mid-level (₹30k–80k)">Mid-level (₹30k–80k)</option>  
              <option value="Senior (₹80k+)">Senior (₹80k+)</option>  
            </select>  
          </div>  
        </div>  
  
        {/* Button */}  
        {/* Button */}
<div className="text-center">  
  <button  
    onClick={() => {
      const { name, age, location, education, skills, experience, jobType, salary } = formData;
      if (
        name &&
        age &&
        location &&
        education &&
        skills &&
        skills.length > 0 &&
        experience &&
        jobType &&
        salary
      ) {
        nextStep();
      } else {
        alert("Please fill in all fields before proceeding.");
      }
    }}  
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
  
