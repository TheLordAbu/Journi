/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";

import { useDeleteJourni } from "./useDeleteJourni";
import { useEditJourni } from "./useEditJourni";
import Location from "../../UI/Location";
import JourniTeaserButton from "./JourniTeaserButton";
import JourniTeaserDate from "./JourniTeaserDate";
import Modal from "../../UI/Modal";

function JourniTeaser({ journi }) {
  const { isDeleting, deleteJourni } = useDeleteJourni();
  const { isEditing, editJourni } = useEditJourni();
  const { city, country, thumbnail, startDate, endDate, id } = journi;

  // function handleEditJourni()
  return (
    <li className="w-full h-56 md:h-96 bg-stone-900  relative overflow-hidden rounded-md mb-2 group">
      <Modal.Open opens="edit">
        <JourniTeaserButton
          onClick={() => editJourni(id)}
          disabled={isEditing}
          className="top-4 left-4"
        >
          <VscEdit />
        </JourniTeaserButton>
      </Modal.Open>
      <JourniTeaserButton
        onClick={() => deleteJourni(id)}
        disabled={isDeleting}
        className="top-4 right-4"
      >
        <RiDeleteBin6Line />
      </JourniTeaserButton>
      <Link to={`/journis/${id}`} className="h-full w-full">
        <img
          src={thumbnail}
          alt={`${(city, country)}`}
          className="w-full h-full object-cover object-center"
        />
        <Location country={country} city={city} />
        <JourniTeaserDate startDate={startDate} endDate={endDate} />
      </Link>
    </li>
  );
}

export default JourniTeaser;
