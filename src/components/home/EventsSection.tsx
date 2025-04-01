
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EventCard, { EventCardProps } from '@/components/events/EventCard';

interface EventsSectionProps {
  featuredEvents: EventCardProps[];
}

const EventsSection = ({ featuredEvents }: EventsSectionProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <p className="text-muted-foreground mt-2">
              Discover the hottest events around the world
            </p>
          </div>
          
          <Link to="/discover">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Events
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
