
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Snowflake, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

interface WeatherWidgetProps {
  location: string;
  className?: string;
}

interface WeatherData {
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy" | "snowy" | "windy";
  humidity: number;
  wind: number;
  forecast?: {
    day: string;
    temperature: number;
    condition: "sunny" | "cloudy" | "rainy" | "snowy" | "windy";
  }[];
}

const mockWeatherData = {
  "New Delhi": {
    temperature: 32,
    condition: "sunny" as const,
    humidity: 45,
    wind: 8,
    forecast: [
      { day: "Tomorrow", temperature: 33, condition: "sunny" as const },
      { day: "Sat", temperature: 31, condition: "cloudy" as const },
      { day: "Sun", temperature: 30, condition: "cloudy" as const },
    ],
  },
  "Mumbai": {
    temperature: 29,
    condition: "cloudy" as const,
    humidity: 78,
    wind: 12,
    forecast: [
      { day: "Tomorrow", temperature: 28, condition: "rainy" as const },
      { day: "Sat", temperature: 27, condition: "rainy" as const },
      { day: "Sun", temperature: 29, condition: "cloudy" as const },
    ],
  },
  "Goa": {
    temperature: 28,
    condition: "rainy" as const,
    humidity: 82,
    wind: 15,
    forecast: [
      { day: "Tomorrow", temperature: 27, condition: "rainy" as const },
      { day: "Sat", temperature: 28, condition: "rainy" as const },
      { day: "Sun", temperature: 29, condition: "cloudy" as const },
    ],
  },
  "Jaipur": {
    temperature: 33,
    condition: "sunny" as const,
    humidity: 38,
    wind: 6,
    forecast: [
      { day: "Tomorrow", temperature: 34, condition: "sunny" as const },
      { day: "Sat", temperature: 35, condition: "sunny" as const },
      { day: "Sun", temperature: 33, condition: "sunny" as const },
    ],
  },
  "Shimla": {
    temperature: 15,
    condition: "cloudy" as const,
    humidity: 65,
    wind: 10,
    forecast: [
      { day: "Tomorrow", temperature: 14, condition: "rainy" as const },
      { day: "Sat", temperature: 12, condition: "rainy" as const },
      { day: "Sun", temperature: 16, condition: "cloudy" as const },
    ],
  }
};

export function WeatherWidget({ location, className }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForecast, setShowForecast] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchTimeout = setTimeout(() => {
      const data = mockWeatherData[location as keyof typeof mockWeatherData] || {
        temperature: Math.floor(Math.random() * 20) + 15,
        condition: ["sunny", "cloudy", "rainy", "snowy", "windy"][Math.floor(Math.random() * 5)] as any,
        humidity: Math.floor(Math.random() * 50) + 30,
        wind: Math.floor(Math.random() * 20) + 5,
        forecast: [
          { 
            day: "Tomorrow", 
            temperature: Math.floor(Math.random() * 20) + 15, 
            condition: ["sunny", "cloudy", "rainy", "snowy", "windy"][Math.floor(Math.random() * 5)] as any 
          },
          { 
            day: "Sat", 
            temperature: Math.floor(Math.random() * 20) + 15, 
            condition: ["sunny", "cloudy", "rainy", "snowy", "windy"][Math.floor(Math.random() * 5)] as any 
          },
          { 
            day: "Sun", 
            temperature: Math.floor(Math.random() * 20) + 15, 
            condition: ["sunny", "cloudy", "rainy", "snowy", "windy"][Math.floor(Math.random() * 5)] as any 
          },
        ]
      };
      
      setWeather(data);
      setLoading(false);
    }, 800);

    return () => clearTimeout(fetchTimeout);
  }, [location]);

  const renderWeatherIcon = (condition: "sunny" | "cloudy" | "rainy" | "snowy" | "windy", size = 8) => {
    switch (condition) {
      case "sunny":
        return <Sun className={`h-${size} w-${size} text-yellow-500`} />;
      case "cloudy":
        return <Cloud className={`h-${size} w-${size} text-gray-400`} />;
      case "rainy":
        return <CloudRain className={`h-${size} w-${size} text-blue-400`} />;
      case "snowy":
        return <Snowflake className={`h-${size} w-${size} text-blue-200`} />;
      case "windy":
        return <Wind className={`h-${size} w-${size} text-gray-500`} />;
      default:
        return <Cloud className={`h-${size} w-${size}`} />;
    }
  };

  const getWeatherBadge = (condition: "sunny" | "cloudy" | "rainy" | "snowy" | "windy") => {
    switch (condition) {
      case "sunny":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
      case "cloudy":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
      case "rainy":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      case "snowy":
        return "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-200";
      case "windy":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getDayFromDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const handlePlanTrip = () => {
    toast({
      title: "Trip Planning",
      description: `Planning a trip to ${location} based on current weather conditions.`,
    });
  };

  return (
    <div className={className}>
      <Card className={cn("overflow-hidden", className)}>
        <CardContent className="p-0">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="uppercase text-xs font-semibold text-tripadvisor-green mb-1">
                  WEATHER UPDATE
                </div>
                <h3 className="text-sm font-medium">
                  {getDayFromDate()} in {location}
                </h3>
              </div>
              {weather && renderWeatherIcon(weather.condition)}
            </div>
            
            {loading ? (
              <div className="mt-3 flex items-center justify-center h-16">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="mt-3">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">{weather?.temperature}°C</span>
                  {weather && (
                    <span className={cn("text-xs px-2 py-1 rounded-full mb-1", getWeatherBadge(weather.condition))}>
                      {weather.condition.charAt(0).toUpperCase() + weather.condition.slice(1)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <div>Humidity: {weather?.humidity}%</div>
                  <div>Wind: {weather?.wind} km/h</div>
                </div>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm text-tripadvisor-green mt-1"
                  onClick={() => setShowForecast(!showForecast)}
                >
                  {showForecast ? "Hide forecast" : "Show forecast"}
                </Button>
                
                {showForecast && weather?.forecast && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {weather.forecast.map((day, idx) => (
                      <div key={idx} className="bg-muted/30 p-2 rounded-md text-center">
                        <div className="font-medium text-xs">{day.day}</div>
                        <div className="flex justify-center my-1">
                          {renderWeatherIcon(day.condition, 5)}
                        </div>
                        <div className="text-xs font-medium">{day.temperature}°C</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="bg-muted py-3 px-4 mt-2 flex justify-between items-center">
            <span className="text-xs">Plan your trip based on the forecast</span>
            <Button 
              size="sm" 
              variant="default" 
              onClick={handlePlanTrip}
              className="text-xs h-7 bg-tripadvisor-green hover:bg-tripadvisor-darkGreen"
            >
              Plan Trip
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
