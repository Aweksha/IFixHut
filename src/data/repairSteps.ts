export interface RepairStep {
    id: number;
    title: string;
    description: string;
}

export const repairSteps: RepairStep[] = [
{
    id: 1,
    title: "Free Consultations",
    description: "Contact us for a free consultation to discuss your repair needs.",
},
{
    id: 2,
    title: "Choose Package",
    description: "Pick the service package that best fits your device and repair requirements.",
},
{
    id: 3,
    title: "Check Devices",
    description: "Bring in your device for a thorough check-up and diagnosis by our technicians.",
},
{
    id: 4,
    title: "Repair Devices",
    description: "We'll repair your device quickly, using high-quality parts and expert skills.",
},
];