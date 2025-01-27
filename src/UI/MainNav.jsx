import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import NavButton from "./NavButton";
import Logo from "./Logo";

function MainNav() {
  return (
    <nav className="flex flex-col items-center py-3 px-4 h-screen bg-gray-50 border-r border-r-gray-200">
      <Logo type="small" />
      <div className="flex items-center flex-col justify-between gap-2 w-full px-">
        <NavButton link="/app" icon={<HiOutlineHome />}>
          Dashboard
        </NavButton>
        <NavButton link="/trips" icon={<MdOutlineTravelExplore />}>
          Trips
        </NavButton>
        <NavButton link="/map" icon={<GrMapLocation />}>
          Map
        </NavButton>
      </div>
    </nav>
  );
}

export default MainNav;
