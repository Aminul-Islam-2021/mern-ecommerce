const router = require("express").Router();
const {
  createProduct,
  getProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require(".././controllers/productController");
const { uploadMultiple } = require("../config/multer");

// Products Routes
router.post("/create-product", uploadMultiple, createProduct);
router.get("/all-products", getAllProducts);
router.get("/single-product/:id", getSingleProduct);
router.put("/update-product/:id",uploadMultiple, updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
