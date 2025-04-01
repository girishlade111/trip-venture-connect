
import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface EventCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
}

const EventCard = ({
  id,
  title,
  category,
  image,
  date,
  time,
  location,
  price,
}: EventCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-black/70 text-white hover:bg-black/70">
          {category}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg line-clamp-2 h-14">
          {title}
        </h3>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{date} · {time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2 text-primary" />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="font-medium">
            {price}
          </div>
          
          <Link to={`/events/${id}`}>
            <Button size="sm" className="rounded-full">
              <Ticket size={16} className="mr-1" />
              <span>Get Tickets</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
