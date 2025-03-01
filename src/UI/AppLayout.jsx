import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="lg:grid lg:grid-cols-[316px_minmax(900px,_1fr)] lg:grid-rows-[auto, 1fr] bg-gray-200 min-h-screen shadow-xs shadow-stone-800 rounded-xs overflow-hidden">
      <MainNav />
      <main className="h-full">
        <TopNav />
        <div className="md:px-11 p-0 md:py-6 flex gap-y-12 overflow-y-scroll">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
