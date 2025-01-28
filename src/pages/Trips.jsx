import TripInfoCard from "../features/trips/TripInfoCard";
import Heading from "../UI/Heading";

function Trips() {
  const data = [
    { id: 1, Country: "Spain", Town: "Madrid" },
    { id: 2, Country: "Spain", Town: "Barcelona" },
    { id: 3, Country: "Spain", Town: "Tenerife" },
    { id: 4, Country: "Spain", Town: "Sitges" },
  ];

  return (
    <div className="w-full">
      <Heading>Trips</Heading>
      <ul>
        {data.map((trip) => (
          <TripInfoCard key={trip.id} trip={trip} />
        ))}
      </ul>
    </div>
  );
}

export default Trips;
