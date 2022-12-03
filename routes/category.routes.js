const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");

router
  .route("/")
  .get(categoryController.allCategories)
  .post(categoryController.createCategory);

router.route("/:id").get(categoryController.getOneCategory);

module.exports = router;
