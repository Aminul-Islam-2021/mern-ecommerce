const cloudinary = require("../config/cloudinary");
const fs = require("fs");

// function for uploading single image
const uploadSingleImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "Ecommerce-Images",
    });
    return { secure_url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

// function for uploading multiple images
const uploadMultipleImages = async (files) => {
  try {
    return await Promise.all(files.map((file) => uploadSingleImage(file)));
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

// function for uploading single image
const deleteSingleImage = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return result;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

// function for uploading multiple images
const deleteMultipleImages = async (imageIds) => {
  try {
    const deletePromises = imageIds.map((public_id) =>
      cloudinary.uploader.destroy(public_id)
    );
    const results = await Promise.all(deletePromises);
    return results;
  } catch (error) {
    throw new Error("Error deleting multiple images from Cloudinary");
  }
};


// Function to delete images from Cloudinary
const deleteImagesFromCloudinary = async (existingImageIds) => {
  for (const imageId of existingImageIds) {
    await cloudinary.uploader.destroy(imageId);
  }
};



module.exports = {
  uploadSingleImage,
  uploadMultipleImages,
  deleteSingleImage,
  deleteMultipleImages,
  deleteImagesFromCloudinary
};
