export interface ServiceFeature {
    title: string;
    description: string;
}

export interface CommonIssue {
    problem: string;
    solution: string;
}

export interface Service {
    id: string;
    name: string;
    path: string;
    description: string;
    longDescription?: string;
    features: ServiceFeature[];
    commonIssues?: CommonIssue[];
    pricing?: {
        startingAt: number;
        disclaimer?: string;
    };
    warranty?: string;
}

export const services: Service[] = [
    {
        id: 'macbook-repair',
        name: 'MacBook Repair',
        path: '/services/macbook-repair',
        description: 'Expert MacBook repair services with certified technicians',
        longDescription: 'Our certified technicians specialize in all MacBook models, providing fast and reliable repairs with genuine Apple parts.',
        features: [
        {
        title: 'Screen Repair & Replacement',
        description: 'Fix cracked screens, dead pixels, and display issues'
        },
        {
        title: 'Logic Board Repair',
        description: 'Component-level repair for water damage, short circuits, and boot issues'
        },
        {
        title: 'Battery Replacement',
        description: 'Restore battery life with genuine Apple batteries'
        },
        {
        title: 'Keyboard Replacement',
        description: 'Fix sticky keys, broken keyboards, and trackpad issues'
        },
        {
        title: 'Data Recovery',
        description: 'Recover data from failed drives and system crashes'
        }
    ],
    commonIssues: [
        {
        problem: 'Water Damage',
        solution: 'Professional cleaning and component repair'
        },
        {
        problem: 'Won\'t Turn On',
        solution: 'Diagnostic and power system repair'
        },
        {
        problem: 'Slow Performance',
        solution: 'Hardware upgrades and optimization'
        }
    ],
    pricing: {
        startingAt: 49,
        disclaimer: 'Diagnostic fee waived with repair'
    },
    warranty: '90 days on parts and labor'
    },
    {
    id: 'iphone-repair',
    name: 'iPhone Repair',
    path: '/services/iphone-repair',
    description: 'Professional iPhone repair service for all models',
    longDescription: 'Fast and reliable iPhone repairs using high-quality parts, backed by our satisfaction guarantee.',
    features: [
        {
        title: 'Screen Replacement',
        description: 'OEM-quality screens with full touch functionality'
        },
        {
        title: 'Battery Replacement',
        description: 'Restore battery life to like-new condition'
        },
        {
        title: 'Camera Repair',
        description: 'Fix front and rear camera issues'
        },
        {
        title: 'Charging Port Repair',
        description: 'Resolve charging and connectivity issues'
        },
        {
        title: 'Water Damage Treatment',
        description: 'Professional cleaning and component repair'
        }
    ],
    commonIssues: [
        {
        problem: 'Cracked Screen',
        solution: 'Same-day screen replacement'
        },
        {
        problem: 'Battery Drain',
        solution: 'Battery replacement and optimization'
        },
        {
        problem: 'Face ID Not Working',
        solution: 'Sensor and camera repair'
        }
    ],
    pricing: {
        startingAt: 39,
        disclaimer: 'Most repairs completed same-day'
    },
    warranty: '90 days warranty on all repairs'
    },
    {
        id: 'imac-repair',
        name: 'iMac Repair',
        path: '/services/imac-repair',
        description: 'Professional iMac repair and upgrade services',
        longDescription: 'Expert iMac repair services for all models. We specialize in screen repairs, hardware upgrades, and performance optimization.',
        features: [
            {
            title: 'Screen Repair',
            description: 'Fix dead pixels, display issues, and cracked screens'
            },
            {
            title: 'Hardware Upgrades',
            description: 'RAM upgrades, SSD installation, and storage expansion'
            },
            {
            title: 'GPU Repair',
            description: 'Graphics card diagnostics and repair'
            },
            {
            title: 'Power Issues',
            description: 'Power supply replacement and electrical repairs'
            },
            {
            title: 'Performance Optimization',
            description: 'System cleanup and software optimization'
            }
        ],
        commonIssues: [
            {
            problem: 'Slow Performance',
            solution: 'Hardware upgrades and optimization'
            },
            {
            problem: 'Display Issues',
            solution: 'Screen repair or replacement'
            },
            {
            problem: 'Startup Problems',
            solution: 'Diagnostic and system repair'
            }
        ],
        pricing: {
            startingAt: 59,
            disclaimer: 'Free diagnostic with repair'
        },
        warranty: '90 days warranty on parts and labor'
        },

        {
        id: 'laptop-repair',
        name: 'Laptop Repair',
        path: '/services/laptop-repair',
        description: 'Expert laptop repair services for all brands',
        longDescription: 'Comprehensive laptop repair services for all major brands including Dell, HP, Lenovo, ASUS, and more.',
        features: [
            {
            title: 'Screen Replacement',
            description: 'Fix cracked screens and display issues'
            },
            {
            title: 'Keyboard Repair',
            description: 'Replace damaged keyboards and fix sticky keys'
            },
            {
            title: 'Hardware Upgrades',
            description: 'RAM, SSD, and storage upgrades'
            },
            {
            title: 'Battery Replacement',
            description: 'New battery installation and power diagnostics'
            },
            {
            title: 'Motherboard Repair',
            description: 'Component-level board repair'
            }
        ],
        commonIssues: [
            {
            problem: 'Blue Screen',
            solution: 'Software repair and hardware diagnostics'
            },
            {
            problem: 'Overheating',
            solution: 'Cooling system repair and cleaning'
            },
            {
            problem: 'No Power',
            solution: 'Power system diagnostics and repair'
            }
        ],
        pricing: {
            startingAt: 49,
            disclaimer: 'Most repairs completed within 24-48 hours'
        },
        warranty: '90 days warranty on all repairs'
        },
        {
        id: 'virus-removal',
        name: 'Virus Removal',
        path: '/services/virus-removal',
        description: 'Professional virus and malware removal services',
        longDescription: 'Comprehensive virus removal and security solutions to protect your devices and data.',
        features: [
            {
            title: 'Virus Scanning',
            description: 'Deep system scan and threat detection'
            },
            {
            title: 'Malware Removal',
            description: 'Complete removal of malicious software'
            },
            {
            title: 'System Recovery',
            description: 'Restore system to clean state'
            },
            {
            title: 'Security Setup',
            description: 'Install and configure security software'
            },
            {
            title: 'Data Protection',
            description: 'Backup and data security measures'
            }
        ],
        commonIssues: [
            {
            problem: 'Slow Computer',
            solution: 'Virus removal and system optimization'
            },
            {
            problem: 'Pop-ups',
            solution: 'Adware removal and browser cleanup'
            },
            {
            problem: 'Ransomware',
            solution: 'Malware removal and data recovery'
            }
        ],
        pricing: {
            startingAt: 79,
            disclaimer: 'Includes security software setup'
        },
        warranty: '30-day virus-free guarantee'
        }
        // More services to be continued...
];
;