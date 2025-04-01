
import { Destination } from './types';
import { americasDestinations } from './americas';
import { asiaDestinations } from './asia';
import { europeDestinations } from './europe';
import { africaDestinations } from './africa';
import { australiaDestinations } from './australia';
import { northAmericaDestinations } from './northAmerica';

// Merge all destination arrays
export const allDestinations: Destination[] = [
  ...americasDestinations,
  ...asiaDestinations,
  ...europeDestinations,
  ...africaDestinations,
  ...australiaDestinations,
  ...northAmericaDestinations
];

// Helper functions for filtering destinations
export const getUniqueCountries = (): string[] => {
  const countries = allDestinations.map(destination => destination.country);
  return [...new Set(countries)].sort();
};

export const getDestinationsByCountry = (country: string): Destination[] => {
  if (country === 'all') {
    return allDestinations;
  }
  return allDestinations.filter(destination => destination.country === country);
};

// Re-export everything from types
export * from './types';
