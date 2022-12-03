const Category = require("../models/Category");
const AppError = require("../utils/AppError");

// CRUD
// Create = *1 (createCategory)
// Read = *1 (allCategories, getOneCategory)
// Update = *0 ()
// Delete = *0 ()

// Get All Categories
exports.allCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: "Success",
      Message: "Get All category's",
      data: categories,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Search All category's", 400));
  }
};

// Create New Category
exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: "Success",
      Message: "Add New Category",
      data: newCategory,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Add New Category", 400));
  }
};

// Get One Category
exports.getOneCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneCategory = await Category.findOne({ _id: id });
    res.status(200).json({
      status: "Success",
      Message: "Get One Category",
      data: oneCategory,
    });
  } catch (error) {
    console.log(error.message);
    next(new AppError("Error: Get One Category", 400));
  }
};
