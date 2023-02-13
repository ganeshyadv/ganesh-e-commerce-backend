const express = require("express");
const ordersController = require("../controller/OrdersController");
const app = express()

app.post("/", ordersController.createOrder);

app.get("/get-orders", ordersController.getOrders);

app.put("/update-order", ordersController.updateOrder);

app.delete("/delete-order/:orderId", ordersController.deleteOrder);


module.exports = app;