export function lazyLoadImage(src: string): string {
    // If the src is already an imported asset (webpack/vite processed), return as is
    if (typeof src === 'string' && (src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('http'))) {
    return src;
}

// For imported images (which are processed by bundler), return the src directly
return src;
}