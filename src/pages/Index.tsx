
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, User, MessageCircle, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventCard, { EventCardProps } from '@/components/events/EventCard';
import DestinationCard, { DestinationCardProps } from '@/components/destinations/DestinationCard';

// Sample data
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
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-[-1]">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Concert crowd"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          
          <div className="container relative">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Discover Unforgettable Experiences
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Find and book tickets for live events, concerts, theater, sports, and more, wherever your travels take you.
              </p>
              
              <div className="relative bg-white p-1 rounded-full shadow-xl flex items-center mb-8">
                <div className="flex-1 ml-3">
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="rounded-full px-6">
                  <Search size={18} className="mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/events/category/concerts">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Concerts
                  </Button>
                </Link>
                <Link to="/events/category/sports">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Sports
                  </Button>
                </Link>
                <Link to="/events/category/theater">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Theater
                  </Button>
                </Link>
                <Link to="/events/category/food">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Food &amp; Dining
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* Featured Events Section */}
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
        
        {/* Popular Destinations */}
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
        
        {/* Virtual Assistant Section */}
        <section className="py-16 bg-gradient-to-r from-ocean-600 to-teal-500 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Meet Your AI Travel Assistant
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Our intelligent assistant helps you plan the perfect trip based on your preferences and interests.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="rounded-full bg-white/20 p-1 mr-3 mt-1">
                      <MessageCircle size={16} />
                    </div>
                    <span>Chat about your travel plans and get personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-white/20 p-1 mr-3 mt-1">
                      <Calendar size={16} />
                    </div>
                    <span>Create and organize your travel calendar with ease</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-white/20 p-1 mr-3 mt-1">
                      <User size={16} />
                    </div>
                    <span>Receive suggestions tailored to your personal interests</span>
                  </li>
                </ul>
                
                <Button className="bg-white text-ocean-600 hover:bg-white/90">
                  Try the Assistant
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="bg-ocean-50 rounded-lg p-3 mb-3">
                    <div className="flex justify-end mb-3">
                      <div className="bg-ocean-100 text-ocean-800 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        I'm visiting Barcelona from June 15-20. What's happening there?
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
                        <strong>Great choice!</strong> Barcelona has a lot going on in June. Here are some options:
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Primavera Sound Music Festival (June 15-17)</li>
                          <li>• FC Barcelona stadium tour</li>
                          <li>• Flamenco show at Palau de la Música</li>
                          <li>• Tapas cooking class in El Born</li>
                        </ul>
                        <p className="mt-2 text-sm">Would you like more details on any of these?</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Ask about your trip..."
                      className="pr-10"
                    />
                    <Button 
                      size="icon" 
                      className="absolute right-0 top-0 rounded-l-none h-full bg-ocean-600"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-4 w-4"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
