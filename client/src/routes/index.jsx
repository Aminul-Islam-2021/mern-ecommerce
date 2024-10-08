import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../main/layout/Layout";
import Home from "../main/pages/Home";
import Products from "../main/pages/Products";
import Blogs from "../main/pages/Blogs";
import Test from "../main/pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/test",
        element: < Test/>,
      },
    ],
  },
]);
