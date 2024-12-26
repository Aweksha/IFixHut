import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    { name: 'MacBook Repair', path: '/services/macbook-repair' },
    { name: 'iMac Repair & Upgrade', path: '/services/imac-repair' },
    { name: 'Laptop Repair & Upgrade', path: '/services/laptop-repair' },
    { name: 'Virus/Malware Removal', path: '/services/virus-removal' },
    { name: 'PC Upgrade', path: '/services/pc-upgrade' },
    { name: 'Data Recovery', path: '/services/data-recovery' },
    { name: 'Device Tune-Up', path: '/services/device-tuneup' },
    { name: 'iPhone Repair', path: '/services/iphone-repair' },
    { name: 'Cellphone Repair', path: '/services/cellphone-repair' },
    { name: 'iPad Repair', path: '/services/ipad-repair' },
    { name: 'Gaming PC Repair', path: '/services/gaming-pc-repair' },
    { name: 'Custom Gaming PC Builds', path: '/services/custom-gaming-pc' },
    { name: 'Network & Workstation Setup', path: '/services/network-setup' }
    ];

    export default function ServiceLinks() {
    return (
        <div className="space-y-4 border-white border-r-2 border-l-2 px-4">
        <h3 className="text-xl font-bold text-white">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((service, index) => (
            <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
            >
                <Link 
                to={service.path}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
                >
                {service.name}
                </Link>
            </motion.div>
            ))}
        </div>
        </div>
    );
}