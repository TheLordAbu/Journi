import { useParams } from "react-router-dom";

function Journi() {
  const id = useParams().id;
  return (
    <div>
      <p>HI welcome to Journi {id}</p>
    </div>
  );
}

export default Journi;
