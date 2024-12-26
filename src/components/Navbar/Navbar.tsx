import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import ServicesDropdown from './ServicesDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ top: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="sticky top-0 rounded-bl-2xl rounded-br-2xl bg-[rgba(50,23,77,.5)] backdrop-blur-md z-50 shadow-black shadow-2xl text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/src/assets/logo.png" alt="IFIXHUT Logo" className="h-20 w-32" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <ServicesDropdown />
              <NavLink to="/custom-pc">Custom PC</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
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
            <ServicesDropdown />
            <NavLink to="/custom-pc">Custom PC</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
}