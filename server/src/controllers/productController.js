const Product = require(".././models/productModel");
const { uploadMultipleImages } = require("../helpers/imageHandler");
const ProductFeatures = require("../utils/ProductFeatures");
const asyncHandler = require("express-async-handler");

<<<<<<< HEAD
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
=======

// Create a new product with single or multiple images
// Route: http://localhost:8000/api/product/create-product
// Method: POST
// Access: Private (Admin)
const createProduct = asyncHandler(async (req, res) => {
 try {
  
  } catch (error) {
    
  }})
>>>>>>> c31e46c (changes in server)

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


// Update an existing product with single or multiple images
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // If new multiple images are uploaded
    if (req.files && req.files.length > 0) {
      // Delete existing images from Cloudinary
      if (product.images && product.images.length > 0) {
        const deletePromises = product.images.map(image => deleteImage(image.public_id));
        await Promise.all(deletePromises);
      }

      const result = await uploadMultipleImages(req.files);
      product.images = result.map((img) => ({
        public_id: img.public_id,
        secure_url: img.secure_url
      }));
    }

    // If new single image is uploaded
    if (req.file) {
      const result = await uploadSingleImage(req.file.path);
      product.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      };
    }

    await product.save();
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Product update failed', error: error.message });
  }
})

// Delete a product and its images
const deleteProduct = (async (req, res) =>  {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Delete single image from Cloudinary
    if (product.image) {
      await deleteImage(product.image.public_id);
    }

    // Delete multiple images from Cloudinary
    if (product.images && product.images.length > 0) {
      const deletePromises = product.images.map(image => deleteImage(image.public_id));
      await Promise.all(deletePromises);
    }

    await product.remove();
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Product deletion failed', error: error.message });
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
