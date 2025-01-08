import { memo } from 'react';
import { motion } from 'framer-motion';
import { Network, Router, Shield, Clock, Wrench, Award, Server, Lock } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';

const services = [
  {
    title: 'Home Network',
    price: 'From $149',
    description: 'Complete home WiFi setup'
  },
  {
    title: 'Business Network',
    price: 'From $299',
    description: 'Professional office networking'
  },
  {
    title: 'Network Security',
    price: 'From $199',
    description: 'Security implementation'
  }
];

const setupProcess = [
  {
    number: 1,
    title: 'Assessment',
    description: 'Site survey'
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Network design'
  },
  {
    number: 3,
    title: 'Installation',
    description: 'Hardware setup'
  },
  {
    number: 4,
    title: 'Configuration',
    description: 'Software setup'
  }
];

export default memo(function NetworkSetup() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="Network Setup & Configuration"
        subtitle="Professional Networking Solutions"
        description="Expert network setup and configuration services for homes and businesses"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Networking Services</h2>
          <p className="text-gray-600">Complete networking solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Network Solutions */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Network Solutions</h2>
            <p className="text-gray-300">Comprehensive networking services</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'WiFi Networks',
              'Wired Networks',
              'VPN Setup',
              'Security'
            ].map((solution, index) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <Network className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{solution}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive networking solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Router, title: 'Router Setup', desc: 'WiFi configuration' },
            { icon: Server, title: 'Network Storage', desc: 'NAS installation' },
            { icon: Lock, title: 'Security Setup', desc: 'Firewall configuration' }
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

      {/* Setup Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Setup Process</h2>
            <p className="text-gray-600">Professional installation</p>
          </motion.div>
          <ServiceProcess steps={setupProcess} />
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
          <p className="text-gray-600">Professional service guaranteed</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Security First', desc: 'Protected setup' },
            { icon: Clock, title: 'Fast Setup', desc: 'Quick installation' },
            { icon: Wrench, title: 'Expert Team', desc: 'Certified techs' },
            { icon: Award, title: 'Best Service', desc: 'Satisfaction guaranteed' }
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Need Network Setup?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get professional networking help today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Setup
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
