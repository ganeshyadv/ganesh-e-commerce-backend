const express = require("express");
const app = express()
const productController = require("../controller/ProductController");

app.post("/", productController.createProduct);

app.get("/", productController.getAllProduct);

app.put("/", productController.updateProduct);

app.delete("/:productId", productController.deleteProduct);

app.get("/cart-items/:productsId", productController.getProductsById);

module.exports = app;