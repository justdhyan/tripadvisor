
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NewFeatureBadge from "./NewFeatureBadge";

export function MoreToExplore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const articles = [
    {
      title: "5 flower festivals worth planning a trip around",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=700&h=500&auto=format&fit=crop",
    },
    {
      title: "6 family-friendly European cities for spring break",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&h=500&auto=format&fit=crop",
    },
    {
      title: "A first timer's guide to Canada's national parks",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=700&h=500&auto=format&fit=crop",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        <div className="flex items-center justify-between mb-6">
          <motion.h2 
            className="text-2xl font-bold" 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            More to Explore
            <NewFeatureBadge className="ml-2" />
          </motion.h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {articles.map((article, index) => (
            <motion.div 
              key={index} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              variants={item}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-medium transition-transform group-hover:translate-x-2 duration-300">{article.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
