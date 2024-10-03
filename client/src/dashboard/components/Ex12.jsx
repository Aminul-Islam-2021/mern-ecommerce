// ProductForm.js
import React, { useState } from 'react';
import ImageForm from './Ex10';

const ProductForm = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Other form fields */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Upload Images
      </button>
      <ImageForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ProductForm;
