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

//
const uploadImageToCloudinary = async (filePath, options = {}) => {
  try {
    const defaultOptions = {
      folder: "uploads", // Folder in Cloudinary to store images
      use_filename: true, // Use the original filename
      unique_filename: false, // Do not add a random string to the filename
      overwrite: true, // Overwrite existing images with the same name
      resource_type: "image", // Upload as an image
      quality: "auto:best", // Automatically adjusts the quality for the best visual quality at the smallest file size
      format: "jpg", // Convert to JPEG format (you can also use 'webp' for modern browsers)
      transformation: [
        { width: 1000, height: 1000, crop: "limit" }, // Resize if the image is larger than 1000x1000
        { fetch_format: "auto" }, // Automatically deliver the best format (webp, jpeg, etc.) based on user device
      ],
    };

    const uploadOptions = { ...defaultOptions, ...options };

    // Upload to Cloudinary with transformation
    const result = await cloudinary.uploader.upload(filePath, uploadOptions);

    return {
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      bytes: result.bytes, // Image size in bytes
      width: result.width,
      height: result.height,
    };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);
    throw error;
  }
};


const uploadMultipleImagesToCloudinary = async (filePaths, options = {}) => {
  try {
    const defaultOptions = {
      folder: 'uploads',
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: 'image',
      quality: 'auto:best',
      format: 'jpg',
      transformation: [
        { width: 1000, height: 1000, crop: 'limit' },
        { fetch_format: 'auto' },
      ],
    };

    const uploadOptions = { ...defaultOptions, ...options };

    // Array to store all uploaded image details
    const uploadResults = [];

    // Loop through file paths and upload each image to Cloudinary
    for (let filePath of filePaths) {
      const result = await cloudinary.uploader.upload(filePath, uploadOptions);
      uploadResults.push({
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        bytes: result.bytes,
        width: result.width,
        height: result.height,
      });

      // Optional: Delete the file from the local temp directory after uploading
      //fs.unlinkSync(filePath);
    }

    return uploadResults;
  } catch (error) {
    console.error('Error uploading images to Cloudinary:', error.message);
    throw error;
  }
};





// Helper function to upload a single image to Cloudinary
const uploadToCloudinary = async (fileBuffer, filename) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: 'test-images', // Change to your desired folder
          resource_type: 'image',
          format: 'jpg', // Convert all images to JPG
          public_id: filename.split('.')[0], // Use original filename without extension
          transformation: { width: 500, height: 500, crop: 'limit' }, // Image transformations
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        }
      )
      .end(fileBuffer);
  });
};










module.exports = {
  uploadToCloudinary,
  uploadSingleImage,
  uploadMultipleImages,
  deleteSingleImage,
  deleteMultipleImages,
  deleteImagesFromCloudinary,
  uploadImageToCloudinary,
  uploadMultipleImagesToCloudinary
};
