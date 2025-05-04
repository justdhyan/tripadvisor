
import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WeatherWidget } from "@/components/WeatherWidget";
import { cn } from "@/lib/utils";

const destinations = [
  {
    id: 1,
    name: "New Delhi",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/new-delhi.jpg?w=700&h=500&s=1",
    description: "Explore India's vibrant capital city",
  },
  {
    id: 2,
    name: "Mumbai",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/gateway-of-india-mumbai.jpg?w=700&h=500&s=1",
    description: "Experience the city that never sleeps",
  },
  {
    id: 3,
    name: "Goa",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/goa.jpg?w=700&h=500&s=1",
    description: "Relax on beautiful beaches and enjoy the nightlife",
  },
  {
    id: 4,
    name: "Jaipur",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=700&h=500&s=1",
    description: "Discover the pink city's royal heritage",
  },
  {
    id: 5,
    name: "Shimla",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/chail-palace.jpg?w=700&h=500&s=1",
    description: "Escape to the serene mountains",
  },
  {
    id: 6,
    name: "Agra",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9c/a0/26/facade-of-taj-mahal.jpg?w=700&h=500&s=1",
    description: "Home to the iconic Taj Mahal",
  },
  {
    id: 7,
    name: "Bangalore",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/32/31/bangalore-palace.jpg?w=700&h=500&s=1",
    description: "India's tech hub with pleasant climate",
  },
];

export function DestinationsCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
      checkScrollButtons();
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
      checkScrollButtons();
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      const handleScroll = () => checkScrollButtons();
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Popular Destinations</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full transition-opacity",
              !showLeftButton && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollLeft}
            disabled={!showLeftButton}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full transition-opacity",
              !showRightButton && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollRight}
            disabled={!showRightButton}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto scrollbar-none pb-4"
        onScroll={() => checkScrollButtons()}
      >
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="min-w-[260px] max-w-[260px] transition-transform duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setActiveCard(destination.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Card className="overflow-hidden h-[350px]">
              <div className="relative h-40">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{destination.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {destination.description}
                </p>
                
                {activeCard === destination.id && (
                  <div className="mt-3 animate-fade-in">
                    <WeatherWidget location={destination.name} />
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3 text-sm border border-tripadvisor text-tripadvisor hover:bg-tripadvisor hover:text-white"
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
