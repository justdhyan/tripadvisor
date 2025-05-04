
import { BadgeCheck } from "lucide-react";
import RefinedButton from "./RefinedButton";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

interface VerifiedPropertyProps {
  name: string;
  location: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  amenities: string[];
  isFeatured?: boolean;
}

export function VerifiedPropertyCard({
  name,
  location,
  price,
  rating,
  reviewCount,
  image,
  amenities,
  isFeatured = false
}: VerifiedPropertyProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute top-3 left-3 flex gap-2">
            {isFeatured && (
              <motion.span 
                className="bg-tripadvisor-green text-white text-xs font-semibold px-2 py-1 rounded-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Featured
              </motion.span>
            )}
            
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <BadgeCheck className="h-4 w-4 text-tripadvisor-green" />
              <span className="text-xs font-semibold">Verified</span>
            </motion.div>
          </div>
          
          <div className="absolute top-3 right-3 bg-white/90 rounded-md px-2 py-1 backdrop-blur-sm">
            <div className="flex items-center">
              <div className="text-sm font-bold">{rating}</div>
              <div className="w-px h-4 bg-gray-300 mx-1.5"></div>
              <div className="text-xs text-gray-600">{reviewCount} reviews</div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{location}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {amenities.slice(0, 3).map((amenity, idx) => (
              <motion.span 
                key={idx} 
                className="text-xs bg-muted px-2 py-0.5 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 175, 135, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                {amenity}
              </motion.span>
            ))}
            {amenities.length > 3 && (
              <motion.span 
                className="text-xs bg-muted px-2 py-0.5 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                +{amenities.length - 3}
              </motion.span>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="font-bold">
              {price}
              <span className="text-xs font-normal text-gray-500"> / night</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <RefinedButton variant="outline" size="sm" className="transition-transform hover:scale-105">
                View Deal
              </RefinedButton>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Create a component that displays a grid of verified properties
export function VerifiedProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const properties = [
    {
      name: "Grand Hyatt Resort",
      location: "Bali, Indonesia",
      price: "$120",
      rating: 4.8,
      reviewCount: 1240,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      amenities: ["Pool", "Spa", "Free WiFi", "Beach Access", "Restaurant"],
      isFeatured: true,
    },
    {
      name: "Mountain View Lodge",
      location: "Shimla, India",
      price: "$85",
      rating: 4.5,
      reviewCount: 867,
      image: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=800&q=80",
      amenities: ["Mountain View", "Breakfast Included", "Hiking Trails", "Fireplace"],
      isFeatured: false,
    },
    {
      name: "Beach Paradise Resort",
      location: "Goa, India",
      price: "$95",
      rating: 4.7,
      reviewCount: 1089,
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      amenities: ["Beachfront", "Pool", "Bar", "Water Sports", "Breakfast"],
      isFeatured: true,
    },
    {
      name: "Desert Oasis Retreat",
      location: "Jaisalmer, India",
      price: "$75",
      rating: 4.4,
      reviewCount: 632,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      amenities: ["Desert View", "Cultural Tours", "Traditional Food", "Air Conditioning"],
      isFeatured: false,
    },
  ];

  return (
    <div className="py-8" ref={ref}>
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">Verified Properties</h2>
            <NewFeatureBadge className="ml-2" />
          </div>
          <p className="text-muted-foreground">Guaranteed quality and authentic reviews</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <RefinedButton variant="outline" className="transition-transform hover:scale-105">View All</RefinedButton>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {properties.map((property, idx) => (
          <motion.div key={idx} variants={item}>
            <VerifiedPropertyCard {...property} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
