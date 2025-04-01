
import React from 'react';
import { MapPin, Search, Calendar, Ticket } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4 text-ocean-600">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Choose Destination</h3>
            <p className="text-muted-foreground">
              Select where you're headed and when you'll be there.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4 text-ocean-600">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Discover Events</h3>
            <p className="text-muted-foreground">
              Browse events and activities based on your interests.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4 text-ocean-600">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Plan Your Trip</h3>
            <p className="text-muted-foreground">
              Add events to your calendar and plan your itinerary.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4 text-ocean-600">
              <Ticket size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Book Tickets</h3>
            <p className="text-muted-foreground">
              Securely purchase tickets for your selected events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
