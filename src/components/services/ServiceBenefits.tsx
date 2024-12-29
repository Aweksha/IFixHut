import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Benefit {
    title: string;
    description: string;
    }

    interface ServiceBenefitsProps {
    benefits: Benefit[];
    }

    export default memo(function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
            <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
            </div>
            </motion.div>
        ))}
        </div>
    );
});