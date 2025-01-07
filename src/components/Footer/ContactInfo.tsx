import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactInfo() {
    return (
        <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Contact Us</h3>
        <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 text-blue-400 mt-1" />
            <p className="text-gray-200">
                2310 Virginia Pkwy<br/>
                McKinney, TX 75071
            </p>
            </div>
            <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-blue-400" />
            <a href='tel:+14693003936' className="text-gray-200 underline hover:text-blue-500">+1 469 300 3936</a>
            </div>
            <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <p className="text-gray-200">info@ifixhut.com</p>
            </div>
        </motion.div>
        </div>
    );
}