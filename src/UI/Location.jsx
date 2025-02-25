import { CiLocationOn } from "react-icons/ci";
import CountryCode from "../features/journis/CountryCode";

function Location({ city, country }) {
  return (
    <span className="flex items-center bg-stone-900/50 text-gray-100 tracking-wide font-semibold letter-spacing text-sm p-2 rounded-lg w-fit absolute bottom-4 left-4 group-hover:-translate-y-12 shadow-md shadow-black/50">
      <CiLocationOn />
      {city}, {country} <CountryCode country={country} />
    </span>
  );
}

export default Location;
