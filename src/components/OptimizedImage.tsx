import { memo } from 'react';
import { lazyLoadImage } from '../utils/LazyLoad';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    }

export default memo(function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
    return (
        <img
        src={lazyLoadImage(src)}
        alt={alt}
        loading="lazy"
        className={className}
        decoding="async"
        />
    );
});