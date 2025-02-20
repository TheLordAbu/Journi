import { useEffect } from "react";
// import JourniInfoCard from "../features/journis/JourniInfoCard";
import Heading from "../UI/Heading";
import { getJournis } from "../services/apiJournis";

function Journis() {
  useEffect(function () {
    getJournis().then((journis) => console.log(journis));
  }, []);
  return (
    <div className="w-full">
      <Heading>Journis</Heading>
      {/* <ul>
        {data.map((journi) => (
          <JourniInfoCard key={journi.id} journi={journi} />
        ))}
      </ul> */}
    </div>
  );
}

export default Journis;
