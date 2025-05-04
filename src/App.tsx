
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import TravelJournal from './pages/TravelJournal';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="tripadvisor-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/travel-journal" element={<TravelJournal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
