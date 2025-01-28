/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavButton({ children, link, icon }) {
  const base =
    "flex gap-2 items-center text-gray-300 p-2 py-4 navlink cursor-pointer font-semibold before:content-[''] relative";
  return (
    <button className="w-full cursor-pointer">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? `${base}` : `${base}`)}
      >
        <span className="absolute top-0 left-0 w-2 h-full "></span>
        <span className="z-10">{icon}</span>
        <span className="z-10">{children}</span>
      </NavLink>
    </button>
  );
}

export default NavButton;
