import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import NavButton from "./NavButton";
import Logo from "./Logo";

function MainNav() {
  return (
    <nav className="flex flex-col items-center py-3h-screen bg-stone-900 border-r border-r-gray-200">
      <Logo type="small" />
      <div className="flex items-center flex-col justify-between gap-2 w-full">
        <NavButton link="/app" icon={<HiOutlineHome />}>
          Dashboard
        </NavButton>
        <NavButton link="/journis" icon={<MdOutlineTravelExplore />}>
          Journis
        </NavButton>
        <NavButton link="/cities" icon={<GrMapLocation />}>
          Map
        </NavButton>
      </div>
    </nav>
  );
}

export default MainNav;
