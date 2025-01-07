import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Gamepad2, Monitor, Headphones, Cpu,
  Microchip, HardDrive, Fan,
  DollarSign, AlertCircle, Mail, User, Phone
} from 'lucide-react';

interface FormData {
  useCase: string;
  processor: string;
  gpu: string;
  ram: string;
  customRam?: string;
  storageType: string;
  liquidCooling: boolean;
  caseDesign: string;
  budget: string;
  comments: string;
  name: string;
  phone: string;
  email: string;
}

interface GamingPCFormProps {
  step: number;
  onNext: () => void;
  onBack: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (formData: any) => Promise<void>;
}

const formVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 }
};

export default function GamingPCForm({ step, onNext, onBack }: GamingPCFormProps) {
  const [formData, setFormData] = useState<FormData>({
    useCase: '',
    processor: '',
    gpu: '',
    ram: '',
    storageType: '',
    liquidCooling: false,
    caseDesign: '',
    budget: '',
    comments: '',
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};

    switch (step) {
      case 1:
        if (!formData.useCase) newErrors.useCase = 'Please select a use case';
        break;
      case 2:
        if (!formData.processor) newErrors.processor = 'Please select a processor';
        if (!formData.gpu) newErrors.gpu = 'Please select a GPU';
        break;
      case 3:
        if (!formData.ram) newErrors.ram = 'Please select RAM capacity';
        if (formData.ram === 'Custom' && !formData.customRam) {
          newErrors.customRam = 'Please specify custom RAM';
        }
        if (!formData.storageType) newErrors.storageType = 'Please select storage type';
        break;
      case 4:
        if (!formData.caseDesign) newErrors.caseDesign = 'Please select a case design';
        break;
      case 5:
        if (!formData.budget) newErrors.budget = 'Please enter your budget';
        if (!formData.name) newErrors.name = 'Please enter your name';
        if (!formData.phone) newErrors.phone = 'Please enter your phone number';
        if (!formData.email) newErrors.budget = 'Please enter your email';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  const renderError = (field: keyof FormData) => {
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
            <h3 className="text-xl font-semibold">What's your primary use case?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'High FPS Gaming', icon: Gamepad2 },
                { label: 'Streaming', icon: Monitor },
                { label: 'eSports', icon: Headphones },
                { label: 'VR Gaming', icon: Monitor }
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setFormData({ ...formData, useCase: label })}
                  className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                    formData.useCase === label
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <span className="block text-center">{label}</span>
                </button>
              ))}
            </div>
            {renderError('useCase')}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Select your components</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Processor Brand
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Intel', 'AMD'].map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setFormData({ ...formData, processor: brand })}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          formData.processor === brand
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-200'
                        }`}
                      >
                        <Cpu className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <span>{brand}</span>
                      </button>
                    ))}
                  </div>
                  {renderError('processor')}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GPU Brand
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['NVIDIA', 'AMD'].map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setFormData({ ...formData, gpu: brand })}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          formData.gpu === brand
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-200'
                        }`}
                      >
                        <Microchip className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <span>{brand}</span>
                      </button>
                    ))}
                  </div>
                  {renderError('gpu')}
                </div>
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
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Memory and Storage</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RAM Capacity
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['16GB', '32GB', '64GB', 'Custom'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, ram: option })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.ram === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <Cpu className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
                {renderError('ram')}

                {formData.ram === 'Custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter custom RAM size"
                      value={formData.customRam || ''}
                      onChange={(e) => setFormData({ ...formData, customRam: e.target.value })}
                      className="w-full p-2 border rounded-lg"
                    />
                    {renderError('customRam')}
                  </motion.div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Storage Type
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['SSD', 'HDD', 'Both'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, storageType: type })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.storageType === type
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <HardDrive className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
                {renderError('storageType')}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Cooling and Design</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Liquid Cooling
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Yes', 'No'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, liquidCooling: option === 'Yes' })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        (formData.liquidCooling && option === 'Yes') || (!formData.liquidCooling && option === 'No')
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <Fan className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Design
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['RGB Lighting', 'Minimalist', 'Compact'].map((design) => (
                    <button
                      key={design}
                      onClick={() => setFormData({ ...formData, caseDesign: design })}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.caseDesign === design
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <Monitor className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span>{design}</span>
                    </button>
                  ))}
                </div>
                {renderError('caseDesign')}
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            variants={formVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Budget and Additional Info</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Enter your budget"
                  />
                </div>
                {renderError('budget')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>
                {renderError('name')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Enter your phone number"
                  />
                </div>
                {renderError('phone')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Enter your Email"
                  />
                </div>
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
          {step === 5 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}