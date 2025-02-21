/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { format } from "date-fns";
import { useDeleteJourni } from "./useDeleteJourni";
import Button from "../../UI/Button";

function JourniTeaser({ journi }) {
  const { isDeleting, deleteJourni } = useDeleteJourni();
  const { city, country, thumbnail, startDate, endDate, id } = journi;
  return (
    <li className="w-full h-56 md:h-96 bg-stone-900  relative overflow-hidden rounded-md mb-2 group">
      <div
        className="absolute top-4 right-4 z-50 cursor-pointer bg-stone-900/50 text-gray-100  p-2 rounded-full  shadow-md shadow-black/50"
        onClick={() => deleteJourni(id)}
        disabled={isDeleting}
      >
        <RiDeleteBin6Line />
      </div>
      <Link to={`/journis/${id}`} className="h-full w-full">
        <img src={thumbnail} alt={`${(city, country)}`} />
        <span className="flex items-center bg-stone-900/20 text-gray-100 tracking-wide font-semibold letter-spacing text-sm p-2 rounded-lg w-fit absolute bottom-4 left-4 group-hover:-translate-y-12 shadow-md shadow-black/50">
          <CiLocationOn />
          {city}, {country}
        </span>
        <div className="bg-stone-900 border-t-2 border-(--color-brand) w-full absolute px-6 bottom-0 left-0 text-gray-200 py-4 translate-y-15 group-hover:-translate-y-[0.4px] flex gap-2 font-semibold text-sm whitespace-nowrap">
          <p>{format(new Date(startDate), "MMM dd yyyy")}</p> <span> - </span>
          <p>{format(new Date(endDate), "MMM dd yyyy")}</p>
        </div>
      </Link>
    </li>
  );
}

export default JourniTeaser;
