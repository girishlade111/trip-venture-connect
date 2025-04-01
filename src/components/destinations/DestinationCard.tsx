
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  eventCount: number;
}

const DestinationCard = ({
  id,
  name,
  country,
  image,
  eventCount,
}: DestinationCardProps) => {
  return (
    <Link 
      to={`/destinations/${id}`}
      className="group rounded-xl overflow-hidden relative h-64 block"
    >
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 p-4 w-full">
          <div className="flex items-center text-white/90 mb-1">
            <MapPin size={16} className="mr-1" />
            <span>{country}</span>
          </div>
          
          <h3 className="text-white text-xl font-medium">{name}</h3>
          
          <p className="text-white/80 text-sm mt-1">
            {eventCount} events available
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
