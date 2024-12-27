import { memo } from 'react';
import { ReducedMotion } from './animations/ReducedMotion';
import OptimizedImage from './OptimizedImage';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default memo(function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}: HeroProps) {
  return (
    <ReducedMotion className="relative h-[500px] overflow-hidden">
      <OptimizedImage
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl mb-8">{subtitle}</p>
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </ReducedMotion>
  );
});