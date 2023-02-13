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


}
module.exports = new UserController();