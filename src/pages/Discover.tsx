
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventCard, { EventCardProps } from '@/components/events/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, Music, Ticket } from 'lucide-react';

// Sample data
const allEvents: EventCardProps[] = [
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
  },
  {
    id: '5',
    title: 'Coldplay: Music of the Spheres World Tour',
    category: 'Concert',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Aug 12, 2023',
    time: '8:30 PM',
    location: 'Rose Bowl Stadium, Los Angeles',
    price: '$95.00'
  },
  {
    id: '6',
    title: 'Harry Potter and the Cursed Child',
    category: 'Theater',
    image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    date: 'Nov 5, 2023',
    time: '5:00 PM',
    location: 'Lyric Theatre, London',
    price: '$150.00'
  },
  {
    id: '7',
    title: 'Tokyo Food Festival',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    date: 'Oct 15, 2023',
    time: '11:00 AM',
    location: 'Yoyogi Park, Tokyo',
    price: '$30.00'
  },
  {
    id: '8',
    title: 'NBA Finals Game 1',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    date: 'Jun 1, 2023',
    time: '9:00 PM',
    location: 'Madison Square Garden, New York',
    price: '$200.00'
  },
];

const categories = [
  { name: 'All', icon: Ticket },
  { name: 'Concerts', icon: Music },
  { name: 'Sports', icon: Calendar },
  { name: 'Theater', icon: Ticket },
  { name: 'Food', icon: Calendar },
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Discover Events</h1>
          
          {/* Search and filter bar */}
          <div className="bg-card rounded-lg p-4 border mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Search events, venues, or cities..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button className="md:w-auto">
                <Filter size={18} className="mr-2" />
                Filters
              </Button>
            </div>
            
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <CategoryIcon size={16} className="mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* Events grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
          
          {/* Load more button */}
          {filteredEvents.length > 0 && (
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">
                Load More Events
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
