
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DestinationCard from '@/components/destinations/DestinationCard';
import { Destination } from '@/data/destinationsData';
import { ArrowRight } from 'lucide-react';

interface DestinationsSectionProps {
  popularDestinations: Destination[];
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
            <Button className="mt-4 md:mt-0 group">
              View All 160 Destinations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/destinations" className="inline-block">
            <Button variant="outline" size="lg">
              Browse All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
