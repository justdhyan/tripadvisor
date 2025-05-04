
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

export function TopDestinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const destinations = [
    {
      name: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop",
    },
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop",
    },
    {
      name: "Las Vegas, NV",
      image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=600&auto=format&fit=crop",
    },
    {
      name: "Reykjavik, Iceland",
      image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600&auto=format&fit=crop",
    },
  ];

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

  return (
    <section className="py-10 bg-white dark:bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          Top destinations for your next vacation
        </motion.h2>
        
        <div className="relative">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {destinations.map((destination, index) => (
              <motion.div 
                key={index} 
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 } 
                }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold transition-transform duration-300 group-hover:translate-y-[-5px]">{destination.name}</h3>
                </div>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-card rounded-full shadow-md z-10 transition-transform hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
