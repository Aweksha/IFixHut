import { memo } from 'react';
import { reviews } from '../../data/reviews';
import ReviewCard from './ReviewCard';
import { ReducedMotion } from '../animations/ReducedMotion';

export default memo(function ReviewsSection() {
    return (
        <ReducedMotion className="bg-slate-50 py-16 shadow-slate-200 shadow-inner rounded-s-2xl p-4">
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Read reviews from our satisfied customers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
            </div>

            <div className="text-center mt-12">
            <a
                href="https://www.google.com/maps/place/IFIXHUT+PC+MAC+SERVICE/@33.1983626,-96.6439483,16z/data=!4m6!3m5!1s0x864c13196982e353:0x94a5f5bd6a7701e7!8m2!3d33.1989462!4d-96.6427252!16s%2Fg%2F11k004d9ng?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
                View all reviews on Google
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            </div>
        </div>
        </ReducedMotion>
    );
});