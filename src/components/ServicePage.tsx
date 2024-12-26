import { motion } from 'framer-motion';
import Hero from './Hero';

interface ServicePageProps {
    title: string;
    description: string;
    image: string;
    features?: string[];
    }

    export default function ServicePage({ title, description, image, features = [] }: ServicePageProps) {
    return (
        <div className="min-h-screen bg-gray-50">
        <Hero
            title={title}
            subtitle={description}
            backgroundImage={image}
        />
        <motion.div
            className="max-w-7xl mx-auto py-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Our {title} Services</h2>
            {features.length > 0 && (
                <ul className="space-y-4">
                {features.map((feature, index) => (
                    <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                    >
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{feature}</span>
                    </motion.li>
                ))}
                </ul>
            )}
            </div>
        </motion.div>
        </div>
    );
}