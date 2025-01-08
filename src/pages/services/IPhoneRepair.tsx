import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Smartphone, Wrench, Battery, Cpu } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';

const services = [
  {
    title: 'Screen Repair',
    price: 'From $79',
    description: 'Screen replacement for all iPhone models'
  },
  {
    title: 'Battery Service',
    price: 'From $49',
    description: 'Battery replacement and optimization'
  },
  {
    title: 'Water Damage',
    price: 'From $99',
    description: 'Professional water damage treatment'
  }
];

const repairProcess = [
  {
    number: 1,
    title: 'Quick Diagnosis',
    description: 'Fast and accurate problem identification'
  },
  {
    number: 2,
    title: 'Instant Quote',
    description: 'Clear pricing with no surprises'
  },
  {
    number: 3,
    title: 'Expert Repair',
    description: 'Professional repair by specialists'
  },
  {
    number: 4,
    title: 'Quality Test',
    description: 'Comprehensive testing post-repair'
  }
];

export default memo(function IPhoneRepair() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="iPhone Repair & Service"
        subtitle="Expert iPhone Repairs in Minutes"
        description="Professional repair services for all iPhone models with genuine parts and certified technicians"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Common iPhone Repairs</h2>
          <p className="text-gray-600">Fast and reliable repairs for all issues</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Supported Models */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Supported Models</h2>
            <p className="text-gray-300">We repair all iPhone models</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {['iPhone 15 Series', 'iPhone 14 Series', 'iPhone 13 Series', 'iPhone 12 Series'].map((model, index) => (
              <motion.div
                key={model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <Smartphone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{model}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Common iPhone Issues We Fix</h2>
          <p className="text-gray-600">Expert solutions for every problem</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Wrench, title: 'Cracked Screen', desc: 'Screen replacement with OEM parts' },
            { icon: Battery, title: 'Battery Issues', desc: 'Battery replacement and optimization' },
            { icon: Cpu, title: 'Performance', desc: 'Speed and performance improvements' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Repair Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Repair Process</h2>
            <p className="text-gray-600">Quick, professional, and reliable</p>
          </motion.div>
          <ServiceProcess steps={repairProcess} />
        </div>
      </section>

      {/* Guarantees */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Guarantees</h2>
          <p className="text-gray-600">We stand behind our work</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: '90-Day Warranty', desc: 'On all repairs' },
            { icon: Clock, title: 'Fast Service', desc: '1-hour repairs' },
            { icon: Wrench, title: 'Expert Care', desc: 'Certified technicians' },
            { icon: Award, title: 'Best Price', desc: 'Price match guarantee' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Fix Your iPhone?</h2>
            <p className="text-gray-600 mb-8 text-lg">Most repairs completed in 1 hour or less</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Repair
              </a>
              <a
                href="/pricing"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </ReducedMotion>
  );
});