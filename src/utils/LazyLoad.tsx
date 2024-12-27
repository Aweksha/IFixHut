// Utility for lazy loading images
export const lazyLoadImage = (src: string) => `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=800&q=70&output=webp`;

// Preload critical images
export const preloadImages = (images: string[]) => {
    images.forEach(src => {
        const img = new Image();
        img.src = lazyLoadImage(src);
    });
};