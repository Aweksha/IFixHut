import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface PCBuildCardProps {
  title: string;
  description: string;
  features: Array<{
    icon: LucideIcon;
    text: string;
  }>;
}

export default function PCBuildCard({ title, description, features }: PCBuildCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <Icon className="w-5 h-5 mr-2 text-blue-600" />
                {feature.text}
              </motion.li>
            );
          })}
        </ul>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </motion.a>
      </div>
    </motion.div>
  );
}