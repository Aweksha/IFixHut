import { memo } from 'react';
import { type ServiceFeature } from '../../data/services';
import { Check } from 'lucide-react';

interface ServiceFeatureListProps {
    features: ServiceFeature[];
}

export default memo(function ServiceFeatureList({ features }: ServiceFeatureListProps) {
    return (
        <div className="space-y-4">
        {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
});