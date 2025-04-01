
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-card rounded-xl p-8 md:p-12 text-center shadow-sm border">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join TripVenture Connect today and discover amazing events and activities for your next trip.
          </p>
          <Button size="lg" className="px-8">
            Sign Up for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
