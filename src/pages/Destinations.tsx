
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DestinationCard from '@/components/destinations/DestinationCard';
import { allDestinations, getUniqueCountries, getDestinationsByCountry, Destination } from '@/data/destinationsData';
import { Search } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(allDestinations);
  
  const countries = getUniqueCountries();

  useEffect(() => {
    let results = getDestinationsByCountry(selectedCountry);
    
    if (searchQuery) {
      results = results.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredDestinations(results);
  }, [selectedCountry, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-teal-800 py-16 text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Destinations</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Discover amazing events in 160 cities around the world
            </p>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-teal-50">
          <div className="container">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Destination</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search destinations..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-64">
                    <Select 
                      value={selectedCountry} 
                      onValueChange={(value) => setSelectedCountry(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="default" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCountry("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Destinations List */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {filteredDestinations.length} Destinations Found
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  country={destination.country}
                  image={destination.image}
                  eventCount={destination.eventCount}
                />
              ))}
            </div>
            
            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium mb-4">No destinations found</h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCountry("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
