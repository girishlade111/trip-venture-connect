// Define the Destination interface once
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  eventCount: number;
}

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

// All destinations data
export const allDestinations: Destination[] = [
  // Argentina
  {
    id: "argentina-buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1536632296143-cbc03b11a312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 120
  },
  
  // Australia
  {
    id: "australia-sydney",
    name: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 215
  },
  {
    id: "australia-melbourne",
    name: "Melbourne",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 189
  },
  {
    id: "australia-brisbane",
    name: "Brisbane",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1566734904496-9309bb1798b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 124
  },
  {
    id: "australia-perth",
    name: "Perth",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1551464664-222eeb2d2f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // Austria
  {
    id: "austria-vienna",
    name: "Vienna",
    country: "Austria",
    image: "https://images.unsplash.com/photo-1516550893885-985c994c8609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "austria-salzburg",
    name: "Salzburg",
    country: "Austria",
    image: "https://images.unsplash.com/photo-1553773077-91ac9d6bd163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  
  // Bahamas
  {
    id: "bahamas-nassau",
    name: "Nassau",
    country: "Bahamas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Belgium
  {
    id: "belgium-brussels",
    name: "Brussels",
    country: "Belgium",
    image: "https://images.unsplash.com/photo-1562517634-baa2da3cdd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 110
  },
  {
    id: "belgium-bruges",
    name: "Bruges",
    country: "Belgium",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 65
  },
  
  // Brazil
  {
    id: "brazil-rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 210
  },
  {
    id: "brazil-sao-paulo",
    name: "São Paulo",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1564519644-e543b539a79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 230
  },
  {
    id: "brazil-salvador",
    name: "Salvador",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1622575335728-0a1233e1b025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 95
  },
  {
    id: "brazil-foz-do-iguacu",
    name: "Foz do Iguaçu",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1579969984577-7b04a2f9801b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 56
  },
  {
    id: "brazil-manaus",
    name: "Manaus",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1629993470942-8187e672be2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 43
  },
  {
    id: "brazil-florianopolis",
    name: "Florianópolis",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1623692853978-fb0827461728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 78
  },
  
  // Canada
  {
    id: "canada-vancouver",
    name: "Vancouver",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 156
  },
  {
    id: "canada-toronto",
    name: "Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1503206557829-9a9979ad1227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 189
  },
  {
    id: "canada-montreal",
    name: "Montreal",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 142
  },
  {
    id: "canada-calgary",
    name: "Calgary",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1566679232414-ce36dd03ec93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "canada-ottawa",
    name: "Ottawa",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1615311521001-54039263bd47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Chile
  {
    id: "chile-santiago",
    name: "Santiago",
    country: "Chile",
    image: "https://images.unsplash.com/photo-1583262808915-fee4fd4dc4d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // China
  {
    id: "china-beijing",
    name: "Beijing",
    country: "China",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 267
  },
  {
    id: "china-shanghai",
    name: "Shanghai",
    country: "China",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 294
  },
  {
    id: "china-hong-kong",
    name: "Hong Kong",
    country: "China",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 223
  },
  {
    id: "china-xian",
    name: "Xi'an",
    country: "China",
    image: "https://images.unsplash.com/photo-1625313521952-4720e2e6e58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Colombia
  {
    id: "colombia-bogota",
    name: "Bogotá",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1621548372490-aca18483c101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 118
  },
  {
    id: "colombia-medellin",
    name: "Medellín",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1568756676233-45fc1d8ac96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 92
  },
  {
    id: "colombia-cartagena",
    name: "Cartagena",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1571414839338-c64ffadad425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 74
  },
  
  // Costa Rica
  {
    id: "costa-rica-san-jose",
    name: "San José",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1519048886478-378a7513942c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 67
  },
  {
    id: "costa-rica-la-fortuna",
    name: "La Fortuna",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1618144224576-0ac02e61d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 43
  },
  {
    id: "costa-rica-manuel-antonio",
    name: "Manuel Antonio",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1610055196677-b451de91c01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 39
  },
  
  // Croatia
  {
    id: "croatia-dubrovnik",
    name: "Dubrovnik",
    country: "Croatia",
    image: "https://images.unsplash.com/photo-1555990793-2b37612bd23f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 83
  },
  {
    id: "croatia-split",
    name: "Split",
    country: "Croatia",
    image: "https://images.unsplash.com/photo-1555990793-da45a38ba40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 68
  },
  {
    id: "croatia-zagreb",
    name: "Zagreb",
    country: "Croatia",
    image: "https://images.unsplash.com/photo-1628066048523-e66bb82ce659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 59
  },
  
  // Czech Republic
  {
    id: "czech-republic-prague",
    name: "Prague",
    country: "Czech Republic",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 147
  },
  
  // Denmark
  {
    id: "denmark-copenhagen",
    name: "Copenhagen",
    country: "Denmark",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 122
  },
  
  // Dominican Republic
  {
    id: "dominican-republic-punta-cana",
    name: "Punta Cana",
    country: "Dominican Republic",
    image: "https://images.unsplash.com/photo-1627293509201-9693e80de6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 94
  },
  
  // Egypt
  {
    id: "egypt-cairo",
    name: "Cairo",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 114
  },
  {
    id: "egypt-luxor",
    name: "Luxor",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1534328536293-aec4aa7979fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  {
    id: "egypt-aswan",
    name: "Aswan",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1568111561564-08726927adbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 54
  },
  
  // Finland
  {
    id: "finland-helsinki",
    name: "Helsinki",
    country: "Finland",
    image: "https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // France
  {
    id: "france-paris",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 347
  },
  {
    id: "france-nice",
    name: "Nice",
    country: "France",
    image: "https://images.unsplash.com/photo-1533231040102-5ec7a63e3158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 118
  },
  {
    id: "france-lyon",
    name: "Lyon",
    country: "France",
    image: "https://images.unsplash.com/photo-1581331474896-587cec645d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 95
  },
  {
    id: "france-marseille",
    name: "Marseille",
    country: "France",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "france-bordeaux",
    name: "Bordeaux",
    country: "France",
    image: "https://images.unsplash.com/photo-1609319079234-52f06d1aa7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Germany
  {
    id: "germany-berlin",
    name: "Berlin",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  {
    id: "germany-munich",
    name: "Munich",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1599982890963-3eba7b2b2e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 164
  },
  {
    id: "germany-frankfurt",
    name: "Frankfurt",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1577193120752-738aa93a0724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "germany-hamburg",
    name: "Hamburg",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1515674447568-09bbb507b96c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 124
  },
  {
    id: "germany-cologne",
    name: "Cologne",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1546374748-9f87dbe3b93a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // Greece
  {
    id: "greece-athens",
    name: "Athens",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "greece-santorini",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "greece-mykonos",
    name: "Mykonos",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  }
];
