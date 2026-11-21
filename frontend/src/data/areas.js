// English copy here is the source for locales/en.js; translations of name,
// intro and points live in the other locale files under `areas.<slug>`.
//
// Area landing pages (/areas/<slug>) are data-driven from this file: add an
// entry here and the route, footer link, home-page card, prerender snapshot
// and sitemap entry all follow automatically.
//
// Drive times are typical off-peak minutes to Auckland Airport (a bare range;
// each locale adds its own unit via common.minutes) and are shown as a guide
// only — the booking page prices and times every trip live.
export const AREAS = {
  'auckland-cbd': {
    name: 'Auckland CBD',
    short: 'City Centre',
    driveTime: '25–35',
    seoTitle: 'Auckland CBD Airport Shuttle — City to Airport, Door to Door',
    seoDesc:
      'Private airport shuttle between Auckland CBD and Auckland Airport. Hotel and apartment pickups in the city centre, Viaduct, Britomart, Parnell and Ponsonby. Fixed price, 24/7, book online.',
    intro:
      'Staying in the city? Your shuttle collects you from the hotel lobby, apartment door or office and runs straight to the terminal — no stops for other passengers, no dragging bags to a bus stop.',
    suburbs: ['Auckland Central', 'Viaduct Harbour', 'Britomart', 'Wynyard Quarter', 'Parnell', 'Newmarket', 'Ponsonby', 'Grey Lynn', 'Mt Eden', 'Epsom'],
    points: [
      { title: 'Hotel & apartment pickups', text: 'We meet you at the door of any city hotel, serviced apartment or Airbnb. Tell us the building name when you book.' },
      { title: 'Cruise terminal connections', text: 'Queens Wharf and Princes Wharf are minutes from the city centre — we run airport-to-ship and ship-to-airport transfers every sailing day.' },
      { title: 'Early flights covered', text: 'Motorway traffic out of the city builds from around 6:30am. Book the pickup time you want and we will plan the run around it.' },
    ],
  },
  'north-shore': {
    name: 'North Shore',
    short: 'North Shore',
    driveTime: '35–50',
    seoTitle: 'North Shore Airport Shuttle — Takapuna, Albany & Devonport to Auckland Airport',
    seoDesc:
      'Private airport shuttle from the North Shore to Auckland Airport. Door-to-door pickups in Takapuna, Albany, Devonport, Browns Bay, Glenfield and Birkenhead. Fixed price, flight tracking, book online.',
    intro:
      'Crossing the Harbour Bridge with luggage is where a pre-booked shuttle earns its keep. One vehicle, one fixed price, from your driveway on the Shore to the terminal doors.',
    suburbs: ['Takapuna', 'Milford', 'Devonport', 'Albany', 'Browns Bay', 'Mairangi Bay', 'Glenfield', 'Birkenhead', 'Northcote', 'Torbay'],
    points: [
      { title: 'Bridge traffic planned in', text: 'Morning southbound traffic over the Harbour Bridge can add real time. We suggest a pickup time that leaves a sensible margin for your flight.' },
      { title: 'Room for the whole household', text: 'Vans seat up to 11 passengers with luggage, so one booking moves the whole family — or the whole team — together.' },
      { title: 'Return trip in one booking', text: 'Add your flight home when you book and the same fixed price covers the ride back across the bridge.' },
    ],
  },
  'west-auckland': {
    name: 'West Auckland',
    short: 'West Auckland',
    driveTime: '30–40',
    seoTitle: 'West Auckland Airport Shuttle — Henderson, New Lynn & Titirangi',
    seoDesc:
      'Private airport shuttle from West Auckland to Auckland Airport. Door-to-door pickups in Henderson, New Lynn, Te Atatu, Massey, Titirangi and Hobsonville. Fixed price, 24/7, book online.',
    intro:
      'From Te Atatu to Titirangi, your shuttle picks you up at home and takes the fastest route south to the airport. No park-and-ride, no connecting trains with suitcases.',
    suburbs: ['Henderson', 'New Lynn', 'Te Atatu', 'Massey', 'Titirangi', 'Glen Eden', 'Avondale', 'Hobsonville', 'West Harbour', 'Kumeu'],
    points: [
      { title: 'Home pickups, any street', text: 'Hill roads, long driveways and rural addresses out west are all fine — the address search on the booking page finds them.' },
      { title: 'Big gear welcome', text: 'Surfboards, bikes and golf bags fit. Declare oversized items when you book so we send the right vehicle.' },
      { title: 'Late arrivals met', text: 'We track your inbound flight, so a delayed landing does not leave you without a ride home.' },
    ],
  },
  'south-auckland': {
    name: 'South Auckland',
    short: 'South Auckland',
    driveTime: '10–25',
    seoTitle: 'South Auckland Airport Shuttle — Manukau, Papakura & Pukekohe',
    seoDesc:
      'Private airport shuttle from South Auckland to Auckland Airport. Door-to-door pickups in Manukau, Papatoetoe, Manurewa, Papakura, Takanini and Pukekohe. Fixed price, flight tracking, book online.',
    intro:
      'Close to the airport does not always mean easy to get to. A pre-booked shuttle from your door beats leaving a car in long-term parking — especially for a longer trip.',
    suburbs: ['Manukau', 'Papatoetoe', 'Mangere', 'Manurewa', 'Papakura', 'Takanini', 'Flat Bush', 'Karaka', 'Drury', 'Pukekohe'],
    points: [
      { title: 'Skip airport parking', text: 'For trips longer than a few days, a return shuttle is often simpler than paying for parking — and you are dropped at the terminal door.' },
      { title: 'Airport hotel transfers', text: 'Staying near the airport before an early flight? We run short hotel-to-terminal transfers at any hour.' },
      { title: 'Franklin and beyond', text: 'Pukekohe, Karaka and Drury are all covered. Enter your address on the booking page for a live price.' },
    ],
  },
  'east-auckland': {
    name: 'East Auckland',
    short: 'East Auckland',
    driveTime: '25–40',
    seoTitle: 'East Auckland Airport Shuttle — Howick, Botany & Pakuranga',
    seoDesc:
      'Private airport shuttle from East Auckland to Auckland Airport. Door-to-door pickups in Howick, Botany, Pakuranga, Half Moon Bay, Beachlands and St Heliers. Fixed price, 24/7, book online.',
    intro:
      'East Auckland has no rail line to the airport, which makes a door-to-door shuttle the straightforward option. One booking, one vehicle, straight to departures.',
    suburbs: ['Howick', 'Botany', 'Pakuranga', 'Half Moon Bay', 'Bucklands Beach', 'East Tamaki', 'Beachlands', 'St Heliers', 'Mission Bay', 'Glen Innes'],
    points: [
      { title: 'Direct, no transfers', text: 'Your shuttle goes from your address to the terminal without changes — the simplest route from the eastern suburbs.' },
      { title: 'Families sorted', text: 'Child seats are free of charge. Tell us ages when you book and the right seats are fitted before pickup.' },
      { title: 'Any hour', text: 'Red-eye departures and midnight arrivals are routine. Pickups between 11pm and 6am carry a $15 night surcharge, shown before you pay.' },
    ],
  },
}
