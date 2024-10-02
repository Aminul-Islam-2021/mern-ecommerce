// ImageUploadModal.js
import React, { useState } from 'react';

const ImageForm = ({ showModal, setShowModal }) => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages(uploadedImages);
  };

  return (
    <div className={`fixed inset-0 ${showModal ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Preview ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md"
            />
          ))}
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ImageForm;
