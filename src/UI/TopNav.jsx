import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
function TopNav() {
  return (
    <nav className="h-16 flex items-center w-full bg-gray-50 mb-4 border-b border-gray-200 justify-end px-10 py-5">
      <ul className="flex gap-4">
        <h1 className="p-2">TopNav</h1>
        <li>
          <button className="p-2 cursor-pointer">
            <HiOutlineUser />
          </button>
        </li>
        <li>
          <button className="p-2 cursor-pointer ">
            <HiOutlineMoon />
          </button>
        </li>
        <li>
          <button className="p-2 cursor-pointer">
            <HiArrowRightOnRectangle />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
