
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronRight, Heart } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

export function TopExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const [experiences] = useState([{
    title: "Dharavi slum tour in Mumbai by Female tour guides of the slum",
    rating: 4.9,
    reviews: 1378,
    price: 10,
    image: "https://images.unsplash.com/photo-1578639009955-4e0c8c0efdea?w=600&auto=format&fit=crop"
  }, {
    title: "Elephanta Caves Exploration: Guided Tour with Ferry Experience",
    rating: 5.0,
    reviews: 99,
    price: 38,
    image: "https://images.unsplash.com/photo-1609863539575-efb3728e44a7?w=600&auto=format&fit=crop"
  }, {
    title: "Mumbai Elephanta Caves Private Half-Day Tour including Guide",
    rating: 4.8,
    reviews: 110,
    price: 105,
    image: "https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?w=600&auto=format&fit=crop"
  }, {
    title: "Dharavi Slum Tour",
    rating: 4.9,
    reviews: 523,
    price: 21,
    image: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=600&auto=format&fit=crop"
  }]);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16" ref={ref}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Top experiences in Mumbai</h2>
          <NewFeatureBadge className="ml-2" />
        </div>
        <Button variant="link" className="text-blue-600 flex items-center">
          See all <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="h-48 w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop";
                  }}
                />
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-2 mb-2">{experience.title}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm">{experience.rating}</span>
                  <span className="mx-1 text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{experience.reviews} reviews</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold">From ${experience.price}</span>
                  <span className="text-gray-500"> / person</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
