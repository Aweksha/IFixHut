import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, CheckCircle2 } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';

import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Screen Repair',
    price: 'From $299',
    description: 'Display replacement and repair for all iMac models'
  },
  {
    title: 'Hardware Upgrade',
    price: 'From $199',
    description: 'RAM, storage, and performance upgrades'
  },
  {
    title: 'Logic Board Repair',
    price: 'From $399',
    description: 'Expert diagnosis and repair of logic board issues'
  }
];

const benefits = [
  {
    title: 'Apple Certified',
    description: 'Our technicians are certified for iMac repairs'
  },
  {
    title: 'Genuine Parts',
    description: 'We use only authentic Apple components'
  },
  {
    title: 'Same-Day Service',
    description: 'Most repairs completed within 24 hours'
  }
];

const repairProcess = [
  {
    number: 1,
    title: 'Diagnosis',
    description: 'Comprehensive testing to identify issues'
  },
  {
    number: 2,
    title: 'Quote',
    description: 'Transparent pricing with no hidden fees'
  },
  {
    number: 3,
    title: 'Repair',
    description: 'Expert repair with genuine parts'
  },
  {
    number: 4,
    title: 'Quality Check',
    description: 'Thorough testing post-repair'
  }
];

export default memo(function IMacRepair() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="iMac Repair & Service"
        subtitle="Expert Care for Your Apple Desktop"
        description="Professional repair services for all iMac models with genuine parts and certified technicians"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Professional repair services for all iMac models</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-300">Expert iMac repair services you can trust</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Repair Process</h2>
          <p className="text-gray-600">Simple, transparent, and professional</p>
        </motion.div>
        <ServiceProcess steps={repairProcess} />
      </section>

      {/* Guarantees */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
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
              { icon: Clock, title: 'Fast Service', desc: '24-48 hour turnaround' },
              { icon: Wrench, title: 'Expert Care', desc: 'Certified technicians' },
              { icon: CheckCircle2, title: 'Price Match', desc: 'Best price guaranteed' }
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
            <h2 className="text-4xl font-bold mb-4">Ready to Fix Your iMac?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get a free diagnostic consultation today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Repair
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </ReducedMotion>
  );
});