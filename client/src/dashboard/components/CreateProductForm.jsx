import React, { useEffect, useState } from "react";
//import { useCreateProductMutation } from "../features/productApi";
import Modal from "./Modal";
import {
  useCreateProductMutation,
  useUpdateProductByIdMutation,
} from "../../reduxStore/features/products/productsApi1";

const CreateProductForm = ({ isOpen, onClose, product, mode }) => {
  const isEditing = mode === "edit";
  const isViewing = mode === "view";
  const existingImages  = product?.images || [];
  

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductByIdMutation();

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("0");
  const [stock, setStock] = useState("0");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]); // Store previews separately
  const [remainingImages, setRemainingImages] = useState([]);

  // Populate form fields if editing or viewing
  useEffect(() => {
    if (isEditing || isViewing) {
      setTitle(product?.title || "");
      setBrand(product?.brand || "");
      setCategory(product?.category || "");
      setPrice(product?.price || "0");
      setStock(product?.stock || "0");
      setDescription(product?.description || "");

      // Set images if available
      const previewUrls = product?.images?.map((image) => image.url) || [];
      setImagePreviews(previewUrls);
      setRemainingImages(product?.images || []); 
    }
  }, [isEditing, isViewing, product]);

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Store actual file objects
    setSelectedImages(files);

    // Generate previews for UI display
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previewUrls]);
  };

  const handleRemoveImage = (imageToRemove) => {
    setRemainingImages((prev) =>
      prev.filter((image) => image.url !== imageToRemove.url)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    if (isEditing) {
      // Include remaining existing images in the form data
      remainingImages.forEach((image) => {
        formData.append("existingImages", image.public_id);
      });
      await updateProduct({ id: product._id, formData })
        .unwrap()
        .then(() => {
          alert("Product updated successfully");
          onClose();
        })
        .catch((error) => {
          alert("Failed to update product:", error);
          console.error("Failed to update product:", error);
        });
    } else {
      await createProduct(formData)
        .unwrap()
        .then(() => {
          alert("Product created successfully");
          resetForm();
          onClose();
        })
        .catch((error) => {
          alert("Failed to update product:", error);
          console.error("Failed to update product:", error);
        });
    }
  };

  {
    /* if (isEditing) {
      await createProduct(formData)
        .unwrap()
        .then(() => {
          alert("Product created successfully");
          // Clear the form fields
          setTitle("");
          setBrand("");
          setCategory("");
          setPrice("0");
          setStock("0");
          setDescription("");
          setSelectedImages([]);
          setImagePreviews([]);
          onClose();
        })
        .catch((error) => {
          console.error("Failed to create product:", error);
        });
    }
        */
  }

  const resetForm = () => {
    setTitle("");
    setBrand("");
    setCategory("");
    setPrice("0");
    setStock("0");
    setDescription("");
    setSelectedImages([]);
    setImagePreviews([]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 ">
        {isViewing
          ? "View Product"
          : isEditing
          ? "Edit Product"
          : "Create New Product"}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter product name"
            required
            readOnly={isViewing}
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
            readOnly={isViewing}
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
            readOnly={isViewing}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Smartphone">Smartphone</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
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
            readOnly={isViewing}
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
            readOnly={isViewing}
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
            readOnly={isViewing}
          />
        </div>

        {/* Image Upload */}
        {!isViewing && (
          <div className="relative col-span-full">
            <label className="block text-sm font-medium text-gray-700">
              {isEditing ? "Update Images" : "Upload Images"}
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-1 p-2 md:p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        )}

        <div className="mt-4 flex gap-2 flex-wrap">
          {remainingImages.map((image, idx) => (
            <div key={idx} className="relative">
              <img
                src={image.url}
                alt={`existing-${idx}`}
                className="w-20 h-20 object-cover rounded-lg shadow-md"
              />
              {!isViewing && (
                <button
                  type="button"
                  onClick={() => handleRemoveImage(image)}
                  className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  &times;
                </button>
              )}
            </div>
          ))}

          {imagePreviews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`preview-${idx}`}
              className="w-20 h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        {/* Submit Button */}
        {!isViewing && (
          <div className="relative col-span-full">
            <button
              type="submit"
              className="w-full mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 "
            >
              {isEditing ? "Update Product" : "Create Product"}
            </button>
          </div>
        )}
      </form>
    </Modal>
  );
};

export default CreateProductForm;
