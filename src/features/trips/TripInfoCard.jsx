/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Heading from "../../UI/Heading";

function TripInfoCard({ trip }) {
  const { Country, Town, id } = trip;
  return (
    <li className="w-full bg-gray-50 border border-gray-200 px-4 py-6 relative overflow-hidden rounded mb-4">
      <span className="w-full block h-4 bg-rose-500 absolute top-0 left-0"></span>
      <Link to={`/trips/${id}`}>
        <Heading type="h3">{Town}</Heading>
        <p>{Country}</p>
      </Link>
    </li>
  );
}

export default TripInfoCard;
