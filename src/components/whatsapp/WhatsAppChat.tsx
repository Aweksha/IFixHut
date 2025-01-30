import { memo } from 'react';
import { motion} from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

export const WhatsAppButton = memo(function WhatsAppButton({
    phoneNumber = '+14693003936',
    message = 'Hello! I would like to inquire about your services.'
    }: WhatsAppButtonProps) {
    const handleClick = () => {
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 group">
        <motion.button
            onClick={handleClick}
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
        >
            <MessageCircle className="w-9 h-9 text-white" />
            <span className="sr-only">Chat on WhatsApp</span>

            {/* Hover Text */}
            <div className="absolute right-full mr-4 hidden group-hover:block whitespace-nowrap">
            <div className="bg-white/80 px-4 py-2 rounded-lg shadow-lg text-gray-700 font-medium relative">
                Message us on WhatsApp
                <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white/80 transform rotate-45" />
            </div>
            </div>
        </motion.button>
        </div>
    );
});