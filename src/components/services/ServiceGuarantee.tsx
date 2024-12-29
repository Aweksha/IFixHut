import { memo } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Guarantee {
    icon: LucideIcon;
    title: string;
    description: string;
    }

    interface ServiceGuaranteeProps {
    guarantees: Guarantee[];
    }

    export default memo(function ServiceGuarantee({ guarantees }: ServiceGuaranteeProps) {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-inner">
        <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
            >
                <div className="inline-block p-4 bg-white rounded-2xl shadow-md mb-4">
                <guarantee.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
            </motion.div>
            ))}
        </div>
        </div>
    );
});