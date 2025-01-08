import { Laptop, Smartphone, Cpu, Wrench} from "lucide-react";
import type { LucideIcon } from 'lucide-react';

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
    }

export const services: Service[] = [
    {
        icon: Smartphone,
        title: "Phone Repair",
        description: "Screen replacement, battery service, and more",
        link: "/services/cellphone-repair",
    },
    {
        icon: Laptop,
        title: "Laptop Repair",
        description: "Hardware fixes, upgrades, and maintenance",
        link: "/services/laptop-repair",
    },
    {
        icon: Cpu,
        title: "Custom PC Builds",
        description: "Tailored gaming and workstation builds",
        link: "/custom-pc",
    },
    {
        icon: Wrench,
        title: "Macbook Repairs",
        description: "Diagnostics and repairs for all types of Macbook",
        link: "/services/macbook-repair",
    },
];