import React, { useState } from "react";
import { useGetProductsQuery } from "../../reduxStore/features/products/productApi";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data, error, isLoading } = useGetProductsQuery({
    search,
    category,
    sort,
    page,
    minPrice,
    maxPrice,
  });

  const handleSearch = (e) => setSearch(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);
  const handlePageChange = (pageNumber) => setPage(pageNumber);
  return (
    <div className=" flex  gap-1">
      <div className=" hidden lg:block w-full lg:w-1/4 p-4 bg-white rounded-md">
        <div className=" flex flex-col gap-4">
          
          {/* Search Bar */}
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
          />
          {/* Category Filter */}
          <select value={category} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            {/* Add more categories */}
          </select>
          {/* Sorting Options */}
          <select value={sort} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            {/* Add more sorting criteria */}
          </select>
        </div>
      </div>
      <div className=" w-full   lg:w-3/4">
        {/* Product List */}
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
        <div>
          {/* Pagination */}
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <span>{page}</span>
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

{
  /*  <AutoSlidingBanner /> */
}
