import { memo } from 'react';
import { type Service } from '../../data/services';
import ServiceFeatureList from './ServiceFeatureList';
import { ReducedMotion } from '../animations/ReducedMotion';
import CommonIssues from './CommonIssues';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
    service: Service;
}

export default memo(function ServiceLayout({ service }: ServiceLayoutProps) {
    return (
        <ReducedMotion className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.longDescription && (
                    <p className="text-gray-700 mb-8">{service.longDescription}</p>
                )}

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Our Services Include</h2>
                    <ServiceFeatureList features={service.features} />
                </div>

                {service.commonIssues && (
                    <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Common Issues We Fix</h2>
                    <CommonIssues issues={service.commonIssues} />
                    </div>
                )}

                {service.pricing && (
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-lg">
                        Starting at <span className="font-bold">${service.pricing.startingAt}</span>
                    </p>
                    {service.pricing.disclaimer && (
                        <p className="text-sm text-gray-600 mt-1">{service.pricing.disclaimer}</p>
                    )}
                    </div>
                )}

                {service.warranty && (
                    <div className="mt-4 text-sm text-gray-600">
                    <p>✓ {service.warranty}</p>
                    </div>
                )}

                <div className="mt-8">
                    <Link
                    to="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    Get a Quote
                    </Link>
                </div>
                </div>
            </div>
        </ReducedMotion>
    );
});