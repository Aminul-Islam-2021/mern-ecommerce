import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import BottomNavbar from "./BottomNavbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className=" p-4  mt-12 lg:px-36">
        <Outlet />
      </main>
      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default Layout;
