import React, { useState } from 'react';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import Step3Form from './components/Step3Form';
import Step4Form from './components/Step4Form';
import Step5Result from './components/Step5Result';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    interest: '',
    qualification: '',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = ()=>setStep(prev=>prev-1);

  return (
    <div className="App">
      {step === 1 && (
        <Step1Form formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2Form formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Step3Form formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
      )}
      {step === 4 && (
        <Step4Form formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
      )}
      {step === 5 && <Step5Result formData={formData} />}
    </div>
  );
}

export default App;
