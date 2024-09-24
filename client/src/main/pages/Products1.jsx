import React, { useState } from "react";
import {
  useGetProductsQuery,
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from "../../reduxStore/features/products/productApi";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(0);
  const [brands, setBrands] = useState([]);

  const { data, error, isLoading } = useGetProductsQuery({
    search,
    category,
    sort,
    page,
    limit: 10,
    minPrice,
    maxPrice,
    rating,
    brands: brands.join(","),
  });

  const { data: brandData } = useGetBrandsQuery();
  const { data: categoryData } = useGetCategoriesQuery();

  const handleBrandChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Advanced Search, Filter, Sort Options */}
      <div className="flex space-x-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoryData?.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          className="border p-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
          <option value="newest">Newest</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      {/* Price Range Slider */}
      <div className="flex space-x-4 my-4">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
        <div>
          <span>Min Price: ${minPrice}</span> -{" "}
          <span>Max Price: ${maxPrice}</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="flex space-x-2 my-4">
        {brandData?.brands.map((brand) => (
          <label key={brand} className="flex items-center">
            <input
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <span className="ml-2">{brand}</span>
          </label>
        ))}
      </div>

      {/* Product Listing */}
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.products.map((product) => (
              <div key={product._id} className="border p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
