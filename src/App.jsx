import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import AppHomePage from "./pages/AppHomePage";
import Trips from "./pages/Trips";
import Map from "./pages/Map";

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
      { path: "/trips", element: <Trips /> },
    ],
  },
  { path: "/map", element: <Map /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
