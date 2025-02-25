import { gridLayout } from "../../utils/Styles";
import { useJournis } from "../journis/useJournis";
import SideNav from "../../features/map/SideNav";
import Map from "./Map";
import Loader from "../../UI/Loader";

function Cities() {
  const { journis, isLoading } = useJournis();
  console.log(journis);
  const cities = journis?.map((journi) => (
    <div
      key={journi.id}
      className="text-gray-100 font-semibold py-2 bg-stone-800 rounded p-4 mb-2"
    >
      {journi.city}
    </div>
  ));
  console.log(cities);
  const position = [51.505, -0.09];
  return (
    <div className="relative">
      <div className={`${gridLayout}`}>
        <SideNav>
          {isLoading && <Loader />}
          use{cities}
        </SideNav>
        <Map position={position} />
      </div>
    </div>
  );
}

export default Cities;
