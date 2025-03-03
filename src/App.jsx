import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import AppHomePage from "./pages/AppHomePage";
import Journis from "./pages/Journis";
import Cities from "./features/map/Cities";
import Countries from "./features/map/Countries";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Journi from "./features/journis/Journi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateUser />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/app", element: <AppHomePage /> },
      { path: "/journis", element: <Journis /> },
      { path: "/journis/:id", element: <Journi /> },
    ],
  },
  { path: "/cities", element: <Cities /> },
  { path: "/countries", element: <Countries /> },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />;
        <Toaster
          position="top center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#1f293778",
              color: "#fff",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
export default App;
