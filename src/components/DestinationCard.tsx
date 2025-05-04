
import React from 'react';
import { Star } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  rating: number;
  reviewCount: number;
  category?: string;
  isVerified?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  name,
  rating,
  reviewCount,
  category,
  isVerified = false,
}) => {
  // Create an array of 5 elements for the stars
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));
  
  return (
    <div className="trip-card group cursor-pointer">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {isVerified && (
          <div className="absolute top-2 right-2 bg-white text-tripadvisor-green text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-center gap-1 mb-1">
          {stars.map((filled, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${filled ? 'text-tripadvisor-green fill-tripadvisor-green' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">{reviewCount} reviews</span>
        </div>
        <h3 className="font-bold text-base mb-1 line-clamp-2">{name}</h3>
        {category && (
          <p className="text-sm text-gray-600">{category}</p>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
