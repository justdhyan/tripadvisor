
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CalendarDays, MapPin, Clock, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface TripPlan {
  title: string;
  days: TripDay[];
}

interface TripDay {
  day: number;
  activities: TripActivity[];
}

interface TripActivity {
  time: string;
  title: string;
  description: string;
  location?: string;
}

export function AiTripPlanner() {
  const [isPlanning, setIsPlanning] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3");
  const [interests, setInterests] = useState("");
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  
  const { toast } = useToast();

  const handlePlanTrip = () => {
    if (!destination) {
      toast({
        title: "Destination required",
        description: "Please enter a destination for your trip.",
        variant: "destructive",
      });
      return;
    }

    setIsPlanning(true);

    // Simulate API call to AI planner
    setTimeout(() => {
      setTripPlan(generateTripPlan(destination, parseInt(days), interests));
      setIsPlanning(false);
      toast({
        title: "Trip Plan Ready",
        description: `Your personalized itinerary for ${destination} has been created.`,
      });
    }, 2000);
  };

  const generateTripPlan = (destination: string, days: number, interests: string): TripPlan => {
    // This is a mock function to generate a trip plan
    // In a real app, this would call an AI service
    
    const interestsArray = interests.split(",").map(i => i.trim().toLowerCase()).filter(Boolean);
    const hasInterest = (interest: string) => interestsArray.length === 0 || interestsArray.some(i => interest.includes(i));
    
    const cityPlans: Record<string, TripActivity[]> = {
      "paris": [
        { time: "09:00", title: "Eiffel Tower", description: "Visit the iconic landmark and enjoy panoramic views of Paris.", location: "Champ de Mars, 5 Avenue Anatole France" },
        { time: "12:30", title: "Lunch at Le Jules Verne", description: "Enjoy French cuisine at this famous restaurant.", location: "Eiffel Tower, 2nd floor" },
        { time: "14:00", title: "Louvre Museum", description: "Explore one of the world's largest art museums.", location: "Rue de Rivoli, 75001" },
        { time: "17:00", title: "Notre-Dame Cathedral", description: "Visit this medieval Catholic cathedral.", location: "6 Parvis Notre-Dame - Pl. Jean-Paul II" },
        { time: "19:30", title: "Seine River Cruise", description: "See Paris from the water on a scenic boat ride.", location: "Port de la Conférence" },
        { time: "10:00", title: "Montmartre & Sacré-Cœur", description: "Explore the artistic neighborhood and visit the basilica.", location: "35 Rue du Chevalier de la Barre" },
        { time: "13:00", title: "Lunch at Le Consulat", description: "Enjoy a meal at this historic Parisian café.", location: "18 Rue Norvins" },
        { time: "15:00", title: "Centre Pompidou", description: "Visit this modern art museum.", location: "Place Georges-Pompidou" },
        { time: "18:00", title: "Champs-Élysées Shopping", description: "Shop on one of the world's most famous avenues.", location: "Champs-Élysées" },
        { time: "20:30", title: "Dinner and Show at Moulin Rouge", description: "Experience the famous cabaret.", location: "82 Boulevard de Clichy" },
        { time: "09:30", title: "Versailles Palace", description: "Tour the opulent royal residence.", location: "Place d'Armes, 78000 Versailles" },
        { time: "14:00", title: "Luxembourg Gardens", description: "Relax in these beautiful gardens.", location: "Rue de Médicis - Rue de Vaugirard" },
        { time: "16:30", title: "Musée d'Orsay", description: "Visit this museum housed in a former railway station.", location: "1 Rue de la Légion d'Honneur" },
        { time: "19:00", title: "Latin Quarter Exploration", description: "Wander through this historic area and find a local restaurant for dinner.", location: "5th Arrondissement" },
      ],
      "rome": [
        { time: "09:00", title: "Colosseum", description: "Explore this iconic ancient Roman amphitheater.", location: "Piazza del Colosseo" },
        { time: "12:00", title: "Lunch near Roman Forum", description: "Enjoy Italian cuisine at a local trattoria.", location: "Via dei Fori Imperiali" },
        { time: "14:00", title: "Roman Forum & Palatine Hill", description: "Walk through ancient Roman ruins.", location: "Via della Salara Vecchia, 5/6" },
        { time: "17:00", title: "Trevi Fountain", description: "Visit the famous Baroque fountain and toss a coin.", location: "Piazza di Trevi" },
        { time: "19:30", title: "Dinner in Trastevere", description: "Experience authentic Roman dining in this charming neighborhood.", location: "Trastevere" },
        { time: "09:30", title: "Vatican Museums & Sistine Chapel", description: "See Michelangelo's masterpiece and countless art treasures.", location: "Viale Vaticano" },
        { time: "13:00", title: "St. Peter's Basilica", description: "Visit the world's largest church and religious center.", location: "Piazza San Pietro" },
        { time: "15:30", title: "Castel Sant'Angelo", description: "Explore this fortress built as a mausoleum for Emperor Hadrian.", location: "Lungotevere Castello, 50" },
        { time: "18:00", title: "Piazza Navona", description: "Relax at this famous square with Baroque fountains.", location: "Piazza Navona" },
        { time: "20:00", title: "Campo de' Fiori", description: "Experience Rome's nightlife at this lively square.", location: "Campo de' Fiori" },
        { time: "10:00", title: "Pantheon", description: "Visit this well-preserved ancient Roman temple.", location: "Piazza della Rotonda" },
        { time: "12:30", title: "Lunch at Armando al Pantheon", description: "Enjoy traditional Roman cuisine at this historic restaurant.", location: "Salita de' Crescenzi, 31" },
        { time: "14:30", title: "Spanish Steps", description: "Climb the famous steps and explore the surrounding area.", location: "Piazza di Spagna" },
        { time: "17:00", title: "Villa Borghese Gardens", description: "Relax in Rome's central park and visit the Borghese Gallery.", location: "Piazzale Napoleone I" },
        { time: "19:30", title: "Aperitivo in Monti", description: "Experience the Italian tradition of pre-dinner drinks and snacks.", location: "Monti district" },
      ],
      "new york": [
        { time: "09:00", title: "Statue of Liberty & Ellis Island", description: "Visit these iconic landmarks and learn about immigration history.", location: "Liberty Island" },
        { time: "13:00", title: "Lunch in Financial District", description: "Enjoy a meal near Wall Street.", location: "Financial District" },
        { time: "15:00", title: "9/11 Memorial & Museum", description: "Pay respects at this moving tribute.", location: "180 Greenwich St" },
        { time: "17:30", title: "One World Observatory", description: "Take in panoramic views from the tallest building in the Western Hemisphere.", location: "285 Fulton St" },
        { time: "20:00", title: "Dinner in Little Italy", description: "Enjoy Italian-American cuisine in this historic neighborhood.", location: "Mulberry Street" },
        { time: "09:30", title: "Central Park", description: "Explore this urban oasis with a guided tour or bike rental.", location: "Central Park" },
        { time: "12:30", title: "Lunch at Tavern on the Green", description: "Dine at this iconic Central Park restaurant.", location: "67th Street & Central Park West" },
        { time: "14:30", title: "Metropolitan Museum of Art", description: "Visit one of the world's greatest art museums.", location: "1000 5th Avenue" },
        { time: "18:00", title: "Times Square", description: "Experience the bright lights and energy of this famous intersection.", location: "Broadway & 7th Avenue" },
        { time: "20:00", title: "Broadway Show", description: "Attend a performance at one of the many theaters.", location: "Theatre District" },
        { time: "10:00", title: "High Line", description: "Walk along this elevated linear park built on a former rail line.", location: "Gansevoort St to 34th St" },
        { time: "12:00", title: "Chelsea Market", description: "Explore this food hall and shopping center.", location: "75 9th Avenue" },
        { time: "14:00", title: "Whitney Museum of American Art", description: "Explore American art of the 20th and 21st centuries.", location: "99 Gansevoort Street" },
        { time: "16:30", title: "Empire State Building", description: "Visit this iconic Art Deco skyscraper.", location: "350 5th Avenue" },
        { time: "19:00", title: "Dinner in Greenwich Village", description: "Experience the bohemian atmosphere and great restaurants.", location: "Greenwich Village" },
      ],
    };

    // Default to New York if destination not found
    let activities = cityPlans["new york"];
    
    // Try to match the destination with our database
    for (const city in cityPlans) {
      if (destination.toLowerCase().includes(city)) {
        activities = cityPlans[city];
        break;
      }
    }

    // Filter activities based on interests if provided
    if (interestsArray.length > 0) {
      activities = activities.filter(activity => 
        hasInterest(activity.title.toLowerCase()) || 
        hasInterest(activity.description.toLowerCase())
      );
    }

    // Build the trip plan
    const tripDays: TripDay[] = [];
    const daysCount = Math.min(Math.max(1, days), 7); // Limit to 1-7 days
    
    for (let i = 0; i < daysCount; i++) {
      // Select 3-5 activities per day
      const activitiesPerDay = Math.floor(Math.random() * 3) + 3;
      const startIdx = (i * 5) % activities.length;
      const dayActivities = [];
      
      for (let j = 0; j < activitiesPerDay; j++) {
        const activityIdx = (startIdx + j) % activities.length;
        dayActivities.push(activities[activityIdx]);
      }
      
      // Sort by time
      dayActivities.sort((a, b) => {
        return a.time.localeCompare(b.time);
      });
      
      tripDays.push({
        day: i + 1,
        activities: dayActivities
      });
    }
    
    return {
      title: `Your ${daysCount}-Day Trip to ${destination}`,
      days: tripDays
    };
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg my-8">
      {!showPlanner ? (
        <>
          <div className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80")' 
            }}
          >
          </div>
          
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute top-5 right-5">
            <div className="bg-tripadvisor-green rounded-full w-12 h-12 flex items-center justify-center text-white">
              <span className="text-xs font-bold">AI</span>
            </div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center text-white p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Plan your perfect trip with AI
            </h2>
            <p className="text-lg mb-6 max-w-lg">
              Our AI Travel Planner creates personalized itineraries based on your interests, preferences, and travel style.
            </p>
            <div>
              <Button 
                className="bg-white hover:bg-white/90 text-black rounded-full px-6 py-2 text-sm font-medium"
                onClick={() => setShowPlanner(true)}
              >
                Create My Itinerary
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Card className="w-full h-full overflow-auto">
          <CardContent className="p-6">
            {!tripPlan ? (
              <div>
                <h3 className="text-xl font-bold mb-4">AI Trip Planner</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="destination">
                      Where do you want to go?
                    </label>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                      <input
                        type="text"
                        id="destination"
                        placeholder="Paris, Rome, New York..."
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="days">
                      How many days?
                    </label>
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 text-muted-foreground mr-2" />
                      <select
                        id="days"
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'day' : 'days'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="interests">
                      What are your interests? (optional)
                    </label>
                    <textarea
                      id="interests"
                      placeholder="Art, museums, history, food, nightlife, nature, shopping..."
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                      rows={3}
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end gap-3 pt-2">
                    <Button 
                      variant="outline"
                      onClick={() => setShowPlanner(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-tripadvisor-green hover:bg-tripadvisor-darkGreen"
                      onClick={handlePlanTrip}
                      disabled={isPlanning}
                    >
                      {isPlanning ? (
                        <>
                          <span className="animate-spin mr-2">⌛</span> 
                          Creating Plan...
                        </>
                      ) : "Create My Itinerary"}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{tripPlan.title}</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setTripPlan(null);
                      setDestination("");
                      setDays("3");
                      setInterests("");
                    }}
                  >
                    Plan New Trip
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {tripPlan.days.map((day) => (
                    <div key={day.day} className="border rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-3">Day {day.day}</h4>
                      <div className="space-y-4">
                        {day.activities.map((activity, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="shrink-0 w-16 text-center">
                              <div className="text-sm font-medium">{activity.time}</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{activity.title}</div>
                              <div className="text-sm text-muted-foreground">{activity.description}</div>
                              {activity.location && (
                                <div className="text-xs flex items-center mt-1 text-muted-foreground">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {activity.location}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button 
                    className="bg-tripadvisor-green hover:bg-tripadvisor-darkGreen"
                    onClick={() => {
                      toast({
                        title: "Trip Saved",
                        description: "Your trip has been saved to your profile."
                      });
                    }}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Save Trip
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
