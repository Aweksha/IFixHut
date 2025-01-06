import { memo } from 'react';
import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

interface FeaturedServiceProps {
    title: string;
    price: string;
    index: number;
    }

    export default memo(function FeaturedService({ title, price, index }: FeaturedServiceProps) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative overflow-hidden"
        >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-y-12 group-hover:skew-y-0 transition-transform duration-500" />
        <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
            <div className="flex justify-between items-start mb-4">
            <Laptop className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-bold text-blue-600">{price}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded group-hover:w-full transition-all duration-500" />
        </div>
        </motion.div>
    );
});