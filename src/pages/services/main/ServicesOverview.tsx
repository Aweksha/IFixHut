import { motion } from 'framer-motion';
import { Laptop, Monitor, Smartphone, Tablet, Shield, HardDrive, Zap, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../components/animations/FadeIn';
import consult from '../../../assets/consult.webp'

const services = [
    {
        icon: Laptop,
        title: "MacBook & Laptop Repair",
        description: "Expert repair services for all laptop brands",
        links: [
        { name: "MacBook Repair", path: "/services/macbook-repair" },
        { name: "Laptop Repair", path: "/services/laptop-repair" }
        ]
    },
    {
        icon: Monitor,
        title: "Desktop & iMac Services",
        description: "Comprehensive desktop computer solutions",
        links: [
        { name: "iMac Repair", path: "/services/imac-repair" },
        { name: "PC Repair", path: "/services/pc-repair" },
        { name: "PC Upgrade", path: "/services/pc-upgrade" }
        ]
    },
    {
        icon: Smartphone,
        title: "Mobile Device Repair",
        description: "Professional smartphone repair services",
        links: [
        { name: "iPhone Repair", path: "/services/iphone-repair" },
        { name: "Cellphone Repair", path: "/services/cellphone-repair" }
        ]
    },
    {
        icon: Tablet,
        title: "Tablet Services",
        description: "Expert tablet repair and maintenance",
        links: [
        { name: "iPad Repair", path: "/services/ipad-repair" }
        ]
    },
    {
        icon: Shield,
        title: "Security Services",
        description: "Protect your devices from threats",
        links: [
        { name: "Virus Removal", path: "/services/virus-removal" }
        ]
    },
    {
        icon: HardDrive,
        title: "Data Services",
        description: "Professional data recovery solutions",
        links: [
        { name: "Data Recovery", path: "/services/data-recovery" }
        ]
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Boost your device's performance",
        links: [
        { name: "Device Tune-up", path: "/services/device-tuneup" }
        ]
    },
    {
        icon: Server,
        title: "Network Solutions",
        description: "Professional network setup and maintenance",
        links: [
        { name: "Network Setup", path: "/services/network-setup" }
        ]
    }
    ];

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1
        }
    }
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5
        }
    }
    };

    export default function Services() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800"
        style={{
            backgroundImage : `url(${consult})`,
            backgroundPosition : `center`,
            backgroundSize : `cover`,
        }}>
        <div className="bg-slate-950/80 max-w-full mx-auto px-2 lg:px-20">
            <FadeIn>
                <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                    Our Services
                    </motion.h1>
                    <motion.p 
                    className="text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    >
                    Professional tech repair and maintenance services for all your devices
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{scale : 1.1}}
                        className="bg-slate-800/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group"
                        >
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-200/20 transition-colors">
                            <Icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <div className="space-y-2">
                                {service.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    to={link.path}
                                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    → {link.name}
                                </Link>
                                ))}
                            </div>
                            </div>
                        </div>
                        </motion.div>
                    );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <motion.button
                    whileHover={{scale : 1.1}}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                        <Link
                        to="/book-appointment"
                        >
                            Book an Appointment
                        </Link>
                    </motion.button>
                </motion.div>
                </div>
            </FadeIn>
        </div>
        </div>
    );
}