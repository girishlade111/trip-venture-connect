
import React, { useState } from 'react';
import { Search, MapPin, Calendar, User, MessageCircle, Ticket, Building, Music, Utensils, Users, Heart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { DateRange } from 'react-day-picker';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const HeroSection = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [tripType, setTripType] = useState<string>("family");
  const [activities, setActivities] = useState<string[]>(["concerts"]);
  
  return (
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
          
          <div className="flex flex-col space-y-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative bg-white rounded-full shadow-xl flex items-center flex-1">
                <div className="flex-1 ml-3">
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Search size={18} className="mr-4 text-gray-500" />
              </div>
              
              <DateRangePicker 
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                className="md:w-[280px]"
              />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <div className="mb-2 text-white text-sm">Trip Type:</div>
              <ToggleGroup 
                type="single" 
                value={tripType} 
                onValueChange={(value) => {
                  if (value) setTripType(value);
                }}
                className="justify-start"
              >
                <ToggleGroupItem value="family" aria-label="Family trip" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Users className="mr-2 h-4 w-4" />
                  Family
                </ToggleGroupItem>
                <ToggleGroupItem value="couple" aria-label="Couple trip" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Heart className="mr-2 h-4 w-4" />
                  Couple
                </ToggleGroupItem>
                <ToggleGroupItem value="friends" aria-label="Friends trip" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Users className="mr-2 h-4 w-4" />
                  Friends
                </ToggleGroupItem>
                <ToggleGroupItem value="business" aria-label="Business trip" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Business
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <div className="mb-2 text-white text-sm">Preferred Activities:</div>
              <ToggleGroup 
                type="multiple" 
                value={activities} 
                onValueChange={(value) => {
                  if (value.length) setActivities(value);
                }}
                className="flex flex-wrap justify-start gap-2"
              >
                <ToggleGroupItem value="concerts" aria-label="Concerts" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Music className="mr-2 h-4 w-4" />
                  Concerts
                </ToggleGroupItem>
                <ToggleGroupItem value="sports" aria-label="Sports" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Calendar className="mr-2 h-4 w-4" />
                  Sports
                </ToggleGroupItem>
                <ToggleGroupItem value="theater" aria-label="Theater" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Ticket className="mr-2 h-4 w-4" />
                  Theater
                </ToggleGroupItem>
                <ToggleGroupItem value="food" aria-label="Food & Dining" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Utensils className="mr-2 h-4 w-4" />
                  Food & Dining
                </ToggleGroupItem>
                <ToggleGroupItem value="museums" aria-label="Museums" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <Building className="mr-2 h-4 w-4" />
                  Museums
                </ToggleGroupItem>
                <ToggleGroupItem value="tours" aria-label="Tours" className="bg-white/10 backdrop-blur-sm border-white/20 text-white data-[state=on]:bg-white/30">
                  <MapPin className="mr-2 h-4 w-4" />
                  Tours
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <Button className="rounded-full px-6 w-full md:w-auto self-end">
              <Search size={18} className="mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
