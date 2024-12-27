import { memo } from 'react';

interface ServiceContentProps {
    title: string;
    description: string;
    }

export const ServiceContent = memo(function ServiceContent({ title, description }: ServiceContentProps) {
    return (
        <>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        </>
    );
});