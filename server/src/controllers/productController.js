const Product = require(".././models/productModel");
const { uploadMultipleImages } = require("../helpers/imageHandler");
const ProductFeatures = require("../utils/ProductFeatures");

//
// Route: http://localhost:8000/api/product/create-product
// Method: POST
// Access: Private (Admin)
const createProduct = async (req, res) => {
  try {
    const savedImg = await uploadMultipleImages(req.files);
    const product = new Product({ ...req.body, images: savedImg });
    await product.save();
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Product creation failed",
        error: error.message,
      });
  }
};

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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = { ...req.body };
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    console.log(updateProduct);
  } catch (error) {
    console.log(error), res.json(400).send("Internal server error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    console.log("Product deleted");
  } catch (error) {
    console.log(error), res.json(400).send("Internal server error");
  }
};

module.exports = {
  createProduct,
  getProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
