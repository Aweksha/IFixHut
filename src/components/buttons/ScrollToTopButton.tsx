import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = memo(function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <motion.button
        onClick={scrollToTop}
        initial={{ transform: 'scale(0)' }}
        animate={{ transform: 'scale(1)' }}
        exit={{ transform: 'scale(0)' }}
        className="fixed bottom-24 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-40"
        aria-label="Scroll to top"
        >
        <ArrowUp className="w-6 h-6" />
        </motion.button>
    );
});