
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface AISupportProps {
  onClose: () => void;
}

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    content: "👋 Hi there! I'm your Tripadvisor AI assistant. How can I help you with your travel plans today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const commonQuestions = [
  "How do I book a hotel?",
  "What are the top destinations?",
  "How do I write a review?",
  "Can I change my booking?",
];

export function AISupport({ onClose }: AISupportProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: input.trim(),
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const responseContent = getAIResponse(input.trim());
      const aiMessage: Message = {
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes("hotel") && (userInputLower.includes("book") || userInputLower.includes("reserve"))) {
      return "To book a hotel on Tripadvisor: 1) Search for your destination and dates, 2) Browse through available options, 3) Select your preferred hotel, 4) Click 'View Deal' to complete your booking with our partners.";
    } 
    else if (userInputLower.includes("top destination") || userInputLower.includes("best place")) {
      return "Some of our top destinations right now include Bali, Paris, Rome, Cancun, and Tokyo. You can explore more recommendations in our 'Top Destinations' section with real traveler reviews!";
    } 
    else if (userInputLower.includes("review") && userInputLower.includes("write")) {
      return "To write a review: 1) Find the place you want to review, 2) Click the 'Write a Review' button, 3) Rate your experience and share details, 4) Submit your review. Your insights help other travelers!";
    } 
    else if (userInputLower.includes("cancel") || userInputLower.includes("change booking")) {
      return "For booking changes or cancellations, please contact the booking provider directly. If you booked through a partner site (like Booking.com or Expedia), you'll need to manage your reservation on their platform.";
    }
    else if (userInputLower.includes("thank")) {
      return "You're welcome! Feel free to ask if you need any other travel assistance. Happy travels! 🌍✈️";
    }
    else if (userInputLower.includes("hello") || userInputLower.includes("hi")) {
      return "Hello! How can I assist with your travel plans today?";
    }
    else {
      return "I'm sorry, I don't have specific information about that. Would you like to speak with a human representative? You can also check our Help Center for more information or try asking about hotel bookings, destinations, or reviews.";
    }
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      content: question,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
      const responseContent = getAIResponse(question);
      const aiMessage: Message = {
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Card className="w-80 md:w-96 shadow-lg border-border">
      <CardHeader className="bg-tripadvisor-green text-white py-3 px-4 rounded-t-lg flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-medium">TripAdvisor Assistant</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7 rounded-full text-white hover:bg-white/20">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="h-72 overflow-y-auto p-4 bg-muted/30">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${
                msg.isUser ? "flex justify-end" : "flex justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.isUser
                    ? "bg-tripadvisor-green text-white"
                    : "bg-background border border-border"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="max-w-[80%] rounded-lg p-3 bg-background border border-border">
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <div className="px-4 py-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {commonQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleQuickQuestion(q)}
              className="text-xs bg-muted rounded-full px-3 py-1 hover:bg-muted/80"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
      
      <CardFooter className="p-3 border-t">
        <div className="flex w-full items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-full border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="h-8 w-8 rounded-full"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
