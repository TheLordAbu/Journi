/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavButton({ children, link, icon }) {
  const base =
    "flex gap-2 items-center p-2 py-4 navlink cursor-pointer rounded-md hover:bg-gray-100 font-semibold";
  return (
    <button className="w-full cursor-pointer">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? `${base} bg-gray-100` : `${base}`
        }
      >
        {icon}
        {children}
      </NavLink>
    </button>
  );
}

export default NavButton;
