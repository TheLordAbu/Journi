import { navBarStyles } from "../../utils/Styles";
import NavButton from "../../UI/NavButton";
import Logo from "../../UI/Logo";

// eslint-disable-next-line react/prop-types
function SideNav({ children }) {
  return (
    <aside className={`${navBarStyles} bg-stone-900 pt-16`}>
      <Logo type="map" />
      <div className="flex bg-stone-800 mt-6">
        <NavButton type="map" link="/cities">
          Cities
        </NavButton>
        <NavButton type="map" link="/countries">
          Countries
        </NavButton>
      </div>
      <div className="h-128 overflow-y-scroll w-full my-8 px-4">{children}</div>
    </aside>
  );
}

export default SideNav;
