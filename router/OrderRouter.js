const express = require("express");
const ordersController = require("../controller/OrdersController");
const app = express()

app.post("/", ordersController.createOrder);

app.get("/", ordersController.getOrders);

app.put("/", ordersController.updateOrder);

app.delete("/:orderId", ordersController.deleteOrder);


module.exports = app;