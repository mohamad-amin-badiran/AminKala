import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/Layout";
import "../public/style.css";
import App from "./App";
import CategoryList from "./pages/CategoryLists/CategoryList";
import CartLists from "./pages/cart/cartLists";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/category/:id",
        element: <CategoryList />,
      },
      {
        path: "/cart",
        element: <CartLists />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
