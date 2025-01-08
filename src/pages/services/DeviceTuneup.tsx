import { memo } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Shield, Clock, Wrench, Award, Database, Save, FileSearch } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import FeaturedService from '../../components/services/FeaturedService';

const services = [
  {
    title: 'Hard Drive Recovery',
    price: 'From $199',
    description: 'Recover lost data'
  },
  {
    title: 'SSD Recovery',
    price: 'From $249',
    description: 'Flash storage recovery'
  },
  {
    title: 'Emergency Recovery',
    price: 'From $299',
    description: 'Urgent data retrieval'
  }
];

const recoveryProcess = [
  {
    number: 1,
    title: 'Diagnosis',
    description: 'Initial assessment'
  },
  {
    number: 2,
    title: 'Recovery Plan',
    description: 'Strategy development'
  },
  {
    number: 3,
    title: 'Extraction',
    description: 'Data recovery'
  },
  {
    number: 4,
    title: 'Verification',
    description: 'Data validation'
  }
];

export default memo(function DataRecovery() {
  return (
    <ReducedMotion className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ServiceHero
        title="Data Recovery Services"
        subtitle="Professional Data Recovery Solutions"
        description="Expert data recovery services for all storage devices"
      />

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Recovery Services</h2>
          <p className="text-gray-600">Professional data recovery solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeaturedService key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Recovery Solutions */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recovery Solutions</h2>
            <p className="text-gray-300">Comprehensive data recovery</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Hard Drive Recovery',
              'SSD Recovery',
              'RAID Recovery',
              'Flash Drive Recovery'
            ].map((solution, index) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white text-center"
              >
                <HardDrive className="w-12 h-12 mx-auto mb-4" />
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
          <p className="text-gray-600">Complete recovery solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Database, title: 'Data Recovery', desc: 'Lost file recovery' },
            { icon: Save, title: 'Backup Creation', desc: 'Data protection' },
            { icon: FileSearch, title: 'File Analysis', desc: 'Recovery assessment' }
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
            <p className="text-gray-600">Professional data recovery</p>
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
          <p className="text-gray-600">Professional service guaranteed</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Data Security', desc: 'Safe recovery' },
            { icon: Clock, title: 'Fast Recovery', desc: 'Quick service' },
            { icon: Wrench, title: 'Expert Team', desc: 'Certified techs' },
            { icon: Award, title: 'Best Results', desc: 'Maximum recovery' }
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617553963287-b117b0e08ed8?auto=format&fit=crop&q=80')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Lost Important Data?</h2>
            <p className="text-gray-600 mb-8 text-lg">Get professional recovery help today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Recovery
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