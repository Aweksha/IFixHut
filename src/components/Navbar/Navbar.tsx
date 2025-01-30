import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import ServicesDropdown from './ServicesDropdown';
import { services } from '../../data/services'
import logo  from '../../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isOpen);

  return (
    <motion.nav
      initial={{ top: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{once: false}}
      className="sticky top-0 rounded-bl-2xl rounded-br-2xl bg-slate-600/60 z-50 shadow-slate-900 shadow-2xl text-white py-2"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="IFIXHUT Logo" className="lg:h-24 lg:w-40 h-16 w-28 pb-1" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <ServicesDropdown />
              <NavLink to="/custom-pc">Custom PC</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link
                to="/book-appointment"
                className="bg-blue-600 hover:bg-blue-500/80 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/">Home</NavLink>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="w-full flex items-center justify-between hover:bg-slate-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-1"
                  >
                    <NavLink to="/services" className="block">
                      All Services
                    </NavLink>
                    {services.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        className="block"
                        clickValue={() => {
                          setIsServicesOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink to="/custom-pc">Custom PC</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/book-appointment"
              className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}