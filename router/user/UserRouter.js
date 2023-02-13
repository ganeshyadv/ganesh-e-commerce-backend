const express = require("express");
const userController = require("../../controller/user/UserController");
const app = express()

app.post("/", userController.registretion);

app.post("/login", userController.loginAuth);

app.get("/my-profile", userController.myProfile);

module.exports = app;