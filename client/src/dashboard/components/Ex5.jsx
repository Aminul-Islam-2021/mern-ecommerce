import React, { useState } from 'react';

const Input3 = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];
    const newPreviewImages = [];

    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
      newPreviewImages.push(URL.createObjectURL(files[i]));
    }

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    images.forEach((image) => {
      formData.append('image', image);
    });

    // Send the formData to the server using Axios or fetch API
    //...
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Images
        </button>
      </form>

      <div className="flex flex-wrap justify-center mt-4">
        {previewImages.map((image, index) => (
          <div key={index} className="w-1/2 p-2">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input3;