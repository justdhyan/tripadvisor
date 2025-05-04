
import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const RefinedHero: React.FC = () => {
  return (
    <div className="relative">
      <div className="h-[500px] bg-gradient-to-r from-tripadvisor-darkPurple to-tripadvisor-darkGreen">
        <div className="absolute inset-0 bg-center bg-cover bg-blend-overlay bg-opacity-40" 
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&auto=format&fit=crop)' }} />
        
        <motion.div 
          className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover your next adventure
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from TripAdvisor
          </motion.p>
          
          <motion.div 
            className="w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SearchBar />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="py-2 px-6 rounded-full bg-white text-tripadvisor-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Hotels
            </motion.button>
            <motion.button 
              className="py-2 px-6 rounded-full bg-white text-tripadvisor-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Things to Do
            </motion.button>
            <motion.button 
              className="py-2 px-6 rounded-full bg-white text-tripadvisor-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Restaurants
            </motion.button>
            <motion.button 
              className="py-2 px-6 rounded-full bg-white text-tripadvisor-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Vacation Rentals
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefinedHero;
