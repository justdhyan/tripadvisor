import React from 'react';
import { TripadvisorNavbar } from '../components/TripadvisorNavbar';
import { TripAdvisorHero } from '../components/TripAdvisorHero';
import { TopDestinations } from '../components/TopDestinations';
import ThingsToDo from '../components/ThingsToDo';
import { TopExperiences } from '../components/TopExperiences';
import { MoreToExplore } from '../components/MoreToExplore';
import { BeachDestinations } from '../components/BeachDestinations';
import { TravelersChoice } from '../components/TravelersChoice';
import { RecentReviews } from '../components/RecentReviews';
import { WeatherWidget } from '../components/WeatherWidget';
import { AiTripPlanner } from '../components/AiTripPlanner';
import { PetFriendlyTravel } from '../components/PetFriendlyTravel';
import { TripAdvisorFooter } from '../components/TripAdvisorFooter';
import { VerifiedProperties } from '../components/VerifiedPropertyCard';
import ScrollToTopButton from '../components/ScrollToTopButton';
import NewFeatureBadge from '../components/NewFeatureBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TripadvisorNavbar />
      <main className="pb-12">
        <TripAdvisorHero />
        
        <section className="container mx-auto px-4 mt-12">
          <TopDestinations />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <ThingsToDo />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <TopExperiences />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <VerifiedProperties />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <MoreToExplore />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <BeachDestinations />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <TravelersChoice />
        </section>
        
        <section className="container mx-auto px-4 mt-12">
          <RecentReviews />
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 mt-12">
          <section className="relative">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold">Weather Forecast</h2>
              <NewFeatureBadge className="ml-2" />
            </div>
            <WeatherWidget location="New Delhi" />
          </section>
          <section className="relative">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold">AI Trip Planner</h2>
              <NewFeatureBadge className="ml-2" />
            </div>
            <AiTripPlanner />
          </section>
        </div>
        
        <section className="container mx-auto px-4 mt-12">
          <PetFriendlyTravel />
        </section>
      </main>
      
      <TripAdvisorFooter />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
