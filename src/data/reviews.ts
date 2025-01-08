export interface Review {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    photoUrl?: string;
}

// These would be updated periodically through a build process
export const reviews: Review[] = [
{
    id: '1',
    author: 'John Smith',
    rating: 5,
    text: 'Excellent service! They fixed my MacBook Pro in just a few hours. Very professional and knowledgeable staff.',
    date: '2024-01-15',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
},
{
    id: '2',
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Best repair shop in town! They recovered all my data from a failed hard drive. Highly recommended!',
    date: '2024-01-10'
},
{
    id: '3',
    author: 'Mike Williams',
    rating: 5,
    text: 'Great experience with their custom PC building service. They helped me choose the perfect components within my budget.',
    date: '2024-01-05',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
},
{
    id: '4',
    author: 'Mike Williams',
    rating: 5,
    text: 'Great experience with their custom PC building service. They helped me choose the perfect components within my budget.',
    date: '2024-01-05',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
},
{
    id: '5',
    author: 'Mike Williams',
    rating: 5,
    text: 'Great experience with their custom PC building service. They helped me choose the perfect components within my budget.',
    date: '2024-01-05',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
},
{
    id: '6',
    author: 'Mike Williams',
    rating: 5,
    text: 'Great experience with their custom PC building service. They helped me choose the perfect components within my budget.',
    date: '2024-01-05',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
}
];