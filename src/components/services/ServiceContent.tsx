import {  ChevronRight } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface ServiceContentProps {
    title: string;
    description: string;
    link: string;
    }

export const ServiceContent = memo(function ServiceContent({ title, description, link }: ServiceContentProps) {
    return (
        <>
        <h3 className="text-white text-xl font-bold mb-2 text-pretty">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <Link
        to={link}
        className='text-slate-400 hover:text-slate-200'
        >
            See More<ChevronRight className='inline-block w-4 h-4'/>
        </Link>
        </>
    );
});