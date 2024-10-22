import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";

const DBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeContextProvider>
      <div className="min-h-screen flex">
        <Sidebar />
        <div
          className="grow ml-16 md:ml-64 h-fit  bg-gray-100 text-gray-900
dark:bg-gray-900 dark:text-white"
        >
          <Navbar />
          <div>
            <main className=" my-12">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default DBoardLayout;
