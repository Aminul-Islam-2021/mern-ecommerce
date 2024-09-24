import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



const FilterDrawer = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const drawerRef = useRef();
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home Appliances" },
  ];
  // Close the drawer when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleCategoryClick = (categoryName) => {
    // Redirect to the products page with the category name as a query parameter
    navigate(`/products?category=${categoryName}`);
  };


  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* CateDrawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            onClick={onClose}
            className="text-gray-500 focus:outline-none"
          >
            ✕
          </button>
        </div>
       
      </div>
    </>
  );
};

export default FilterDrawer;
