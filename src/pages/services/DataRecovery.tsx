import { memo } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Server, Database, Shield, Clock, Wrench, Award, Lock } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Hard Drive Recovery',
    price: 'Prices Vary',
    description: 'Recover data from failed drives'
  },
  {
    title: 'SSD Recovery',
    price: 'Prices Vary',
    description: 'Flash storage data recovery'
  },
  {
    title: 'RAID Recovery',
    price: 'Prices Vary',
    description: 'Multi-disk array recovery'
  }
];

const recoveryProcess = [
  {
    number: 1,
    title: 'Evaluation',
    description: 'Free diagnostic check'
  },
  {
    number: 2,
    title: 'Analysis',
    description: 'Recovery assessment'
  },
  {
    number: 3,
    title: 'Recovery',
    description: 'Data extraction'
  },
  {
    number: 4,
    title: 'Verification',
    description: 'Data integrity check'
  }
];

export default memo(function DataRecovery() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="Data Recovery Services"
        subtitle="Professional Data Recovery Solutions"
        description="Expert data recovery services for all storage devices with secure and confidential handling"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Data Recovery Solutions</h2>
          <p className="text-gray-600">Professional recovery for all storage types</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Supported Devices */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Storage Types We Handle</h2>
            <p className="text-gray-300">Recovery for all storage devices</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Hard Drives',
              'SSDs',
              'RAID Arrays',
              'USB Drives'
            ].map((device, index) => (
              <motion.div
                key={device}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <HardDrive className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{device}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Data Loss Scenarios</h2>
          <p className="text-gray-600">Solutions for every data loss situation</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Server, title: 'Hardware Failure', desc: 'Physical drive damage' },
            { icon: Database, title: 'Logical Failure', desc: 'Corrupted file systems' },
            { icon: Lock, title: 'Ransomware', desc: 'Encrypted data recovery' }
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

      {/* Recovery Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Recovery Process</h2>
            <p className="text-gray-600">Professional and secure recovery</p>
          </motion.div>
          <ServiceProcess steps={recoveryProcess} />
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
          <p className="text-gray-600">Secure and confidential service</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Data Security', desc: 'Confidential handling' },
            { icon: Clock, title: 'Fast Recovery', desc: 'Quick turnaround' },
            { icon: Wrench, title: 'Expert Team', desc: 'Certified specialists' },
            { icon: Award, title: 'No Data, No Fee', desc: 'Success guarantee' }
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
            <h2 className="text-4xl font-bold mb-4">Lost Important Data?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get professional data recovery help today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Recovery
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </ReducedMotion>
  );
});
