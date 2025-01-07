import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FormProgress from './FormProgress';
import GamingPCForm from './forms/GamingPCForm';
import WorkstationForm from './forms/WorkstationForm';
import HomeOfficeForm from './forms/HomeOfficeForm';

interface CustomPCFormProps {
  buildType: string;
  onClose: () => void;
}

export default function CustomPCForm({ buildType, onClose }: CustomPCFormProps) {
  const [step, setStep] = useState(1);
  const totalSteps = buildType === 'gaming pc' ? 5 : 3;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          build_type: buildType,
          ...formData
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('Thank you for your submission! We will contact you shortly.');
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute right-0 top-[-20px] text-gray-500 hover:text-gray-700"
      >
        <X className="w-6 h-6" />
      </button>

      <FormProgress currentStep={step} totalSteps={totalSteps} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {buildType === 'gaming pc' && (
            <GamingPCForm
              step={step}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
          {buildType === 'workstation' && (
            <WorkstationForm
              step={step}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
          {buildType === 'home/office pc' && (
            <HomeOfficeForm
              step={step}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>
      </div>

      {isSubmitting && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}