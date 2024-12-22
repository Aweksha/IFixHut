import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function LoadingSpinner() {
return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-6">
    <motion.div
    className="flex items-center gap-2"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
    <Wrench className="h-8 w-8 text-blue-600" />
    <span className="text-3xl font-bold text-gray-900">IFIXHUT</span>
    </motion.div>

    <motion.div
    className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
</div>
);
}