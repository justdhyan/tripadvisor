
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Globe, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { AISupport } from "./AISupport";
import { motion } from "framer-motion";
import NewFeatureBadge from "./NewFeatureBadge";

export function TripadvisorNavbar() {
  const [showAISupport, setShowAISupport] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
              alt="Tripadvisor" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex mx-4 flex-1 max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <motion.input
              whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 175, 135, 0.2)", scale: 1.01 }}
              transition={{ duration: 0.2 }}
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-background pl-10 pr-4 py-2 text-sm border border-input focus:outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors duration-200">Discover</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link to="/travel-journal" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Travel Journal
              <NewFeatureBadge className="ml-1" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link to="#" className="text-sm font-medium hover:text-primary transition-colors duration-200">Review</Link>
          </motion.div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full relative hover:scale-105 transition-transform duration-200"
              onClick={() => setShowAISupport(!showAISupport)}
            >
              <MessageSquare className="h-4 w-4" />
              <span className="absolute -top-1 -right-1">
                <NewFeatureBadge />
              </span>
            </Button>
            
            <motion.button 
              className="flex items-center text-sm hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Globe className="h-4 w-4 mr-1" />
              <span>USD</span>
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link 
                to="/signin"
                className="text-white bg-black hover:bg-black/90 rounded-full px-5 py-1.5 text-sm font-medium transition-colors duration-200"
              >
                Sign in
              </Link>
            </motion.div>
            
            <div className="relative">
              <ThemeToggle />
              <span className="absolute -top-1 -right-1">
                <NewFeatureBadge />
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <div className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:scale-105 transition-transform duration-200"
              onClick={() => setShowAISupport(!showAISupport)}
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
            <span className="absolute -top-1 -right-1">
              <NewFeatureBadge />
            </span>
          </div>
          
          <div className="relative">
            <ThemeToggle />
            <span className="absolute -top-1 -right-1">
              <NewFeatureBadge />
            </span>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-foreground hover:text-foreground/80 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {showAISupport && (
        <div className="fixed bottom-4 right-4 z-50">
          <AISupport onClose={() => setShowAISupport(false)} />
        </div>
      )}
    </header>
  );
}
