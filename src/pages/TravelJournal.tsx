
import React, { useState } from 'react';
import { TripadvisorNavbar } from '../components/TripadvisorNavbar';
import { TripAdvisorFooter } from '../components/TripAdvisorFooter';
import { Button } from '../components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Heart, 
  MessageCircle, 
  Share2, 
  Image, 
  Trash2, 
  Edit 
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  location: string;
  date: string;
  images: string[];
  likes: number;
  comments: number;
  isLiked: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

const sampleEntries: JournalEntry[] = [
  {
    id: '1',
    title: 'My amazing trip to Bali',
    content: 'Spent a week exploring the beautiful beaches and temples of Bali. The local food was incredible and the people were so friendly! Would definitely recommend visiting Ubud and Seminyak.',
    location: 'Bali, Indonesia',
    date: '2023-04-15',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80',
    ],
    likes: 24,
    comments: 5,
    isLiked: false,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    },
  },
  {
    id: '2',
    title: 'Weekend in Paris',
    content: 'Finally visited the city of lights! The Eiffel Tower was even more impressive in person. Spent hours at the Louvre and enjoyed amazing croissants every morning.',
    location: 'Paris, France',
    date: '2023-03-22',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    ],
    likes: 42,
    comments: 8,
    isLiked: true,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    },
  },
];

const TravelJournal = () => {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(sampleEntries);
  const [newEntryMode, setNewEntryMode] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    images: [] as string[],
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  
  const { toast } = useToast();

  const handleLike = (id: string) => {
    setJournalEntries(entries =>
      entries.map(entry => {
        if (entry.id === id) {
          return {
            ...entry,
            likes: entry.isLiked ? entry.likes - 1 : entry.likes + 1,
            isLiked: !entry.isLiked,
          };
        }
        return entry;
      })
    );
  };

  const handleShare = (entry: JournalEntry) => {
    // In a real app, this would open a sharing dialog
    toast({
      title: 'Sharing',
      description: `Shared "${entry.title}" to your social media.`,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Create preview URLs
      const newPreviewUrls = filesArray.map(file => URL.createObjectURL(file));
      
      setSelectedImages(prev => [...prev, ...filesArray]);
      setImagePreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    const newSelectedImages = [...selectedImages];
    const newImagePreviewUrls = [...imagePreviewUrls];
    
    // Release the object URL to avoid memory leaks
    URL.revokeObjectURL(newImagePreviewUrls[index]);
    
    newSelectedImages.splice(index, 1);
    newImagePreviewUrls.splice(index, 1);
    
    setSelectedImages(newSelectedImages);
    setImagePreviewUrls(newImagePreviewUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would upload images to a server and get URLs back
    const newImages = imagePreviewUrls;
    
    const newJournalEntry: JournalEntry = {
      id: Math.random().toString(36).substring(7),
      title: newEntry.title,
      content: newEntry.content,
      location: newEntry.location,
      date: newEntry.date,
      images: newImages,
      likes: 0,
      comments: 0,
      isLiked: false,
      author: {
        name: 'Current User', // In a real app, this would be the current user's info
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      },
    };
    
    setJournalEntries(prev => [newJournalEntry, ...prev]);
    setNewEntryMode(false);
    setNewEntry({
      title: '',
      content: '',
      location: '',
      date: new Date().toISOString().split('T')[0],
      images: [],
    });
    setSelectedImages([]);
    setImagePreviewUrls([]);
    
    toast({
      title: 'Success',
      description: 'Your journal entry has been published!',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TripadvisorNavbar />
      
      <main className="flex-grow py-8 px-4 md:px-8 container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Travel Journal</h1>
            <p className="text-muted-foreground">
              Share your travel adventures and experiences with the community
            </p>
          </div>
          
          {!newEntryMode ? (
            <div className="mb-8">
              <Button 
                onClick={() => setNewEntryMode(true)} 
                className="bg-tripadvisor-green hover:bg-tripadvisor-darkGreen"
              >
                Create New Journal Entry
              </Button>
            </div>
          ) : (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Create New Journal Entry</CardTitle>
                <CardDescription>Share your travel experiences with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={newEntry.location}
                      onChange={(e) => setNewEntry({...newEntry, location: e.target.value})}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={newEntry.date}
                      onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-1">
                      Your Experience
                    </label>
                    <textarea
                      id="content"
                      rows={5}
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-tripadvisor-green"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Add Photos (up to 5)
                    </label>
                    <div className="flex flex-wrap gap-4 mb-4">
                      {imagePreviewUrls.map((url, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={url}
                            alt={`Upload preview ${idx + 1}`}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button
                              type="button"
                              onClick={() => removeImage(idx)}
                              className="p-1 bg-white rounded-full text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {imagePreviewUrls.length < 5 && (
                        <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          <Image className="h-8 w-8 text-gray-400" />
                        </label>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setNewEntryMode(false);
                    setSelectedImages([]);
                    setImagePreviewUrls([]);
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={!newEntry.title || !newEntry.location || !newEntry.content}
                  className="bg-tripadvisor-green hover:bg-tripadvisor-darkGreen"
                >
                  Publish Entry
                </Button>
              </CardFooter>
            </Card>
          )}
          
          <div className="space-y-6">
            {journalEntries.map((entry) => (
              <Card key={entry.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={entry.author.avatar}
                      alt={entry.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{entry.author.name}</p>
                      <p className="text-xs text-muted-foreground">{new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • {entry.location}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{entry.title}</CardTitle>
                </CardHeader>
                
                {entry.images.length > 0 && (
                  <div className={`grid ${entry.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                    {entry.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Photo from ${entry.title}`}
                        className="w-full h-64 object-cover"
                      />
                    ))}
                  </div>
                )}
                
                <CardContent className="pt-4">
                  <p className="whitespace-pre-line">{entry.content}</p>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(entry.id)}
                      className={`flex items-center gap-1 ${entry.isLiked ? 'text-tripadvisor-red' : ''}`}
                    >
                      <Heart className={`h-5 w-5 ${entry.isLiked ? 'fill-current' : ''}`} />
                      <span>{entry.likes}</span>
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageCircle className="h-5 w-5" />
                      <span>{entry.comments}</span>
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                      onClick={() => handleShare(entry)}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                        onClick={() => handleShare(entry)}
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                        onClick={() => handleShare(entry)}
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                        onClick={() => handleShare(entry)}
                      >
                        <Instagram className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <TripAdvisorFooter />
    </div>
  );
};

export default TravelJournal;
