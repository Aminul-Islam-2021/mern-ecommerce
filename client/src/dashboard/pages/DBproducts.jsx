import React, { useEffect, useState } from "react";
import CreateProductForm from "../components/CreateProductForm";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "../../reduxStore/features/products/productsApi1";

const DBproducts = () => {
  const [deleteProduct, { isLoading: isDeleting }] =
    useDeleteProductByIdMutation();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery({});
  //console.log(product);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState("create");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  //const handleOpenModal = () => setIsModalOpen(true);
  //const handleCloseModal = () => setIsModalOpen(false);
  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure want to delete this product?")) {
      await deleteProduct(_id).unwrap();
      // The page will automatically refresh the product list here
    }
  };

  if (isLoading) return <div>Loading......</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className=" flex flex-wrap justify-between p-6">
        <button
          onClick={() => {
            setModalMode("create");
            setIsModalOpen(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add New Product
        </button>

        {/* Modal for product creation/editing/viewing */}
        {isModalOpen && (
          <CreateProductForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            product={selectedProduct}
            mode={modalMode} // Pass the mode ('create', 'edit', 'view')
          />
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-cyan-00 text-white border border-gray-200 text-left">
          <thead>
            <tr className="bg-blue-600 ">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product?.products.map((product) => {
              const {
                title,
                brand,
                category,
                images,
                description,
                price,
                _id,
              } = product;
              const firstImage = images?.map((image) => image.secure_url);
              return (
                <tr
                  key={product._id}
                  className="  border-t hover:bg-blue-600 hover:text-white"
                >
                  <td className="p-3">
                    <img
                      src={firstImage[0]}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-full bg-white"
                    />
                  </td>
                  <td className="p-4">{product.title}</td>
                  <td className="p-4">{product.brand}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-8 flex gap-4 ">
                    <button
                      className="text-blue-700 hover:text-white"
                      onClick={() => handleViewClick(product)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="text-yellow-500 hover:text-white"
                      onClick={() => handleEditClick(product)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-700 hover:text-white"
                      onClick={() => handleDelete(_id)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting...." : <FaTrash />}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DBproducts;
