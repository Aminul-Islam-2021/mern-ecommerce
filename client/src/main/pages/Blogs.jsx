import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Banner Section */}
      <section className="banner-section my-8">
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <h1 className="text-white text-4xl font-bold text-center pt-24">
            Big Sale - Up to 50% Off!
          </h1>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section my-12">
        <h2 className="text-3xl font-bold mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeatable Category Item */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Category"
              className="w-full h-32 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Category 1
            </h3>
          </div>

          {/* Add more categories as needed */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Category"
              className="w-full h-32 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Category 1
            </h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Category"
              className="w-full h-32 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Category 1
            </h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Category"
              className="w-full h-32 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Category 1
            </h3>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="logo-section my-12">
        <h2 className="text-3xl font-bold mb-6">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-around">
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 1"
            className="w-24 h-24 object-contain"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 2"
            className="w-24 h-24 object-contain"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 3"
            className="w-24 h-24 object-contain"
          />
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* New Products Section */}
      <section className="new-products-section my-12">
        <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeatable Product Item */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Product 1</h3>
            <p className="text-gray-500 mt-2">$100.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          {/* Add more new products as needed */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Product 1</h3>
            <p className="text-gray-500 mt-2">$100.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Product 1</h3>
            <p className="text-gray-500 mt-2">$100.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Product 1</h3>
            <p className="text-gray-500 mt-2">$100.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Product 1</h3>
            <p className="text-gray-500 mt-2">$100.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section my-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeatable Product Item */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Featured Product 1</h3>
            <p className="text-gray-500 mt-2">$150.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          {/* Add more featured products as needed */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Featured Product 1</h3>
            <p className="text-gray-500 mt-2">$150.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Featured Product 1</h3>
            <p className="text-gray-500 mt-2">$150.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Featured Product 1</h3>
            <p className="text-gray-500 mt-2">$150.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Product"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">Featured Product 1</h3>
            <p className="text-gray-500 mt-2">$150.00</p>
            <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section my-12">
        <h2 className="text-3xl font-bold mb-6">Our Brands</h2>
        <div className="flex flex-wrap justify-around">
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 1"
            className="w-24 h-24 object-contain"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 2"
            className="w-24 h-24 object-contain"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brand 3"
            className="w-24 h-24 object-contain"
          />
          {/* Add more brand logos as needed */}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

{
  /*  <AutoSlidingBanner /> */
}
