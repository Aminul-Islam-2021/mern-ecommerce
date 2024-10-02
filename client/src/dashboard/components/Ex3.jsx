import React, { useState } from 'react';

function Input() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const previewURLs = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      previewURLs.push(URL.createObjectURL(file));
    }

    setSelectedImages(previewURLs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically upload the images to your database
    console.log('Selected images:', selectedImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <label className="mb-3 mr-2 block">
          <span className="sr-only">Select images</span>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>
        {selectedImages.map((previewURL) => (
          <img
            key={previewURL}
            src={previewURL}
            alt=""
            className="w-32 h-32 m-1 object-cover rounded-md border border-gray-300"
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-3 mt-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        Save Images
      </button>
    </form>
  );
}

export default Input;
