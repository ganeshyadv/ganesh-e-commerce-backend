const express = require("express");
const userController = require("../../controller/user/UserController");
const app = express()
const jwt = require("jsonwebtoken");

app.post("/", userController.registretion);

app.post("/login", userController.loginAuth);

app.get("/getUserById/:userId", userController.getUserById);

app.get("/", validateToken, userController.getUserInfo);

function validateToken(req, res, next) {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(" ").splice(-1).toString();
        console.log("tokenArr", token);
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, function (error, decoded) {
            if (error) {
                res.statusCode = 401;
                let response = {
                    message: "Invalid Token"
                };
                res.json(response);
            } else {
                req.userId = decoded.userData;
                next();
            }
        });
    } else {
        res.statusCode = 401;
        let response = {
            message: "Please provide a valid token"
        };
        res.json(response);
    }
}

module.exports = app;