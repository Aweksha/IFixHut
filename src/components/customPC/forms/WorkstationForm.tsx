import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, HardDrive, Monitor, AlertCircle, User, Mail, Phone, DollarSign } from 'lucide-react';
import { WorkstationFormData, FormProps } from '../../../data/forms';
import { formVariants } from '../forms/formanimations';

export default function WorkstationForm({ step, onNext, onBack, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<WorkstationFormData>({
    name: '',
    email: '',
    phone: '',
    processor: '',
    ram: '',
    storageType: '',
    purpose: '',
    budget: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Partial<WorkstationFormData>>({});

  const validateStep = () => {
    const newErrors: Partial<WorkstationFormData> = {};
    
    switch (step) {
      case 1:
        if (!formData.purpose) newErrors.purpose = 'Please select a purpose';
        break;
      case 2:
        if (!formData.processor) newErrors.processor = 'Please select a processor';
        if (!formData.ram) newErrors.ram = 'Please select RAM capacity';
        break;
      case 3:
        if (!formData.name) newErrors.name = 'Please enter your name';
        if (!formData.email) newErrors.email = 'Please enter your email';
        if (!formData.phone) newErrors.phone = 'Please enter your phone number';
        if (!formData.budget) newErrors.budget = 'Please enter your budget';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 3 && onSubmit) {
        onSubmit(formData);
      } else {
        onNext();
      }
    }
  };

  const renderError = (field: keyof WorkstationFormData) => {
    if (errors[field]) {
      return (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {errors[field]}
        </motion.p>
      );
    }
    return null;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">What's your workstation purpose?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Video Editing',
                '3D Rendering',
                'Software Development',
                'Data Analysis'
              ].map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => setFormData({ ...formData, purpose })}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    formData.purpose === purpose
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <Monitor className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <span className="block text-center">{purpose}</span>
                </button>
              ))}
            </div>
            {renderError('purpose')}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Hardware Specifications</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Processor Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Intel Xeon', 'AMD Threadripper'].map((proc) => (
                    <button
                      key={proc}
                      onClick={() => setFormData({ ...formData, processor: proc })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.processor === proc
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <Cpu className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{proc}</span>
                    </button>
                  ))}
                </div>
                {renderError('processor')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  RAM Configuration
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['32GB', '64GB', '128GB'].map((ram) => (
                    <button
                      key={ram}
                      onClick={() => setFormData({ ...formData, ram })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.ram === ram
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <HardDrive className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{ram}</span>
                    </button>
                  ))}
                </div>
                {renderError('ram')}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className='relative'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <User className="absolute left-2 top-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border rounded-lg pl-10"
                  placeholder="Enter your full name"
                />
                {renderError('name')}
              </div>

              <div className='relative'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Mail className="absolute left-2 top-1/2 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border rounded-lg pl-10"
                  placeholder="Enter your email"
                />
                {renderError('email')}
              </div>

              <div className='relative'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Phone className="absolute left-2 top-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 border rounded-lg pl-10"
                  placeholder="Enter your phone number"
                />
                {renderError('phone')}
              </div>

              <div className='relative'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <DollarSign className="absolute left-2 top-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full p-2 border rounded-lg pl-10"
                  placeholder="Enter your budget"
                />
                {renderError('budget')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Comments
                </label>
                <textarea
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full p-2 border rounded-lg h-32"
                  placeholder="Any specific requirements or preferences?"
                />
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>

      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button
            onClick={onBack}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {step === 3 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}