import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import AppHomePage from "./pages/AppHomePage";
import Map from "./pages/TravelMap";
import Journis from "./pages/Journis";
import Cities from "./features/map/Cities";
import Countries from "./features/map/Countries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
