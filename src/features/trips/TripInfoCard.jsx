/* eslint-disable react/prop-types */
import Heading from "../../UI/Heading";

function TripInfoCard({ trip }) {
  const { Country, Town } = trip;
  return (
    <li className="w-full bg-gray-50 border border-gray-200 px-4 py-6">
      <Heading type="h3">{Town}</Heading>
      <p>{Country}</p>
    </li>
  );
}

export default TripInfoCard;
