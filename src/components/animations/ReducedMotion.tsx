import { useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ReducedMotionProps {
    children: ReactNode;
    className?: string;
}

export function ReducedMotion({ children, className = '' }: ReducedMotionProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={className} style={{
        willChange: shouldReduceMotion ? 'auto' : 'transform',
        transform: 'translateZ(0)'
        }}>
        {children}
        </div>
    );
}