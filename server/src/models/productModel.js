const mongoose = require("mongoose");
const slugify = require("slugify");

// Define fixed categories as enum
const categoriesEnum = [
  "Electronics",
  "Mens",
  "Womens",
  "Beauty",
  "Books",
  "Accessories",
  "Home Appliances",
  "Furniture",
  "Smartphone",
];

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the product name"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price"],
      maxLength: [4, "Price cannot exceed 4 digits"],
    },
    description: {
      type: String,
      required: [true, "Please enter the product description"],
    },
    category: {
      type: String,
      enum: {
        values: categoriesEnum,
        message: "Category is not valid. Choose from predefined categories.",
      },
      required: [true, "Please select the category for this product"],
    },
    brand: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
      maxLength: [5, "Stock cannot exceed 5 digits"],
    },
    images:  [
      {
        url: { type: String, required: true }, // Cloudinary image URL
        public_id: { type: String, required: true }, // Cloudinary public ID for managing the image (e.g., deleting)
      },
    ],
  },
  { timestamps: true }
);

// Middleware to automatically generate slug from name before saving
productSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

