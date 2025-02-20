import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";
import AppHomePage from "./pages/AppHomePage";
import Map from "./pages/TravelMap";
import Journis from "./pages/Journis";
import Cities from "./features/map/Cities";
import Countries from "./features/map/Countries";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/app", element: <AppHomePage /> },
      { path: "/journis", element: <Journis /> },
    ],
  },
  { path: "/cities", element: <Cities /> },
  { path: "/countries", element: <Countries /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
