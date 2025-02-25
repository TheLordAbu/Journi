import { gridLayout } from "../../utils/Styles";
import { position } from "../../utils/mapPosition";
import SideNav from "../../features/map/SideNav";
import Map from "./Map";
import CountryCode from "../journis/CountryCode";

function Countries() {
  return (
    <div className="relative">
      <div className={`${gridLayout}`}>
        <SideNav>
          <CountryCode />
        </SideNav>
        <Map position={position} />
      </div>
    </div>
  );
}

export default Countries;
