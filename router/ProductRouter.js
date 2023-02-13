const express = require("express");
const app = express()
const productController = require("../controller/ProductController");

app.post("/", productController.createProduct);

app.get("/get-all-product", productController.getAllProduct);

app.put("/update-product", productController.updateProduct);

app.delete("/delete-product/:productId", productController.deleteProduct);

module.exports = app;