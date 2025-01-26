import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";

function AppLayout() {
  return (
    <>
      <PageNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
