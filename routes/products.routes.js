const express = require("express");
const router = express.Router();

const productsController = require("../controllers/ProductController");

router
  .route("/")
  .get(productsController.allProducts)
  .post(productsController.createProduct);

router.route("/:id").get(productsController.getProduct);

// router
//   .route("/productCategory/:category")
//   .get(productsController.getAllShoeByModel);

module.exports = router;
