
import React from 'react';
import { MessageCircle, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VirtualAssistantSection = () => {
  return (
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
  );
};

export default VirtualAssistantSection;
