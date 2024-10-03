import React, { useState } from "react";
//import { useCreateProductMutation } from "../features/productApi";
import Modal from "./Modal";

const CreateProductForm = ({ isOpen, onClose }) => {
  //const [createProduct] = useCreateProductMutation();
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    await createProduct(formData)
      .unwrap()
      .then(() => {
        alert("Product created successfully");
        onClose();
      })
      .catch((error) => {
        console.error("Failed to create product:", error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Create New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {/* Product Name */}
        <div className="relative col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="relative col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product name"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Price */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product price"
            required
          />
        </div>
        {/* Stock */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Description */}
        <div className="relative col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="relative col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Product Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <div className="mt-4 flex gap-2 flex-wrap">
            {selectedImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`preview-${idx}`}
                className="w-20 h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="relative col-span-full">
          <button
            type="submit"
            className="w-full mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 "
          >
            Create Product
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateProductForm;
