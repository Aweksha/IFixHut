import { motion } from 'framer-motion';
import { ClipboardList, Wrench, Truck, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Choose a Build',
      description: 'Select your preferred build type and customize components'
    },
    {
      icon: Wrench,
      title: 'We Build',
      description: 'Our experts assemble and test your custom PC'
    },
    {
      icon: Truck,
      title: 'Delivery',
      description: 'Safe and secure delivery to your doorstep'
    },
    {
      icon: CheckCircle,
      title: 'Support',
      description: '1-year warranty and lifetime technical support'
    }
  ];

  return (
    <section className="">
      <h2 className="text-3xl font-bold text-center mb-20">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}