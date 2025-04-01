
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  eventCount: number;
}

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
    image: "https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
  },
  
  // Hungary
  {
    id: "hungary-budapest",
    name: "Budapest",
    country: "Hungary",
    image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  
  // Iceland
  {
    id: "iceland-reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1504284402456-bdb9d97425b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 78
  },
  
  // India
  {
    id: "india-delhi",
    name: "Delhi",
    country: "India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 178
  },
  {
    id: "india-mumbai",
    name: "Mumbai",
    country: "India",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 198
  },
  {
    id: "india-jaipur",
    name: "Jaipur",
    country: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 95
  },
  {
    id: "india-agra",
    name: "Agra",
    country: "India",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 84
  },
  
  // Indonesia
  {
    id: "indonesia-bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "indonesia-jakarta",
    name: "Jakarta",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  
  // Ireland
  {
    id: "ireland-dublin",
    name: "Dublin",
    country: "Ireland",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "ireland-cork",
    name: "Cork",
    country: "Ireland",
    image: "https://images.unsplash.com/photo-1517709432851-f991e5ffc923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 67
  },
  {
    id: "ireland-galway",
    name: "Galway",
    country: "Ireland",
    image: "https://images.unsplash.com/photo-1591702466228-0f9ec3a14ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 58
  },
  
  // Israel
  {
    id: "israel-tel-aviv",
    name: "Tel Aviv",
    country: "Israel",
    image: "https://images.unsplash.com/photo-1544971587-b842c27f8e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 123
  },
  {
    id: "israel-jerusalem",
    name: "Jerusalem",
    country: "Israel",
    image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  
  // Italy
  {
    id: "italy-rome",
    name: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 276
  },
  {
    id: "italy-florence",
    name: "Florence",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 145
  },
  {
    id: "italy-venice",
    name: "Venice",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "italy-milan",
    name: "Milan",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1576788903709-ef05b15c850c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 156
  },
  {
    id: "italy-naples",
    name: "Naples",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  {
    id: "italy-pisa",
    name: "Pisa",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1562448079-b5631888494f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 65
  },
  {
    id: "italy-bologna",
    name: "Bologna",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 78
  },
  {
    id: "italy-verona",
    name: "Verona",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 62
  },
  
  // Jamaica
  {
    id: "jamaica-montego-bay",
    name: "Montego Bay",
    country: "Jamaica",
    image: "https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  {
    id: "jamaica-ocho-rios",
    name: "Ocho Rios",
    country: "Jamaica",
    image: "https://images.unsplash.com/photo-1580109159288-8ee7e6296369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 54
  },
  {
    id: "jamaica-negril",
    name: "Negril",
    country: "Jamaica",
    image: "https://images.unsplash.com/photo-1519046327548-77cef28b61a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 48
  },
  
  // Japan
  {
    id: "japan-tokyo",
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 421
  },
  {
    id: "japan-kyoto",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 176
  },
  {
    id: "japan-osaka",
    name: "Osaka",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 198
  },
  {
    id: "japan-hiroshima",
    name: "Hiroshima",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1575862924838-4dc191709c62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Malaysia
  {
    id: "malaysia-kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 145
  },
  {
    id: "malaysia-penang",
    name: "Penang",
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1619879715671-03be0c92b021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Mexico
  {
    id: "mexico-cancun",
    name: "Cancun",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 167
  },
  {
    id: "mexico-mexico-city",
    name: "Mexico City",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  {
    id: "mexico-playa-del-carmen",
    name: "Playa del Carmen",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1590640723161-20ef01ae42e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 123
  },
  {
    id: "mexico-puerto-vallarta",
    name: "Puerto Vallarta",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1605217613423-0aead5b9f1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  {
    id: "mexico-tulum",
    name: "Tulum",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1580846629972-88099ad109e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  {
    id: "mexico-cozumel",
    name: "Cozumel",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1548665863-a2413a0c3a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 54
  },
  {
    id: "mexico-guadalajara",
    name: "Guadalajara",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1585975985662-449adf7dab3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Monaco
  {
    id: "monaco-monte-carlo",
    name: "Monte Carlo",
    country: "Monaco",
    image: "https://images.unsplash.com/photo-1562877755-00723338c81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  
  // Morocco
  {
    id: "morocco-marrakech",
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1548018560-c7196548c251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "morocco-casablanca",
    name: "Casablanca",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1635096712555-23f8b4efbda3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  {
    id: "morocco-fes",
    name: "Fes",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1570697242318-033f1be97c4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 65
  },
  
  // Netherlands
  {
    id: "netherlands-amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 189
  },
  {
    id: "netherlands-rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1579872269549-760dae6cff5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // New Zealand
  {
    id: "new-zealand-auckland",
    name: "Auckland",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "new-zealand-wellington",
    name: "Wellington",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1588047030906-bc4097331a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 89
  },
  {
    id: "new-zealand-christchurch",
    name: "Christchurch",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1579855250915-08e10153b108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 67
  },
  {
    id: "new-zealand-queenstown",
    name: "Queenstown",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1589285871182-c13504e3dbac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 78
  },
  {
    id: "new-zealand-rotorua",
    name: "Rotorua",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1600250063463-9f8518146432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 54
  },
  
  // Norway
  {
    id: "norway-oslo",
    name: "Oslo",
    country: "Norway",
    image: "https://images.unsplash.com/photo-1563389234808-52344934eec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "norway-bergen",
    name: "Bergen",
    country: "Norway",
    image: "https://images.unsplash.com/photo-1563470270543-eb34a3d0c9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Peru
  {
    id: "peru-lima",
    name: "Lima",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1580936426183-d2e0b87af0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "peru-cusco",
    name: "Cusco",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1572053675669-236a08749ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Philippines
  {
    id: "philippines-manila",
    name: "Manila",
    country: "Philippines",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "philippines-cebu",
    name: "Cebu",
    country: "Philippines",
    image: "https://images.unsplash.com/photo-1464095309579-a5daa383d9ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Poland
  {
    id: "poland-warsaw",
    name: "Warsaw",
    country: "Poland",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 109
  },
  {
    id: "poland-krakow",
    name: "Krakow",
    country: "Poland",
    image: "https://images.unsplash.com/photo-1562196689-f6ae0c15eb23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Portugal
  {
    id: "portugal-lisbon",
    name: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1580323956656-387958e50d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 154
  },
  {
    id: "portugal-porto",
    name: "Porto",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  
  // Puerto Rico
  {
    id: "puerto-rico-san-juan",
    name: "San Juan",
    country: "Puerto Rico",
    image: "https://images.unsplash.com/photo-1561448412-605d5c0c0ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  
  // Russia
  {
    id: "russia-moscow",
    name: "Moscow",
    country: "Russia",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  {
    id: "russia-st-petersburg",
    name: "St. Petersburg",
    country: "Russia",
    image: "https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 165
  },
  
  // Singapore
  {
    id: "singapore-singapore",
    name: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 214
  },
  
  // South Africa
  {
    id: "south-africa-cape-town",
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "south-africa-johannesburg",
    name: "Johannesburg",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 121
  },
  
  // South Korea
  {
    id: "south-korea-seoul",
    name: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1538485399081-7c8ed8f82cb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 198
  },
  {
    id: "south-korea-busan",
    name: "Busan",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1578500339562-7a4694847d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 134
  },
  
  // Spain
  {
    id: "spain-barcelona",
    name: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1561071756-8e28861e3aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 243
  },
  {
    id: "spain-madrid",
    name: "Madrid",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 212
  },
  {
    id: "spain-seville",
    name: "Seville",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1559385027-8cb06e23e2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 124
  },
  {
    id: "spain-valencia",
    name: "Valencia",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "spain-granada",
    name: "Granada",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "spain-bilbao",
    name: "Bilbao",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1590178876414-c63c138fd90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Sweden
  {
    id: "sweden-stockholm",
    name: "Stockholm",
    country: "Sweden",
    image: "https://images.unsplash.com/photo-1580650932389-75956e5fb616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "sweden-gothenburg",
    name: "Gothenburg",
    country: "Sweden",
    image: "https://images.unsplash.com/photo-1594059365878-5f0a4a4c42f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Switzerland
  {
    id: "switzerland-zurich",
    name: "Zurich",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "switzerland-geneva",
    name: "Geneva",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1551675705-080c7bd6c3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "switzerland-lucerne",
    name: "Lucerne",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1527679118570-42248f992593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // Thailand
  {
    id: "thailand-bangkok",
    name: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 198
  },
  {
    id: "thailand-phuket",
    name: "Phuket",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "thailand-chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1598096969068-afd58c443684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "thailand-pattaya",
    name: "Pattaya",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1567941723610-469d48b919df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  
  // Turkey
  {
    id: "turkey-istanbul",
    name: "Istanbul",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1599581425921-726d9ed4faac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  {
    id: "turkey-cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1642167385051-4e3bec051097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "turkey-antalya",
    name: "Antalya",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1542902463-4e8b1a7b6130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  
  // United Arab Emirates
  {
    id: "united-arab-emirates-dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 256
  },
  {
    id: "united-arab-emirates-abu-dhabi",
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  
  // United Kingdom
  {
    id: "united-kingdom-london",
    name: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 412
  },
  {
    id: "united-kingdom-edinburgh",
    name: "Edinburgh",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1602601522242-24fdb7a39a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 154
  },
  {
    id: "united-kingdom-manchester",
    name: "Manchester",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1573559531522-3810c1cb922f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "united-kingdom-glasgow",
    name: "Glasgow",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1561621541-c614dae58f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "united-kingdom-liverpool",
    name: "Liverpool",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1558631415-e5e30921ad0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "united-kingdom-belfast",
    name: "Belfast",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1599811644409-562b53ffa5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  
  // United States
  {
    id: "united-states-new-york-city-ny",
    name: "New York City, NY",
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 589
  },
  {
    id: "united-states-los-angeles-ca",
    name: "Los Angeles, CA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 487
  },
  {
    id: "united-states-san-francisco-ca",
    name: "San Francisco, CA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 345
  },
  {
    id: "united-states-las-vegas-nv",
    name: "Las Vegas, NV",
    country: "United States",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 432
  },
  {
    id: "united-states-chicago-il",
    name: "Chicago, IL",
    country: "United States",
    image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 354
  },
  {
    id: "united-states-miami-fl",
    name: "Miami, FL",
    country: "United States",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 317
  },
  {
    id: "united-states-orlando-fl",
    name: "Orlando, FL",
    country: "United States",
    image: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 267
  },
  {
    id: "united-states-boston-ma",
    name: "Boston, MA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1582835233761-2087b3b7ce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 219
  },
  {
    id: "united-states-washington-dc",
    name: "Washington, D.C.",
    country: "United States",
    image: "https://images.unsplash.com/photo-1617581629397-0c2dbd60f9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 248
  },
  {
    id: "united-states-seattle-wa",
    name: "Seattle, WA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1542223616-9de9adb5e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 216
  },
  {
    id: "united-states-new-orleans-la",
    name: "New Orleans, LA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1621977717126-e29965156a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 187
  },
  {
    id: "united-states-honolulu-hi",
    name: "Honolulu, HI",
    country: "United States",
    image: "https://images.unsplash.com/photo-1573468662560-708c9b3ef996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 154
  },
  {
    id: "united-states-san-diego-ca",
    name: "San Diego, CA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1517861519350-9e75df86982d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 198
  },
  {
    id: "united-states-denver-co",
    name: "Denver, CO",
    country: "United States",
    image: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 178
  },
  {
    id: "united-states-atlanta-ga",
    name: "Atlanta, GA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1575931953324-8086a3dead68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 189
  },
  {
    id: "united-states-nashville-tn",
    name: "Nashville, TN",
    country: "United States",
    image: "https://images.unsplash.com/photo-1612712191426-54db4d88cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 167
  },
  {
    id: "united-states-phoenix-az",
    name: "Phoenix, AZ",
    country: "United States",
    image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 143
  },
  {
    id: "united-states-philadelphia-pa",
    name: "Philadelphia, PA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1601751839039-54fc68d8310b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 156
  },
  {
    id: "united-states-dallas-tx",
    name: "Dallas, TX",
    country: "United States",
    image: "https://images.unsplash.com/photo-1545194445-dddb67f89651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 178
  },
  {
    id: "united-states-houston-tx",
    name: "Houston, TX",
    country: "United States",
    image: "https://images.unsplash.com/photo-1612896247665-1f59ea251cd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 165
  },
  {
    id: "united-states-austin-tx",
    name: "Austin, TX",
    country: "United States",
    image: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 154
  },
  {
    id: "united-states-portland-or",
    name: "Portland, OR",
    country: "United States",
    image: "https://images.unsplash.com/photo-1576615742390-ffd4d13dbd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 132
  },
  {
    id: "united-states-san-antonio-tx",
    name: "San Antonio, TX",
    country: "United States",
    image: "https://images.unsplash.com/photo-1580650234654-c7628abd270f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  {
    id: "united-states-charleston-sc",
    name: "Charleston, SC",
    country: "United States",
    image: "https://images.unsplash.com/photo-1603488704670-cf87f5a74899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "united-states-savannah-ga",
    name: "Savannah, GA",
    country: "United States",
    image: "https://images.unsplash.com/photo-1648067003290-78917a6d7a32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "united-states-sedona-az",
    name: "Sedona, AZ",
    country: "United States",
    image: "https://images.unsplash.com/photo-1568229354700-c0bc778bd258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  {
    id: "united-states-anchorage-ak",
    name: "Anchorage, AK",
    country: "United States",
    image: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 65
  },
  {
    id: "united-states-big-island-hi",
    name: "Big Island of Hawaii, HI",
    country: "United States",
    image: "https://images.unsplash.com/photo-1542398031-511f1af1f09e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "united-states-fort-lauderdale-fl",
    name: "Fort Lauderdale, FL",
    country: "United States",
    image: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "united-states-jackson-hole-wy",
    name: "Jackson Hole, WY",
    country: "United States",
    image: "https://images.unsplash.com/photo-1608059435813-a62a76dc567a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 54
  },
  {
    id: "united-states-kauai-hi",
    name: "Kauai, HI",
    country: "United States",
    image: "https://images.unsplash.com/photo-1507276119023-165c89ea0c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  },
  {
    id: "united-states-key-west-fl",
    name: "Key West, FL",
    country: "United States",
    image: "https://images.unsplash.com/photo-1581262222137-5a2a0dd810f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 87
  },
  {
    id: "united-states-maui-hi",
    name: "Maui, HI",
    country: "United States",
    image: "https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "united-states-oahu-hi",
    name: "Oahu, HI",
    country: "United States",
    image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 112
  },
  
  // Vietnam
  {
    id: "vietnam-hanoi",
    name: "Hanoi",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 102
  },
  {
    id: "vietnam-ho-chi-minh-city",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 98
  },
  {
    id: "vietnam-da-nang",
    name: "Da Nang",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1564846824194-115678958806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    eventCount: 76
  }
];

// Helper function to get a list of all unique countries
export const getUniqueCountries = (): string[] => {
  const countries = allDestinations.map(dest => dest.country);
  return [...new Set(countries)].sort();
};

// Helper function to get destinations by country
export const getDestinationsByCountry = (country: string): Destination[] => {
  if (country === "all") {
    return allDestinations;
  }
  return allDestinations.filter(dest => dest.country === country);
};

// Export the Destination type
export type { Destination };
