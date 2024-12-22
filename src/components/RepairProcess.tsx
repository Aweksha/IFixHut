import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Diagnostic",
        description: "First we run a series of tests to figure the exact issue on your device and the cause of it.",
    },
    {
        id: 2,
        title: "Repair Options",
        description:
        "After we find the problem and the cause of it, we will provide you with the repair options, quote, and time. Then you can decide what to do further.",
    },
    {
        id: 3,
        title: "Get It Repaired",
        description:
        "After we get an approval from you, we will start the repair on your device. We try to complete the repair as soon as possible and call you for a pickup.",
    },
    ];

    export default function RepairProcess() {
    return (
        <div className="relative bg- py-16 bg-[rgba()]">
        <h2 className="text-3xl font-bold text-center mb-12">Repair Process</h2>
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute sm: hidden lg:flex z-10 left-1/2 transform -translate-x-1/2 top-0 h-full w-1 rounded-2xl bg-purple-500" />

            {/* Steps */}
            <div className="space-y-16">
            {steps.map((step, index) => (
                <motion.div
                key={step.id}
                className={`flex items-center justify-center lg:justify-start ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
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
