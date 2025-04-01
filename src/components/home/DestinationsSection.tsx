
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DestinationCard, { DestinationCardProps } from '@/components/destinations/DestinationCard';

interface DestinationsSectionProps {
  popularDestinations: DestinationCardProps[];
}

const DestinationsSection = ({ popularDestinations }: DestinationsSectionProps) => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <p className="text-muted-foreground mt-2">
              Explore top cities with the most exciting events
            </p>
          </div>
          
          <Link to="/destinations">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Destinations
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
