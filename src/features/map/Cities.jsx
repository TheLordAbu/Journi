import { gridLayout } from "../../utils/Styles";

import SideNav from "../../features/map/SideNav";
import Map from "./Map";

function Cities() {
  const position = [51.505, -0.09];
  return (
    <div className="relative">
      <div className={`${gridLayout}`}>
        <SideNav />
        <Map position={position} />
      </div>
    </div>
  );
}

export default Cities;
