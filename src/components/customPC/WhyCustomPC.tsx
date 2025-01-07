import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhyCustomPC() {
  const benefits = [
    {
      title: 'Better Performance',
      description: 'Custom-built PCs offer superior performance as each component is carefully selected for your specific needs.'
    },
    {
      title: 'Cost Effective',
      description: 'Get more value for your money by choosing exactly what you need without paying for unnecessary features.'
    },
    {
      title: 'Future Proof',
      description: 'Easy to upgrade individual components as your needs change or new technology becomes available.'
    }
  ];

  return (
    <section className="">
      <h2 className="text-3xl font-bold text-center mb-12">Why Build a Custom PC?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}