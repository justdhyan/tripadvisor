import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Hotels", href: "/hotels" },
    { name: "Things to Do", href: "/things-to-do" },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Travel Stories", href: "/travel-stories" },
    { name: "Cruises", href: "/cruises" },
    { name: "Flights", href: "/flights" }
  ];

  const menuItems = [
    { name: "Write a review", href: "/review" },
    { name: "Post photos", href: "/photos" },
    { name: "Trips", href: "/trips" },
    { name: "Travel forum", href: "/forum" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background trip-shadow" : "bg-background md:bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 md:h-20 items-center justify-between">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 text-sm hover:bg-secondary rounded-full text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-l border-gray-300 dark:border-gray-700 mx-2 h-6 self-center"></div>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-none text-sm"
            >
              <Bell className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">Notifications</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-none text-sm"
            >
              <Heart className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">Trips</span>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full text-white bg-tripadvisor hover:bg-tripadvisor-dark"
            >
              <User className="h-4 w-4 mr-1" />
              <span>Sign in</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-sm rounded-md hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                className="justify-start rounded-md"
              >
                <Bell className="h-4 w-4 mr-2" />
                <span>Notifications</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start rounded-md"
              >
                <Heart className="h-4 w-4 mr-2" />
                <span>Trips</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="justify-start rounded-md text-white bg-tripadvisor hover:bg-tripadvisor-dark"
              >
                <User className="h-4 w-4 mr-2" />
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
