import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import AppHomePage from "./pages/AppHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/app", element: <AppHomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
