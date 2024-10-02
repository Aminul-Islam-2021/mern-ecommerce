// src/ImageUploadForm.js
import React, { useState } from 'react';

const Input6 = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    setError('');
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedImages((prevImages) => prevImages.concat(newImages));
  };

  const handleRemoveImage = (imageUrl) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image.url !== imageUrl)
    );
    URL.revokeObjectURL(imageUrl);
  };

  const handleClearImages = () => {
    selectedImages.forEach((image) => URL.revokeObjectURL(image.url));
    setSelectedImages([]);
  };

  const handleReorderImage = (index, direction) => {
    const newImages = [...selectedImages];
    const [movedImage] = newImages.splice(index, 1);
    newImages.splice(index + direction, 0, movedImage);
    setSelectedImages(newImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedImages.length === 0) {
      setError('Please upload at least one image.');
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image) => formData.append('images', image.file));

    try {
      const response = await fetch('/upload-endpoint', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Success:', await response.json());
        handleClearImages();
      } else {
        console.error('Upload failed:', response.statusText);
        setError('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white space-y-4"
    >
      <div>
        <label className="block text-lg text-gray-700 font-semibold mb-2">
          Upload Images
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:border-0 file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100
                     rounded-md border-gray-300 focus:ring focus:ring-blue-200"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={`Preview ${index}`}
              className="w-full h-40 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(image.url)}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Remove image"
            >
              &times;
            </button>
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleReorderImage(index, -1)}
                className="absolute bottom-2 left-2 bg-gray-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Move image up"
              >
                ▲
              </button>
            )}
            {index < selectedImages.length - 1 && (
              <button
                type="button"
                onClick={() => handleReorderImage(index, 1)}
                className="absolute bottom-2 right-2 bg-gray-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Move image down"
              >
                ▼
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleClearImages}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-200"
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Input6;
