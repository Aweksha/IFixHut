import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
    icon: LucideIcon;
}

export const ServiceIcon = memo(function ServiceIcon({ icon: Icon }: ServiceIconProps) {
    return <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />;
});