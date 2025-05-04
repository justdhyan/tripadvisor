
import React from 'react';
import { Button } from './ui/button';
import NewFeatureBadge from './NewFeatureBadge';

const ThingsToDo = () => {
  const experiences = [
    {
      title: 'Dharavi slum tour in Mumbai',
      image: 'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=600&auto=format&fit=crop',
      rating: 4.5,
      reviews: 2975,
      from: '$14.99'
    },
    {
      title: 'Elephanta Caves Exploration',
      image: 'https://images.unsplash.com/photo-1609863539575-efb3728e44a7?w=600&auto=format&fit=crop',
      rating: 4.3,
      reviews: 1842,
      from: '$24.99'
    },
    {
      title: 'Mumbai Street Food Tour',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop',
      rating: 4.8,
      reviews: 3201,
      from: '$18.50'
    },
    {
      title: 'Bollywood Studio Experience',
      image: 'https://images.unsplash.com/photo-1626516011733-fd571b12c58d?w=600&auto=format&fit=crop',
      rating: 4.2,
      reviews: 1560,
      from: '$29.99'
    },
  ];

  return (
    <div className="my-12 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Book these experiences for a close-up look at Mumbai.</h2>
          <NewFeatureBadge className="ml-2" />
        </div>
        <Button variant="link" className="text-blue-600">
          See all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="h-44 relative">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{experience.title}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{experience.rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-gray-500">{experience.reviews} reviews</span>
              </div>
              <div className="mt-2 font-medium">From {experience.from}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
