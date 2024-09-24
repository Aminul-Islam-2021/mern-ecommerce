import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { Range } from "react-range"; // For price range

const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "Laptop",
    category: "Electronics",
    color: "Black",
    price: 999,
    rating: 4,
    description: "A high-performance laptop",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/26926239/pexels-photo-26926239/free-photo-of-bird-on-sea-shore-at-sunset.jpeg",
    name: "T-Shirt",
    category: "Clothing",
    color: "Red",
    price: 19,
    rating: 3,
    description: "A comfortable t-shirt",
  },
  // Add more products as needed
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [filters, setFilters] = useState({
    categories: ["Electronics", "Fashion", "Furniture", "Books"],
    price: { min: 0, max: 1000, currentRange: [100, 900] },
    colors: ["red", "blue", "green", "black"],
    brands: ["Nike", "Apple", "Samsung", "Adidas"],
    rating: 0, // New rating filter
    activeFilters: [],
    searchQuery: "", // New search filter
  });

  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    color: true,
    brand: false,
    rating: true, // New section toggle for rating
  });

  const toggleSection = (section) => {
    setOpenSections({ ...openSections, [section]: !openSections[section] });
  };

  const handleFilterChange = (type, value) => {
    if (type === "removeFilter") {
      setFilters({
        ...filters,
        activeFilters: filters.activeFilters.filter((f) => f !== value),
      });
    } else if (type === "search") {
      setFilters({ ...filters, searchQuery: value });
    } else {
      setFilters({
        ...filters,
        activeFilters: [...filters.activeFilters, `${type}: ${value}`],
      });
    }
  };

  const handleRatingChange = (rating) => {
    setFilters({ ...filters, rating });
    setFilters({
      ...filters,
      activeFilters: [...filters.activeFilters, `rating: ${rating} stars`],
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className=" flex  gap-1">
        <div className=" hidden lg:block w-full lg:w-1/4 p-4 bg-white rounded-md">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search products..."
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
            <SearchIcon className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>

          {/* Category Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("category")}
            >
              <h3 className="text-lg font-medium">Category</h3>
              {openSections.category ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </div>
            {openSections.category && (
              <ul className="mt-2 space-y-2">
                {filters.categories.map((category) => (
                  <li key={category}>
                    <input
                      type="checkbox"
                      id={category}
                      onChange={() => handleFilterChange("category", category)}
                      className="mr-2 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price Range Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("price")}
            >
              <h3 className="text-lg font-medium">Price Range</h3>
              {openSections.price ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </div>
            {openSections.price && (
              <div className="mt-4">
                <Range
                  step={10}
                  min={filters.price.min}
                  max={filters.price.max}
                  values={filters.price.currentRange}
                  onChange={(values) =>
                    setFilters({
                      ...filters,
                      price: { ...filters.price, currentRange: values },
                    })
                  }
                  renderTrack={({ props, children }) => (
                    <div {...props} className="w-full h-2 bg-gray-200 rounded">
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="w-5 h-5 bg-blue-600 rounded-full shadow"
                    ></div>
                  )}
                />
                <div className="flex justify-between text-sm mt-1">
                  <span>${filters.price.currentRange[0]}</span>
                  <span>${filters.price.currentRange[1]}</span>
                </div>
              </div>
            )}
          </div>

          {/* Color Filter with Swatches */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("color")}
            >
              <h3 className="text-lg font-medium">Color</h3>
              {openSections.color ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </div>
            {openSections.color && (
              <ul className="mt-2 flex space-x-3">
                {filters.colors.map((color) => (
                  <li key={color}>
                    <button
                      onClick={() => handleFilterChange("color", color)}
                      className={`w-6 h-6 rounded-full border-2 ${color} ${
                        filters.selectedColor === color
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Rating Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("rating")}
            >
              <h3 className="text-lg font-medium">Rating</h3>
              {openSections.rating ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </div>
            {openSections.rating && (
              <div className="flex space-x-2 mt-2">
                {[1].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className={`flex items-center space-x-1 p-1 ${
                      filters.rating === star
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  >
                    {Array(star)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                      ))}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("brand")}
            >
              <h3 className="text-lg font-medium">Brand</h3>
              {openSections.brand ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </div>
            {openSections.brand && (
              <div className="mt-2">
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                >
                  <option value="">All Brands</option>
                  {filters.brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        <div className=" w-full   lg:w-3/4">
          {/* Filter Tags */}
          {filters.activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm flex items-center space-x-2"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => handleFilterChange("removeFilter", filter)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Products Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Assuming 'products' is the array of product data */}
            {products
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(filters.searchQuery.toLowerCase())
              )
              .filter((product) => product.rating >= filters.rating)
              .filter(
                (product) =>
                  filters.price.currentRange[0] <= product.price &&
                  filters.price.currentRange[1] >= product.price
              )
              .filter(
                (product) =>
                  filters.activeFilters.includes(
                    `category: ${product.category}`
                  ) || filters.activeFilters.length === 0
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">${product.price}</p>
                  <div className="flex items-center mt-2">
                    {Array(product.rating)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                      ))}
                  </div>
                </div>
              ))}
          </div>

          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
