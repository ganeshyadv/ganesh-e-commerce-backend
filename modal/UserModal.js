const mysql = require("mysql");
const {connection} = require("../config/mysql_config");

class UserModel{
    constructor(){}

    inserUser(data){
        console.log("data", data);
        let user = {
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            gender: data.gender,
            state: data.state,
            city: data.city,
            dob: data.dob,
            pincode: data.pincode,
            email: data.email,
            password: data.password,
        };
        return new Promise( async function (resolve, reject) {
            let insertQury = `INSERT INTO users(first_name, last_name, address, gender, state, city, dob, pincode, email, password) VALUES('${user.firstName}','${user.lastName}','${user.address}','${user.gender}','${user.state}','${user.city}','${user.dob}','${user.pincode}','${user.email}','${user.password}')`
           await connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    getUserByEmail(username){
        return new Promise(function (resolve, reject) {
            let getQury = `SELECT * FROM users WHERE email = '${username}'`;
            connection.query(getQury, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result)
                };
            });
        });
    };

    getAllUsers(){
        return new Promise(function (resolve, reject) {
            let getQury = `SELECT * FROM users`;
            connection.query(getQury, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result)
                };
            });
        });
    };
    getUserById(userId){
        return new Promise(function (resolve, reject) {
            let getQury = `SELECT * FROM users WHERE id = ${userId}`;
            connection.query(getQury, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result)
                };
            });
        });
    };

    deleteUser(userId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = ` DELETE FROM users WHERE id = ${userId}`
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
module.exports = new UserModel();