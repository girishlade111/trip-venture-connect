
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import EventsSection from '@/components/home/EventsSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import VirtualAssistantSection from '@/components/home/VirtualAssistantSection';
import CTASection from '@/components/home/CTASection';
import { EventCardProps } from '@/components/events/EventCard';
import { DestinationCardProps } from '@/components/destinations/DestinationCard';

const featuredEvents: EventCardProps[] = [
  {
    id: '1',
    title: 'Taylor Swift: The Eras Tour',
    category: 'Concert',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jun 15, 2023',
    time: '7:00 PM',
    location: 'Wembley Stadium, London',
    price: '$89.99'
  },
  {
    id: '2',
    title: 'FC Barcelona vs Real Madrid: El Clásico',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Oct 28, 2023',
    time: '8:00 PM',
    location: 'Camp Nou, Barcelona',
    price: '$120.00'
  },
  {
    id: '3',
    title: 'Hamilton: The Musical',
    category: 'Theater',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Sep 10, 2023',
    time: '6:30 PM',
    location: 'Broadway Theatre, New York',
    price: '$175.50'
  },
  {
    id: '4',
    title: 'Food & Wine Festival',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jul 22, 2023',
    time: '12:00 PM',
    location: 'Marina Bay Sands, Singapore',
    price: '$45.00'
  }
];

const popularDestinations: DestinationCardProps[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    eventCount: 347
  },
  {
    id: '2',
    name: 'New York',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    eventCount: 589
  },
  {
    id: '3',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1602&q=80',
    eventCount: 421
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <EventsSection featuredEvents={featuredEvents} />
        <DestinationsSection popularDestinations={popularDestinations} />
        <VirtualAssistantSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
