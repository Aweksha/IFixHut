import { Laptop, Smartphone, Cpu, Wrench, Tablet } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    }

    export const services: Service[] = [
    {
        icon: Smartphone,
        title: "Phone Repair",
        description: "Screen replacement, battery service, and more",
    },
    {
        icon: Laptop,
        title: "Laptop Repair",
        description: "Hardware fixes, upgrades, and maintenance",
    },
    {
        icon: Cpu,
        title: "Custom PC Builds",
        description: "Tailored gaming and workstation builds",
    },
    {
        icon: Wrench,
        title: "General Repairs",
        description: "Diagnostics and repairs for all tech",
    },
    {
        icon: Tablet,
        title: "Tablet Repair",
        description: "From cracked screens to faulty batteries, we offer high-quality repairs for all tablet brands, including iPads and Android tablets.",
    },
];