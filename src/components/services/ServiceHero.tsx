import { memo } from 'react';
import { motion } from 'framer-motion';
import { ReducedMotion } from '../animations/ReducedMotion';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    }

    export default memo(function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
    return (
        <ReducedMotion>
        <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-24">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {title}
                </h1>
                <p className="text-2xl md:text-3xl text-blue-300 mb-6 font-light">{subtitle}</p>
                <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            </motion.div>
            </div>
        </div>
        </ReducedMotion>
    );
});