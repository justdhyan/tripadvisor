
import React from 'react';
import { Link } from 'react-router-dom';
import { TripadvisorNavbar } from '../components/TripadvisorNavbar';
import { TripAdvisorFooter } from '../components/TripAdvisorFooter';
import RefinedButton from '../components/RefinedButton';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TripadvisorNavbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg p-6">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you were looking for. It may have been moved, or it might not exist anymore.
          </p>
          <div className="space-x-4">
            <Link to="/">
              <RefinedButton>Return to Homepage</RefinedButton>
            </Link>
          </div>
        </div>
      </div>
      
      <TripAdvisorFooter />
    </div>
  );
};

export default NotFound;
