import { memo } from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
    number: number;
    title: string;
    description: string;
    }

    interface ServiceProcessProps {
    steps: ProcessStep[];
    }

    export default memo(function ServiceProcess({ steps }: ServiceProcessProps) {
    return (
        <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
        <div className="space-y-12">
            {steps.map((step, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-8"
            >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    );
});