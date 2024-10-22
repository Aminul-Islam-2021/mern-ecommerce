const Product = require(".././models/productModel");
const asyncHandler = require("express-async-handler");
const {
  uploadMultipleImages,
  deleteMultipleImages,
  deleteImagesFromCloudinary,
  uploadMultipleImagesToCloudinary,
} = require("../helpers/imageHandler");
const ProductFeatures = require("../utils/ProductFeatures");
const { cleanUpFiles } = require("../config/multer");

//
// Route: http://localhost:8000/api/product/create-product
// Method: POST
// Access: Private (Admin)
const createProduct = asyncHandler(async (req, res) => {
  const files = req.files;
  const { title, brand, category, description, price, stock } = req.body;
  try {
    if (!title || !brand || !category || !description || !price || !stock) {
      return res.json("Please fill all the fields");
    }
    const savedImg = await uploadMultipleImages(files);
    const newProduct = await Product.create({
      ...req.body,
      images: savedImg,
    });
    if (!newProduct) {
      return res.status(404).send({
        success: false,
        message: "Something went wrong",
      });
    }
    return res.status(201).send({
      success: true,
      message: "Product created successfully",
      newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  } finally {
    cleanUpFiles(req.files);
  }
});


const getAllProducts = async (req, res) => {
  try {
    const resultPerPage = 10; // Number of products per page

    // Initialize ProductFeatures class with the query and query parameters
    const productFeatures = new ProductFeatures(Product.find(), req.query)
      .search()
      .filter()
      .sort()
      .paginate(resultPerPage);

    const products = await productFeatures.query; // Execute the query with the applied features

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sort = "",
      category,
      minPrice = 0,
      maxPrice = Infinity,
      rating = 0,
      brands = [],
    } = req.query;

    // Construct filter query based on search, price range, category, rating, and brands
    const filterQuery = {
      ...(search && { name: { $regex: search, $options: "i" } }),
      ...(category && { category }),
      price: { $gte: Number(minPrice), $lte: Number(maxPrice) },
      rating: { $gte: Number(rating) },
      ...(brands.length && { brand: { $in: brands.split(",") } }),
    };

    // Pagination calculation
    const skip = (page - 1) * limit;

    // Sorting options
    let sortOption = {};
    if (sort === "priceAsc") sortOption.price = 1;
    if (sort === "priceDesc") sortOption.price = -1;
    if (sort === "newest") sortOption.createdAt = -1;
    if (sort === "rating") sortOption.rating = -1;

    // MongoDB Aggregation pipeline for performance
    const products = await Product.aggregate([
      { $match: filterQuery },
      { $sort: sortOption },
      { $skip: skip },
      { $limit: Number(limit) },
    ]);

    const totalProducts = await Product.countDocuments(filterQuery);

    res.status(200).json({
      success: true,
      totalProducts,
      currentPage: Number(page),
      totalPages: Math.ceil(totalProducts / limit),
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    return res.status(200).send({
      success: true,
      message: "Single product",
      product,
    });
  } catch (error) {
    return;
    res.json(400).send("Internal server error");
  }
};

const updateProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newData = { ...req.body };
  try {
    console.log(id);
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newFiles = req.files;
  const { title, brand, category, description, price, stock } = req.body;
  try {
    const product = await Product.findById(id);
    if (!product)
      return res
        .status(404)
        .send({ success: false, message: "Product not found" });

    // Delete associated images from Cloudinary
    const imageIds = product.images.map((image) => image.public_id);
    if (imageIds && imageIds.length > 0) {
      await deleteMultipleImages(imageIds);
    }

    // Upload new images to Cloudinary
    let newImages = [];
    if (newFiles && newFiles.length > 0) {
      newImages = await uploadMultipleImages(newFiles);
    }

    // Update product fields
    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;
    if (brand) product.brand = brand;
    if (stock) product.stock = stock;
    product.images = newImages.length > 0 ? newImages : product.images;

    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  } finally {
    cleanUpFiles(req.files);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    // Find the product by ID
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete associated images from Cloudinary
    const imageIds = product.images.map((image) => image.public_id);
    if (imageIds && imageIds.length > 0) {
      await deleteMultipleImages(imageIds);
    }

    // Delete the product from the database
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send({
        success: false,
        message: "Something went wrong",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = {
  createProduct,
  getProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
