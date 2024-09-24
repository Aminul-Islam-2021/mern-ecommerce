import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
//import { IoSettings } from "react-icons/io5";
import { IoMdGitCompare } from "react-icons/io";
import CateDrawer from "../components/CateDrawer";
import { Link } from "react-router-dom";
import { LuFilter } from "react-icons/lu";
import FilterDrawer from "../components/FilterDrawer";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Cameras"],
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Decor", "Appliances"],
  },
];

const BottomNavbar = () => {
  const [isCateDrawerOpen, setIsCateDrawerOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const toggleCateDrawer = () => {
    setIsCateDrawerOpen(!isCateDrawerOpen);
  };
  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t border-gray-200 z-50 lg:hidden">
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="text-center">
          <FaHome className="h-6 w-6 mx-auto text-gray-600" />
          <span className="text-xs text-gray-600">Home</span>
        </Link>
        <Link to="#" className="text-center">
          <BiCategory
            onClick={toggleCateDrawer}
            className="h-6 w-6 mx-auto text-gray-600"
          />
          <span className="text-xs text-gray-600">Category</span>
          <CateDrawer
            isOpen={isCateDrawerOpen}
            onClose={toggleCateDrawer}
            categories={categories}
          />
        </Link>
        <Link to="#" className="text-center">
          <LuFilter
            onClick={toggleFilterDrawer}
            className="h-6 w-6 mx-auto text-gray-600"
          />
          <span className="text-xs text-gray-600">Filter</span>
          <FilterDrawer
            isOpen={isFilterDrawerOpen}
            onClose={toggleFilterDrawer}
          />
        </Link>
        <Link to="#" className="text-center">
          <IoMdGitCompare className="h-6 w-6 mx-auto text-gray-600" />
          <span className="text-xs text-gray-600">Compare</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;

{
  /* 
    
    <HeartIcon className="h-6 w-6 mx-auto text-gray-600" />
    
    */
}
