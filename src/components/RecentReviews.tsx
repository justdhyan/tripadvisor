
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    user: {
      name: "Rahul S",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Delhi, India",
    },
    location: "Taj Mahal",
    rating: 5,
    title: "Breathtaking monument of love",
    content:
      "The Taj Mahal is truly a wonder of the world. The white marble changes color throughout the day. Arrive early to avoid crowds and get the best photos.",
    date: "2 days ago",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2e/83/c5/caption.jpg?w=100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2e/83/bc/caption.jpg?w=100&h=-1&s=1",
    ],
  },
  {
    id: 2,
    user: {
      name: "Priya M",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Mumbai, India",
    },
    location: "Hawa Mahal",
    rating: 4,
    title: "Beautiful palace with unique architecture",
    content:
      "Hawa Mahal is beautiful especially in the morning light. The architecture is unique and the views from the upper floors are great. It gets crowded so go early.",
    date: "1 week ago",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/fb/86/ac/caption.jpg?w=100&h=-1&s=1",
    ],
  },
  {
    id: 3,
    user: {
      name: "Amar K",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      location: "Bangalore, India",
    },
    location: "Calangute Beach",
    rating: 3,
    title: "Crowded but good atmosphere",
    content:
      "Calangute Beach is quite crowded but has a vibrant atmosphere with many shacks and water activities. Not the cleanest beach but enjoyable for the energy.",
    date: "3 days ago",
    images: [],
  },
];

export function RecentReviews() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={review.user.avatar} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.user.name}</p>
                  <p className="text-xs text-muted-foreground">{review.user.location}</p>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{review.location}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? "fill-current text-tripadvisor-yellow" 
                            : "text-muted"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="font-bold mt-1">{review.title}</h3>
                <p className="text-sm mt-1 line-clamp-3">{review.content}</p>
                
                {review.images.length > 0 && (
                  <div className="flex mt-3 gap-2">
                    {review.images.map((image, idx) => (
                      <img 
                        key={idx}
                        src={image} 
                        alt={`Review ${idx + 1}`}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground mt-3">{review.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
