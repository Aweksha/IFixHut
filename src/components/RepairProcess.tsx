import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Free Consultations",
        description: "Contact us for a free consultation to discuss your repair needs.",
    },
    {
        id: 2,
        title: "Choose Package",
        description:
        "Pick the service package that best fits your device and repair requirements.",
    },
    {
        id: 3,
        title: "Check Devices",
        description:
        "Bring in your device for a thorough check-up and diagnosis by our technicians.",
    },
    {
        id: 4,
        title: "Repair Devices",
        description:
        "We'll repair your device quickly, using high-quality parts and expert skills.",

    },
    ];

    export default function RepairProcess() {
    return (
        <div className="relative py-16 bg-inherit">
        <h2 className="text-4xl font-bold text-center mb-12">Repair Process</h2>
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute sm: hidden lg:flex z-10 left-1/2 transform -translate-x-1/2 top-0 h-full w-2 rounded-2xl bg-slate-500" />

            {/* Steps */}
            <div className="space-y-16">
            {steps.map((step, index) => (
                <motion.div
                key={step.id}
                className={`flex items-center justify-center lg:justify-start ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: .2, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .2, delay: index * 0.1 }}
                viewport={{ once: true, amount: .3 }}
                >
                {/* Step Content */}
                <div className="bg-white shadow-xl p-6 rounded-lg max-w-md w-full bg-blue-900/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold border-blue-200 border-b-2 py-1">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                </div>

                {/* Step Number */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-blue-500 text-white text-lg font-bold rounded-full mx-6">
                    {step.id}
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </div>
    );
}
