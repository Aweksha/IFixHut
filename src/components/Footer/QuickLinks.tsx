import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Custom PC', path: '/custom-pc' },
    { name: 'Contact Us', path: '/contact' }
    ];

    export default function QuickLinks() {
    return (
        <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Quick Links</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
            <motion.li
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <Link 
                to={link.path}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
                >
                {link.name}
                </Link>
            </motion.li>
            ))}
        </ul>
        </div>
    );
}