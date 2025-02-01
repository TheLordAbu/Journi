import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="grid grid-cols-[316px_minmax(900px,_1fr)] grid-rows-[auto, 1fr] bg-gray-200 min-h-screen shadow-xs shadow-stone-800 rounded-xs overflow-hidden">
      <MainNav />
      <main>
        <TopNav />
        <div className="px-11 py-6 flex gap-y-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
