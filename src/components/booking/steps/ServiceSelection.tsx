import { memo } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Laptop, Monitor, Server, HelpCircle } from 'lucide-react';
import { type ServiceCategory } from '../types';

interface ServiceSelectionProps {
  selectedService: string;
  onSelect: (category: ServiceCategory) => void;
}

const services = [
  {
    id: 'iphone-cellphone',
    name: 'iPhone & Cellphone',
    icon: Smartphone,
    description: 'Repairs for all smartphone brands'
  },
  {
    id: 'ipad-tablet',
    name: 'iPad & Tablet',
    icon: Tablet,
    description: 'Tablet repairs and maintenance'
  },
  {
    id: 'laptop',
    name: 'Laptop',
    icon: Laptop,
    description: 'Laptop repairs and upgrades'
  },
  {
    id: 'computer',
    name: 'Computer',
    icon: Monitor,
    description: 'Desktop computer services'
  },
  {
    id: 'pc-network',
    name: 'PC, Network & Workstation',
    icon: Server,
    description: 'Custom builds and network solutions'
  },
  {
    id: 'other',
    name: 'Others',
    icon: HelpCircle,
    description: 'Other device repairs'
  }
] as const;

export default memo(function ServiceSelection({ selectedService, onSelect }: ServiceSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Select Your Service</h2>
        <p className="text-gray-600">What type of device needs our attention?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }} 
            onClick={() => onSelect(service.id as ServiceCategory)}
            className={`p-4 rounded-lg text-left transition-colors ${
              selectedService === service.id
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-white border-2 border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex items-start space-x-4">
              <service.icon className={`w-6 h-6 ${
                selectedService === service.id ? 'text-blue-500' : 'text-gray-400'
              }`} />
              <div>
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
});
