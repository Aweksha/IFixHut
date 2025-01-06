import { memo } from 'react';
import { type FormData, type ServiceCategory } from '../types';
import { motion } from 'framer-motion';

interface IssueDetailsProps {
  category: ServiceCategory;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const issueTypes: Record<ServiceCategory, string[]> = {
  'iphone-cellphone': [
    'Cracked screen',
    'Battery issue',
    'Water damage',
    'Charging problem',
    'Camera issue',
    'Other'
  ],
  'ipad-tablet': [
    'Screen damage',
    'Battery replacement',
    'Charging issue',
    'Button repair',
    'Software problem',
    'Other'
  ],
  'laptop': [
    'Screen replacement',
    'Keyboard issue',
    'Battery replacement',
    'Hard drive upgrade',
    'Performance issues',
    'Other'
  ],
  'computer': [
    'Hardware upgrade',
    'Software issues',
    'Virus removal',
    'Performance optimization',
    'Component replacement',
    'Other'
  ],
  'pc-network': [
    'Custom PC build',
    'Network setup',
    'Workstation configuration',
    'Server installation',
    'Performance optimization',
    'Other'
  ],
  'other': ['Other']
};

export default memo(function IssueDetails({ category, formData, updateFormData }: IssueDetailsProps) {
  const issues = issueTypes[category] || [];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Issue Details</h2>
        <p className="text-gray-600">Tell us about the problem</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What issue are you facing?
          </label>
          <select
            value={formData.issueType}
            onChange={(e) => updateFormData({ issueType: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select an issue</option>
            {issues.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Please describe the issue in detail
          </label>
          <textarea
            value={formData.issueDescription}
            onChange={(e) => updateFormData({ issueDescription: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
            required
          />
        </div>

        <div>
        <label className="flex items-center space-x-2">
          <motion.input
            type="checkbox"
            checked={formData.urgentService}
            onChange={(e) => updateFormData({ urgentService: e.target.checked })}
            className="h-8 w-8 cursor-pointer rounded-full border-red-300 bg-red-100 text-red-600 focus:ring-red-200"
            // Add animation props
            initial={{ scale: 1 }}
            animate={{ scale: formData.urgentService ? 1.2 : 1 }} // Slight scale animation when checked
            transition={{ duration: 0.3, ease: 'easeOut' }} // Smooth transition
          />
          <span className="text-md text-gray-700 pl-2 font-medium">I need urgent service</span>
        </label>
      </div>
      </div>
    </div>
  );
});
