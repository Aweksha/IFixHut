import { MapPin, Phone, Mail} from 'lucide-react';
import LocationMap from './LocationMap';
import BusinessHours from './BusinessHours';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">IFIXHUT</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <p>2310 Virginia Pkwy<br />McKinney, TX 75071</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <p>+1 469-300-3936</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <p>info@ifixhut.com</p>
              </div>
            </div>
            <SocialLinks />
          </div>

          {/* Business Hours */}
          <div className="text-gray-300">
            <BusinessHours />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/custom-pc" className="hover:text-blue-400 transition-colors">Custom PC</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <LocationMap />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className='space-x-1'>© {new Date().getFullYear()} IFIXHUT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}