const joi = require("joi");

class UserValidation{
    constructor(){}

    registretion(data){
        let response = {
            status: "",
            message: "",
        };
        let schema = joi.object({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            address: joi.string().required(),
            gender: joi.string().required(),
            state: joi.string().required(),
            city: joi.string().required(),
            dob: joi.string().required(),
            pincode: joi.number().required(),
            email: joi.string().email().required(),
            password: joi.string().required(),
        })
        let validate = schema.validate(data);
        if (validate && validate.error && validate.error.details) {
            response.status = 'ERROR';
            response.message = validate.error.details[0].message
        }
        return response;
    };

    loginAuth(data){
        let response = {
            status: "",
            message: "",
        };
        let schema = joi.object({
            username: joi.string().email().required(),
            password: joi.string().required(),
        })
        let validate = schema.validate(data);
        if (validate && validate.error && validate.error.details) {
            response.status = 'ERROR';
            response.message = validate.error.details[0].message
        }
        return response;
    };



}
module.exports = new UserValidation();