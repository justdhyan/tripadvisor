
import { Search, Home, MapPin, Utensils, Plane, Car } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function TripAdvisorHero() {
  const [activeTab, setActiveTab] = useState("search-all");
  
  return (
    <div className="w-full bg-white dark:bg-card py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-16">Where to?</h1>
        
        <div className="max-w-xl mx-auto">
          <div className="flex flex-wrap border-b border-border mb-4">
            <TabButton 
              id="search-all"
              label="Search All"
              icon={<Home className="h-4 w-4" />}
              active={activeTab === "search-all"}
              onClick={() => setActiveTab("search-all")}
            />
            <TabButton 
              id="hotels"
              label="Hotels"
              icon={<Home className="h-4 w-4" />}
              active={activeTab === "hotels"}
              onClick={() => setActiveTab("hotels")}
            />
            <TabButton 
              id="things-to-do"
              label="Things to Do"
              icon={<MapPin className="h-4 w-4" />}
              active={activeTab === "things-to-do"}
              onClick={() => setActiveTab("things-to-do")}
            />
            <TabButton 
              id="restaurants"
              label="Restaurants"
              icon={<Utensils className="h-4 w-4" />}
              active={activeTab === "restaurants"}
              onClick={() => setActiveTab("restaurants")}
            />
            <TabButton 
              id="flights"
              label="Flights"
              icon={<Plane className="h-4 w-4" />}
              active={activeTab === "flights"}
              onClick={() => setActiveTab("flights")}
            />
            <TabButton 
              id="vacation-rentals"
              label="Vacation Rentals"
              icon={<Car className="h-4 w-4" />}
              active={activeTab === "vacation-rentals"}
              onClick={() => setActiveTab("vacation-rentals")}
            />
          </div>
          
          <div className="flex items-center w-full rounded-full bg-white dark:bg-card border border-border shadow-sm">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Places to go, things to do, hotels..."
                className="w-full py-3 px-12 rounded-l-full border-none focus:outline-none bg-transparent"
              />
            </div>
            <Button className="rounded-full px-6 py-5 bg-tripadvisor text-black hover:bg-tripadvisor-dark">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

type TabButtonProps = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

function TabButton({ id, label, icon, active, onClick }: TabButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`flex items-center justify-center px-3 py-2 text-sm font-medium flex-1 ${
        active 
          ? "border-b-2 border-black dark:border-white text-black dark:text-white" 
          : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      }`}
    >
      {icon}
      <span className="ml-1.5">{label}</span>
    </button>
  );
}
