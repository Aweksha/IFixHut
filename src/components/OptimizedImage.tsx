import { memo } from 'react';
import { lazyLoadImage } from '../utils/LazyLoad';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    }

export default memo(function OptimizedImage({
    src,
    alt,
    className = '',
    priority = false
    }: OptimizedImageProps) {
    return (
        <img
        src={lazyLoadImage(src)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={className}
        decoding="async"
        />
    );
});