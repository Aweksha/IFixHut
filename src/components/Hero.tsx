import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink }: HeroProps) {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .3 }}
      className="absolute inset-0 bg-black bg-opacity-60"
      >
        <div className="max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-8">{subtitle}</p>
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}