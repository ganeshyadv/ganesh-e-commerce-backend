const joi = require("joi");
const validation = require("../Validation")

class OrdersValidation {
    constructor() { }

    async createOrder(req) {

        let schema = joi.object({
            fullName: joi.string().required(),
            email: joi.string().email().required(),
            primaryContact: joi.number().required(),
            alternetContact: joi.number().required(),
            shippingAddress: joi.string().required(),
            shippingCity: joi.string().required(),
            shippingPincode: joi.number().required(),
            billingAddress: joi.string().required(),
            billingCity: joi.string().required(),
            billingPincode: joi.number().required(),
            paymentMethod: joi.string().required(),
        })
        const response = await validation.createCategory(schema, req.body)
        return response;
    };

    async updateOrder(req) {

        let schema = joi.object({
            fullName: joi.string().required(),
            email: joi.string().email().required(),
            primaryContact: joi.number().required(),
            alternetContact: joi.number().required(),
            shippingAddress: joi.string().required(),
            shippingCity: joi.string().required(),
            shippingPincode: joi.number().required(),
            billingAddress: joi.string().required(),
            billingCity: joi.string().required(),
            billingPincode: joi.number().required(),
            paymentMethod: joi.string().required(),
            userId: joi.number().required()
        })
        const response = await validation.createCategory(schema, req.body)
        return response;
    };



}
module.exports = new OrdersValidation();