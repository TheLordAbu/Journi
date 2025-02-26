import { gridLayout } from "../../utils/Styles";
import { position } from "../../utils/mapPosition";
import { useJournis } from "../journis/useJournis";
import SideNav from "../../features/map/SideNav";
import Map from "./Map";
import Loader from "../../UI/Loader";
import CountryCode from "../journis/CountryCode";

function Countries() {
  const { journis, isLoading } = useJournis();
  const countries = journis?.map((journi) => (
    <div
      key={journi.id}
      className="text-gray-100 font-semibold py-2 bg-stone-800 rounded p-4 mb-2"
    >
      {journi.country}
      <CountryCode country={journi.country} className="ml-2" />
    </div>
  ));
  return (
    <div className="relative">
      <div className={`${gridLayout}`}>
        <SideNav>
          {isLoading && <Loader />}
          {countries}
        </SideNav>
        <Map position={position} />
      </div>
    </div>
  );
}

export default Countries;
