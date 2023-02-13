const express = require("express");
const categoryController = require("../controller/CategoryController");
const app = express()

app.post("/", categoryController.createCategory);

app.get("/get-category", categoryController.getCategory);

app.put("/update-category", categoryController.updateCategory);

app.delete("/:categoryId", categoryController.deleteCategory);


module.exports = app;