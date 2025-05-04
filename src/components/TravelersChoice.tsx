
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

export function TravelersChoice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-10 bg-[#fff9e6] dark:bg-[#332200]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-tripadvisor-yellow rounded-full p-3 mr-3">
                <svg
                  className="h-10 w-10 text-black"
                  viewBox="0 0 44 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.4 8.25C21.535 8.25 16 13.42 16 19.825C16 26.23 21.535 31.4 28.4 31.4C35.265 31.4 40.8 26.23 40.8 19.825C40.8 13.42 35.265 8.25 28.4 8.25ZM28.4 26.65C24.26 26.65 20.945 23.61 20.945 19.825C20.945 16.04 24.26 13 28.4 13C32.54 13 35.855 16.04 35.855 19.825C35.855 23.61 32.54 26.65 28.4 26.65Z" />
                  <path d="M11.2 8.25C4.33502 8.25 -1.2207e-05 13.42 -1.2207e-05 19.825C-1.2207e-05 26.23 4.33502 31.4 11.2 31.4C18.065 31.4 22.4 26.23 22.4 19.825C22.4 13.42 18.065 8.25 11.2 8.25ZM11.2 26.65C7.06002 26.65 3.74502 23.61 3.74502 19.825C3.74502 16.04 7.06002 13 11.2 13C15.34 13 18.655 16.04 18.655 19.825C18.655 23.61 15.34 26.65 11.2 26.65Z" />
                  <path d="M19.8 2.075C19.8 3.22043 18.8454 4.15 17.675 4.15C16.5046 4.15 15.55 3.22043 15.55 2.075C15.55 0.929568 16.5046 0 17.675 0C18.8454 0 19.8 0.929568 19.8 2.075Z" />
                </svg>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Travelers' Choice Awards Best of the Best
                <NewFeatureBadge className="ml-2" />
              </h2>
              <p className="text-lg mb-6">
                Among our top 1% of places, stays, eats, and experiences—decided by you.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-black text-white hover:bg-black/80 rounded-full px-6 py-2 transition-transform hover:scale-105">
                See the winners
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:block group"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=700&h=500&auto=format&fit=crop" 
              alt="Travelers Choice" 
              className="rounded-lg transition-transform duration-500 group-hover:scale-105 shadow-md" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
