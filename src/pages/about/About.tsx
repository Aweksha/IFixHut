import { Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import TechniciansSection from '../../components/TechniciansSection';
import { ExpertiseStats } from '../../components/about/ExpertiseStats';
import Consultation from '../../components/Consultation';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About <span className='text-red-600'>IFIX</span>HUT</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in technology repair and custom PC solutions since 2010
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Expert Technicians</h3>
                  <p className="text-gray-600">Our team consists of certified professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Quick Turnaround</h3>
                  <p className="text-gray-600">Most repairs completed within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Warranty Guaranteed</h3>
                  <p className="text-gray-600">All repairs come with a 90-day warranty</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80" 
              alt="Tech repair workspace" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <ExpertiseStats />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Contact us today for all your tech repair and custom PC needs</p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
        <TechniciansSection/>
      </div>
      <Consultation/>
    </div>
  );
}