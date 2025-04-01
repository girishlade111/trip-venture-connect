
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, User, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-ocean-600">TripVenture</span>
          <span className="text-xl font-medium text-teal-600">Connect</span>
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/discover" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
            <Search size={18} />
            <span>Discover</span>
          </Link>
          <Link to="/destinations" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
            <MapPin size={18} />
            <span>Destinations</span>
          </Link>
          <Link to="/calendar" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
            <Calendar size={18} />
            <span>Calendar</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
            <User size={18} />
            <span>Profile</span>
          </Link>
          <Button className="ml-4">Get Started</Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6">
            <Link 
              to="/discover" 
              className="flex items-center gap-2 text-lg py-2 border-b text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={20} />
              <span>Discover</span>
            </Link>
            <Link 
              to="/destinations" 
              className="flex items-center gap-2 text-lg py-2 border-b text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin size={20} />
              <span>Destinations</span>
            </Link>
            <Link 
              to="/calendar" 
              className="flex items-center gap-2 text-lg py-2 border-b text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={20} />
              <span>Calendar</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-lg py-2 border-b text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Button className="mt-4" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
