import { memo } from 'react';
import { type Review } from '../../data/reviews';
import StarRating from './StarRating';
import OptimizedImage from '../OptimizedImage';
import { motion } from 'framer-motion';

interface ReviewCardProps {
    review: Review;
}

export default memo(function ReviewCard({ review }: ReviewCardProps) {
    return (
        <motion.div className="bg-white p-6 rounded-lg shadow-lg w-80 h-60 flex-shrink-0 snap-center"
        whileHover = {{scale: 1.03}}
        >
        <div className="flex items-center mb-4">
            {review.photoUrl ? (
            <OptimizedImage
                src={review.photoUrl}
                alt={review.author}
                className="w-12 h-12 rounded-full mr-4"
            />
            ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">
                {review.author[0]}
                </span>
            </div>
            )}
            <div>
            <h3 className="font-semibold">{review.author}</h3>
            <StarRating rating={review.rating} />
            </div>
        </div>
        <p className="text-gray-600 mb-2">{review.text}</p>
        <time className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
        </time>
        </motion.div>
    );
});