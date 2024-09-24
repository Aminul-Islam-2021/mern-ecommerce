import React from "react";

const Home = () => {
  return (
    <div className=" flex  gap-1">
      <div className="hidden  lg:block lg:w-1/4  bg-gray-100 px-3 py-3 ">
        Left side content
      </div>
      <div className=" w-full  bg-gray-100 lg:w-3/4">
        {/* Banner Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">
                Seasonal Sale: Up to 70% Off
              </h2>
              <p className="mt-4 text-lg">
                Limited time offer on all categories. Don't miss out!
              </p>
              <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-md">
                Explore Deals
              </button>
            </div>
          </div>
        </section>

        {/* Mini Categories Section */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Shop by Categories
          </h2>
          <div className="flex flex-grow justify-center items-center gap-6">
            {/* Mini Category Icons with SVG */}
            {["Electronics", "Clothing", "Accessories", "Home Decor"].map(
              (category, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Replace with your SVG icons or image paths */}
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <img
                      src={`/path-to-${category.toLowerCase()}-icon.svg`}
                      alt={category}
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm font-semibold">
                    {category}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-14 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {/* Product Card */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-gray-200"></div>
                <div>
                  <h3 className="text-lg font-semibold text-center">
                    Product Name :{index + 1}
                  </h3>
                  <div className=" flex justify-between px-4">
                    <p className="text-gray-500">$99.99</p>
                    <p className="text-gray-500">*****</p>
                  </div>

                  <div className=" flex justify-center  text-sm md:text-xs font-semibold ">
                    <button className=" p-2 w-full  bg-cyan-500 text-white ">
                      Buy Now
                    </button>
                    <button className=" p-2 w-full  bg-pink-700 text-white ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-14 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            New Arrival
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {/* Product Card */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-gray-200"></div>
                <div>
                  <h3 className="text-lg font-semibold text-center">
                    Product Name :{index + 1}
                  </h3>
                  <div className=" flex justify-between px-4">
                    <p className="text-gray-500">$99.99</p>
                    <p className="text-gray-500">*****</p>
                  </div>

                  <div className=" flex justify-center  text-sm md:text-xs font-semibold ">
                    <button className=" p-2 w-full  bg-pink-600 text-white ">
                      Buy Now
                    </button>
                    <button className=" p-2 w-full  bg-cyan-500 text-white ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-14 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Popular Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {/* Product Card */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-gray-200"></div>
                <div>
                  <h3 className="text-lg font-semibold text-center">
                    Product Name :{index + 1}
                  </h3>
                  <div className=" flex justify-between px-4">
                    <p className="text-gray-500">$99.99</p>
                    <p className="text-gray-500">*****</p>
                  </div>

                  <div className=" flex justify-center  text-sm md:text-xs font-semibold ">
                    <button className=" p-2 w-full  bg-pink-600 text-white ">
                      Buy Now
                    </button>
                    <button className=" p-2 w-full  bg-cyan-500 text-white ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mini Brands Logos Section */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Our Featured Brands
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {/* Mini Brand Logos */}
            {["brand1", "brand2", "brand3", "brand4", "brand5", "brand6"].map(
              (brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md"
                >
                  <img
                    src={`/path-to-${brand}-logo.svg`}
                    alt={`${brand} logo`}
                    className="w-10 h-10"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* Promotional Banner Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Special Offer: Up to 50% Off!</h2>
          <p className="mt-4">
            Grab your favorite products at discounted prices.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-md">
            Shop Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
