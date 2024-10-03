import React, { useState } from "react";
import Modal1 from "../../dashboard/components/Ex1";
import Modal4 from "../../dashboard/components/Ex2";
import Input from "../../dashboard/components/Ex3";
import Input2 from "../../dashboard/components/Ex4";
import Input3 from "../../dashboard/components/Ex5";
import Input4 from "../../dashboard/components/Ex6";
import Input5 from "../../dashboard/components/Ex7";
import Input6 from "../../dashboard/components/Ex8";
import Modal3 from "../../dashboard/components/Ex9";
import Custom from "../../dashboard/components/Ex11";
import ProductForm from "../../dashboard/components/Ex12";
import CreateProductForm from "../../dashboard/components/CreateProductForm";

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      

      <div>
        <button
          onClick={handleOpenModal}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add New Product
        </button>

        <CreateProductForm isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default Test;
