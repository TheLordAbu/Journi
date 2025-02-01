/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";

function NavButton({ children, link, icon, type }) {
  const location = useLocation();
  const base = "text-gray-300 px-8 py-2 cursor-pointer font-semibold";

  const isCurrentPage = location.pathname === link;
  if (type == "map")
    return (
      <button className="w-full cursor-pointer">
        <NavLink
          to={link}
          className={
            isCurrentPage
              ? `${base} bg-(--color-brand) rounded`
              : `${base} bg-stone-800`
          }
        >
          {children}
        </NavLink>
      </button>
    );
  return (
    <button className="w-full cursor-pointer">
      <NavLink
        to={link}
        className="flex gap-2 items-center text-gray-300 p-2 py-4 navlink cursor-pointer font-semibold before:content-[''] relative"
      >
        <span className="absolute top-0 left-0 w-2 h-full "></span>
        <span className="z-10">{icon}</span>
        <span className="z-10">{children}</span>
      </NavLink>
    </button>
  );
}

export default NavButton;
