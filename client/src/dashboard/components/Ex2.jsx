import React, { useState } from "react";

export default function Modal4() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState([]);

  const handleInputChange = (e, field) => {
    if (field === "username") setUsername(e.target.value);
    if (field === "email") setEmail(e.target.value);
  };

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages(uploadedImages);
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to the server)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Uploaded images:", images);
    setShowModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-60">
        <button
          className="px-6 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>

      {showModal ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Create Product
            </h4>
            <input
              type="text"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 mb-4"
              placeholder="Product name"
              value={username}
              onChange={(e) => handleInputChange(e, "username")}
            />
            <input
              type="email"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 mb-4"
              placeholder="Product Brand"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <input
              type="email"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 mb-4"
              placeholder="Product Brand"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <input
              type="email"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 mb-4"
              placeholder="Product Brand"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <input
              type="file"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 mb-6"
              multiple
              onChange={handleImageUpload}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                onClick={handleSubmit}
              >
                Create
              </button>
              <button
                className="px-4 py-2 ml-4 text-gray-600 border rounded-md hover:bg-gray-100 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
