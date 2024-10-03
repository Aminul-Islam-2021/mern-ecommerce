import React from "react";
import { XIcon } from "@heroicons/react/outline";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black bg-opacity-60 overflow-y-auto">
      <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
        >
          <XIcon className="h-6 w-6 text-gray-600" />
        </button>
        <div className="p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
