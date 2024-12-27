import { memo } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { ServiceContent } from './ServiceContent';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default memo(function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ transform: 'scale(1.02)' }}
      whileTap={{ transform: 'scale(0.98)' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="bg-white p-6 rounded-lg shadow-lg text-center border-b-2 border-slate-400"
    >
      <ServiceIcon icon={icon} />
      <ServiceContent title={title} description={description} />
    </motion.div>
  );
});