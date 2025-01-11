import { memo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { ReducedMotion } from '../animations/ReducedMotion';

interface GoogleReview {
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
    relative_time_description: string;
}

interface ReviewsData {
    reviews: GoogleReview[];
    rating: number;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const reviewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default memo(function GoogleReviewsSection() {
    const [reviewsData, setReviewsData] = useState<ReviewsData>({ reviews: [], rating: 0 });
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const reviewsPerPage = 3;

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://ifixhut.vercel.app/api/reviews');
                if (response.data.reviews) {
                    // Filter for only 5-star reviews
                    const fiveStarReviews = response.data.reviews.filter(
                        (review: GoogleReview) => review.rating === 5
                    );
                    setReviewsData({
                        reviews: fiveStarReviews,
                        rating: response.data.rating
                    });
                } else {
                    setError('No reviews available');
                }
            } catch (err) {
                setError('Failed to load reviews. Please try again later.');
                console.error('Error fetching reviews:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const totalPages = Math.ceil(reviewsData.reviews.length / reviewsPerPage);
    const currentReviews = reviewsData.reviews.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    if (error) {
        return (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
                {error}
            </div>
        );
    }

    return (
        <ReducedMotion className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
                    <div className="flex items-center justify-center gap-1 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-6 h-6 ${i < Math.round(reviewsData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-lg font-semibold">{reviewsData.rating.toFixed(1)}</span>
                        </div>
                    </div>
                    <p className="text-gray-600">Overall rating based on all reviews</p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="relative w-16 h-16">
                            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-ping" />
                            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
                        </div>
                    </div>
                ) : (
                    <>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <AnimatePresence mode="wait">
                                    {currentReviews.length > 0 ? (
                                        currentReviews.map((review) => (
                                            <motion.div
                                                key={review.time}
                                                variants={reviewVariants}
                                                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-100"
                                                whileHover={{ 
                                                    y: -5,
                                                    transition: { type: "spring", stiffness: 300 }
                                                }}
                                            >
                                                <div className="flex items-center mb-4">
                                                    <img
                                                        src={review.profile_photo_url}
                                                        alt={review.author_name}
                                                        className="w-12 h-12 rounded-full mr-4 border-2 border-gray-100"
                                                    />
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                                                        <div className="flex gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <p className="text-gray-600 line-clamp-4 mb-2">{review.text}</p>
                                                    {review.text.length > 280 && (
                                                        <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white via-white to-transparent px-2">
                                                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                                Read more
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex justify-between items-center mt-4">
                                                    <time className="text-sm text-gray-500">
                                                        {review.relative_time_description}
                                                    </time>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="col-span-3 text-center text-gray-500">
                                            No 5-star reviews available at the moment
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {totalPages > 1 && (
                                <div className="flex justify-center items-center mt-8 gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={prevPage}
                                        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors border border-gray-100"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                                    </motion.button>
                                    <span className="text-gray-600 font-medium">
                                        {currentPage + 1} / {totalPages}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={nextPage}
                                        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors border border-gray-100"
                                    >
                                        <ChevronRight className="w-6 h-6 text-gray-600" />
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-12"
                        >
                            <a
                                href="https://www.google.com/maps/place/IFIXHUT+PC+MAC+SERVICE/@33.1983626,-96.6439483,16z/data=!4m6!3m5!1s0x864c13196982e353:0x94a5f5bd6a7701e7!8m2!3d33.1989462!4d-96.6427252!16s%2Fg%2F11k004d9ng?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full text-blue-600 hover:text-blue-800 hover:border-blue-200 transition-colors shadow-sm hover:shadow group"
                            >
                                <span className="font-medium">View all reviews on Google</span>
                                <ExternalLink className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </>
                )}
            </div>
        </ReducedMotion>
    );
});