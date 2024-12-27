import { memo } from 'react';

interface ServiceContentProps {
    title: string;
    description: string;
    }

export const ServiceContent = memo(function ServiceContent({ title, description }: ServiceContentProps) {
    return (
        <>
        <h3 className="text-white text-xl font-bold mb-2 text-pretty">{title}</h3>
        <p className="text-gray-300">{description}</p>
        </>
    );
});