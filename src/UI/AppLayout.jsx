import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="grid grid-cols-[316px_minmax(900px,_1fr)] grid-rows-[auto, 1fr]">
      <MainNav />
      <main>
        <TopNav />
        <div className="px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
