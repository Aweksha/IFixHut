import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Award, Laptop, Cpu, HardDrive } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Screen Repair',
    price: 'From $149',
    description: 'LCD/LED screen replacement for all brands'
  },
  {
    title: 'Hardware Upgrade',
    price: 'From $89',
    description: 'RAM, SSD, and performance upgrades'
  },
  {
    title: 'Motherboard Repair',
    price: 'From $199',
    description: 'Expert motherboard diagnostics and repair'
  }
];

const repairProcess = [
  {
    number: 1,
    title: 'Diagnosis',
    description: 'Complete system diagnostic check'
  },
  {
    number: 2,
    title: 'Quote',
    description: 'Detailed repair cost breakdown'
  },
  {
    number: 3,
    title: 'Repair',
    description: 'Professional repair service'
  },
  {
    number: 4,
    title: 'Testing',
    description: 'Comprehensive quality testing'
  }
];

export default memo(function LaptopRepair() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="Professional Laptop Repair"
        subtitle="Expert Repairs for All Laptop Brands"
        description="Comprehensive repair services for all major laptop brands including Dell, HP, Lenovo, ASUS, and more"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Laptop Services</h2>
          <p className="text-gray-600">Professional repairs for all laptop issues</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Brands We Service */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Brands We Service</h2>
            <p className="text-gray-300">Expert repair for all apple laptops and other major laptop brands</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Dell', 'HP', 'Lenovo', 'ASUS'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <Laptop className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{brand}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Common Laptop Issues We Fix</h2>
          <p className="text-gray-600">Professional solutions for every problem</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Wrench, title: 'Hardware Issues', desc: 'Screen, keyboard, and component repairs' },
            { icon: Cpu, title: 'Performance', desc: 'Slow performance and overheating fixes' },
            { icon: HardDrive, title: 'Data Recovery', desc: 'Professional data recovery services' }
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
            <p className="text-gray-600">Professional and transparent service</p>
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
            { icon: Clock, title: 'Fast Service', desc: '24-48 hour repairs' },
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
            <h2 className="text-4xl font-bold mb-4">Need Laptop Repairs?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get your laptop fixed by experts</p>
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