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
    name: {
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
      maxLength: [8, "Price cannot exceed 8 digits"],
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
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// Middleware to automatically generate slug from name before saving
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
