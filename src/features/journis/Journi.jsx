import { Link, useParams } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useJournis } from "./useJournis";
import Loader from "../../UI/Loader";

function Journi() {
  const { isLoading } = useJournis();
  const id = useParams().id;

  if (isLoading) return <Loader />;
  return (
    <div>
      <Link onClick={useMoveBack()}>&larr; Go back</Link>
      <p>HI welcome to Journi {id}</p>
    </div>
  );
}

export default Journi;
