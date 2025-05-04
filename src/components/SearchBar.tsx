
import React, { useState } from 'react';
import { Search, MapPin, Calendar, User } from 'lucide-react';

interface SearchSuggestion {
  id: number;
  name: string;
  type: 'hotel' | 'restaurant' | 'attraction' | 'location';
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Mock data for suggestions
  const mockSuggestions: SearchSuggestion[] = [
    { id: 1, name: 'New Delhi, India', type: 'location' },
    { id: 2, name: 'Mumbai, India', type: 'location' },
    { id: 3, name: 'Taj Hotel, Mumbai', type: 'hotel' },
    { id: 4, name: 'Gateway of India', type: 'attraction' },
    { id: 5, name: 'Bukhara, Delhi', type: 'restaurant' },
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 0) {
      // Filter suggestions based on the search term
      const filteredSuggestions = mockSuggestions.filter(
        suggestion => suggestion.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
  };
  
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-tripadvisor border border-gray-200 overflow-hidden">
        <div className="flex-1 pl-4 pr-2 py-3">
          <div className="flex items-center">
            <Search className="w-5 h-5 text-tripadvisor-gray mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Where to?"
              className="w-full focus:outline-none text-base font-sans"
            />
          </div>
        </div>
        <div className="flex items-center pr-3">
          <button className="bg-tripadvisor-green hover:bg-tripadvisor-darkGreen text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-tripadvisor z-50 max-h-64 overflow-y-auto">
          <div className="p-2">
            <h4 className="text-sm font-medium px-3 py-1 text-gray-500">Suggestions</h4>
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  <button
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center"
                  >
                    {suggestion.type === 'location' && <MapPin className="w-4 h-4 mr-2 text-tripadvisor-gray" />}
                    {suggestion.type === 'hotel' && <User className="w-4 h-4 mr-2 text-tripadvisor-gray" />}
                    {suggestion.type === 'attraction' && <Calendar className="w-4 h-4 mr-2 text-tripadvisor-gray" />}
                    {suggestion.type === 'restaurant' && <Search className="w-4 h-4 mr-2 text-tripadvisor-gray" />}
                    <span>{suggestion.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
