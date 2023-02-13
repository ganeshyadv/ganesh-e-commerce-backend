const ordersServises = require("../servise/OrdersService");
const ordersValidation = require("../validation/schema/OrdersValidation");


class OrdersController {
    constructor() { }

    async createOrder(req, res) {
        try {
            let validation = await ordersValidation.createOrder(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await ordersServises.createOrder(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "order has been created"
            });
        } catch (error) {
            console.log("controller createOrder page error", error);
        }
    };

    async getOrders(req, res) {
        try {
            let getAllCategory = await ordersServises.getOrders(req, res);
            res.statusCode = 200; // success
            res.json(
                getAllCategory
            );
        } catch (error) {
            console.log("controller getOrders page error", error);
        }
    };

    async updateOrder(req, res) {
        try {
            let validation = await ordersValidation.updateOrder(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await ordersServises.updateOrder(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "Order has been Update"
            });
        } catch (error) {
            console.log("controller updateOrder page error", error);
        }
    };

    async deleteOrder(req, res) {
        try {
            await ordersServises.deleteOrder(req, res);
            res.statusCode = 200; // success
            res.json({
                message: "order has been Deleted Successfully"
            });
        } catch (error) {
            console.log("controller deleteOrder page error", error);
        }
    };


}
module.exports = new OrdersController();