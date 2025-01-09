// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
// const PLACE_ID = 'ChIJU-OCaRkTTIYR5wF3ar31pZQ';

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     if (!GOOGLE_PLACES_API_KEY) {
//         console.error('GOOGLE_PLACES_API_KEY is not set');
//         return res.status(500).json({ message: 'Server configuration error' });
//     }

//     try {
//         const response = await axios.get(
//             `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_PLACES_API_KEY}`
//         );

//         if (!response.data.result || !response.data.result.reviews) {
//             return res.status(404).json({ message: 'No reviews found' });
//         }

//         // Return all reviews and the overall rating
//         return res.status(200).json({
//             reviews: response.data.result.reviews,
//             rating: response.data.result.rating
//         });
//     } catch (error) {
//         console.error('Error fetching reviews:', error);
//         return res.status(500).json({ message: 'Error fetching reviews' });
//     }
// }