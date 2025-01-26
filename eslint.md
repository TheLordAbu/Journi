/_ eslint-disable no-unused-vars _/
/_ eslint-disable react/prop-types _/
// eslint-disable-next-line react-refresh/only-export-components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop, { loader as shopLoader } from "./shop/Shop";
import CreateOrder, { action as createOrderAction } from "./orders/CreateOrder";
import Order, { loader as orderLoader } from "./orders/Order";
import ProductPage, { loader as productLoader } from "./shop/ProductPage";

import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import Home from "./UI/Home";
import Login from "./user/Login";
import Cart from "./cart/Cart";

const router = createBrowserRouter([
{
element: <AppLayout />,
errorElement: <Error />,
children: [
{ path: "/", element: <Home /> },
{
path: "/shop",
element: <Shop />,
loader: shopLoader,
},
{
path: "/shop/:gameId",
element: <ProductPage />,
loader: productLoader,
},
{
path: "/login",
element: <Login />,
},
{ path: "/cart", element: <Cart /> },
{
path: "/order/new",
element: <CreateOrder />,
action: createOrderAction,
},
{
path: "/order/:orderId",
element: <Order />,
loader: orderLoader,
errorElement: <Error />,
},
],
},
]);

function App() {
/_ eslint-disable no-unused-vars _/
/_ eslint-disable react/prop-types _/
// eslint-disable-next-line react-refresh/only-export-components
return <RouterProvider router={router} />;
}

export default App;
