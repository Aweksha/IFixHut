import { memo } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    max?: number;
}

export default memo(function StarRating({ rating, max = 5 }: StarRatingProps) {
    return (
        <div className="flex">
        {[...Array(max)].map((_, i) => (
            <Star
            key={i}
            className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
            />
        ))}
        </div>
    );
});