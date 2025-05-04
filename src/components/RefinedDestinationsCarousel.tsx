
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard';

interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  category?: string;
  isVerified?: boolean;
}

interface DestinationsCarouselProps {
  title: string;
  destinations: Destination[];
  viewAllLink?: string;
  subtitle?: string;
}

const RefinedDestinationsCarousel: React.FC<DestinationsCarouselProps> = ({ 
  title, 
  destinations,
  viewAllLink,
  subtitle
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      const newScrollLeft = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
        
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Update button visibility after scroll
      setTimeout(() => {
        if (carouselRef.current) {
          setShowLeftButton(carouselRef.current.scrollLeft > 0);
          setShowRightButton(
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10
          );
        }
      }, 300);
    }
  };
  
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {viewAllLink && (
          <a href={viewAllLink} className="trip-link text-sm font-medium">
            View all
          </a>
        )}
      </div>
      
      <div className="relative">
        {/* Navigation Buttons */}
        {showLeftButton && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow-tripadvisor p-2 hover:shadow-tripadvisor-hover transition-shadow"
            aria-label="Previous items"
          >
            <ChevronLeft className="h-6 w-6 text-tripadvisor-black" />
          </button>
        )}
        
        {showRightButton && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full shadow-tripadvisor p-2 hover:shadow-tripadvisor-hover transition-shadow"
            aria-label="Next items"
          >
            <ChevronRight className="h-6 w-6 text-tripadvisor-black" />
          </button>
        )}
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={() => {
            if (carouselRef.current) {
              setShowLeftButton(carouselRef.current.scrollLeft > 0);
              setShowRightButton(
                carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth - 10
              );
            }
          }}
        >
          {destinations.map((destination) => (
            <div key={destination.id} className="min-w-[250px] max-w-[250px] flex-shrink-0">
              <DestinationCard 
                image={destination.image}
                name={destination.name}
                rating={destination.rating}
                reviewCount={destination.reviewCount}
                category={destination.category}
                isVerified={destination.isVerified}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefinedDestinationsCarousel;
