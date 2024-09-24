const router = require("express").Router();
const {createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct} = require(".././controllers/productController")

// Products Routes
router.post("/create-product",createProduct);
router.get("/all-products",getAllProducts);
router.get("/single-product/:id",getSingleProduct);
router.put("/update-product/:id",updateProduct);
router.delete("/delete-product/:id",deleteProduct);


module.exports = router;


