import { memo } from 'react';
import { Shield, Clock, Wrench, Award } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceProcess from '../../components/services/ServiceProcess';
import { ReducedMotion } from '../../components/animations/ReducedMotion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Expert Technicians',
    description: 'Our certified technicians have years of experience with all MacBook models'
  },
  {
    title: 'Genuine Parts',
    description: 'We use only authentic Apple parts for all repairs and replacements'
  },
  {
    title: 'Quick Turnaround',
    description: 'Most repairs completed within 24-48 hours'
  },
  {
    title: 'Warranty Coverage',
    description: '90-day warranty on all parts and labor'
  },
  {
    title: 'Data Protection',
    description: 'Your data is safe and secure throughout the repair process'
  },
  {
    title: 'Competitive Pricing',
    description: 'Transparent pricing with no hidden fees'
  }
];

const repairProcess = [
  {
    number: 1,
    title: 'Initial Diagnosis',
    description: 'Our technicians perform a comprehensive diagnostic test to identify all issues'
  },
  {
    number: 2,
    title: 'Detailed Quote',
    description: 'We provide a clear, itemized quote with no hidden costs'
  },
  {
    number: 3,
    title: 'Professional Repair',
    description: 'Repairs are performed using genuine parts by certified technicians'
  },
  {
    number: 4,
    title: 'Quality Testing',
    description: 'Thorough testing ensures everything works perfectly'
  }
];


export default memo(function MacBookRepair() {
  return (
    <ReducedMotion className="min-h-screen bg-gray-50">
      <ServiceHero
        title="MacBook Repair & Upgrade Services"
        subtitle="Expert MacBook Repairs by Certified Technicians"
        description="Professional repair services for all MacBook models including Air, Pro, and Retina displays. We fix everything from screen damage to logic board issues."
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Key Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our MacBook Repair Service?</h2>
          <ServiceBenefits benefits={benefits} />
        </section>

        {/* Services Grid */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold mb-8">Our MacBook Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hardware Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Screen Replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Battery Replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Keyboard Replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Logic Board Repair</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Performance Upgrades</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>SSD Upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>RAM Upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>OS Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  <span>Data Migration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Repair Process</h2>
          <ServiceProcess steps={repairProcess} />
        </section>

        {/* Guarantees */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">All repairs backed by our comprehensive warranty</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">Most repairs completed within 24-48 hours</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Certified technicians with years of experience</p>
            </div>
          </div>
        </section>

        {/* CTA */}
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
              <Link
                to="/pricing"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      </div>
    </ReducedMotion>
  );
});