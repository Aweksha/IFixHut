import { motion } from 'framer-motion';
import QuickLinks from './QuickLinks';
import ServiceLinks from './ServiceLinks';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuickLinks />
            <div className="mt-6">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ServiceLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
          <LocationMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col lg:flex-row justify-around items-center mt-12 pt-10 border-t border-slate-600 text-center text-gray-400 text-lg"
        >
          <p className='mb-10 md:mb-0'>© {new Date().getFullYear()} IFIXHUT. All rights reserved.</p>
          <div className="flex flex-row gap-8">
            <Link to="#" className='text-sm lg:text-lg hover:text-red-700'>Terms of Service</Link>
            <Link to="#" className='text-sm lg:text-lg hover:text-red-700'>Privacy Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}