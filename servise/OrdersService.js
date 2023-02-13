const ordersModal = require("../modal/OrdersModal");

class OrdersService {
    constructor() { }

    async createOrder(req, res) {
        console.log("req.body", req.body);
        let data = {
            fullName: req.body.fullName,
            email: req.body.email,
            primaryContact: req.body.primaryContact,
            alternetContact: req.body.alternetContact,
            shippingAddress: req.body.shippingAddress,
            shippingCity: req.body.shippingCity,
            shippingPincode: req.body.shippingPincode,
            billingAddress: req.body.billingAddress,
            billingCity: req.body.billingCity,
            billingPincode: req.body.billingPincode,
            paymentMethod: req.body.paymentMethod,
        };
        await ordersModal.insertOrder(data)
        return true
    };

    async getOrders(req, res) {
        let getAllOrders = await ordersModal.getAllOrders()
        console.log("getAllOrders", getAllOrders);
        return getAllOrders
    };

    async updateOrder(req, res) {
        let data = {
            fullName: req.body.fullName,
            email: req.body.email,
            primaryContact: req.body.primaryContact,
            alternetContact: req.body.alternetContact,
            shippingAddress: req.body.shippingAddress,
            shippingCity: req.body.shippingCity,
            shippingPincode: req.body.shippingPincode,
            billingAddress: req.body.billingAddress,
            billingCity: req.body.billingCity,
            billingPincode: req.body.billingPincode,
            paymentMethod: req.body.paymentMethod,
            userId: req.body.userId
        };
        console.log("data", data);
        await ordersModal.updateOrder(data)
        return true
    };

    async deleteOrder(req, res) {
        let orderId = req.params.orderId
        let deleteOrder = await ordersModal.deleteOrder(orderId)
        console.log("deleteOrder", deleteOrder);
        return deleteOrder
    };

}
module.exports = new OrdersService();