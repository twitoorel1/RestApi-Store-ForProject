const express = require("express");
const router = express.Router();

const productRoute = require("./products.routes");
const CategoryRoute = require("./category.routes");

router.use("/products", productRoute);
router.use("/categories", CategoryRoute);

module.exports = router;
