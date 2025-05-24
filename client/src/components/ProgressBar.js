import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = ['Basic Details', 'Education', 'Interests', 'Suggestions'];

  return (
    <div className="w-full bg-gray-200 h-2 mb-6 rounded-full relative">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      ></div>
      <div className="flex justify-between text-xs mt-1 text-gray-700 px-1">
        {steps.map((step, index) => (
          <span key={index} className={currentStep - 1 === index ? 'font-bold text-blue-600' : ''}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
