const express = require("express");
const userController = require("../../controller/user/UserController");
const app = express()

app.post("/", userController.registretion);

app.post("/login", userController.loginAuth);

app.get("/getUserById/:userId", userController.getUserById);

module.exports = app;