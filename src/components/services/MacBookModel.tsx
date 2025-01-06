import { memo } from 'react';
import { motion } from 'framer-motion';

interface MacBookModelProps {
    model: string;
    image: string;
    features: string[];
    index: number;
    }

    export default memo(function MacBookModel({ model, image, features, index }: MacBookModelProps) {
    return (
        <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="relative group"
        >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300" />
        <div className="relative bg-white rounded-xl p-6 shadow-lg">
            <img src={image} alt={model} className="w-full h-48 object-cover rounded-lg mb-6" />
            <h3 className="text-xl font-bold mb-4">{model}</h3>
            <ul className="space-y-2">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                {feature}
                </li>
            ))}
            </ul>
        </div>
        </motion.div>
    );
});