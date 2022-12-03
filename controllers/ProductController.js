const Product = require("../models/Product");
const AppError = require("../utils/AppError");

// CRUD
// Create = *1 (createProduct)
// Read = *1 (allProducts, getProduct)
// Update = *0 ()
// Delete = *0 ()

// Get All Products
exports.allProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json({
      status: "Success",
      Message: "Get All Products",
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Search All Product", 400));
  }
};

// Create a new Product
exports.createProduct = async (req, res, next) => {
  try {
    const newShoe = await Product.create(req.body);
    res.status(201).json({
      status: "Success",
      Message: "Add New Product",
      data: newShoe,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Add New Shoe", 400));
  }
};

// Get a single product (By Id)
exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findProductById = await Product.findById({ _id: id }).populate(
      "category"
    );
    res.status(200).json({
      status: "Success",
      Message: "Find One Product",
      data: findProductById,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Get One Product", 400));
  }
};

// Get All Products By Category
// ***
