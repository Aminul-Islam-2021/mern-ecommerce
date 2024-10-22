import React from "react";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold hidden md:block mt-4 text-center italic">
          CWY Shop
        </h1>
        <ul className="flex flex-col mt-5 text-xl">
          <Link
            to="/dashboard"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white"
          >
            <RxDashboard />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
          <Link
            to="products"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <RxDashboard />
            <span className="hidden md:inline ">Products</span>
          </Link>
          <Link
            to="orders"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <RxDashboard />
            <span className="hidden md:inline ">Orders</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <RxDashboard />
            <span className="hidden md:inline ">Customers</span>
          </Link>
          <Link
            to="users"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <RxDashboard />
            <span className="hidden md:inline ">Users</span>
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <RxDashboard />
            <span className="hidden md:inline ">Settings</span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
