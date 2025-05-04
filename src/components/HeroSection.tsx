
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Hotel, MapPin, Coffee, Plane, Car, Anchor } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative w-full h-[550px] md:h-[500px] bg-gradient-to-b from-blue-600/30 to-blue-900/50 dark:from-blue-900/30 dark:to-blue-950/50">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
           style={{ backgroundImage: 'url("https://static.tacdn.com/img2/brand/home/homebannerintlnew.webp")' }}>
      </div>
      
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 z-10"></div>
      
      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center text-white pt-16">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            India's largest travel guidance platform
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Browse hundreds of millions of traveller reviews and opinions
          </p>
          <div className="w-full max-w-2xl bg-white dark:bg-card rounded-lg shadow-lg">
            <Tabs defaultValue="places" className="w-full">
              <div className="px-2 pt-2">
                <TabsList className="w-full bg-muted grid grid-cols-6 h-12">
                  <TabsTrigger value="places" className="flex flex-col items-center justify-center text-xs data-[state=active]:text-primary">
                    <MapPin className="h-4 w-4 mb-0.5" />
                    Places
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="flex flex-col items-center justify-center text-xs">
                    <Hotel className="h-4 w-4 mb-0.5" />
                    Hotels
                  </TabsTrigger>
                  <TabsTrigger value="restaurants" className="flex flex-col items-center justify-center text-xs">
                    <Coffee className="h-4 w-4 mb-0.5" />
                    Restaurants
                  </TabsTrigger>
                  <TabsTrigger value="things" className="flex flex-col items-center justify-center text-xs">
                    <MapPin className="h-4 w-4 mb-0.5" />
                    Things to Do
                  </TabsTrigger>
                  <TabsTrigger value="flights" className="flex flex-col items-center justify-center text-xs">
                    <Plane className="h-4 w-4 mb-0.5" />
                    Flights
                  </TabsTrigger>
                  <TabsTrigger value="rentals" className="flex flex-col items-center justify-center text-xs">
                    <Car className="h-4 w-4 mb-0.5" />
                    Rentals
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="places" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Where to?"
                      className="pl-9 py-6"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="hotels" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Hotel className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Hotel name or destination"
                      className="pl-9 py-6"
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="restaurants" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Coffee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Restaurant name or destination"
                      className="pl-9 py-6"
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="things" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Attraction, activity or destination"
                      className="pl-9 py-6"
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="flights" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Plane className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Flight destination"
                      className="pl-9 py-6"
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="rentals" className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Car className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Rental destination"
                      className="pl-9 py-6"
                    />
                  </div>
                  <Button 
                    className="bg-tripadvisor hover:bg-tripadvisor-dark px-6"
                  >
                    Search
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
