const userServises = require("../../servise/user/UserServises");
const userValidation = require("../../validation/user/UserValidation");


class UserController{
    constructor(){}

    async registretion(req, res){
        try {
            // console.log("req.body", req.body);
            let data = req.body;
            let validation = await userValidation.registretion(data);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await userServises.registretion(req, res);
            res.statusCode = 201; //when the new record will be created in the DB
            res.json({
                message: "User created"
            })
        } catch (error) {
            console.log("controller registretion page error", error);
        }
    };
    async updateUser(req, res){
        try {
            console.log("req.body", req.body);
            let data = req.body;
            let validation = await userValidation.updateProfile(data);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await userServises.updateProfile(req, res);
            res.statusCode = 201; //when the new record will be created in the DB
            res.json({
                message: "User Has Been Update"
            })
        } catch (error) {
            console.log("controller updateUser page error", error);
        }
    };

    async updatePassword(req, res){
        try {
            let data = req.body;
            data.userId = req.userId
            console.log("data", data);
            let validation = await userValidation.updatePassword(data);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            let getUserById = await userServises.getUserInfo(req, res);
            if (getUserById[0].password != req.body.currentPassword) {
                res.statusCode = 400; //bad request
                res.json(
                    {message: "current password is incorrect"}
                );
                return false;
            }
            await userServises.udatePassword(data);
            res.statusCode = 201; //when the new record will be created in the DB
            res.json({
                message: "User Password Has Been Update"
            })
        } catch (error) {
            console.log("controller updateUser page error", error);
        }
    };

    async loginAuth(req, res){
        try {
            console.log("req.body", req.body);
            let data = req.body;
            let validation = await userValidation.loginAuth(data);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            let result = await userServises.loginAuth(req, res);
            if (result && result.status && result.status == "ERROR" ) {
                res.statusCode = 400; // for error
                res.json({
                    message: result.message,
                });
            } else {
                res.statusCode = 200;
                res.json(result)
            }
        } catch (error) {
            console.log("controller loginAuth page error", error);
        }
    };

    async getUserById(req, res){
        try {
            let getUser = await userServises.getUserById(req, res);
            res.statusCode = 200; // success
            res.json(
                getUser
            );
        } catch (error) {
            console.log("getUserById page error", error);
        }
    }
    
    async getUserInfo(req, res){
        try {
            let getUser = await userServises.getUserInfo(req, res);
            res.statusCode = 200; // success
            res.json(
                getUser
            );
        } catch (error) {
            console.log("getUserInfo page error", error);
        }
    }


}
module.exports = new UserController();