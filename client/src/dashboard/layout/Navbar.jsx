import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContextProvider";
const Navbar = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="fixed z-20 right-0 left-20 md:left-64  bg-gray-100 text-gray-900 border-b border-gray-300 p-4 pr-8 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <h1>Dashboard</h1>
        <button className="text-2xl text-dark" onClick={toogleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
