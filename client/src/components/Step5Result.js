import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BadgeCheck, Building2, Banknote, Flame, BookOpen, AlertCircle } from 'lucide-react';
import {Animation4} from "./CartoonAnimation"
const Step5Result = ({ formData }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post('https://yuva-path-backend.onrender.com/get-jobs', { interest: formData.interest })
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, [formData.interest]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">
          🎯 Career Paths Tailored for You
        </h2>

        {loading ? (
          <div>
          <p className="text-center text-lg text-blue-600 animate-pulse">Loading career options...</p>
          <Animation4/>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex flex-col items-center text-gray-600 mt-20">
            <AlertCircle className="w-12 h-12 text-red-400 mb-2" />
            <p className="text-xl font-medium">No careers found for your selected interest.</p>
            <p className="text-sm mt-1">Try adjusting your preferences or explore other fields.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100 p-6 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                  <BadgeCheck className="text-green-500 w-5 h-5" />
                </div>

                <p className="text-sm italic text-gray-500">{job.domain}</p>

                <div className="space-y-2 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <Banknote className="text-green-600 w-5 h-5" />
                    <span className="font-medium">Salary:</span> <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="text-blue-600 w-5 h-5" />
                    <span className="font-medium">Nature:</span> <span>{job.nature}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="text-red-500 w-5 h-5" />
                    <span className="font-medium">Effort:</span> <span>{job.effort}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-purple-600 w-5 h-5" />
                    <span className="font-medium">Exams:</span> <span>{job.exams}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step5Result;
