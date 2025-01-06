import { memo } from 'react';
import { type FormData, type ServiceCategory } from '../types';

interface DeviceDetailsProps {
  category: ServiceCategory;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const deviceQuestions: Record<ServiceCategory, Array<{ label: string; field: keyof FormData; type: string }>> = {
  'iphone-cellphone': [
    { label: 'What is your device model?', field: 'deviceModel', type: 'text' }
  ],
  'ipad-tablet': [
    { label: 'What is your device model?', field: 'deviceModel', type: 'text' }
  ],
  'laptop': [
    { label: 'What is your laptop brand and model?', field: 'deviceModel', type: 'text' }
  ],
  'computer': [
    { label: 'What is your system configuration?', field: 'deviceModel', type: 'text' }
  ],
  'pc-network': [
    { label: 'What type of build are you looking for?', field: 'deviceModel', type: 'text' }
  ],
  'other': [
    { label: 'What is your device?', field: 'deviceModel', type: 'text' }
  ]
};

export default memo(function DeviceDetails({ category, formData, updateFormData }: DeviceDetailsProps) {
  const questions = deviceQuestions[category] || [];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Device Details</h2>
        <p className="text-gray-600">Tell us about your device</p>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {question.label}
            </label>
            <input
              type={question.type}
              value={formData[question.field] as string}
              onChange={(e) => updateFormData({ [question.field]: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
});