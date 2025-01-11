import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Award, Tablet, Battery, Wifi } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';

const services = [
  {
    title: 'Screen Repair',
    price: 'From $129',
    description: 'iPad screen replacement and repair'
  },
  {
    title: 'Battery Service',
    price: 'From $79',
    description: 'Battery replacement and testing'
  },
  {
    title: 'Charging Port',
    price: 'From $69',
    description: 'Port repair and replacement'
  }
];

const repairProcess = [
  {
    number: 1,
    title: 'Assessment',
    description: 'Quick diagnostic check'
  },
  {
    number: 2,
    title: 'Quote',
    description: 'Upfront pricing'
  },
  {
    number: 3,
    title: 'Repair',
    description: 'Expert service'
  },
  {
    number: 4,
    title: 'Testing',
    description: 'Quality assurance'
  }
];

export default memo(function IPadRepair() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="iPad Repair & Service"
        subtitle="Professional iPad Repair Services"
        description="Expert repair services for all iPad models with genuine parts and certified technicians"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">iPad Repair Services</h2>
          <p className="text-gray-600">Professional repairs for all iPad models</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">iPad Models We Service</h2>
            <p className="text-gray-300">Support for all iPad generations</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'iPad Pro',
              'iPad Air',
              'iPad Mini',
              'iPad'
            ].map((model, index) => (
              <motion.div
                key={model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <Tablet className="w-12 h-12 mx-auto mb-4" />
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
          <h2 className="text-3xl font-bold mb-4">Common iPad Issues</h2>
          <p className="text-gray-600">Expert solutions for every problem</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Wrench, title: 'Screen Damage', desc: 'Cracked or broken screens' },
            { icon: Battery, title: 'Battery Issues', desc: 'Poor battery life' },
            { icon: Wifi, title: 'Connectivity', desc: 'WiFi and cellular problems' }
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
            <p className="text-gray-600">Fast and reliable service</p>
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
          <p className="text-gray-600">Quality service guaranteed</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: '90-Day Warranty', desc: 'Parts and labor' },
            { icon: Clock, title: 'Same-Day Service', desc: 'Quick turnaround' },
            { icon: Wrench, title: 'Expert Techs', desc: 'Certified specialists' },
            { icon: Award, title: 'Best Price', desc: 'Competitive rates' }
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Need iPad Repairs?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get your iPad fixed today</p>
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