const express = require("express");
const app = express()
const productController = require("../controller/ProductController");

app.post("/", productController.createProduct);

app.get("/", productController.getAllProduct);

app.put("/", productController.updateProduct);

app.delete("/:productId", productController.deleteProduct);

module.exports = app;