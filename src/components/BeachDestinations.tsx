
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

export function BeachDestinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const destinations = [
    {
      name: "World",
      image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=700&h=500&auto=format&fit=crop",
    },
    {
      name: "Luxury",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&h=500&auto=format&fit=crop",
    },
    {
      name: "Family-Friendly",
      image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=700&h=500&auto=format&fit=crop",
    },
    {
      name: "One of a Kind",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&h=500&auto=format&fit=crop",
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
    <section className="my-12 bg-white dark:bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-1">Stay at the world's top hotels</h2>
          <p className="text-sm text-muted-foreground mb-6">2025's Traveler's Choice Awards Best of the Best Hotels</p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {destinations.map((destination, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 } 
                }}
              >
                <Card className="relative h-48 rounded-lg overflow-hidden flex-shrink-0 border-none group">
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-tripadvisor-yellow rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-xs font-bold">2025</span>
                    </div>
                  </div>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-card rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors duration-300"
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
