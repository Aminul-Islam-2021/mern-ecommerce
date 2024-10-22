import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../main/layout/Layout";
import Home from "../main/pages/Home";
import Products from "../main/pages/Products";
import Blogs from "../main/pages/Blogs";
import Test from "../main/pages/Test";
import DBoardLayout from "../dashboard/layout/DBoardLayout"
import Main from "../dashboard/pages/Main"
import DBusers from "../dashboard/pages/DBusers";
import DBproducts from "../dashboard/pages/DBproducts";
import DBorders from "../dashboard/pages/DBorders";
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
  {
    path:"/dashboard",
    element:<DBoardLayout/>,
    children:[
      { index: true, element: <Main /> },
      {
        path: "users",
        element: <DBusers />,
      },
      {
        path: "products",
        element: <DBproducts />,
      },
      {
        path: "orders",
        element: <DBorders />,
      },
    ]
  }
]);
