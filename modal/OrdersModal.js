const mysql = require("mysql");
const { connection } = require("../config/mysql_config");

class OrdersModal {
    constructor() { }

    insertOrder(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `INSERT INTO orders(full_name, email, primary_contact, alternet_contact, shipping_address, shipping_city, shipping_pincode, billing_address, billing_city, billing_pincode, payment_method) VALUES('${(data.fullName)}','${data.email}','${data.primaryContact}','${data.alternetContact}','${data.shippingAddress}','${data.shippingCity}','${data.shippingPincode}','${data.billingAddress}','${data.billingCity}','${data.billingPincode}','${data.paymentMethod}')`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    getAllOrders() {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM orders`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    updateOrder(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `UPDATE orders SET full_name = '${(data.fullName)}', email = '${data.email}', primary_contact = '${data.primaryContact}', alternet_contact = '${data.alternetContact}', shipping_address = '${data.shippingAddress}', shipping_city = '${data.shippingCity}', shipping_pincode = '${data.shippingPincode}', billing_address = '${data.billingAddress}', billing_city = '${data.billingCity}', billing_pincode = '${data.billingPincode}', payment_method = '${data.paymentMethod}' WHERE id = '${data.userId}'`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    deleteOrder(    orderId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = ` DELETE FROM orders WHERE id = ${orderId}`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };



};
module.exports = new OrdersModal();