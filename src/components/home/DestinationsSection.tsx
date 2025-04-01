
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DestinationCard, { DestinationCardProps } from '@/components/destinations/DestinationCard';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHeader, 
  TableHead, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface DestinationItem {
  id: string;
  city: string;
  country: string;
}

interface DestinationsSectionProps {
  popularDestinations: DestinationCardProps[];
}

const destinationsList: DestinationItem[] = [
  { id: "1", city: "Buenos Aires", country: "Argentina" },
  { id: "2", city: "Sydney", country: "Australia" },
  { id: "3", city: "Melbourne", country: "Australia" },
  { id: "4", city: "Brisbane", country: "Australia" },
  { id: "5", city: "Perth", country: "Australia" },
  { id: "6", city: "Vienna", country: "Austria" },
  { id: "7", city: "Salzburg", country: "Austria" },
  { id: "8", city: "Nassau", country: "Bahamas" },
  { id: "9", city: "Brussels", country: "Belgium" },
  { id: "10", city: "Bruges", country: "Belgium" },
  { id: "11", city: "Rio de Janeiro", country: "Brazil" },
  { id: "12", city: "São Paulo", country: "Brazil" },
  { id: "13", city: "Salvador", country: "Brazil" },
  { id: "14", city: "Foz do Iguaçu", country: "Brazil" },
  { id: "15", city: "Manaus", country: "Brazil" },
  { id: "16", city: "Florianópolis", country: "Brazil" },
  { id: "17", city: "Vancouver", country: "Canada" },
  { id: "18", city: "Toronto", country: "Canada" },
  { id: "19", city: "Montreal", country: "Canada" },
  { id: "20", city: "Calgary", country: "Canada" },
  { id: "21", city: "Ottawa", country: "Canada" },
  { id: "22", city: "Santiago", country: "Chile" },
  { id: "23", city: "Beijing", country: "China" },
  { id: "24", city: "Shanghai", country: "China" },
  { id: "25", city: "Hong Kong", country: "China" },
  { id: "26", city: "Xi'an", country: "China" },
  { id: "27", city: "Bogotá", country: "Colombia" },
  { id: "28", city: "Medellín", country: "Colombia" },
  { id: "29", city: "Cartagena", country: "Colombia" },
  { id: "30", city: "San José", country: "Costa Rica" },
  { id: "31", city: "La Fortuna", country: "Costa Rica" },
  { id: "32", city: "Manuel Antonio", country: "Costa Rica" },
  { id: "33", city: "Dubrovnik", country: "Croatia" },
  { id: "34", city: "Split", country: "Croatia" },
  { id: "35", city: "Zagreb", country: "Croatia" },
  { id: "36", city: "Prague", country: "Czech Republic" },
  { id: "37", city: "Copenhagen", country: "Denmark" },
  { id: "38", city: "Punta Cana", country: "Dominican Republic" },
  { id: "39", city: "Cairo", country: "Egypt" },
  { id: "40", city: "Luxor", country: "Egypt" },
  { id: "41", city: "Aswan", country: "Egypt" },
  { id: "42", city: "Helsinki", country: "Finland" },
  { id: "43", city: "Paris", country: "France" },
  { id: "44", city: "Nice", country: "France" },
  { id: "45", city: "Lyon", country: "France" },
  { id: "46", city: "Marseille", country: "France" },
  { id: "47", city: "Bordeaux", country: "France" },
  { id: "48", city: "Berlin", country: "Germany" },
  { id: "49", city: "Munich", country: "Germany" },
  { id: "50", city: "Frankfurt", country: "Germany" },
  { id: "51", city: "Hamburg", country: "Germany" },
  { id: "52", city: "Cologne", country: "Germany" },
  { id: "53", city: "Athens", country: "Greece" },
  { id: "54", city: "Santorini", country: "Greece" },
  { id: "55", city: "Mykonos", country: "Greece" },
  { id: "56", city: "Budapest", country: "Hungary" },
  { id: "57", city: "Reykjavik", country: "Iceland" },
  { id: "58", city: "Delhi", country: "India" },
  { id: "59", city: "Mumbai", country: "India" },
  { id: "60", city: "Jaipur", country: "India" },
  { id: "61", city: "Agra", country: "India" },
  { id: "62", city: "Bali", country: "Indonesia" },
  { id: "63", city: "Jakarta", country: "Indonesia" },
  { id: "64", city: "Dublin", country: "Ireland" },
  { id: "65", city: "Cork", country: "Ireland" },
  { id: "66", city: "Galway", country: "Ireland" },
  { id: "67", city: "Tel Aviv", country: "Israel" },
  { id: "68", city: "Jerusalem", country: "Israel" },
  { id: "69", city: "Rome", country: "Italy" },
  { id: "70", city: "Florence", country: "Italy" },
  { id: "71", city: "Venice", country: "Italy" },
  { id: "72", city: "Milan", country: "Italy" },
  { id: "73", city: "Naples", country: "Italy" },
  { id: "74", city: "Pisa", country: "Italy" },
  { id: "75", city: "Bologna", country: "Italy" },
  { id: "76", city: "Verona", country: "Italy" },
  { id: "77", city: "Montego Bay", country: "Jamaica" },
  { id: "78", city: "Ocho Rios", country: "Jamaica" },
  { id: "79", city: "Negril", country: "Jamaica" },
  { id: "80", city: "Tokyo", country: "Japan" },
  { id: "81", city: "Kyoto", country: "Japan" },
  { id: "82", city: "Osaka", country: "Japan" },
  { id: "83", city: "Hiroshima", country: "Japan" },
  { id: "84", city: "Kuala Lumpur", country: "Malaysia" },
  { id: "85", city: "Penang", country: "Malaysia" },
  { id: "86", city: "Cancun", country: "Mexico" },
  { id: "87", city: "Mexico City", country: "Mexico" },
  { id: "88", city: "Playa del Carmen", country: "Mexico" },
  { id: "89", city: "Puerto Vallarta", country: "Mexico" },
  { id: "90", city: "Tulum", country: "Mexico" },
  { id: "91", city: "Cozumel", country: "Mexico" },
  { id: "92", city: "Guadalajara", country: "Mexico" },
  { id: "93", city: "Monte Carlo", country: "Monaco" },
  { id: "94", city: "Marrakech", country: "Morocco" },
  { id: "95", city: "Casablanca", country: "Morocco" },
  { id: "96", city: "Fes", country: "Morocco" },
  { id: "97", city: "Amsterdam", country: "Netherlands" },
  { id: "98", city: "Rotterdam", country: "Netherlands" },
  { id: "99", city: "Auckland", country: "New Zealand" },
  { id: "100", city: "Wellington", country: "New Zealand" },
  { id: "101", city: "Christchurch", country: "New Zealand" },
  { id: "102", city: "Queenstown", country: "New Zealand" },
  { id: "103", city: "Rotorua", country: "New Zealand" },
  { id: "104", city: "Oslo", country: "Norway" },
  { id: "105", city: "Bergen", country: "Norway" },
  { id: "106", city: "Lima", country: "Peru" },
  { id: "107", city: "Cusco", country: "Peru" },
  { id: "108", city: "Manila", country: "Philippines" },
  { id: "109", city: "Cebu", country: "Philippines" },
  { id: "110", city: "Warsaw", country: "Poland" },
  { id: "111", city: "Krakow", country: "Poland" },
  { id: "112", city: "Lisbon", country: "Portugal" },
  { id: "113", city: "Porto", country: "Portugal" },
  { id: "114", city: "San Juan", country: "Puerto Rico" },
  { id: "115", city: "Moscow", country: "Russia" },
  { id: "116", city: "St. Petersburg", country: "Russia" },
  { id: "117", city: "Singapore", country: "Singapore" },
  { id: "118", city: "Cape Town", country: "South Africa" },
  { id: "119", city: "Johannesburg", country: "South Africa" },
  { id: "120", city: "Seoul", country: "South Korea" },
  { id: "121", city: "Busan", country: "South Korea" },
  { id: "122", city: "Barcelona", country: "Spain" },
  { id: "123", city: "Madrid", country: "Spain" },
  { id: "124", city: "Seville", country: "Spain" },
  { id: "125", city: "Valencia", country: "Spain" },
  { id: "126", city: "Granada", country: "Spain" },
  { id: "127", city: "Bilbao", country: "Spain" },
  { id: "128", city: "Stockholm", country: "Sweden" },
  { id: "129", city: "Gothenburg", country: "Sweden" },
  { id: "130", city: "Zurich", country: "Switzerland" },
  { id: "131", city: "Geneva", country: "Switzerland" },
  { id: "132", city: "Lucerne", country: "Switzerland" },
  { id: "133", city: "Bangkok", country: "Thailand" },
  { id: "134", city: "Phuket", country: "Thailand" },
  { id: "135", city: "Chiang Mai", country: "Thailand" },
  { id: "136", city: "Pattaya", country: "Thailand" },
  { id: "137", city: "Istanbul", country: "Turkey" },
  { id: "138", city: "Cappadocia", country: "Turkey" },
  { id: "139", city: "Antalya", country: "Turkey" },
  { id: "140", city: "Dubai", country: "United Arab Emirates" },
  { id: "141", city: "Abu Dhabi", country: "United Arab Emirates" },
  { id: "142", city: "London", country: "United Kingdom" },
  { id: "143", city: "Edinburgh", country: "United Kingdom" },
  { id: "144", city: "Manchester", country: "United Kingdom" },
  { id: "145", city: "Glasgow", country: "United Kingdom" },
  { id: "146", city: "Liverpool", country: "United Kingdom" },
  { id: "147", city: "Belfast", country: "United Kingdom" },
  { id: "148", city: "New York City, NY", country: "United States" },
  { id: "149", city: "Los Angeles, CA", country: "United States" },
  { id: "150", city: "San Francisco, CA", country: "United States" },
  { id: "151", city: "Las Vegas, NV", country: "United States" },
  { id: "152", city: "Chicago, IL", country: "United States" },
  { id: "153", city: "Miami, FL", country: "United States" },
  { id: "154", city: "Orlando, FL", country: "United States" },
  { id: "155", city: "Boston, MA", country: "United States" },
  { id: "156", city: "Washington, D.C.", country: "United States" },
  { id: "157", city: "Seattle, WA", country: "United States" },
  { id: "158", city: "Hanoi", country: "Vietnam" },
  { id: "159", city: "Ho Chi Minh City", country: "Vietnam" },
  { id: "160", city: "Da Nang", country: "Vietnam" },
];

const DestinationsSection = ({ popularDestinations }: DestinationsSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  
  // Get unique countries for filter dropdown
  const countries = Array.from(new Set(destinationsList.map(d => d.country))).sort();
  
  // Filter destinations based on search term and selected country
  const filteredDestinations = destinationsList.filter(destination => {
    const matchesSearch = destination.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry ? destination.country === selectedCountry : true;
    return matchesSearch && matchesCountry;
  });

  return (
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">All Destinations</h3>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search for a city or country..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Country filter */}
            <div className="w-full md:w-64">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Destinations list */}
          <div className="max-h-96 overflow-y-auto border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">City</TableHead>
                  <TableHead className="w-1/2">Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((destination) => (
                    <TableRow key={destination.id}>
                      <TableCell className="font-medium">{destination.city}</TableCell>
                      <TableCell>{destination.country}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} className="text-center py-6 text-muted-foreground">
                      No destinations found. Try a different search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredDestinations.length} of {destinationsList.length} destinations
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
