// import { MapPin } from 'lucide-react';

// const locations = [
//   {
//     id: 1,
//     name: "McKinney",
//     address: "2310 Virginia Pkwy",
//     city: "McKinney",
//     state: "TX",
//     zip: "75071",
//     lat: 33.198940,
//     lng: -96.615860
//   },
//   // Add more locations as needed
// ];

export default function LocationMap() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
      <iframe
        title="IFIXHUT Locations"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=IFIXHUT+McKinney+TX&zoom=10`}
      ></iframe>
    </div>
  );
}