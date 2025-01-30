import { memo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Clock, Wrench, Award, Zap, Maximize, Monitor } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'RAM Upgrade',
    price: 'From $89',
    description: 'Memory expansion service'
  },
  {
    title: 'Storage Upgrade',
    price: 'From $129',
    description: 'SSD/HDD installation'
  },
  {
    title: 'GPU Upgrade',
    price: 'From $199',
    description: 'Graphics card upgrade'
  }
];

const upgradeProcess = [
  {
    number: 1,
    title: 'Assessment',
    description: 'System evaluation'
  },
  {
    number: 2,
    title: 'Recommendation',
    description: 'Upgrade options'
  },
  {
    number: 3,
    title: 'Installation',
    description: 'Hardware upgrade'
  },
  {
    number: 4,
    title: 'Testing',
    description: 'Performance check'
  }
];

export default memo(function PCUpgrade() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="PC Upgrade Services"
        subtitle="Boost Your Computer's Performance"
        description="Professional PC upgrade services to enhance your computer's speed and capabilities"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Upgrade Services</h2>
          <p className="text-gray-600">Enhance your PC performance</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Upgrade Options */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Upgrade Options</h2>
            <p className="text-gray-300">Comprehensive upgrade solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'CPU Upgrade',
              'RAM Upgrade',
              'Storage Upgrade',
              'GPU Upgrade'
            ].map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <Cpu className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{option}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Upgrade Benefits</h2>
          <p className="text-gray-600">Why upgrade your PC</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Faster Performance', desc: 'Improved speed' },
            { icon: Maximize, title: 'Better Multitasking', desc: 'Handle more apps' },
            { icon: Monitor, title: 'Enhanced Graphics', desc: 'Better visuals' }
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

      {/* Upgrade Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Upgrade Process</h2>
            <p className="text-gray-600">Professional installation</p>
          </motion.div>
          <ServiceProcess steps={upgradeProcess} />
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
            { icon: Shield, title: 'Data Protection', desc: 'Safe upgrades' },
            { icon: Clock, title: 'Quick Service', desc: 'Same-day upgrade' },
            { icon: Wrench, title: 'Expert Team', desc: 'Certified techs' },
            { icon: Award, title: 'Best Parts', desc: 'Quality components' }
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
            <h2 className="text-4xl font-bold mb-4">Ready to Upgrade?</h2>
            <p className="text-gray-600 mb-8 text-lg">Boost your PC performance today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Upgrade
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </ReducedMotion>
  );
});