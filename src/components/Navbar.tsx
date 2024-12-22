import { Menu, X, Wrench } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
              <Wrench className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold tracking-wide"><span className='text-xl font-bold text-red-500'>IFIX</span>HUT</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md">Services</Link>
              <Link to="/custom-pc" className="hover:bg-gray-700 px-3 py-2 rounded-md">Custom PC</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/services" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Services</Link>
            <Link to="/custom-pc" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Custom PC</Link>
            <Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}