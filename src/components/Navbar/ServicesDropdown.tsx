import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';

const services = [
    { name: "MacBook Repair & Upgrade", path: "/services/macbook-repair" },
    { name: "iMac Repair & Upgrade", path: "/services/imac-repair" },
    { name: "Laptop Repair & Upgrade", path: "/services/laptop-repair" },
    { name: "Virus/Malware Removal", path: "/services/virus-removal" },
    { name: "PC Upgrade", path: "/services/pc-upgrade" },
    { name: "Data Recovery", path: "/services/data-recovery" },
    { name: "Device Tune-up", path: "/services/device-tuneup" },
    { name: "iPhone Repair", path: "/services/iphone-repair" },
    { name: "Cellphone Repair", path: "/services/cellphone-repair" },
    { name: "iPad Repair", path: "/services/ipad-repair" },
    { name: "Gaming PC Repair", path: "/services/gaming-pc-repair" },
    { name: "Custom Gaming PC Builds", path: "/services/custom-gaming-pc" },
    { name: "Network & Workstation Setup", path: "/services/network-setup" }
    ];

    export default function ServicesDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
        <button
            className="flex items-center space-x-1 hover:bg-slate-700 px-3 py-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span>Services</span>
            <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            >
            <ChevronDown className="h-4 w-4" />
            </motion.div>
        </button>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-72 bg-slate-950/80 rounded-lg shadow-xl z-50 max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 border-b-2 border-slate-800"
                style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4B5563 #1F2937'
                }}
            >
                <div className="py-2">
                {services.map((service) => (
                    <motion.div
                    key={service.path}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    >
                    <NavLink 
                        to={service.path}
                        className="block w-full text-left px-4 py-2 hover:bg-slate-700/50"
                        clickValue="setIsOpen(false)"
                    >
                        {service.name}
                    </NavLink>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}